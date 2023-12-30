import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { createUser, getUsers } from "../Redux/Thunks/UserThunks";
import * as yup from "yup";
import { Form, Formik } from "formik";
import { userFormModel } from "../Model/UserModel";
import { useNavigate } from "react-router-dom";

const createSchema = yup.object({
  name: yup.string().required("Name is required"),
  mobileNumber: yup.string().required("Mobile Number is required"),
  email: yup
    .string()
    .email("Invalid email")
    .trim()
    .required("Email is required"),
  password: yup.number().required("password is required"),
  userRoleId: yup.number().required("userRole is required"),
});

const UserForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  let initialCreateValues: userFormModel = {
    name: user.name || "",
    email: user.email || "",
    mobileNumber: user.mobileNumber || "",
    password: user.password || "",
    userRoleId: Number(user.userRoleId) || "",
  };
  return (
    <section>
      <div className="container">
        <h1 className="user-list">CreateUser</h1>
        <Formik
          initialValues={initialCreateValues}
          validationSchema={createSchema}
          onSubmit={async (values) => {
            let res = await dispatch(createUser(values));
            console.log("hhh",res.payload);
            if (res.payload.userId) {
              navigate("/");
            }
          }}
          enableReinitialize
        >
          {({ handleChange, handleBlur, touched, values, errors }) => {
            return (
              <Form className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">UserName</label>
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    value={values.name}
                    placeholder="Enter your name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">UserRole</label>
                  <select
                    id="inputState"
                    value={values.userRoleId}
                    className="form-select"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="userRoleId"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </select>
                  {errors.userRoleId && touched.userRoleId && <span>{errors.userRoleId}</span>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    value={values.email}
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email  && <span>{errors.email}</span>}
                </div>
                <div className="col-md-6">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className="col-12">
                  <label className="form-label">MobileNumber</label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobileNumber"
                    name="mobileNumber"
                    placeholder="Enter your mobile number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.mobileNumber && touched.mobileNumber && <span>{errors.mobileNumber}</span>}
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </section>
  );
};

export default UserForm;
