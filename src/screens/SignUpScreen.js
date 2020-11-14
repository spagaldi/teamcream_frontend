import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TextInputComponent, Alert, Dimensions } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import OAuth from '../components/OAuth';
import axios from 'axios'

const dimensions = Dimensions.get('window');
const width = dimensions.width;
const height = dimensions.height;


const SignUp = ({navigation})=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token , setToken] = useState('');
    const [error , setError] = useState('');

    const SignUpAxios = async () => {
       await axios.create({
            baseURL: 'http://10.0.2.2:3000',
            headers: {
              'Content-Type': 'application/json'
            },
          }).
        post('/signup', {
            email,
            password
          })
          .then(function (response) {
            console.log('response');
            if(response.data.token){
                setToken(response.data.token);
                navigation.navigate('ProfilePic', {token: response.data.token});
            }
            response.data.error ? setError(response.data.error) : null;
            console.log(response.data.error);
            console.log(response.data.token);
          })
          .catch(function (error) {
            console.log('error');
            console.log(error);
          });
    }

    console.log(email, password);

    return(
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source = {require('../../images/cwc_logo_simple.png') }  style={styles.CWCLogo}/>
            </View>
            <View style={styles.SignUpInput}>
               <Text style={styles.SignUpText}>Email Sign-Up</Text> 
                <TextInput style={styles.inputBox} placeholder=' Enter Email or username' value={email} onChangeText={(newTerm)=>setEmail(newTerm)}/>
                <TextInput style={styles.inputBox} placeholder=' Enter Password' value={password} onChangeText={(newTerm)=>setPassword(newTerm)} />
                <Button
                    onPress={() => SignUpAxios()}
                   // style={styles.acctButton} 
                    title=" Create Account" 
                    color="#D9B580"
                    />
            </View>

            {error? <Text>{error}</Text>: null}
            
            {/* LINE OR LINE */}
            <View style={{flex:0.2, flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.line}/>
                <View>
                    <Text style={{width: width*.1, textAlign: 'center'}}>OR</Text>
                </View>
                <View style={styles.line}/>
            </View>

            {/* Facebook and google OAuth*/}
            <View style={styles.OAuth}>
                <OAuth/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo:{ 
        flex: 0.4,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        right: width*.3
    }, 
    CWCLogo:{
        width: width*0.25,
        height: height*0.25,
        resizeMode: 'contain'
    },
    SignUpInput:{
        flex: 0.4,
        justifyContent: 'center',
        justifyContent: 'space-evenly',
        width: width*0.85,
    },
    SignUpText:{
        paddingBottom: '5%',
        fontFamily: 'monospace',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 20,
        borderBottomWidth: 2,
        marginBottom: '8%'
    },
    inputBox:{
        justifyContent: 'center',
        justifyContent: 'space-evenly',
        borderColor: 'black',
        borderWidth: 0.5,
        marginTop: '0%',
        marginBottom: '7%',
        height: '20%'
    },
    line:{
        flex: 0.5,
        height: height*.002, 
        backgroundColor: 'black',
    },
    OAuth:{
        justifyContent: 'center',
        paddingBottom: '20%'
    }
});

export default SignUp;
