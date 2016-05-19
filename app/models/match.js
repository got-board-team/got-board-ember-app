import Model from 'ember-data/model';
import { hasMany, belongsTo } from 'ember-data/relationships';
import attr from 'ember-data/attr';

let Match = Model.extend({
  players: hasMany({ async: true }),
  board: belongsTo("board", { async: false }),
  round: attr("number"),
  numberOfPlayers: attr("number"),
  ironThroneTrack: attr('array', {
    defaultValue() {
      return ['stark', 'lannister', 'baratheon'];
      //return Ember.ArrayProxy.create({
        //content: Ember.A(['stark', 'lannister', 'baratheon'])
      //});
    }
  }),
});

export default Match;
