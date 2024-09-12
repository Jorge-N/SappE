import { Text, View, StyleSheet} from "react-native";
import Card from "@/components/Card";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const cards = [
  "Tarjeta 1", "Tarjeta 2", "Tarjeta 3"
]

export default function Index() {
  return (
    <View style={styles.viewStyles}>
      {cards.map((cardTitle, index) => (
        <Card title={cardTitle} key={index}/>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyles: {
    display: 'flex',
    width: '100%',
    height: '100%',
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
  }
})