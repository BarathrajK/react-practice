import React from 'react'

interface props {
    count: number;
}

const Login = (a:props) => {
    return (
        <div>
            {a.count}
        </div>
    )
}

export default Login;
