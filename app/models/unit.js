import DS from 'ember-data';

let attr = DS.attr;

let Unit = DS.Model.extend({
  territory: DS.belongsTo(),
  board: DS.belongsTo(),
  player: DS.belongsTo(),
  type: attr(),
  x: attr("number"),
  y: attr("number"),
  house: function() {
    return this.get("player.house").toLowerCase();
  }.property("player")
});

export default Unit;
