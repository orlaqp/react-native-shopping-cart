import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Welcome} from '@cart/home/feature';
import {Products} from "@cart/products/feature";
import {Cart} from "@cart/cart/feature";
import {Checkout} from "@cart/libs/checkout/feature";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <GluestackUIProvider config={config}>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name={'Welcome'} component={Welcome}/>
          <Stack.Screen name={'Products'} component={Products}/>
          <Stack.Screen name={'Cart'} component={Cart}/>
          <Stack.Screen name={'Checkout'} component={Checkout}/>
        </Stack.Navigator>
      </GluestackUIProvider>
    </NavigationContainer>
  );
}
