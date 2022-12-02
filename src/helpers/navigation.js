import { CommonActions } from '@react-navigation/native';

let navigator;


//this gets called with navigation object which we assign to navigator variable
export const setNavigator = (nav) => {
    navigator = nav;
};



//we can now import this function anywhere we want to navigate, just need to send it screenName and params for that screen
export const navigate = (routeName, params) => {
    navigator.dispatch(
        CommonActions.navigate({ name: routeName, params: params })
    );
};