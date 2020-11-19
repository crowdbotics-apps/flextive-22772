import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignUp12175877Navigator from '../features/SignUp12175877/navigator';
import SignIn43175876Navigator from '../features/SignIn43175876/navigator';
import BlankScreen0175875Navigator from '../features/BlankScreen0175875/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignUp12175877: { screen: SignUp12175877Navigator },
SignIn43175876: { screen: SignIn43175876Navigator },
BlankScreen0175875: { screen: BlankScreen0175875Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
