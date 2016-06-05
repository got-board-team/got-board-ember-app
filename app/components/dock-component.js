import Ember from 'ember';
import Droppable from '../mixins/droppable';

export default Ember.Component.extend(Droppable, {
  tagName: "aside",
  attributeBindings: ["id", "side", "collapsed"],
  classNames: ["dock"],
  collapsed: false,

  willSetDropData(data) {
    console.log('dock-component#willSetDropData');
    data.attributes = { territory: null, x: 0, y: 0 };
    return data;
  },

  actions: {
    toggle() {
      let value = this.get('collapsed');
      this.set('collapsed', !value);
    },
  }
});
