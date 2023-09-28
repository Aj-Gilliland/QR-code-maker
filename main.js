
function genCode() {
  let URL = document.getElementById("url").value;
  //console.log(`This should be extracting from the text bar ${URL}`);

  //api settings (!!!all are manditory to set!!!)
var data = URL; //site for qr code
var size = '200x200'; // size
var charsetSource = 'UTF-8'; 
var charsetTarget = 'UTF-8'; 
var ecc = 'L'; 
var color = '0-0-0'; //color of data modules
var bgColor = '255-255-255'; //background color
var margin = '1'; //margin thickness
var qzone = '4'; //quiet zone thickness
var format = 'png'; //format

let apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${URL}&size=${size}&charset-source=${charsetSource}&charset-target=${charsetTarget}&ecc=${ecc}&color=${color}&bgcolor=${bgColor}&margin=${margin}&qzone=${qzone}&format=${format}`;
console.log(apiUrl)

fetch(apiUrl)
    // .then(response => {
    //   if (!response.ok) {
    //     throw new Error('QR code generation failed');
    //   }
    //   console.log(`this the the response.url ${response.url}`)
    // })
    .then(response => {
      console.log(response)
      var finalUrl = response.url
      console.log(finalUrl)
      let aTag = document.querySelector("a");
      aTag.setAttribute("href", finalUrl)
      aTag.setAttribute("style", "")
    

    })
    .catch(error => {
      console.error('There was a problem generating the QR code:', error);
    });
}





window.addEventListener("DOMContentLoaded", (event) => {
  let submitButton = document.querySelector("button.urlInput");
  submitButton.addEventListener("click", genCode);
})


