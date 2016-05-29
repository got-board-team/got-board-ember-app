import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize: function(value) {
    return value;
  },
  serialize: function(value) {
    return value;
  }
});
