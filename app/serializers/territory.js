import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  primaryKey: 'slug',
  attrs: {
    units: { embedded: 'always' },
  }
});
