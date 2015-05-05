import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    map: { embedded: 'always' },
    territories: { embedded: 'always' },
  }
});
