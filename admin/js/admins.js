import DelData from "../components/del.js";
import GetData from "../components/get.js";
import navbar from "../components/navbar.js";



const uimaker=(data)=>{
    data.map((ele,i)=>{
        let tr=document.createElement('tr');
        let td1=document.createElement('td');
        td1.innerHTML=i+1
        let td2=document.createElement('td');
        td2.innerHTML=ele.fn
        let td3=document.createElement('td');
        td3.innerHTML=ele.ln
        let td4=document.createElement('td');
        td4.innerHTML=ele.un
        let td5=document.createElement('td');
        td5.innerHTML=ele.email
        let td6=document.createElement('td');
        td6.innerHTML=ele.pass
        let td7=document.createElement('td');
        let btn_grp=document.createElement('div')
        let del_btn=document.createElement('button');
        del_btn.innerHTML=`<i class="bi bi-trash"></i>`
        del_btn.setAttribute('id','del_btn')
        del_btn.addEventListener('click',()=>{
            alert(`Admin ${ele.un} removed`)
            DelData(`http://localhost:3000/admin/${ele.id}`)
        })
        let edit_btn=document.createElement('button');
        edit_btn.innerHTML=`<i class="bi bi-pencil-square"></i>`
        edit_btn.setAttribute('id','edit_btn')
        edit_btn.addEventListener('click',()=>{
            window.location.href=`../pages/addadmin.html?id=${ele.id}`
        })
        btn_grp.append(del_btn,edit_btn);
        btn_grp.setAttribute('id','btn_grp')
        td7.append(btn_grp);

        tr.append(td1,td2,td3,td4,td5,td6,td7);
        document.getElementById('main_contents').append(tr)
    })
}
const Get=async()=>{
    let res=await GetData('http://localhost:3000/admin')
    if(res.length==0){
        document.querySelector('.main-body').innerHTML="No Admin Exist Still<br> Username:admin<br>PassWord:admin@123<br> wroks"
    }
    uimaker(res)
}
Get()
document.querySelector('.navbarr').innerHTML=navbar()

