import { useFormik } from 'formik';
import React from 'react'
import '../App.css';

function SimpleRegister() {
    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            userName:""
        }
    });
    // console.log('formik :>> ', formik);
    return (
        <div className="container">
            <h1>Simple Form</h1>
            
            <form className="formStyle">
                <label  htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}></input>
                
                <label  htmlFor="email">Email</label>
                <input type="text" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}></input>

                <label htmlFor="userName">User name</label>
                <input type="text" id="userName" name="userName" onChange={formik.handleChange} value={formik.values.userName}></input>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default SimpleRegister

