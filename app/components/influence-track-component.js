import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    handleDragStart(house) {
      //e.dataTransfer.setData('text/html', this.$.innerHTML);
      console.log('click for: '+ playerId);
    },
    handleDrop(house) {
      
    }
  }

});
