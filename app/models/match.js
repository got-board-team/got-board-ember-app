import DS from 'ember-data';

let Match = DS.Model.extend({
  players: DS.hasMany({ async: true }),
  board: DS.belongsTo("board"),
});

Match.reopenClass({
  FIXTURES: [
    {
      id: 1,
      territories: [11, 22],
    },
  ]
});

export default Match;
