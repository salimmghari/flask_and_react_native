import React from 'react';
import {
    Text,
    StyleSheet
} from 'react-native';


interface TitleProps {
    children?: any;
}


const Title = (props: TitleProps): JSX.Element => {
    return (
        <Text style={styles.title}>
            {props.children}
        </Text>
    );
}

const styles = StyleSheet.create({
    title: {
        marginBottom: 30,
        textAlign: 'center',
        fontSize: 20
    }
});


export default Title;
