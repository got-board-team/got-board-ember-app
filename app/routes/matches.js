import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var match = this.store.find("match", params.id);
    return match;
  },
  serialize: function(model) {
    return { id: model.get("id") };
  },
});
