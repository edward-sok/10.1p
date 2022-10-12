
import React, {useState} from 'react';
import Header from '../Header'
import CardList from '../CardList';
import {Outlet, Link, useNavigate} from "react-router-dom"
import '../HomePage.css'
import Button from '../Button';
import Input from '../Input'


const HomePage = (props)=>{
  const [contact, setContact] = useState({
      email: ''
  })
  const {email}= contact;
  const navigate = useNavigate();

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
          email: contact.email
      })
  })
  .then (response=> response.json())
  .then(data=> JSON.parse(data))
  .catch(err =>{
      console.log("Edward error" + err)
  })}



return <div>
<table>
<tr>
    <td className="Dev">
        DEV@Deakin
    </td>
    <td className="Search"> 

<div className="search">
<input type="text123"
name="search"
  label="Search"
/>
</div>
    </td>
    <td>
    <Link className='Post' to='/'>
Post
</Link>

    </td>
    <td>
    <Link className='link' to='Login'>
Login
</Link>
    </td>
</tr>

</table>


<br></br>
<br></br>
<table className='signupbar'>
    <tr>
        <td className="signupdaily">
            SIGN UP FOR OUR DAILY INSIDER
        </td>
        <td className="Searchsu"> 

  <div className="email">
  <Input 
       name='email'
       type= 'text'
       placeholder ='email'
       onChange = {handleChange}
       value = {contact.email}
       />
  </div>
        </td>
        <td>
        <Button
        type = 'submit'
        text = 'Subscribe'
        onClick = {handleClick}
    />

        </td>
    </tr>

   </table>
<br></br>
   <table>
    <tr>
      <td>
        <h2 className='devde'>Explore</h2>
      </td>
    <td className='devde'><h2>Support</h2></td>
      <td><h2>Stay Connected</h2></td>
    </tr>
    <tr>
      <td className='devde'> Home</td>
      <td className='devde'>FAQS</td>
      <td>      <img className="fb" src="https://www.carloalberto.org/wp-content/uploads/2021/03/facebook-logo-1.png"></img>
      <img className="twitter" src="https://www.carloalberto.org/wp-content/uploads/2021/03/twitter-icon.png"></img>
      <img className="insta" src="https://www.carloalberto.org/wp-content/uploads/2021/03/instagram-logo.png"></img>
      </td>
      </tr>
      <tr>
        <td className='devde'>Questions</td>
        <td className='devde'>Help</td>
        </tr>
      <tr>
        <td className='devde'>Articles</td>
        <td className='devde'>Contact Us</td>
        </tr>
      <tr>
        <td className='devde'> Tutorials</td>
      </tr>
      <br></br>
      <br></br>
      <tr>
        <td></td>
        <td className='dev2'><h2>DEV@Deakin 2022</h2></td>
        <td></td>
      </tr>
      <tr>
        <td className='dev3'> Privacy Policy</td>
        <td className='dev2'> Terms</td>
        <td className='dev4'> Code of Conduct</td>
      </tr>
      <br></br>
   </table>

</div>

  
}
export default HomePage