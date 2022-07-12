import {
  CommonActions,
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef<any>();

// export const navigationRef2 = createNavigationContainerRef();

// export function navigateRoot(name, params = {}) {
//   navigationRef2.
// }

export function navigate(name: string, params = {}) {
  navigationRef.navigate(name, params);
}

export function push(name: string, params: any) {
  navigationRef.dispatch(StackActions.push(name, params));
}

export function goBack(n?: number) {
  if (n) {
    navigationRef.dispatch(StackActions.pop(n));
  } else {
    navigationRef.goBack();
  }
}

export function navigateReplace(name: string, params?: any) {
  navigationRef.dispatch(StackActions.replace(name, params));
}

export function reset(name: string, params = {}) {
  navigationRef.reset({
    index: 0,
    routes: [
      {
        name: name,
        params,
      },
    ],
  });
}

export function navigateReset(name: string, params?: any) {
  navigationRef.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name, params}],
    }),
  );
}
export function popToTop() {
  navigationRef.dispatch(StackActions.popToTop());
}
