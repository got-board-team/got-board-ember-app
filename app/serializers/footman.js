import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend({
  //do not remove this file! (tartaruga sobe em árvore ?)
  //the simple existense of this file makes ember serializes territory_id as territory
  //WHY ??? i don't have a funcking clue...
});
