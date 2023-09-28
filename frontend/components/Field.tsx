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
        <View style={styles.container}>
            <Text style={styles.label}>
                {props.label}
            </Text>
            <TextInput 
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
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    label: {
        width: '100%',
        marginBottom: 10,
        color: '#363636'
    },
    input: {
        width: '100%',
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#FFFFFF',
        color: '#363636',
        borderRadius: 6,
        borderColor: '#363636',
        borderWidth: 1,
        borderStyle: 'solid',    
        shadowColor: 'rgba(149, 157, 165, 0.2)',
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowRadius: 24,
        shadowOpacity: 1,
        elevation: 4    
    }
});


export default Field;
