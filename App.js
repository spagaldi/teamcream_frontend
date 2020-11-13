import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SignIn from './src/screens/SignInScreen';
import Username from './src/screens/UsernameScreen';
import ResetPw from './src/screens/ResetPwScreen';
import DietaryRestrictions from './src/screens/DietaryRestrictions';
import EmailSent from './src/screens/EmailSent';

const navigator = createStackNavigator(
  {
    SignIn,
    Username,
    ResetPw,
    DietaryRestrictions,
    EmailSent,
  },
  {
    initialRouteName: 'SignIn',
    defaultNavigationOptions: {
      title: 'Cooking with Crumbs',
    },
  },
);

export default createAppContainer(navigator);
