import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    players: { embedded: 'always' },
    board: { embedded: 'always' },
  }
});
