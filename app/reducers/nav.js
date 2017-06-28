import AppNavigator from '../createNavigation';

// const initialState = AppNavigator.router.getStateForAction((function() {
//   console.log(AppNavigator.router.getActionForPathAndParams('Test1'))
//   return AppNavigator.router.getActionForPathAndParams('booting')
// }())
// );

const navReducer = (state, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};

export default navReducer;
