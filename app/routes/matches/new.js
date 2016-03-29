import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model() {
    return this.store.createRecord('match');
  },

  actions: {
    createMatch: function() {
      let match = this.currentModel;
      match.save().then(() => {
        this.transitionTo("matches.show", match);
      });
    }
  }

});
