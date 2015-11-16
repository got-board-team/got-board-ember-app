import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  revealOrders: function (ids) {
    var url = this.buildURL("orderToken", null, null, 'findAll');
    return this.ajax(url + "/reveal", "GET", { data: { ids: ids } });
  },
});

