console.log("match serializer");
export default DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    players: { embedded: 'always' },
  }
});
