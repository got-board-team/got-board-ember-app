import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize: function(value) {
    //let content = Ember.isArray(value) ? value : undefined;
    console.log('deserialize: ', value);
    //return Ember.ArrayProxy.create({ content: Ember.A(content) });
    return value;
  },
  serialize: function(value) {
    //let content = Ember.isArray(value) ? value : undefined;
    console.log('serialize: ', value);
    //return Ember.ArrayProxy.create({ content: Ember.A(content) });
    return value;
  }
});
