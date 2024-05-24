import GetData from "../admin/components/get.js";

const ui=(data)=>{
    document.querySelector('.p').innerHTML=""
    data.map((ele)=>{
        let card=document.createElement('div')
        card.setAttribute('class','product-section');

        let sub_card=document.createElement('div');
        sub_card.setAttribute('class','product');

        let imgs=document.createElement('img');
        imgs.src=ele.img[0]
        imgs.setAttribute('id','img');

        let h3=document.createElement('h3');
        h3.setAttribute('class','product-title');
        h3.innerHTML=ele.title

        let p=document.createElement('p');
        p.setAttribute('class','product-details');
        p.innerHTML=ele.Qunty+ " ml"

        let button=document.createElement('button');
        button.setAttribute('class','buy-button');
        button.innerHTML = "buy Now"
        button.addEventListener('click',()=>{
            window.location.href=`../pages/cart.html?id=${ele.id}`
        })
      
        sub_card.append(imgs,h3,p,button);
        card.append(sub_card);
        card.addEventListener('click',()=>{
            window.location.href=`../pages/showpro.html?id=${ele.id}`;
        })

        document.querySelector('.p').append(card)
    })
}

const get=async()=>{
    let res=await GetData('http://localhost:3000/products')
    ui(res)
}
const getflav=async(name)=>{
    let res=await GetData(`http://localhost:3000/products?flavour=${name}`)
    
    ui(res)
}
const getCata=async(name)=>{
    let res=await GetData(`http://localhost:3000/products?cata=${name}`)
    console.log(name);
    console.log(res);
    ui(res)
}
document.getElementById('Me_Time').addEventListener('click',()=>getCata("Me_Time"))
document.getElementById('Get_Together').addEventListener('click',()=>getCata("Get_Together"))
document.getElementById('Party_Time').addEventListener('click',()=>getCata("Party_Time"))
document.getElementById('Save_Big').addEventListener('click',()=>getCata("Save_Big"))
document.getElementById('Chocolate').addEventListener('click',()=>getflav("Chocolate"))
document.getElementById('Dry_Fruits').addEventListener('click',()=>getflav("Dry_Fruits"))
document.getElementById('Indian_Traditional').addEventListener('click',()=>getflav("Indian_Traditional"))
document.getElementById('Fruits').addEventListener('click',()=>getflav("Fruits"))
document.getElementById('International').addEventListener('click',()=>getflav("International"))
document.getElementById('LOTTE').addEventListener('click',()=>getflav("LOTTE"))
get()
