import React,{useState} from 'react'
import Input from './Input'
import './Header.css'
import './App.css'
import {Link, useNavigate} from 'react-router-dom'
import './Login.css'
import { signInWithGooglePopup, createUserDocFromAuth, createAuthUserWithEmailAndPassword, signInAuthWithEmailAndPassword } from './utils/firebase'
import { async } from '@firebase/util'
import HomePage from './routes/HomePage'
import Button from './Button'


    const Login = (props)=>{
        const [contact, setContact] = useState({
            first_name: '',
            last_name: '',
            email: ''
        })
        const {first_name, last_name}= contact;
        const navigate = useNavigate();

    


    const handleSubmit =async(event)=>
    {
        event.preventDefault();

        try{
            const response = await signInAuthWithEmailAndPassword(first_name,last_name);
            navigate('/HomePage')
        }
        catch(error){
            alert("Invalid Email or Password");
        }
    }



       
    
const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{  
        return {
        ...preValue,
        [name]: value
        }
        })
    }

const handleClick = async()=>{
    await fetch ('http://localhost:3005/', {
        method: 'post',
        headers: {'Content-Type' : 'application/json'},
        body : JSON.stringify({
            first_name: contact.first_name,
            last_name: contact.last_name,
            email: contact.email
        })
    })
    .then (response=> response.json())
    .then(data=> JSON.parse(data))
    .catch(err =>{
        console.log("Edward error" + err)
    })
}




    return <div className= 'header-div'>
        <h1> Login Page</h1>
        <br></br>
       <Input 
       name= 'first_name'
       type= 'text'
       placeholder ='First Name'
       onChange = {handleChange}
       value = {contact.first_name}
       />

       <br></br>

       <Input 
       name='last_name'
       type= 'text'
       placeholder ='Last Name'
       onChange = {handleChange}
       value = {contact.last_name}
       />
    <br></br>
    <Input 
       name='email'
       type= 'text'
       placeholder ='email'
       onChange = {handleChange}
       value = {contact.email}
       />


       <br></br>
       <br></br>

       <button onClick={handleSubmit}>
        Login   
        </button>

        <Button
            type = 'submit'
            text = 'LoginTEST'
            onClick = {handleClick}
        />


    <br></br>
    <br></br>

    <button onClick>
    <Link to='/signup'>
        Sign up instead
    </Link>
    </button>
    </div>

}
export default Login