import React,{Component} from 'react'
import {TouchableOpacity,TextInput,View,Modal,ScrollView,KeyboardAvoidingView,Alert,Text} from 'react-native'
import HomeScreen from './HomeScreen'
import firebase from 'firebase'
import db from '../config'



export default class UserDetailsScreen extends Component{
   constructor(){
   super()
   this.state={
       userId: firebase.auth().currentUser.email,
       receiverId:this.props.navigation.getParam('details')["user_id"],
       requestId:this.props.navigation.getParam('details')["request_id"],
       productId:this.props.navigation.getParam('details')["product_id"],
       itemDescription:this.props.navigation.getParam('details')["item_description"],
       receiverName:'',
       receiverContact:'',
       receiverAddress:'',
       receiverRequestDocId:'',
   }
}

getUserDetails(){
    db.collection('users').where('emailId','==',this.state.receiverId).get()
    .then(snapshot=>{
        snapshot.forEach(doc=>{
            this.setState({
                receiverName:doc.data().first_name,
                receiverAddress:doc.data().address,
                receiverContact:doc.data().contact
            })
        })
    })
}

addBarters=()=>{
    db.collection('myBarters').add({
        item_name:this.state.itemName,
        request_id:this.state.requestId,
        request_by:this.state.receiverName,
        contact:this.state.receiverContact,
        address:this.state.receiverAddress,
        donor_id:this.state.userId,
        request_status:"donor interested"
    })
}

    render(){
        return(
            <View>
                {
                    this.state.receiverId !== this.state.userId
                }
                    ?(
                        <TouchableOpacity
                        style={{height:40,width:55,borderWidth:2}}
                        onPress={()=>{
                            this.addBarters()
                            this.props.navigation.navigate('ExchangeScreen')
                        }}
                        >
                         <Text>Exchange</Text>
                        </TouchableOpacity>
                    )
            </View>
        )
    }
}