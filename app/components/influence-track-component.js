import Ember from 'ember';

export default Ember.Component.extend({

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
      console.log('dragging: ', house);
      this.set("dragged", house);
    },
    handleDragOver() {
      return false;
    },
    handleDrop(track, house) {
      let draggedHouse = this.get('dragged');
      console.log('drop ', draggedHouse, ' at: ', house);
      this.swap(track, house, draggedHouse);
      return false;
    },
  }

});
