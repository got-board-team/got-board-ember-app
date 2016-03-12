import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model(params) {
    var match = this.store.find("match", params.id);
    return match;
  },

  serialize(model) {
    return { id: model.get("id") };
  },
});
