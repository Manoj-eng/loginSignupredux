import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {onUserLogin, onFetchProducts} from '../redux/Redux';

const _LoginScreen = (props) => {
    const {userReducer,onUserLogin,onFetchProducts} = props;
    const {user,products} = userReducer;
    console.log(user,products)
    return (
        <View 
        style={{flex: 1,alignItems:"center",justifyContent:"center"}}>
           <TextInput 
           
           placeholder="Username"

           />

           <TextInput 
           placeholder="password"
           />
            <TouchableOpacity
             onPress={()=>onUserLogin({email:"abc123@Gmail.com",password:"123456789"})}
                
                style={{backgroundColor:'#AED87C',
     alignItems:'center',justifyContent:'center',
     borderRadius:20,
     width:230,marginTop:15,height:40
     }}>
<Text style={{color:"white",fontWeight:"bold",fontSize:17}}>Login</Text>
     </TouchableOpacity>
     <TouchableOpacity
             onPress={()=>onUserLogin({email:"abc@yopmail.com",password:"12345"})}
                 onPress={()=>onFetchProducts()} 
                style={{backgroundColor:'#AED87C',
     alignItems:'center',justifyContent:'center',
     borderRadius:20,
     width:230,marginTop:15,height:40
     }}>
<Text style={{color:"white",fontWeight:"bold",fontSize:17}}>Fetch</Text>
     </TouchableOpacity>
     {products != undefined && (
     <Text style={{marginLeft:20,marginRight:20}}>
     {''}
     {JSON.stringify(products)}{''}</Text>)}
        </View>
    )
}
const mapStateToProps=(state) =>{
    console.log(state, 'this is state')
    return {

        userReducer:state.userReducer
    }
}

const LoginScreen = connect(mapStateToProps,{onUserLogin,onFetchProducts})(_LoginScreen);



export default LoginScreen