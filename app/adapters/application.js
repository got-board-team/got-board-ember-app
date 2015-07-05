let adapter = DS.ActiveModelAdapter.extend({
  namespace: 'api/v1',
  host: 'http://localhost:3000',
});
export default adapter;
