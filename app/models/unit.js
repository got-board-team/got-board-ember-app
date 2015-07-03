import DS from 'ember-data';

let attr = DS.attr;

let Unit = DS.Model.extend({
  territory: DS.belongsTo(),
  type: attr(),
  house: attr(),
  x: attr("number"),
  y: attr("number"),
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
  ]
});
export default Unit;
