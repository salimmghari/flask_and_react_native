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
            style={styles.container}
            onPress={props.onPress}
        >
            <View style={styles.link}>
                <Text style={styles.linkText}>
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
    link: {
        width: '100%',
        marginBottom: 20
    },
    linkText: {
        color: '#3A73EF',
        fontSize: 12,
        textAlign: 'center'
    }
});


export default Link;
