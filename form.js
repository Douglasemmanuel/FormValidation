// const showModal = (openButton, modalContent) =>{
//   const openBtn = document.getElementById(openButton),
//   modalContainer = document.getElementById(modalContent)
  
//   if(openBtn && modalContainer){
//       openBtn.addEventListener('click', ()=>{
//           modalContainer.classList.add('show-modal')
//       })
//   }
// }
// showModal('open-modal','modal-container')

// /*=============== CLOSE MODAL ===============*/
// const closeBtn = document.querySelectorAll('.close-modal')

// function closeModal(){
//   const modalContainer = document.getElementById('modal-container')
//   modalContainer.classList.remove('show-modal')
// }
// closeBtn.forEach(c => c.addEventListener('click', closeModal))


// // const form = document.getElementById("form");
// // const FirstNameError = document.getElementById("firstname-error");
// // const LastNameError = document.getElementById("lastname-error");
// // const EmailError = document.getElementById("email-error");
// // const PasswordError = document.getElementById("password-error");
// // var buttonError = document.getElementById("button-error");
// var error = [];
// var sucess = "";
// // var error = document.getElementById("icon")
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     // alert("form is submitted")
//     // checkinputs();
//     var FirstName = document.getElementById("firstname-error");
//   var  LastName = document.getElementById("lastname-error");
//   var  Email = document.getElementById("email-error");
//   var  Password = document.getElementById("password-error");
//    if (FirstName.value == ""){
//     error.push("pleasse enter the firstname")
//    }
//   if (LastName.value == ""){
//         error.push("pleasse enter the lastname")
//     // alert("please enter all details")
//     }
//    if (Email.value == ""){
//      error.push("pleasse enter the email")
//     }
//     if (Password.value == ""){
//      error.push("pleasse enter the password")
//     }
//     sucess = "form is submitted"
//     var message = document.getElementById("message")
//     message.innerText = error
 
// })
// 
// const form = document.getElementById("form");
// // const firstname = document.getElementById("firstname-error");
// // const lastname = document.getElementById("lastname-error");
// // const email = document.getElementById("email-error");
// // const password = document.getElementById("password-error");
// // const btn = document.getElementById("open-modal");
// // const einput = document.querySelector("input");
// // const icon = document.getElementById("icon");
// // const errormessage = document.querySelector(".errormessage");
// const field = document.querySelector(".input-box")
// field.addEventListener('keyup',()=>{
//     // console.log("hello");
//     // icon.style.display = "block"
//     //     errormessage.style.display = "block"

//     if(firstname.value ===""){
//         icon.style.display = "block"
//         errormessage.style.display = "block"
//     }else {
//         icon.style.display = "none"
//         errormessage.style.display = "none"
//         console.log("vooc");
//     }
//     if(email.value ===""){
//         icon.style.display = "block"
//         errormessage.style.display = "block"
//     }else {
//         icon.style.display = "none"
//         errormessage.style.display = "none"
//         console.log("voocvvv");
//     }


// });
// function myfun(){
//     const firstname = document.getElementById("firstname-error");
//     const lastname = document.getElementById("lastname-error");
//     const email = document.getElementById("email-error");
//     const password = document.getElementById("password-error");
//     const errormessage = document.querySelector(".errormessage");
//     const icon = document.getElementById("icon");

// }

// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     checkinputs();
// });
// const  checkinputs = ()=>{
//     const firstnamevalue = firstname.value.trim();
//     const lastnamevalue = lastname.value.trim();
//     const emailvalue =email.value.trim();
//     const passwordvalue = password.value.trim();
//     if(firstnamevalue ===''){
//        setErrorfor(firstname,'Firstname cannot be blank');
//     }else{
//         setSucessfor(firstname);
//     }

// };
// function setErrorfor(input,message){
//     const inputbox = input.parentElement;
//     const small = inputbox.queryselector('#input-box')
//     small.innertext = message;
//     inputbox.classlist.add('error')
//     inputbox.classlist.remove('sucess')
// }
// const setSucessfor = Element=>{
//     const inputbox = Element.parentElement;
//     const small = inputbox.queryselector('#input-box')
//     small.innertext = '';
//     inputbox.classlist.add('error')
//     inputbox.classlist.add('sucess')
// }

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form input');
form.addEventListener('submit',(e)=>{
    // console.log("cos")
    e.preventDefault();
    inputs.forEach((input)=>{
        if(!input.value){
           input.parentElement.classList.add('error');
        }else{
            input.parentElement.classList.remove('error'); 
            if(input.type =='email'){
                if (validateEmail(input.value)){
                    input.parentElement.classList.remove('error'); 
                }else{
                    input.parentElement.classList.add('error'); 
                }
            }
        }
        
    });
});

function validateEmail(email) {
        var re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return re.test(string(email).toLowercase());
}
