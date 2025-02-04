function displayform(type) 
{
    //accessing to document element -> form container 
    let login = document.getElementById('login_form');
    let register = document.getElementById('register_form');

    //initially making both form display none 
    login.classList.add('d-none');
    register.classList.add("d-none");

    //displaying one form at a time 
    if(type==='login') {
        login.classList.remove("d-none");
    }
    else if(type==='register') {
        register.classList.remove("d-none");
    }
}

function register()
{
    //accessing form fields values
    const full_name = document.getElementById('fullname').value;
    const email = document.getElementById('reg_email').value;
    const pass = document.getElementById('reg_password').value;

    //validation
    /*If any input fields not contain data during click on register button will return null.
    Null is falsy, meaning it acts like false in conditions.*/ 
    if((!full_name) || (!email) || (!pass)) {
        alert("Please, fill all the fields");
        return; //no need to do futher execution 
    }

    //storing data to the local storage 
    const user = { full_name, email, pass };
    //making json object [here full_name,email,pass are keys, values will be assigned by the user input]

    localStorage.setItem(email, JSON.stringify(user)); 
    /*local storage store data as key value pair. Where both must provide string that is why making making json object to string using built in method json.stringify.
    Note : Local storage key is distinct. So, same email data cannot be inserted twice or more time.*/
    
    alert("Registration successfull!! You can now login")

    //making input fields data empty after successfull registration
    document.getElementById('fullname').value='';
    document.getElementById('reg_email').value='';
    document.getElementById('reg_password').value='';
    
    
    //redirecting to login form after successfull registration.
    displayform('login');

}


function login()
{
    //accessing form fields values
    const email = document.getElementById('login_email').value;
    const pass = document.getElementById('login_pass').value;

    //validation 
    if(!email) {
        alert("Please, enter your email.");
        return; //no need to do futher execution
    }
    if(!pass) {
        alert("Please, enter your password.");
        return;
    }

    //getting the user by key email address 
    const user = localStorage.getItem(email);

    //checking user is exists or not. 
    if (!user) { 
        alert("No such user exists.")
        return;
    }

    //converting string object to json object 
    const perseUser = JSON.parse(user);
    
    //checking password is matched or not 
    if (pass != perseUser.pass) {
        alert("Incorrect password.")
        return;
    }

    alert("Login Successfull!! Welcome " + perseUser.full_name)

    //making input fields data empty after successfull login
    document.getElementById('login_email').value = '';
    document.getElementById('login_pass').value = '';
    

}