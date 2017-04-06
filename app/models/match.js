import Model from 'ember-data/model';
import { hasMany, belongsTo } from 'ember-data/relationships';
import attr from 'ember-data/attr';

const { computed } = Ember;

let Match = Model.extend({
  players: hasMany({ async: true }),
  board: belongsTo("board", { async: false }),
  garrisons: hasMany("garrison", { async: false }),
  round: attr("number"),
  numberOfPlayers: attr("number"),
  ironThroneTrack: attr('array'),
  fiefdomsTrack: attr('array'),
  kingsCourtTrack: attr('array'),

  availableGarrisons: computed("garrisons.@each.territory", function() {
    return this.get("garrisons").filterBy("territory", null).toArray();
  }),
}).pusherable("match");

export default Match;
