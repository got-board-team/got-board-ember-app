import Ember from 'ember';
import Droppable from '../mixins/droppable';

export default Ember.Component.extend(Droppable, {
  tagName: "article",
  classNames: ["toggable-panel"],
  isExpanded: true,

  actions: {
    expand: function() {
      this.set('isExpanded', true);
    },

    contract: function() {
      this.set('isExpanded', false);
    },

  },

});
