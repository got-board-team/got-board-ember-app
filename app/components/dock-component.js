import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "aside",
  attributeBindings: ["id"],
  classNames: ["player-dock"],
  isExpanded: false,
  actions: {
    toggle: function() {
      let value = this.get('isExpanded');
      this.set('isExpanded', !value);
    },
  }
});
