import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Ionicons} from '@expo/vector-icons'
import LoginScreen from './screens/LoginScreen'
import LoadingScreen from './screens/LoadingScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import PostScreen from './screens/PostScreen'
import ProfileScreen from './screens/ProfileScreen'
import MessageScreen from './screens/MessageScreen'
import NotificationScreen from './screens/NotificationScreen'


// const AppStack = createStackNavigator({
//   Home: HomeScreen
// })

const AppContainer = createStackNavigator({
    default: createBottomTabNavigator(
      {
          Home: {
            screen: HomeScreen,
            navigationOptions: {
              tabBarIcon: ({tintColor}) => <Ionicons name="ios-home" size={24} color={tintColor}></Ionicons>
            }
          },
          Message: {
            screen: MessageScreen,
            navigationOptions: {
              tabBarIcon: ({tintColor}) => <Ionicons name="ios-chatboxes" size={24} color={tintColor}></Ionicons>
            }
          },
          Post: {
            screen: PostScreen,
            navigationOptions: {
              tabBarIcon: ({tintColor}) => <Ionicons name="ios-add-circle" size={48} color="#11AACC"></Ionicons>
            }
          },
          Notification: {
            screen: NotificationScreen,
            navigationOptions: {
              tabBarIcon: ({tintColor}) => <Ionicons name="ios-notifications" size={24} color={tintColor}></Ionicons>
            }
          },
          Profile: {
            screen: ProfileScreen,
            navigationOptions: {
              tabBarIcon: ({tintColor}) => <Ionicons name="ios-person" size={24} color={tintColor}></Ionicons>
            }
          }
      },
      {   defaultNavigationOptions: {
            tabBarOnPress: ({navigation, defaultHandler}) => {
              if(navigation.state.key === "Post"){
                navigation.navigate("postModal")
              } else{
                defaultHandler()
              }
            }
          },
          tabBarOptions: {
            activeTintColor: "#161F3D",
            inactiveTintColor: "#B8BBC4",
            showLabel: false
          }
      }
    ),
    postModal: {
      screen: PostScreen
    }
}, 
{
    mode: "modal",
    headerMode: "none",
    initialRouteName: "postModal"
}
)

// const AppTabNavigator = 

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppContainer,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
)