# Send Whatsapp message without saving the phone number

This website can send messages to the user of WhatsApp without saving the number of the person. This website is useful when we need to send a message to the person on WhatsApp and we don't want to save the number of the person than this is useful.
## Installation

You do not have to install anything to use this project this is simple a web page. You can directly use the website click on the link and fill the form to send the message.

## Usage

Click on the below link to use the project [SendWhatappMessage](https://bablubambal.github.io/SendWhatsappWithoutSavingNumber/)

```
Tools used:
Html
CSS
Tailwind CSS
JavaScript

```

## How it Works
It uses a simple WhatsApp api to send the message to other
```
Link: https://api.whatsapp.com/send/?phone=phonenumber&text=yourmessage

or other link

link: http:/wa.me/{phonenumber}


```
We have made use of a simple function which loads the URL
```
encodeURI() // for encoding your text message in url format
window.location.href = "" // to go to the link
```
## Main function of this project
```
 function sendWhatsapp(){

                console.log("In the Function")
                phoneNumber = document.getElementById('phone').value;
                //String()
                console.log(phoneNumber,typeof(phoneNumber))
                message = document.getElementById('message').value;
                
                 message = encodeURI(message)
                 console.log(message)

                 url = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}`
                 window.location.href = url




            }
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
