export function initialize(instance) {
  let pusherService = instance.container.lookup('service:pusher');
  let extraPusherOptions = {};
  pusherService.setup(GotBoardGame.PUSHER_KEY, extraPusherOptions);
}

export default {
  name: 'ember-pusher',
  initialize: initialize
};
