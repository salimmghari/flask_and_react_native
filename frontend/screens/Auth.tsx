import React, {useState} from 'react';
import {GestureResponderEvent} from 'react-native';
import axios, {AxiosResponse} from 'axios';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '../redux/app/hooks';
import {login as loginAction} from '../redux/features/user/userSlice';
import Layout from '../components/Layout';
import Form from '../components/Form';
import Title from '../components/Title';
import Field from '../components/Field';
import Button from '../components/Button';
import Link from '../components/Link';
import config from '../config.json';


interface AuthProps {
    children?: any;
}


const Auth = (props: AuthProps): JSX.Element => {
    const [type, setType] = useState<string>('login');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [newUsername, setNewUsername] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmNewPassword, setConfirmNewPassword] = useState<string>('');

    const dispatch = useAppDispatch();

    const navigation = useNavigation();

    const login = (event: GestureResponderEvent) => {
        if (
            username !== ''
            && password !== ''
        ) {
            axios.post(
                `${config.url}/api/users/login/`,
                {
                    username: username,
                    password: password
                }
            ).then((response: AxiosResponse<any, any>) => {
                dispatch(loginAction(response.data.token));
                navigation.navigate('home');
            }).catch((error: any) => console.error(error));    
        }
    }

    const signup = (event: GestureResponderEvent) => {
        if (
            newUsername !== ''
            && newPassword !== ''
            && newPassword === confirmNewPassword
        ) {
            axios.post(
                `${config.url}/api/users/signup/`,
                {
                    username: newUsername,
                    password: newPassword
                }
            ).then((response: AxiosResponse<any, any>) => {
                dispatch(loginAction(response.data.token));
                navigation.navigate('home');
            }).catch((error: any) => console.error(error));    
        }
    }

    return (
        <Layout>
            {type === 'login' ? (
                <Form key="login">
                    <Title>
                        Login
                    </Title>
                    <Field
                        label="Username:"
                        placeholder="Your username"
                        onChange={(text: string) => setUsername(text)} 
                    />
                    <Field
                        label="Password:"
                        placeholder="Your password"
                        onChange={(text: string) => setPassword(text)} 
                        secure={true}
                    />
                    <Link onPress={(event: GestureResponderEvent) => setType('signup')}>
                        Signup?
                    </Link>
                    <Button onPress={login}>
                        Login
                    </Button>
                </Form>
            ) : (
                <Form key="signup">
                    <Title>
                        Signup
                    </Title>
                    <Field
                        label="Username:"
                        placeholder="Your password"
                        onChange={(text: string) => setNewUsername(text)} 
                    />
                    <Field 
                        label="Password:"
                        placeholder="Your password"
                        onChange={(text: string) => setNewPassword(text)} 
                        secure={true}
                    />
                    <Field 
                        label="Confirm Password:"
                        placeholder="Confirm your password"
                        onChange={(text: string) => setConfirmNewPassword(text)} 
                        secure={true}
                    />
                    <Link onPress={(event: GestureResponderEvent) => setType('login')}>
                        Login?
                    </Link>
                    <Button 
                        style={{
                            marginBottom: 30
                        }}
                        onPress={signup}
                    >
                        Signup
                    </Button>
                </Form>
            )}
        </Layout>
    );
}


export default Auth;
