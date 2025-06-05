function sendMail(){
  let params = {name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };


const serviceID = "service_qzkg2sd"
const templateID = "template_j4d4038"

emailjs.send(serviceID, templateID, params)
.then(
  res => {document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          
  })
  .catch((err) => console.log(err));}