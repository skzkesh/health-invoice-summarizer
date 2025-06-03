import { Pressable, StyleSheet, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const router = useRouter();

  const handleUploadInvoice = () => {
    router.replace('../UploadImageScreen');
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
          onPress={handleUploadInvoice}
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor:  pressed ? 'black' : '#44576D',
            },
          ]}>
          <Text style={styles.uploadButtonText}>Upload Invoice Image</Text>
        </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    marginTop: 500,
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginVertical: 80,
    alignItems: 'center',
  },
  uploadButtonText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
  },
});

export default HomeScreen;