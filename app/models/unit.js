import DS from 'ember-data';

let attr = DS.attr;

let Unit = DS.Model.extend({
  territory: DS.belongsTo("territory", { async: false }),
  board: DS.belongsTo({ async: false }),
  player: DS.belongsTo({ async: false }),
  type: attr(),
  x: attr("number"),
  y: attr("number"),
  house: function() {
    return this.get("player.house").toLowerCase();
  }.property("player")
});

export default Unit;
