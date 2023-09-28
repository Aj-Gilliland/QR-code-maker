
function genCode() {
    let URL = document.getElementById("url").value;
    console.log(URL);
  
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
  
  let apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(data)}&size=${size}&charset-source=${charsetSource}&charset-target=${charsetTarget}&ecc=${ecc}&color=${color}&bgcolor=${bgColor}&margin=${margin}&qzone=${qzone}&format=${format}`;
    
  fetch(apiUrl)
  if (!response.ok) {
    throw new Error('QR code generation failed');}
    
  console.log(`${response.url} this should be the qr code source link`)//logs qr code src
  NewUrl = response.url
      
  //created an <img> to display the QR code
        let qrCodeImage = document.createElement('img');
        qrCodeImage.src = NewUrl
  
  //getting the element with the ID "qrButton" to display the QR code
        var qrButton = document.getElementById("qrButton");
        qrButton.innerHTML = ''; //clears existing content
        qrButton.appendChild(qrCodeImage); 
  }
   
  
    let something = document.querySelector("button.urlInput");
    something.addEventListener("click", genCode);
  