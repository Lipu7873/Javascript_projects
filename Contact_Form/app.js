function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "swainlipun1@gmail.com",
        Password : "9178931684",
        To : 'swainlipun1@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}