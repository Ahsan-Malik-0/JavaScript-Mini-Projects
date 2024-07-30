verified = () => {
    var name = document.getElementById("name").value
    var pass = document.getElementById("pass").value
    
    if (name != "Ahsan"){
        document.getElementById("name").style.border = "1px solid red"
        document.getElementById("nerror").innerHTML = "Incorrect Username"

        document.getElementById("pass").style.border = "1px solid lightgray"
        document.getElementById("perror").innerHTML = ""
        
    }

    else if (pass != "12345"){
        document.getElementById("pass").style.border = "1px solid red"
        document.getElementById("perror").innerHTML = "Incorrect Password"

        document.getElementById("name").style.border = "1px solid lightgray"
        document.getElementById("nerror").innerHTML = ""
    }
    
    else{
        document.getElementById("name").style.border = "1px solid lightgray"
        document.getElementById("nerror").innerHTML = ""
        document.getElementById("pass").style.border = "1px solid lightgray"
        document.getElementById("perror").innerHTML = ""
        document.getElementById("submit").style.backgroundColor = "green"
        document.getElementById("submit").style.color = "white"
        document.getElementById("submit").style.border = "none"
        // window.alert("Successfully login")
    }
}

resett = () => {
    document.getElementById("submit").style.backgroundColor = "#f3f3f3"
    document.getElementById("submit").style.color = "black"
    document.getElementById("submit").style.border = "1px solid lightgray"
}
