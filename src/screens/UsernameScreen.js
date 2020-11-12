import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Alert} from 'react-native';



const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    backgroundColor: '#fef4d1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const Username = ({navigation})=> {
    return (
        <View style = {styles.canvas}>
      
        {/*username header*/}
        
          <Text style={{ bottom: 20, fontStyle: "Roboto", fontWeight: 'bold', paddingRight: 195, fontSize: 30}}>Username</Text>
          <StatusBar style="auto" />
        
        {/*top black line*/}

            <View
             style={{
             borderColor: 'black',
             borderWidth: 1,
             marginVertical: 40,
             width: 350,
             height:2,
             bottom: 50
             
             }}>

             </View>
        

        
        {/*username field*/}
          <View>
              <TextInput
              style={{ bottom: 50, width: 300, height: 35, backgroundColor: '#ffffff', borderColor: 'black', borderWidth: 1 }}
              placeholder="Enter email or username"/>
          </View>


          {/*next button*/}
          <View style = {{bottom: 50, paddingTop: 20}}>
              <TouchableOpacity onPress = {() => navigation.navigate('DietaryRestrictions')}>
                <Text
                style={{padding: 8, fontStyles: "Roboto", width: 300, height: 35, backgroundColor: '#C1BEBE', borderColor: 'black', borderWidth: 1 }}>
                Next </Text>
              </TouchableOpacity>
          </View>

        
          {/*bottom black line*/}
          <View
              style={{
                borderColor: 'black',
                borderWidth: 1,
                marginVertical: 40,
                width: 350,
                height: 2,
                bottom: 50
            }}>

          </View>
    
          <Text style = {{bottom: 75, right: 35 }}> Already have an account? </Text>
          <TouchableOpacity onPress = {() => navigation.navigate('SignIn')} >
            <Text style = {{bottom: 92.5, left: 75, fontWeight: "bold"}}> Log In.</Text>
          </TouchableOpacity>
      
      </View>



    )

}

export default Username;

/*
export default class Username extends React.Component{
    render(){
        return (
            <View style={styles.canvas}>
            <Text fontStyles="Rubik">Username</Text>
            <StatusBar style="auto" />
            </View>

                        
                
        );
    }
}
*/