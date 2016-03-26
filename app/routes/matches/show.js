import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

var modelHookRun;

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  beforeModel() {
    modelHookRun = false;
  },

  model(params) {
    console.log(1);
    modelHookRun = true;
    var match = this.store.find("match", params.id);
    return match;
  },

  afterModel(model) {
    if (!modelHookRun) {
      console.log(2);
      return model.reload();
    }
  },

  serialize(model) {
    return { id: model.get("id") };
  },
});
