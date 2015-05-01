import DS from 'ember-data';

let attr = DS.attr;

let Unit = DS.Model.extend({
  territory: DS.belongsTo(),
  type: attr(),
  house: attr(),
  positionX: attr("number"),
  positionY: attr("number"),
  position: function() {
    return { x: this.positionX, y: this.positionY };
  },
});

Unit.reopenClass({
  FIXTURES: [
    {
      id: 111,
      territory: 11,
      type: "footmen",
      house: "stark",
      positionX: 695,
      positionY: 548,
    },
    {
      id: 222,
      territory: 11,
      type: "knight",
      house: "stark",
      positionX: 675,
      positionY: 648,
    },
    {
      id: 333,
      territory: 22,
      type: "ship",
      house: "stark",
      positionX: 380,
      positionY: 475,
    },
    {
      id: 444,
      territory: 11,
      type: "siege",
      house: "stark",
      positionX: 806,
      positionY: 568,
    },
  ]
});
export default Unit;
