import DS from 'ember-data';

let Match = DS.Model.extend({
  players: DS.hasMany({ async: true }),
  board: DS.belongsTo("board", { async: false }),
});

export default Match;
