function loginValidation(values){
    let error={}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern=/^(?=.*\d)(?=.*[A-Za-z])(?=.*[\W_]).{8,}$/

    if(!email_pattern.test(values.email)){
        error.email="Pattern not match"
    }else{
        error.email=""
    }

    if(!password_pattern.test(values.password)){
        error.password="Password must be alphanumeric with special character"
    }else{
        error.password=""
    }

    return error;
}

export default loginValidation;


