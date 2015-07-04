import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  //do not remove this file! (tartaruga sobe em árvore ?)
  //the existense of this file makes ember serializes territory_id as territory
  //WHY ??? i don't have a funcking clue...
});
