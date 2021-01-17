import React from 'react';
import { View, Text } from 'react-native';
import { Formik } from 'formik';

import { Input, Button, TextButton } from './styles';

interface InputProps {
    inputs: [String];
    submit: any;
    textButton: string;
}

const Form: React.FC<InputProps> = ({inputs, submit, textButton}) => {
    
    return (
        <Formik
            initialValues={{
                label: inputs.map(input => {return input})
            }}
            onSubmit={submit}
        >
            {({handleSubmit, handleChange, values}) => (
                <View>
                    {
                        inputs.map((input, index) => (
                            <Input<String | any> 
                                key={index}
                                placeholder={input}
                                value={values.label}
                                onChangeText={handleChange(input)}
                            />
                        ))
                    }
                    <Button onPress={handleSubmit}>
                        <TextButton>{textButton}</TextButton>
                    </Button>
                </View>
            )}
        </Formik>
    );
}

export default Form;