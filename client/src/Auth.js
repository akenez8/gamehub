import React, {useState} from 'react';

function Auth({setCurrentUser}) {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState('')
    const [errors, setErrors] = useState([])

    function onSubmit(e) {
        e.preventDefault()
        const user = {
            name,
            password
        }
        fetch(`/users`, {
            method: "POST", 
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => {
            if (res.ok) {
                res.json().then(setCurrentUser)
            } else {
                res.json().then(e => setErrors(Object.entries(e.error).flat()))
            }
        })
    }

    return (
        <div> Authorization </div>
    )
}

export default Auth;