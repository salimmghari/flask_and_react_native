import React from 'react';
import {
    View,
    Pressable,
    Text,
    StyleSheet,
    StyleProp,
    ViewStyle,
    GestureResponderEvent
} from 'react-native';


interface ButtonProps {
    style?: StyleProp<ViewStyle> | undefined;
    onPress: (event: GestureResponderEvent) => void;
    children?: any;
}


const Button = (props: ButtonProps): JSX.Element => {
    return (
        <Pressable 
            className="grow"
            onPress={props.onPress}
        >
            <View 
                className="grow w-full px-6 py-3 justify-center items-center rounded-md shadow-lg"
                style={[styles.button, props.style]}
            >
                <Text style={styles.buttonText}>
                    {props.children}
                </Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#363636'
    },
    buttonText: {
        color: '#FFFFFF'
    }
});


export default Button;
