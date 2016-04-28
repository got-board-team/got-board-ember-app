import Ember from 'ember';

const { computed }  = Ember;

export default Ember.Component.extend({
  attributeBindings: ["id"],
  id: computed(function () {
    return this.type + "-position-track";
  }),
  classNames: ["track position-track"],
  supply: computed(function () {
    return this.get('type') === 'supply';
  }),
});
