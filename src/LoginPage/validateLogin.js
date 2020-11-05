export default function validateLogin(values) {
    console.log('use validate');
    let errors = {}

    if (!values.email) {
        errors.email = "email address is required"
    }
    // else if (!/\S+@\S+\.\S+/.test(values.email)) {
    //     errors.email = "email address is invalid"
    // }
    if (!values.password) {
    }
    // else if (values.password.length < 10) {
    //     errors.password = 'password needs more then 10 char'
    // }

    return errors;
}