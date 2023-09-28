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
            style={styles.container}
            onPress={props.onPress}
        >
            <View style={[styles.button, props.style]}>
                <Text style={styles.buttonText}>
                    {props.children}
                </Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    button: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#363636',
        borderRadius: 6,
        shadowColor: 'rgba(149, 157, 165, 0.2)',
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowRadius: 24,
        shadowOpacity: 1,
        elevation: 4    
    },
    buttonText: {
        color: '#FFFFFF'
    }
});


export default Button;
