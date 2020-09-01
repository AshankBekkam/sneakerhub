import React from 'react'

class SignIn extends React.Component{
    constructor()
    {
        super();
        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit = event =>{
        event.preventDefault()
        this.setState({email:'',password:''})
    }

    handleChange = event =>{
        const {name,value} = event.target
        this.setState({[name]:value})


    }

    render(){
        return (
            <div>
                <h2>I already Have an account</h2>
                <span>Sign in with email and password</span>
                <form>
                    <input id = 'email' onChange = {this.handleChange} type = 'text' required/>
                    <label for = 'email'>E-mail ID</label>
                    <input type = 'password' id = 'password' required/>
                    <label for = 'password' onChange = {this.handleChange} >Password</label>
                    <input type = 'submit' onSubmit = {this.handleSubmit}></input>
                </form>
            </div>
        )
    }
}
export default SignIn