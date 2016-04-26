import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

var modelHookRun;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  beforeModel() {
    modelHookRun = false;
  },

  model(params) {
    modelHookRun = true;
    let match = this.store.find("match", params.id);
    return match;
  },

  afterModel(model) {
    if (!modelHookRun) {
      return model.reload();
    }
  },

  serialize(model) {
    return { id: model.get("id") };
  },

  actions: {
  },

});
