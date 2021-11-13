import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {useFormik} from 'formik';
import * as yup from 'yup';
const validationSchema = yup.object({
    firstName: yup.string().required("First Name is rquired").matches(/^[A-Za-z ]*$/, 'Please enter valid First name'),
    lastName: yup.string().required("Last Name is required").matches(/^[A-Za-z ]*$/, 'Please enter valid Last name'),
    email: yup.string().email("Enter a Valid Email").required("Email is required"),
    password:yup.string().required("Password is required").min(8,"Password Must be 8 Digit Long"),
    confirmePassword:yup.string().required("Confirm Password is required").min(8,"Password Must be 8 Digit Long")
    .oneOf([yup.ref('password'), null], "Password Must Match")
    
})
export const Signup = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmePassword: ""
        },
        validationSchema: validationSchema
    });
    return (
        <div className='m-5'>
        <div className="row">
            <form onSubmit={formik.handleSubmit}>
            <TextField
                id="firstName"
                name="firstName"
                label="Enter First Name"
                className="col-md-4"
                margin="normal"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
                id="lastName"
                name="lastName"
                label="Enter Last Name"
                className="mx-md-4 col-md-4"
                margin="normal"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <TextField
                id="email"
                name="email"
                label="Enter Email"
                className="col-md-8"
                margin="normal"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />
            <br />
            <TextField
                id="password"
                type="password"
                name="password"
                label="Enter Password"
                className="col-md-4"
                margin="normal"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
                id="confirmePassword"
                type="password"
                name="confirmePassword"
                label="Enter Password Again"
                className="mx-md-4 col-md-4"
                margin="normal"
                value ={formik.values.confirmePassword}
                onChange={formik.handleChange}
                error={formik.touched.confirmePassword && Boolean(formik.errors.confirmePassword)}
                helperText={formik.touched.confirmePassword && formik.errors.confirmePassword}
                
            />
            <br />
            <Button type="submit" variant="outlined" className="my-2">SIGNUP</Button>
            </form>
        </div>
        </div>
    )
}
