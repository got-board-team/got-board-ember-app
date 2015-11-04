import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    var match = this.store.find("match", params.id);
    return match;
  },

  serialize(model) {
    return { id: model.get("id") };
  },
});
