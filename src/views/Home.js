import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

const Home = ({route, navigation}) => {
  const {email} = route.params;
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Go Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
