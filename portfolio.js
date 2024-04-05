function sendMail(){
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value
    }

const serviceId="service_zkvevp4";
const templateId="template_h02o3v9"


emailjs.send(serviceId,templateId,params)
.then(
    res =>{
        document.getElementById("name").value ="";
        document.getElementById("email").value ="";
        document.getElementById("message").value ="";
        console.log(res);
        alert("your message sent successfully")
    }
)
.catch((err) => console.log(err));
}