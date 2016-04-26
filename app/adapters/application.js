import { ActiveModelAdapter } from 'active-model-adapter';

import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

import ENV from '../config/environment';

export default ActiveModelAdapter.extend(DataAdapterMixin, {
  namespace: 'api/v1',
  host: ENV.APP.API_HOST,
  authorizer: 'authorizer:application',
});
