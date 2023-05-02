import { useState } from "react";
import {Link} from "react-router-dom";
import axios from 'axios';

export default function RegisterPage(){

// use state concept
const [name, setName] = useState("");
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

async function registerUser(ev){
    try{
        ev.preventDefault();
        await axios.post('/user/register',{name,email,password});
        alert('Registration Successfull, Now you can log in');
    }catch(err){
        alert("Registration failed.PLease try again later");
    }
}

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
            <h1 className="text-4xl text-center mb-4">Register</h1>
            <form className="max-w-md mx-auto" onSubmit={registerUser}>
                <input  type="text" 
                        placeholder='Name'
                        value={name} 
                        onChange={ev => setName(ev.target.value)}/>
                
                <input  type="email" 
                        placeholder="your@emailcom" 
                        value={email} 
                        onChange={ev => setEmail(ev.target.value)}/>

                <input  type="password" 
                        placeholder="password" 
                        value={password} 
                        onChange={ev => setPassword(ev.target.value)}/>

                <button className="primary">Register</button>
                <div className="py-2 text-center text-gray-500">
                    Already member? <Link className='underline text-black' to={'/register'}>Login</Link>
                </div>
            </form>
            </div>
           
        </div>
    );
}