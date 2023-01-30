import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigateAndReset(routes, index) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes,
      }),
    );
  }
}

export function navigateAndSimpleReset(name, index) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes: [{name}],
      }),
    );
  }
}
