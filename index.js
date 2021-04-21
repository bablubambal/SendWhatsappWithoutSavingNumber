//console.log("index script")
function sendWhatsapp(){

    console.log("In the Function")
    phoneNumber = document.getElementById('phone').value;
    //String(919182247569)
    console.log(phoneNumber,typeof(phoneNumber))
    message = document.getElementById('message').value;
    
     message = encodeURI(message)
     console.log(message)

     url = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}`
     window.location.href = url




}
