import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "aside",
  attributeBindings: ["id", "side", "collapsed"],
  classNames: ["dock"],
  collapsed: false,
  actions: {
    toggle: function() {
      let value = this.get('collapsed');
      this.set('collapsed', !value);
    },
  }
});
