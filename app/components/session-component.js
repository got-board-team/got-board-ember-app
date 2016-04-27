import Ember from 'ember';

const { computed }  = Ember;

export default Ember.Component.extend({
  session: Ember.inject.service(),
});
