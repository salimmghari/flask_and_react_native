import React, {
    useState,
    useEffect,
    useCallback
} from 'react';
import {GestureResponderEvent} from 'react-native';
import {
    useAppDispatch, 
    useAppSelector
} from '../redux/app/hooks';
import {useNavigation} from '@react-navigation/native';
import axios, {AxiosResponse} from 'axios';
import {logout as logoutAction} from '../redux/features/user/userSlice';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Button from '../components/Button';
import Note, {NoteInterface} from '../components/Note';
import config from '../config.json';


interface HomeProps {
    children?: any;
}


const Home = (props: HomeProps): JSX.Element => {
    const dispatch = useAppDispatch();

    const navigation = useNavigation();

    const token: string = useAppSelector((state) => state.user.token);

    const [notes, setNotes] = useState<NoteInterface[]>([]);
    const [newNoteTitle, setNewNoteTitle] = useState<string>('');
    const [newNoteBody, setNewNoteBody] = useState<string>('');

    const readNotes = useCallback(() => {
        if (token !== '') {
            axios.get(`${config.url}/api/notes/`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((response: AxiosResponse<any, any>) => setNotes(response.data))
                .catch((error: any) => console.error(error));        
        }
    }, [token]);

    const createNote = (): void => {
        if (
            newNoteTitle !== ''
            && newNoteBody !== ''
        ) {
            axios.post(`${config.url}/api/notes/`, {
                title: newNoteTitle,
                body: newNoteBody
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((response: AxiosResponse<any, any>) => {
                setNewNoteTitle('');
                setNewNoteBody('');
                readNotes()
            }).catch((error: any) => console.error(error));    
        }
    }

    const updateNote = (note: NoteInterface): void => {
        console.log('notes', notes)
        console.log('id is', note.id)
        if (
            note.title !== ''
            && note.body !== ''
        ) {
            axios.put(`${config.url}/api/notes/${note.id}/`, {
                title: note.title,
                body: note.body
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then((response: AxiosResponse<any, any>) => readNotes())
                .catch((error: any) => console.error(error));        
        }
    }

    const deleteNote = (id: string): void => {
        axios.delete(`${config.url}/api/notes/${id}/`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((response: AxiosResponse<any, any>) => readNotes())
            .catch((error: any) => console.error(error));    
    }

    const logout = (event: GestureResponderEvent) => {
        axios.post(
            `${config.url}/api/users/logout/`,
            {},
            {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
        ).then((response: AxiosResponse<any, any>) => {
            dispatch(logoutAction());
            navigation.navigate('auth');
        }).catch((error: any) => console.error(error));    
    }

    useEffect(() => {
        if (token === '') {
            navigation.navigate('auth');
        } else {
            readNotes();
        }
    }, [
        dispatch, 
        navigation, 
        readNotes
    ]);

    return (
        <Layout>
            <Title>
                Notes
            </Title>
            {notes.map((note: NoteInterface) => (
                <Note
                    key={note.id}
                    title={note.title}
                    body={note.body}
                    onTitleChange={(text: string) => note.title = text}
                    onBodyChange={(text: string) => note.body = text}
                    update={(event: GestureResponderEvent) => updateNote(note)}
                    delete={(event: GestureResponderEvent) => deleteNote(note.id)}
                />
            ))}
            <Note 
                title={newNoteTitle}
                body={newNoteBody}
                onTitleChange={(text: string) => setNewNoteTitle(text)}
                onBodyChange={(text: string) => setNewNoteBody(text)}
                create={(event: GestureResponderEvent) => createNote()}
            />
            <Button 
                style={{backgroundColor: '#DC2626'}}
                onPress={logout}
            >
                Logout
            </Button>
        </Layout>
    );
}


export default Home;
