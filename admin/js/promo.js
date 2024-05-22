let logged=JSON.parse(sessionStorage.getItem('IsLogin'))||false;
if(logged==false){
    alert('First Verify that You Are Admin')
    window.location.href="../pages/login.html"
}




import navbar from "../components/navbar.js";

document.querySelector('.navbarr').innerHTML=navbar()