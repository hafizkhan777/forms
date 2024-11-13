function run(){
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value

    if( email==""|| password==""){
        alert("please fillout all  values")
    }
    else{
       console.log(email)
       console.log(password)
    
       email=document.getElementById("email").value=""
        password=document.getElementById("password").value=""
    }
}