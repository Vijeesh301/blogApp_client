function Validation(formValues) {

    const errors = {};
    
    if (!formValues.username) {
        errors.username = "Username is required";
    }
    if (!formValues.password) {
        errors.password = "Password is required";
    }

    return errors;
}

export default Validation;