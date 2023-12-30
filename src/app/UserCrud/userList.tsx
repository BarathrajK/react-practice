import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Redux/store";
import { getUsers } from "../Redux/Thunks/UserThunks";
import "./user.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function UserList(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { users, loading, error } = useAppSelector((state) => state.users);
  console.log("hhhh", users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const create = () => {
    navigate("/createUser");
  };
  return (
    <div className="container">
      <div className="user-list">
        <h1 className="user-list">UserList</h1>
        <div className="createbtn">
          <button type="button" className="btn btn-primary" onClick={create}>
            Add User
          </button>
        </div>
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>MobileNumber</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((user) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobileNumber}</td>
                <td>
                  <div className="icons">
                    <FontAwesomeIcon icon={faPen} />
                    <FontAwesomeIcon icon={faTrash} />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
