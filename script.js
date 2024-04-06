let image = document.getElementById("image");
let contact = document.getElementById("contact");
let btnCreate = document.getElementById("btnCreate");
btnCreate.onclick=()=>{
    if(contact.value == "") return;
    // Generate the QR Code with the message entered by user 
    let linkQR = "https://api.qrserver.com/v1/create-qr-code/";
    image.src= linkQR + '?size=400x400&data=' + contact.value;}
