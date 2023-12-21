class Landing{
    //property
    database={
        "manu":{username:"manu",password:"12"},
        "maanu":{username:"maanu",password:"112"},
        "monu":{username:"monu",password:"113"},
        "manshu":{username:"manshu",password:"114"}



    }
    //methods

    // to store data
    saveData(){
        if(this.database)
        {
            localStorage.setItem(`database`,JSON.stringify(this.database))
        }
    }

    //gatdata
    getdata(){
        this.database=JSON.parse(localStorage.getItem(`database`))
        console.log(this.database);
    }


    //register
    register(){
        let user = reguser.value
        console.log(user);
        let pswd = regpass.value
        console.log(pswd);
        this.getdata()
        if(user==""|| pswd==""){
            alert("please enter a valid input")
        }
        else{
            if(user in this.database){
                alert("user already exist")
            }
            else{
                this.database[user]={username:user,password:pswd}
                console.log(this.database);
                this.saveData()
                alert("registration successfull")
                //navigate1
                window.location="login.html"

            }
        }
    }
}

function login() {
    // Get the entered username and password from the HTML elements
    let user1 = document.getElementById("loguser").value;
    let pswd1 = document.getElementById("logpswd").value;

    // Assuming getdata() is a function that retrieves user data and populates this.database
    this.getdata();

    // Check if the entered username exists in this.database
    if (user1 in this.database) {
        // Check if the entered password matches the stored password
        if (this.database[user1].password === pswd1) {
            alert("Login successful");
            
            // Store the username in local storage
            localStorage.setItem("user", user1);

            // Navigate to the home.html page
            window.location.href = "home.html";
        } else {
            alert("Invalid username or password");
        }
    } else {
        alert("User does not exist");
    }
}





const obj = new Landing()