


import GetData from "../components/get.js";

const check=(e)=>{
    e.preventDefault();

    let user={
        email:document.getElementById('exampleInputEmail1').value,
        pass:document.getElementById('exampleInputPassword1').value
    }
    final(user)
}
const final=async (user)=>{
    let res= await GetData(`https://havmor-server.onrender.com/admin?un=${user.email}`)
    console.log(res);
    if(res.length>0){
        let res1=await GetData(`https://havmor-server.onrender.com/admin?un=${user.email}&pass=${user.pass}`)
        if(res1.length>0){
            alert(`Admin Kam pe lago`)
            sessionStorage.setItem('IsLogin',true)
            window.location.href="../pages/admin.html"
        }
        else{
            alert(`Your username found but pass not match`)
        }
    }else{
        let res2= await GetData(`https://havmor-server.onrender.com/admin?email=${user.email}`)
        if(res2.length>0){
            let res3=await GetData(`https://havmor-server.onrender.com/admin?email=${user.email}&pass=${user.pass}`)
            if(res3.length>0){
                alert(`Admin Kam pe lago`)
                sessionStorage.setItem('IsLogin',true)
            window.location.href="../pages/admin.html"
            }
            else{
                alert(`Your emaiil found but pass not match`)
            }
        }
        else{
            alert('Your email and username both not found ')
        }
    }
}


document.getElementById('Admin_from_login').addEventListener('submit',check)