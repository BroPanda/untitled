import {useState, useEffect} from "react"
import getToken from "./getToken";

const useForm = (submit, validateLogin) => {
    const [values, setValues] = useState({email: "", password: ""})
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        const {name, value} = e.target

        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        setErrors(validateLogin(values))
        setIsSubmitting(true)
    }

    useEffect(() => {

        if (Object.keys(errors).length === 0 && isSubmitting) {
            console.log(getToken(values));

            submit()
        }
    }, [errors])

    return {
        values,
        handleChange,
        handleSubmit,
        errors
    }
}

export default useForm