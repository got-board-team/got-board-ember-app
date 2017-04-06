import Ember from 'ember';
import Droppable from '../mixins/droppable';

const { computed }  = Ember;

export default Ember.Component.extend(Droppable, {
  tagName: 'g',
  classNames: ['territory'],

  id: computed(function () {
    return Ember.String.dasherize(this.territory.id);
  }),


  didDropObject(piece) {
    console.log('territory-component#didDropObject');
    let territory = this.territory;
    piece.set('territory', territory);
    piece.save().then(function (piece) {
      let modelName = piece.constructor.modelName;
      let x = piece.get('x');
      let y = piece.get('y');
      console.log(`${modelName}#${piece.id} dropped into ${territory.id} at x: ${x}, y: ${y}`);
    });
  },

  willSetDropData(data){
    console.log("willSetDropData");
    data.attributes.territory = this.territory;
    let x = data.attributes.x;
    let y = data.attributes.y;
    console.log(`${data.modelName}#${data.id} dropped into ${this.territory.id} at x: ${x}, y: ${y}`);
    return data;
  }
});
