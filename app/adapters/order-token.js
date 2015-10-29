import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  revealOrders: function (playerId) {
    console.log("orderTokenAdapter#revealOrders");
    console.log("orderTokenAdapter#revealOrders", arguments);
    var url = this.buildURL("orderToken", playerId, null, 'findAll');
    return this.ajax(url + "/reveal", "GET", { data: { player_id: playerId } });
  },
});

