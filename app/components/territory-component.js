import Ember from 'ember';
import Droppable from '../mixins/droppable';

export default Ember.Component.extend(Droppable, {
  tagName: "g",
  classNames: ['territory'],

  //TODO: remove when api is ready for that
  init() {
    this._super(...arguments);
    let territory = this.get("territory");
    let store = territory.store;
    if (territory.get("id") == "winterfell") {
      store.createRecord("garrison", { id: 1, name: "winterfell", territory: territory, y: 540, x: 655 } );
    }
  },

  territory: Ember.computed("territory", function () {
    return this.territory;
  }),

  didDropObject(piece) {
    console.log("territory-component#didDropObject");
    let territory = this.territory;
    piece.set('territory', territory);
    piece.save().then(function (piece) {
      console.log(piece.toString() + ' was dropped into ' + territory.id +
                  ' at x: ' + piece.get("x") + ' , y: ' + piece.get("y"));
    });
  },
});
