import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';


interface FieldProps {
    label: string;
    value?: string | undefined;
    placeholder: string;
    onChange: (text: string) => void;
    multiLine?: boolean | undefined;
    secure?: boolean | undefined;
    children?: any;
}


const Field = (props: FieldProps): JSX.Element => {
    return (
        <View className="justify-start items-center">
            <Text 
                className="w-full mb-3"
                style={styles.label}
            >
                {props.label}
            </Text>
            <TextInput 
                className="w-full mb-6 px-6 py-3 rounded-md shadow-lg"
                style={[styles.input, {height: props.multiLine ? 200 : 'auto'}]}
                defaultValue={props.value}
                placeholder={props.placeholder}
                multiline={props.multiLine}
                secureTextEntry={props.secure}
                onChangeText={props.onChange}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        color: '#363636'
    },
    input: {
        backgroundColor: '#FFFFFF',
        color: '#363636',
        borderColor: '#363636',
        borderWidth: 1,
        borderStyle: 'solid'
    }
});


export default Field;
