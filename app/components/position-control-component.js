import Ember from 'ember';

const { computed }  = Ember;

export default Ember.Component.extend({
  classNames: ["position-control"],
  isActive: false,

  init: function() {
    this._super(...arguments);
    let number = this.get('number') || 0;
    this.set('number', number);
  },

  update(number) {
    this.set('number', number);
    this.get('onUpdate')();
  },

  actions: {
    toggleActive() {
      let isActive = this.get('isActive');
      this.set('isActive', !isActive);
    },

    increase() {
      let number = this.get('number');
      this.update(++number);
    },

    decrease() {
      let number = this.get('number');
      this.update(--number);
    },
  }

});
