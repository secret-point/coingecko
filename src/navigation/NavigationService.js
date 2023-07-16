import {CommonActions, StackActions} from '@react-navigation/native';
import {delay} from '../utils/utils';
import {throttle} from 'lodash';
let _navigator;

const setTopLevelNavigator = navigatorRef => {
  _navigator = navigatorRef;
};

const resetToAuth = (name, params = null) =>
  CommonActions.reset({
    index: 0,
    routes: [{name, params}],
  });

const reset = async (route = 'Entry', params) => {
  while (!_navigator) {
    await delay(500);
  }
  _navigator.dispatch(resetToAuth(route, params));
};

const navigate = async (name, params = null) => {
  while (!_navigator) {
    await delay(500);
  }
  _navigator.dispatch(CommonActions.navigate({name, params}));
};

const throttledReset = throttle(reset, 5000, {trailing: false});

const goBack = () => {
  _navigator.dispatch(CommonActions.goBack());
};

const pop = (amountOfPages = 1) => {
  _navigator.dispatch(StackActions.pop(amountOfPages));
};
const popToTop = () => {
  _navigator.dispatch(StackActions.popToTop());
};
export default {
  navigate,
  reset,
  setTopLevelNavigator,
  goBack,
  pop,
  throttledReset,
  popToTop,
};
