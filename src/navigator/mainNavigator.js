import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps195662Navigator from '../features/Maps195662/navigator';
import Additem195661Navigator from '../features/Additem195661/navigator';
import Maps195657Navigator from '../features/Maps195657/navigator';
import UserProfile195653Navigator from '../features/UserProfile195653/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps195662: { screen: Maps195662Navigator },
Additem195661: { screen: Additem195661Navigator },
Maps195657: { screen: Maps195657Navigator },
UserProfile195653: { screen: UserProfile195653Navigator },

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
