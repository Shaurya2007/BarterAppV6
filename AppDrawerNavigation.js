import React,{Component} from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {AppTabNavigator} from './AppTabNavigator'
import CustomSideBarMenu from './CustomSideBarMenu'
import SettingScreen from '../screens/SettingScreen'
import MyBarters from '../screens/MyBarters'

export const AppDrawerNavigator = createDrawerNavigator({

    MyBarters:{
    screen:MyBarters
    },

    Home:{
        screen:AppTabNavigator
    },
    Setting:{
        screen:SettingScreen
},
},
{
   contentComponent:CustomSideBarMenu
},
{
   initialRouteName: 'Home'
})