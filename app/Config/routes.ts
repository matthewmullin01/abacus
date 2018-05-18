import { DrawerNavigator, StackNavigator } from 'react-navigation';
import HomeScreen from '../Screens/Home/home-screen';
import ProfileScreen from '../Screens/Profile/profile-screen';
import EditScreen from '../Screens/Profile/EditScreen/edit-screen';

const HomeScreenNested = StackNavigator(
  {
    homeScreen: { screen: HomeScreen, navigationOptions: { title: 'Home' } },
    profileScreen: { screen: ProfileScreen, navigationOptions: { title: 'My Profile' } }
  },
  {
    headerMode: 'none'
  }
);

const HomeScreenRouter = DrawerNavigator({
  homeScreenNested: { screen: HomeScreenNested }
});

export default HomeScreenRouter;
