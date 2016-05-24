import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ["id", "track"],

  classNames: ["influence-track-component track status-items"],

  swap(array, firstItem, secondItem) {
    const firstIndex = array.indexOf(firstItem);
    const secondIndex = array.indexOf(secondItem);
    array.
      replace(firstIndex, 1, secondItem).
      replace(secondIndex, 1, firstItem);
    return array;
  },

  actions: {
    handleDragStart(house) {
      console.log("dragging: ", house);
      this.set("dragged", house);
    },
    handleDragOver() {
      return false;
    },
    handleDrop(house) {
      let track = this.get("track");
      let draggedHouse = this.get('dragged');
      console.log("drop ", draggedHouse, " at: ", house);
      this.swap(track, house, draggedHouse);
      this.get("onChange")();
      return false;
    },
  }
});
