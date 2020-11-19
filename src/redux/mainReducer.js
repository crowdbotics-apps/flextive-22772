import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp12175877Reducer from '../features/SignUp12175877/redux/reducers'
import SignIn43175876Reducer from '../features/SignIn43175876/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp12175877: SignUp12175877Reducer,
SignIn43175876: SignIn43175876Reducer,

});