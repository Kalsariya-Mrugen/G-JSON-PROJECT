import DelData from "../components/del.js";
import GetData from "../components/get.js";
import navbar from "../components/navbar.js";
import UpdateData from "../components/update.js";

document.querySelector('.navbarr').innerHTML=navbar()

const ui=(data)=>{
    document.getElementById('main-contents').innerHTML=""
    data.map((ele,i)=>{
        let tr=document.createElement('tr')

        let td1=document.createElement('td');
        td1.innerHTML=i+1
        td1.setAttribute('id','Indexing_s')
        let td2=document.createElement('td')
        let imgs=document.createElement('img');
        imgs.src=ele.img[0]
        td2.append(imgs)
        let td3=document.createElement('td')
        td3.innerHTML=ele.title
        let td4=document.createElement('td')
        td4.innerHTML=`₹ ${ele.price}`
        let td5=document.createElement('td')
        td5.innerHTML=`${ele.Qunty} ML`
        let td6=document.createElement('td')
        let btn_grp=document.createElement('div')
        let del_btn=document.createElement('button');
        del_btn.innerHTML=`<i class="bi bi-trash"></i>`
        del_btn.setAttribute('id','del_btn')
        del_btn.addEventListener('click',()=>{
            alert(`Product ${ele.title} removed`)
            DelData(`http://localhost:3000/products/${ele.id}`)
        })
        let edit_btn=document.createElement('button');
        edit_btn.innerHTML=`<i class="bi bi-pencil-square"></i>`
        edit_btn.setAttribute('id','edit_btn')
        edit_btn.addEventListener('click',()=>{
            window.location.href=`../pages/addproduct.html?id=${ele.id}`
        })
        btn_grp.append(del_btn,edit_btn);
        btn_grp.setAttribute('id','btn_grp')
        td6.append(btn_grp)

        tr.append(td1,td2,td2,td3,td4,td5,td6)
        document.getElementById('main-contents').append(tr)
    })
}
const Get =async()=>{
    let res=await GetData('http://localhost:3000/products')
    ui(res)
}
Get()