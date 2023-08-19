const charList = ["a","A","b","B","c","C","d","D","e","E","f","F","g","G",
"h","H","i","I","j","J","k","K","l","L","m","M","n","N","o","O","p","P","q","Q","r",
"R","s","S","t","T","u","U","v","V","w","W","x","X","y","Y","z","Z","~","`",
"!","1","2","@","3","#","4","$","5","%","6","^","7","&","8","*","9","(","0",
")","-","_","=","+","[","{","]","}","\\","|",";",":","'","\"",",","<",".",">","/","?"]

function generatePassword(){
    //This will be where I use the button to generate a password to call the create password function.
    //plcaeholder variable "password" is there currently while I make the js before the html/css
}
let password = createPassword();
function createPassword(){
    let passwordSpot = document.getElementById("password")
    let passString = ""
for (let i = 0; i < 12; i++){
    passString+= charList[Math.floor(Math.random() * 92)]
}
passwordSpot.textContent = passString
return passString
}


function changeScreenSize() {        
    window.resizeTo(300,500)   
}

changeScreenSize()