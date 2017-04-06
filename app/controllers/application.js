import Ember from 'ember';

const { computed }  = Ember;

export default Ember.Controller.extend({
  showSessionComponent: computed('currentRouteName', function() {
    return this.get('currentRouteName') !== 'matches.show';
  }),
});
