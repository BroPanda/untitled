import React, {useState} from "react"
import useForm from "./useForm";
import validateLogin from "./validateLogin";
import {Redirect} from "react-router-dom"


const LoginPage = () => {
    const {values, handleChange, handleSubmit, errors} = useForm(submit, validateLogin, true)
    const [sub, setSub] = useState(false)

    function submit() {
        console.log('submited succesfully')
        setSub(true)
    }

    if (sub) {
        // return <Redirect to={'/constr_project'}/>
    }

    return (
        <form onSubmit={handleSubmit} noValidate>
            <div>
                <label>email</label>
                <input type="email" name="email" value={values.email} onChange={handleChange}/>
                {errors.email && <p>{errors.email}</p>}
            </div>

            <div>
                <label>password</label>
                <input type="password" name="password" value={values.password} onChange={handleChange}/>
                {errors.password && <p>{errors.password}</p>}
            </div>

            <button type="submit">submit</button>
        </form>
    )
}

export default LoginPage