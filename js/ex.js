 let userTexts = document.getElementsByClassName("user-text");
 let userPics = document.getElementsByClassName("user-pic");

 function showReview(){
  for(userPic of userPics){
    userPic.classList.remove("avtive-pic");
  }
  for(userText of userTexts){
    userText.classList.remove("active-text");
  }
  let i = Array.from(userPics).indexOf(event.target);

  userPics[i].classList.add("avtive-pic");
  userTexts[i].classList.add("active-text")
 }

 
 /* page refresh section start */

 function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
  }
  
  function fadeOut(){
      setInterval(loader, 3000);
  }

  window.onload = fadeOut();

  /* page refresh section end */

 
 
 
 
 
 
 
 
 /*function sendEmail(){
        Email.send({
    Host : "smtp.yourisp.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
      }*/
