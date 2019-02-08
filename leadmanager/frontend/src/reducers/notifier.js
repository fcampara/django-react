import { ENQUEUE_SNACKBAR, REMOVE_SNACKBAR } from '../actions/types'

const defaultState = {
  notifications: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
      case ENQUEUE_SNACKBAR:
        action.notification.autoHideDuration = 1000
          return {
              ...state,
              notifications: [
                  ...state.notifications,
                  {
                      ...action.notification,
                  },
              ],
          };

      case REMOVE_SNACKBAR:
          return {
              ...state,
              notifications: state.notifications.filter(
                  notification => notification.key !== action.key,
              ),
          };

      default:
          return state;
  }
};
