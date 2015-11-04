import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service("store"),

  revealOrders(ids) {
    console.log("order-service#revealOrders");
    let adapter = this.get("store").adapterFor("order-token");
    return adapter.revealOrders(ids);
  },
});
