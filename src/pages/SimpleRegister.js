import React from 'react'
import '../App.css';

function SimpleRegister() {
    return (
        <div className="container">
            <h1>Simple Form</h1>
            
            <form className="formStyle">
                <label  htmlFor="name">Name</label>
                <input type="text" id="name" name="name"></input>
                
                <label  htmlFor="email">Email</label>
                <input type="text" id="email" name="email"></input>

                <label htmlFor="userName">User name</label>
                <input type="text" id="userName" name="userName"></input>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default SimpleRegister

