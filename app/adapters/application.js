import JsonApiAdapter from "json-api-adapter";
import JsonApiSerializer from "json-api-adapter";

//export default DS.FixtureAdapter.extend({});
console.log("adapter");
//let adapter = JsonApiAdapter.extend({
  //namespace: 'api/v1',
  //host: 'http://localhost:3000',
  //serializer: "JsonApiSerializer",
//});
let adapter = DS.ActiveModelAdapter.extend({
  namespace: 'api/v1',
  host: 'http://localhost:3000',
});
export default adapter;
