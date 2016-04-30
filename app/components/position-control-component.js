import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["position-control"],
  isActive: false,

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
