import React from 'react';
import { Text, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Form from '../../components/Form';
import { Container, TextLink } from './styles';

interface InputProps {
    username: string;
    password: string;
    screen: string;
  }
  

const Login: React.FC = () => {
    const {navigate} = useNavigation();

    const handleNavigate = ({username, password}: InputProps) => {
        if(username && password) {
            navigate("Home");
          }else {
            Alert.alert('Atenção', 'Todos campos são obrigatórios.');
          }
        
    }

    return (
        <Container>
            <Form 
                inputs={[
                    "username", 
                    "password"
                ]}
                submit={handleNavigate}
                textButton="Login"
            />
            <TouchableOpacity onPress={() => {navigate("Register")}}>
                <TextLink>Sign-Up</TextLink>
            </TouchableOpacity>
        </Container>
    );
}

export default Login;