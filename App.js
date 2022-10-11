import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Index2 from './src/index2';
import IndexNavigate from './src/navigation/navigate';

export default function App() {
  return (
      
      <View style={styles.container}>
        <IndexNavigate />
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
