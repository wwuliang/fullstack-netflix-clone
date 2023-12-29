import axios from 'axios';
import { useCallback, useState } from 'react';
import { NextPageContext } from 'next';
import { getSession, signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import Input from '@/components/Input';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('login'); 
    
    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
    }, []);

    const login = useCallback(async () => {
        try {
            await signIn('credentials', {
                email,
                password,
                callbackUrl: '/profiles'
            });
        } catch (error) {
            console.log(error);
        }
    }, [email, password]);

    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email,
                name,
                password
            });

            login();
        } catch (error) {
            console.log(error);
        }
    }, [email, name, password, login]);

    return (
        // Background Image
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            {/* Overlay Background with 50% Opacitiy */}
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                {/* Small Netflix Logo */}
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="logo" className="h-12"/>
                </nav>
                {/* Sign-In Section Background */}
                <div className="flex justify-center">
                    <div className="bg-black bg-opacitiy-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant === 'login' ? 'Sign In' : 'Register'}
                        </h2>
                        {/* Sign-In Input Section */}
                        <div className="flex flex-col gap-4">
                            {variant === 'register' && (
                                <Input 
                                    id="name"
                                    type="text"
                                    label="Username"
                                    value={name}
                                    onChange={(ev: any) => setName(ev.target.value)} 
                                />
                            )}
                            <Input 
                                id="email"
                                type="email"
                                label="Email address or phone number"
                                value={email}
                                onChange={(ev: any) => setEmail(ev.target.value)} 
                            />
                            <Input 
                                type="password" 
                                id="password" 
                                label="Password" 
                                value={password}
                                onChange={(ev: any) => setPassword(ev.target.value)} 
                            />
                        </div>
                        {/* Login / Register Button */}
                        <button onClick={variant === 'login' ? login : register} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                            {variant === 'login' ? 'Login' : 'Register'}
                        </button>
                        {/* OAuth Buttons */}
                        <div className="flex flex-row items-center gap-4 mt-8 justify-center">
                            {/* Google OAuth */}
                            <div onClick={() => signIn('google', { callbackUrl: '/profiles' })} className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                                <FcGoogle size={30}/>
                            </div>
                            {/* Github OAuth */}
                            <div onClick={() => signIn('github', { callbackUrl: '/profiles' })} className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                                <FaGithub size={30}/>
                            </div>
                        </div>
                        <p className="text-neutral-500 mt-12">
                            {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
                            <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                                {variant === 'login' ? 'Create an account' : 'Login'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;