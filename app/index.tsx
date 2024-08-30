import { Text, View, StyleSheet} from "react-native";
import Card from "@/components/Card";

const cards = [
  "Tarjeta 1", "Tarjeta 2", "Tarjeta 3"
]

export default function Index() {
  return (
    <>
      {cards.map((cardTitle, index) => (
        <Card title={cardTitle} key={index}></Card>
      ))}
    </>
  );
}
