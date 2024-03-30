const passwordbox = document.getElementById("password");
let btn = document.querySelector("button");
let cpy = document.getElementById("copy");
const len = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@#$%^&*_";
const allchars = uppercase + lowercase + number + symbols;

btn.addEventListener("click",createpassword);
cpy.addEventListener("click",copypassword);
function createpassword()
{
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    while(len > password.length)
    {
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }
    passwordbox.value = password;
}

function copypassword()
{
    passwordbox.select();
    document.execCommand("copy");
}
