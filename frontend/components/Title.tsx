import React from 'react';
import {Text} from 'react-native';


interface TitleProps {
    children?: any;
}


const Title = (props: TitleProps): JSX.Element => {
    return (
        <Text className="mb-8 text-center text-2xl">
            {props.children}
        </Text>
    );
}

export default Title;
