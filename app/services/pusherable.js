import Ember from 'ember';

export default Ember.Object.extend({
  init() {
    let self = this;
    this.get("types").forEach(function (type) {
      self.bindEvents(type);
    });
  },

  types: Ember.computed(function () {
    let names = [this.get("channelName")];
    let extraNames = this.get("messageTypes") || [];
    return names.concat(extraNames);
  }),

  modelName: Ember.computed("messageTypes", function () {
    let channelName = this.get("channelName");
    return Ember.String.dasherize(channelName);
  }),

  bindEvents(type) {
    this.bindEvent(type, "create",  "onCreate");
    this.bindEvent(type, "update",  "onUpdate");
    this.bindEvent(type, "bulk_update", "onBulkUpdate");
    this.bindEvent(type, "destroy", "onDestroy");
  },

  bindEvent(type, event, callback) {
    let self = this;
    let channelName = this.get("channelName");
    let channel = this.get("pusher").subscribe(channelName);
    channel.bind(type + "." + event, function (data) {
      self[callback](data);
    });
  },

  onCreate(data) {
    console.log("pusherable#create", arguments);
    let payload = {};
    payload[this.get("modelName")] = data;
    this.get("store").pushPayload(payload);
  },

  onUpdate(data) {
    console.log("pusherable#update", data);
    let store = this.get("store");
    let modelName = this.get("modelName");
    let hasRecord = store.hasRecordForId(modelName, data.id);

    if(!hasRecord) {
      this.onCreate(data);
      return;
    }

    let record = store.peekRecord(modelName, data.id);

    delete data.id;

    //TODO refactor please!
    if (modelName == "unit") {
      data.territory_id = data.territory;
      delete data.territory;

      let collectionName = Ember.String.camelize(modelName);
      collectionName = Ember.String.pluralize(collectionName);
      console.log(collectionName);
      let territory = store.peekRecord("territory", data.territory_id);

      if(territory) {
        territory.get(collectionName).addObject(record);
        //HACK: wait to see css transition animation
        setTimeout(function () { record.setProperties(data); }, 100);
      } else {
        let records = record.get("territory." + collectionName);
        if (!records) { return; }
        records.removeObject(record);
        record.setProperties(data);
      }
      return;
    }

    let serializer = this.store.serializerFor(modelName);
    data.links = {};
    let normalized = serializer.normalize(this.model, data);
    console.log("attrs");
    console.log(normalized.data.attributes);
    let attrs = normalized.data.attributes
    let territory = store.peekRecord("territory", data.territory);
    attrs.territory = territory
    console.log(attrs);
    record.setProperties(attrs);
  },

  onBulkUpdate(bulk) {
    let self = this;
    bulk.forEach(function (data) {
      self.onUpdate(data);
    });
  },

  onDestroy(data) {
    console.log("pusherable#destroy", arguments);
    let store = this.get("store");
    let record = store.peekRecord(this.get("modelName"), data.id);
    store.unloadRecord(record);
  },
});
