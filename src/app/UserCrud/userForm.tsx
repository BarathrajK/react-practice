import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../Redux/store'
import { createUser, getUsers } from '../Redux/Thunks/UserThunks';
import * as yup from "yup";
import { Form, Formik } from "formik";
import { userFormModel } from '../Model/UserModel';
import { useNavigate } from 'react-router-dom';

const createSchema = yup.object({
    name: yup.string().required("Name is required"),
    mobileNumber: yup.string().required("Mobile Number is required"),
    email: yup.string().email("Invalid email").trim().required("Email is required"),
    password: yup.number().required("password is required")
})

const UserForm = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { user } = useAppSelector((state) => state.getUsers)
    useEffect(() => {
        dispatch(getUsers());
    }, [])


    let initialCreateValues: userFormModel = {
        name: user.name || "",
        email: user.email || "",
        mobileNumber: user.mobileNumber || "",
        password: user.password || "",
    };
    return (
        <section>
            <div className='container'>
                <Formik 
                
                    initialValues = {initialCreateValues}
                    validationSchema={createSchema}

                    onSubmit={async (values) =>{
                        let res = await dispatch(createUser(values));
                        if(res.payload.userId){
                            navigate("/");
                        }

                    }}
                    enableReinitialize>
                    
                </Formik>

            </div>
        </section>
    )
}

export default UserForm
