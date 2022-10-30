/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <ImageBackground
      source={require('../images/background.png')}
      resizeMode="cover"
      style={styles.image}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <SafeAreaView style={{flex: 1, paddingTop: 35}}>
        <View
          style={{
            height: '100%',
            width: '100%',
          }}>
          {/* Email & password*/}
          <View
            style={{
              width: '100%',
              height: '20%',
              padding: 2,
              marginTop: 0.3 * windowHeight,
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '70%',
                height: 40,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>Email</Text>
              <TextInput
                style={{
                  color: 'white',
                  height: '100%',
                  width: '70%',
                  borderColor: 'white',
                  borderBottomColor: 'white',
                  borderBottomWidth: 1,
                  textAlign: 'left',
                }}
              />
            </View>
            <View
              style={{
                width: '70%',
                height: 40,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 10,
                position: 'relative',
              }}>
              <Text style={{color: 'white'}}>Password</Text>
              <TextInput
                style={{
                  color: 'white',
                  height: '100%',
                  width: '70%',
                  borderColor: 'white',
                  borderBottomColor: 'white',
                  borderBottomWidth: 1,
                }}
                autoCapitalize="none"
                secureTextEntry={showPassword ? false : true}
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  marginLeft: 'auto',
                  right: 0,
                }}
                onPress={() => setShowPassword(!showPassword)}>
                <Image
                  source={require('../images/visibility.png')}
                  style={{
                    height: 25,
                    width: 25,
                  }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View>
          </View>
          {/*Button login & register */}
          <View style={{width: '100%', height: '20%'}}>
            <View
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: 'white',
                  borderRadius: 8,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  backgroundColor: '#4b8aff',
                  width: 172,
                  height: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'white'}}>Đăng Nhập</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '100%',
                display: 'flex',
                marginTop: 15,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: 'white',
                  borderRadius: 8,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  backgroundColor: '#06c282',
                  width: 172,
                  height: 45,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'white'}}>Đăng Ký</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});

export default Login;
