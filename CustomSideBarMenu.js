import React,{Component} from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import {DrawerItems} from 'react-navigation-drawer'
import firebase from 'firebase'

export default class CustomSideBarMenu extends Component{
    render(){
        return(
             <View style={styles.container}>
             <View style = {styles.drawerItemsContainer}>
             <DrawerItems {...this.props}/>

             <View style={{flex:1,justifyContent:'flex-end',paddingBottom:30}}>
             <TouchableOpacity style={{justifyContent:'center',padding:10,height:30,width:'100%'}}
             onPress={()=>{
                 this.props.navigation.navigate('SignupLoginScreen')
                 firebase.auth().signOut()
             }}>
             <Text>LogOut</Text>
             </TouchableOpacity>
             </View>
             </View>
             </View>
        )
    }
}

var styles = StyleSheet.create({
container:{
    flex:1
}
})