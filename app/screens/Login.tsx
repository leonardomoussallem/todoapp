import { View, Text, Button, TextInput, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from './../../firebaseConfig';


const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      setLoading(true);
      const after = await createUserWithEmailAndPassword(auth, email, password);
      console.log('Conta Criada:', after);
      Alert.alert('Sucesso', 'Conta Criada!');
      setIsAuthenticated(true);
      // Navigate to List screen after successful sign-up
      navigation.navigate('List');
    } catch (error: unknown) {
      if (error instanceof Error) {
        // Explicitly check if 'error' is an instance of Error
        console.error('Erro ao criar conta:', error.message);
        Alert.alert('Erro', error.message);
      } else {
        console.error('Erro desconhecido ao criar conta:', error);
        Alert.alert('Erro', 'Ocorreu um erro desconhecido. Por favor, tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  const signIn = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    try {
      setLoading(true);
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log('Logado:', user);
      Alert.alert('Sucesso', 'Logado com sucesso!');
      setIsAuthenticated(true);
      // Navigate to List screen after successful login
      navigation.navigate('List');
    } catch (error: unknown) {
      if (error instanceof Error) {
        // Explicitly check if 'error' is an instance of Error
        console.error('Erro ao logar:', error.message);
        Alert.alert('Erro', error.message);
      } else {
        console.error('Erro desconhecido ao logar:', error);
        Alert.alert('Erro', 'Ocorreu um erro desconhecido. Por favor, tente novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>   
        <>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            textContentType="password"
            placeholder="Senha"
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <Button onPress={signUp} title="Criar Conta" />
          <Button onPress={signIn} title="Logar" />
        </>
      
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flexDirection: 'column',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginVertical: 10,
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
