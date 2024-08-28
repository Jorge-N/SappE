import { Text, View, StyleSheet} from "react-native";
import Counter from '../components/Counter'

export default function Index() {
  return (
    <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
      <Counter></Counter>
    </View>
  );

}
