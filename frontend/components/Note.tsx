import React from 'react';
import {
    View,
    StyleSheet,
    GestureResponderEvent
} from 'react-native';
import Field from './Field';
import Button from './Button';


export interface NoteInterface {
    _id: string;
    title: string;
    body: string;
    createdAt: string;
}


interface NoteProps {
    title: string;
    body: string;
    onTitleChange: (text: string) => void;
    onBodyChange: (text: string) => void;
    create?: (event: GestureResponderEvent) => void;
    update?: (event: GestureResponderEvent) => void;
    delete?: (event: GestureResponderEvent) => void;
    children?: any;
}


const Note = (props: NoteProps): JSX.Element => {
    return (
        <View style={styles.container}>
            <Field 
                label="Title:"
                value={props.title}
                placeholder="The title"
                onChange={props.onTitleChange}
            />
            <Field
                label="Body:"
                value={props.body}
                placeholder="The body"
                onChange={props.onBodyChange}
                multiLine={true}
            />
            {props.create ? (
                <Button
                    style={{backgroundColor: '#84CC16'}}
                    onPress={props.create}
                >
                    Create
                </Button>
            ) : null}
            {props.update ? (
                <Button
                    style={{
                        backgroundColor: '#FAD12C',
                        marginBottom: 20
                    }}
                    onPress={props.update}
                >
                Update
                </Button>
            ) : null}
            {props.delete ? (
                <Button
                    style={{backgroundColor: '#DC2626'}}
                    onPress={props.delete}
                >
                Delete
                </Button>
            ) : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 30,
        padding: 30,
        backgroundColor: '#FFFFFF',
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

export default Note;
