import {useState, useEffect} from "react"
import getToken from "../serviceFile/getToken";

const useForm = (submit, validateLogin, statusRed = false) => {
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
            statusRed ? getToken(values, 'constr_project') : getToken(values)
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