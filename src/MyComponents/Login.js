import React from 'react';
import {TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import * as yup from 'yup';
import {useFormik } from 'formik';

const validationSchema =yup.object({
    email: yup.string().required("Email is required").email("Enter a Valid Email"),
    password: yup.string().required(),
});
export const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: validationSchema
    });
    return (
        <div className="container">
        <div className="m-5 row">
            <form onSubmit ={formik.handleSubmit}>
                <TextField
                className="col-md-4"
                label="Enter Email"
                name="email"
                id="email"
                margin="normal"
                value ={formik.values.email}
                onChange ={formik.handleChange}
                error ={formik.touched.email && Boolean(formik.errors.email)}
                helperText ={formik.touched.email && formik.errors.email}
                />
                <br />
                <TextField
                className="col-md-4"
                type="password"
                label="Enter Password"
                name="password"
                id="password"
                margin="normal"
                value={formik.values.password}
                onChange={formik.handleChange}
                error ={formik.touched.password && Boolean(formik.errors.password)}
                helperText ={formik.touched.password && formik.errors.password}
                />
                <br />
                <Button type="submit" variant="outlined" className="my-2">LOGIN</Button>
            </form>
        </div>
        </div>
    )
}
