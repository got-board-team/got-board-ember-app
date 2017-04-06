import Ember from 'ember';

const { computed }  = Ember;

export default Ember.Component.extend({
  attributeBindings: ['match'],

  session: Ember.inject.service(),

  //TODO: remove when api is ready for that
  init() {
    this._super(...arguments);
    let match = this.get('match');
    let store = match.store;
    let territory = store.peekRecord('territory', 'winterfell');
    store.createRecord('garrison', { id: 1, name: 'winterfell', match: match, territory: territory, y: 540, x: 655 });
    store.createRecord('garrison', { id: 2, name: 'pyke',       match: match, territory: null     , y: 0,   x: 0   });
  },

  didInsertElement() {
    console.log('Recovering scroll position');
    window.scrollTo(130, 460);
  },

  board: computed(function () {
    return this.get('match.board');
  }),

  currentPlayer: computed('match.players.@each.userId', function () {
    let players = this.get('match.players');
    let userId = this.get('session.userId');
    let player = players.filterBy('userId', userId).toArray()[0];
    return player;
  }),

  isPlayer: computed('currentPlayer', function() {
    return this.get('currentPlayer') != null;
  }),
});
