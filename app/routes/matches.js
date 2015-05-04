import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find("match", params.id);
  },
  serialize: function(model) {
    console.log(model);
    return { id: model.get("id") };
  }
});
