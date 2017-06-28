import { NavigationActions } from 'react-navigation';
import { AsyncStorage } from 'react-native';

export const actionTypes = {
  SET_AUTHENTICATION_DETAILS: 'SET_AUTHENTICATION_DETAILS'
};

export const setAuthenticationDetails = ({token}) => ({
  type: actionTypes.SET_AUTHENTICATION_DETAILS,
  payload: {token}
});

export const appBoot = () =>
  (dispatch, getState) =>
    getToken()
      .then(token => {
        if (token) {
          dispatch(setAuthenticationDetails({token}));
          dispatch(NavigationActions.navigate({routeName: 'onboarding'}))
            // dispatch(NavigationActions.reset({
            //   index: 0,
            //   actions: [
            //     NavigationActions.navigate({ routeName: 'onboarding'})
            //   ]
            // }))
        } else {
          dispatch(NavigationActions.navigate({routeName: 'register'}))
        }
      }).catch(e => {
        console.log(e);
        dispatch(NavigationActions.navigate({routeName: 'register'}))
      })
    // setTimeout(() => {
    //   dispatch(NavigationActions.navigate({routeName: 'register'}))
    //   dispatch(NavigationActions.reset({
    //     index: 0,
    //     actions: [
    //       NavigationActions.navigate({ routeName: 'welcome'})
    //     ]
    //   }))
    // } , 1000)

export const login = () =>
  (dispatch, getState) =>
    dispatch(persistAuthenticationDetails());

export const createAccount = () =>
  (dispatch, getState) =>
    setTimeout(() => {
      dispatch(NavigationActions.reset({
        index: 0,
        key: null,
        actions: [
          NavigationActions.navigate({ routeName: 'welcome'}),
        ]
      }))
      dispatch(NavigationActions.navigate({ routeName: 'onboarding'}))
    } , 1000)

export const persistAuthenticationDetails = () => {
  const token = '010101010'
  return (dispatch, getState) => {
    return persisTokenInStorage(token)
      .then(() => dispatch(setAuthenticationDetails({token})))
      .catch(e => console.log(e));
  }
}

function persisTokenInStorage(token) {
  return AsyncStorage.setItem('token', token);
}

function removeToken() {
  return AsyncStorage.removeItem('token');
}

function getToken() {
  return AsyncStorage.getItem('token');
}
