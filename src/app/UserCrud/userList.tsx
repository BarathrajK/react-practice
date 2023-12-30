import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../Redux/store';
import { getUsers } from '../Redux/Thunks/UserThunks';

const UserList = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    //const { users, loading, error } = useAppSelector(state => state.getEmployee);
    //console.log(users);
    
    useEffect(() => {
        dispatch(getUsers());
      }, [])

      const create = () => {
        navigate('/createUser');
    return (
        <div>

        </div>
    )
}

export default UserList
