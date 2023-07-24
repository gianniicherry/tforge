import React, {useState} from 'react'
import {PageContainer, FormContainer,Label, Input, SubmitButton} from "../styles/Auth.styles"



function Auth({onLogin}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [isSigningUp, setIsSigningUp] = useState(false)
    

    function onSubmit(e){
        e.preventDefault()
        const user = {
            email,
            password
        }
        const endpoint = isSigningUp ? "/users" : "/login";
        fetch(endpoint,{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then((user) => {
                    onLogin(user)
                    setEmail('')
                    setPassword('')
                    window.location.href = '/'; 
                })
            } else {
                res.json().then(e => setErrors(e.errors))
                console.log(errors)
            }
        })
    }


    return (
    <div>
    <PageContainer>
        <FormContainer onSubmit={onSubmit}>
            <Label>
                Email
                <br/>
                <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </Label>
            <Label>
                Password
                <br/>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </Label>
            <SubmitButton type="submit" value="Sign Up" onClick={() => setIsSigningUp(true)}/>
            <SubmitButton type="submit" value="Login" onClick={() => setIsSigningUp(false)} />
        </FormContainer>
    </PageContainer>
    </div>
    )
}

export default Auth