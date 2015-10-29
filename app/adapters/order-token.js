import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  revealOrders: function (id) {
    console.log("orderTokenAdapter#revealOrders");
    console.log("orderTokenAdapter#revealOrders", arguments);
    var url = this.buildURL("orderToken", id, null, 'findAll');
    return this.ajax(url + "/reveal", "GET", { data: { player_id: 19 } });
  },
});

