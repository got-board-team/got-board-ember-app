let adapter = DS.ActiveModelAdapter.extend({
  namespace: 'api/v1',
  host: 'http://localhost:3000',
  //myfreecomm
  host: 'http://192.168.1.15:3000',
});
export default adapter;
