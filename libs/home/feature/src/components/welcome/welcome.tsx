import {Button, ButtonText, Text} from '@gluestack-ui/themed';
import {Image} from '@gluestack-ui/themed';
import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useNavigation} from "@react-navigation/native";

/* eslint-disable-next-line */
export interface WelcomeProps {
}

export function Welcome(props: WelcomeProps) {
  const navigator = useNavigation();

  const goToProducts = () => {
    navigator.navigate('Products');
  }

  return (
    <View style={[styles.container, styles.smallMb]}>
      <Image
        alt="Welcome image"
        size="2xl"
        source={require('../../../assets/images/welcome.png')}
        style={{marginBottom: 20, flexGrow: 1}}
      />

      <Text style={[styles.smallMb, { flexGrow: 1 }]}>
        Mi herma here is an idea of what a well architected app looks like.
        Of course, you can change it to fit your needs. Enjoy it! :-)
      </Text>

      <Button style={{ flexGrow: 0 }}>
        <ButtonText onPress={goToProducts}>Let's get started!</ButtonText>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    height: '100%',
    marginHorizontal: 20,
    marginVertical: 30,
  },
  smallMb: {
    marginBottom: 20,
  }
});

export default Welcome;
