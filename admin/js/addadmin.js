
let logged=JSON.parse(sessionStorage.getItem('IsLogin'))||false;
if(logged==false){
    alert('First Verify that You Are Admin')
    window.location.href="../pages/login.html"
}

const regex_valid=(data)=>{
    
    let run=/^(?=\s*$)/g.test(document.getElementById('username').value)

    let remail=
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g
    .test(document.getElementById('email').value);

    let rpass=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g.test(document.getElementById('password').value);

    regex_email(remail)
    regex_un(run)
    regex_pass(rpass)
    if((document.getElementById('password').value==document.getElementById('c_pass').value)&&(!run&&remail&&rpass)){
        console.log(data);
        document.getElementById('main_form').addEventListener('submit',()=>postUser(data))
                    }
}
function regex_email(remail){
    if(remail){
        document.getElementById('email').classList.remove('is-invalid')
        document.getElementById('email').classList.add('is-valid')
    }
    else{
        document.getElementById('email').classList.remove('is-valid')
        document.getElementById('email').classList.add('is-invalid')
    }
}
function regex_un(run){
    if(run){
        document.getElementById('username').classList.add('is-invalid')
    }
    else{
        document.getElementById('username').classList.remove('is-invalid')
        document.getElementById('username').classList.add('is-valid')
    }
}

function regex_pass(rpass){
    if(rpass){
        document.getElementById('password').classList.remove('is-invalid')
        document.getElementById('password').classList.add('is-valid')
        if(document.getElementById('password').value==document.getElementById('c_pass').value){
            
            
            document.getElementById('c_pass').classList.remove('is-invalid')
            document.getElementById('c_pass').classList.add('is-valid')
        }
        else{
            document.getElementById('c_pass').classList.remove('is-valid')
            document.getElementById('c_pass').classList.add('is-invalid')
        }
    }
    else{
        document.getElementById('password').classList.remove('is-valid')
        document.getElementById('password').classList.add('is-invalid')
    }

    
   
}
const hi=()=>{
    
document.getElementById('username').addEventListener('input',calc)
document.getElementById('password').addEventListener('input',calc)
document.getElementById('email').addEventListener('input',calc)
document.getElementById('c_pass').addEventListener('input',calc)
}
import GetData from "../components/get.js";
// (() => {
//     'use strict'
  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     const forms = document.querySelectorAll('.needs-validation')
  
//     // Loop over them and prevent submission
//     Array.from(forms).forEach(form => {
//       form.addEventListener('submit', event => {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }
  
//         form.classList.add('was-validated')
//       }, false)
//     })
//   })()
import NavBar from "../components/navbar.js";
import PostData from "../components/post.js";
import UpdateData from "../components/update.js";
document.querySelector('.navbarr').innerHTML=NavBar()
let id=-1
id = location.search.replace('?id=', '')
const calc=(e)=>{
    e.preventDefault();
    let user={
        fn: document.getElementById('validationCustom01').value,
        ln: document.getElementById('validationCustom02').value,
        un:document.getElementById('username').value,
        email:document.getElementById('email').value,
        pass:document.getElementById('password').value
    }
        if(id==''){
            isexisted(user)
        }
        else
    {   
        if(document.getElementById('password').value==document.getElementById('c_pass').value){
        UpdateData(`https://havmor-server.onrender.com/admin/${id}`,user)
        window.location.href="../pages/admins.html"}
    }
    }
const isexisted=async (data)=>{
    let res2=await fetch(`https://havmor-server.onrender.com/admin?un=${document.getElementById('username').value}`)
    let isUn=await res2.json()
    let res1=await fetch(`https://havmor-server.onrender.com/admin?email=${document.getElementById('email').value}`)
    let isEmail=await res1.json();
    if(isUn.length>0){
        regex_un(true)
        hi()
    }
    else if(isEmail.length>0){
        regex_email(false)
        regex_un(false)
        hi()
    }
    
    else{
        regex_valid(data)
    }
}
const postUser=(data)=>{
    fetch('https://havmor-server.onrender.com/admin',{
        method:"POST",
        headers:{"Content-Type":"Applicatin/json"},
        body:JSON.stringify(data)
    })
    .then((res)=>res.json())
    .then((data)=>{

    })
}
const check=async()=>{

    if(id!=''){
        let res=await GetData(`https://havmor-server.onrender.com/admin?id=${id}`)
        console.log(res);
        document.getElementById('validationCustom01').value=res[0].fn,
        document.getElementById('validationCustom02').value=res[0].ln,
        document.getElementById('username').value=res[0].un,
        document.getElementById('email').value=res[0].email,
        document.getElementById('password').value=res[0].pass
    }
}
check()
const getUser=()=>{
    fetch('https://havmor-server.onrender.com/admin')
    .then((res)=>res.json())
    .then((data)=>{

    })
}
document.getElementById('main_form').addEventListener('submit',calc)
getUser()
