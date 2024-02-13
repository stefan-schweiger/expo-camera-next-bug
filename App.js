import { CameraView, useCameraPermissions } from 'expo-camera/next';
import { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();

  const [showCamera, setShowCamera] = useState(false);

  useEffect(() => {
    void requestPermission().then(console.log);
  }, []);

  if (!permission?.granted) {
    return null;
  }

  if (!showCamera) {
    return (
      <SafeAreaView style={[styles.container, { alignItems: 'center', justifyContent: 'center' }]}>
        <Button onPress={() => setShowCamera(true)} title='Open' />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <CameraView style={styles.camera}>
        <View style={styles.buttonContainer}>
          <Button onPress={() => setShowCamera(false)} title='Close' />
        </View>
      </CameraView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
  },
  button: {
    flex: 1,
  },
});
