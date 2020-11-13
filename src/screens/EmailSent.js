import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Dimensions} from 'react-native';

const dimensions = Dimensions.get('window');
const { width } = dimensions;
const { height } = dimensions;

const EmailSent = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../../images/email_sent_logo.png')}/>
            <View style={{flexDirection: 'row',alignItems: 'center'}}>
                <Text style={{fontfamily: 'Robot'}}> Go back to </Text>
              
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <Text style={{fontfamily: 'Roboto', fontWeight: 'bold'}}>
                        login 
                    </Text>
                </TouchableOpacity>
               
                <Text style={{fontfamily: 'Roboto', paddingLeft: width * 0.01}}>
                    after verification.
                </Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
  container: {
    paddingTop: height * 0.15,
    flex: 1,
    backgroundColor: '#FEF4D1',
    alignItems: 'center'
  },
});
export default EmailSent;