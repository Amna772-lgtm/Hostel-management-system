
function signValidation(values){

    let error={}
    const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern=/^(?=.*\d)(?=.*[A-Za-z])(?=.*[\W_]).{8,}$/
    const phone_pattern = /^\d{10}$/
    
    if(values.name === ""){
        error.name="Name should not empty";
    }else{
        error.name=""
    }

    if (values.email === "") {
        error.email = "Email should not be empty";
    }else if(!email_pattern.test(values.email)){
        error.email="Pattern not match"
    }else{
        error.email=""
    }

    if (values.phone === "") {
    error.phone = "Phone number should not be empty";
    } else if (!phone_pattern.test(values.phone)) {
        error.phone = "Phone number should contain exactly 10 digits";
    } else {
        error.phone = "";
    }


    if (values.password === "") {
        error.password = "Password should not be empty";
    }else if(!password_pattern.test(values.password)){
        error.password="Password must be alphanumeric with special character"
    }else{
        error.password=""
    }

    if (values.confirmpassword === "") {
        error.confirmpassword = "Confirm password should not be empty";
    }else if (values.confirmpassword !== values.password && values.confirmpassword !== "") {
        error.confirmpassword = "Passwords do not match";
    } else {
        error.confirmpassword = "";
    }

    return error;
}

export default signValidation;