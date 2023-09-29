import React from 'react';
import {
    View,
    Pressable,
    Text,
    StyleSheet,
    GestureResponderEvent
} from 'react-native';
 

interface LinkProps {
    onPress: (arg0: GestureResponderEvent) => void;
    children?: any;
}


const Link = (props: LinkProps): JSX.Element => {
    return (
        <Pressable 
            className="grow"
            onPress={props.onPress}
        >
            <View className="w-full mb-6">
                <Text 
                    className="text-sm text-center"
                    style={styles.text}
                >
                    {props.children}
                </Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    text: {
        color: '#3A73EF'
    }
});


export default Link;
