import DS from 'ember-data';

let Match = DS.Model.extend({
  players: DS.hasMany({ async: true }),
  board: DS.belongsTo("board"),
});

export default Match;
