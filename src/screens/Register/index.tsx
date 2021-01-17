import React from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Form from '../../components/Form';
import { Container } from './styles';

interface InputProps {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const navigation = useNavigation();

  const handleRegister = ({email, username, password}: InputProps) => {
    if(email && username && password) {
      Alert.alert('Cadastro.', `${email} cadastrado com sucesso!`);
      navigation.navigate("Login");
    }else {
      Alert.alert('Atenção', 'Todos campos são obrigatórios.');
    }
  }

  return (
    <Container>
      <Form 
        inputs={[
          "username", 
          "email", 
          "password"
        ]}
        submit={handleRegister}
        textButton="Register"
      />
    </Container>
  );
}

export default Register;