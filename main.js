function Submit(){
    let email = document.getElementById("email").value;
    let password = +document.getElementById("password").value;
    if (email === "jumaboyevkamronbek05@gmail.com") {
        if(password === 123){
            alert("SUCCESS")
        }else{
            alert("password xato")
        }
    } else {
        alert("Email yoki Password xato. Iltimos, ma'lumotlarni tekshirib qayta kiriting.");
    }
} 


const isHide = () => {
    let password = document.getElementById("password");
    if (password.type === "password") {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
}



