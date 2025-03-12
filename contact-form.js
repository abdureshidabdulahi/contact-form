let query_type1=document.querySelector(".query-type1");
let query_type2 = document.querySelector(".query-type2");
function radio(){
    query_type1.style.backgroundColor = "rgb(0, 128, 0,0.4)"
    query_type1.style.outline="1px solid green"
    query_type2.style.outline="none"
      query_type2.style.backgroundColor = " white"

}
function radio_2(){
     query_type2.style.backgroundColor = "rgb(0, 128, 0,0.4)"
     query_type2.style.outline="1px solid green"
     query_type1.style.outline="none"
      query_type1.style.backgroundColor = " white"
}
let button=document.getElementById("button")
let errorFirstname=document.getElementById("errorFirstname")
let lastName=document.getElementById("lastName")
let errorLastName=document.getElementById("errorLastName")
let first_name=document.getElementById("first_name")
let email=document.getElementById("email")
let errorEmail=document.getElementById("errorEmail")
let emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let errorQuery=document.getElementById("errorQuery")
let textArea=document.getElementById("textArea")
let errortext= document.getElementById("errortext")
let errorcheckbox=document.getElementById("errorcheckbox")
button.addEventListener("click", function(event){
     let  buttons=document.querySelector('input[name="choice"]:checked')// why this indside the function but not outside 
     let  check=document.querySelector('input[name="agree"]:checked')
      if(first_name.value.trim() === ""){
            
            first_name.classList.add("error")
            first_name.style.outline="2px solid red"
            first_name.style.border="none"
            errorFirstname.style.display="block"
      } else{
            first_name.classList.remove("error")
            errorFirstname.style.display="none"
             first_name.style.outline="none"
             first_name.style.border="1px solid black"
      }

      if(lastName.value.trim() === ""){
          
            lastName.classList.add("error")
            lastName.style.outline="2px solid red"
            lastName.style.border="none"
            errorLastName.style.display="block"
      } else{
            lastName.classList.remove("error")
            errorLastName.style.display="none"
             lastName.style.outline="none"
             lastName.style.border="1px solid black"
      }
      if(!emailPattern.test(email.value)){
            email.style.border="none"
            email.style.outline="2px solid red"
            errorEmail.style.display="block"
      }
      else{
             errorEmail.style.display="none"
               email.style.outline="none"
                email.style.border="1px solid black"
      }
      if(!buttons){
            errorQuery.style.display="block"
      }
      else{
             errorQuery.style.display="none"
      }
      if(textArea.value.trim() === ""){
            event.preventDefault()
            errortext.style.display = "block"
      }
      else{
             errortext.style.display = "none"
      }
      if(!check){
            errorcheckbox.style.display ="block"
      }
      else{
            errorcheckbox.style.display ="none"
      }
 if(!isvalid){
      event.preventDefault();// why this at the button
 }
})


    