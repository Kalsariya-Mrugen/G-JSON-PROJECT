let logged=JSON.parse(sessionStorage.getItem('IsLogin'))||false;
if(logged==false){
    alert('First Verify that You Are Admin')
    window.location.href="../pages/login.html"
}




import GetData from "../components/get.js";
import navbar from "../components/navbar.js";

document.querySelector('.navbarr').innerHTML=navbar()

import PostData from "../components/post.js";
import UpdateData from "../components/update.js";
let imgs = []
const isExisted = async (data) => {
  console.log(data);
  let res = await fetch(`https://havmor-server.onrender.com/products?title=${data.title}`)
  let dataa = await res.json();

  if (dataa.length == 0) {
    PostData('https://havmor-server.onrender.com/products', data)
    window.location.href="../pages/admin.html"
  }
  else {
    alert('This Named Product Already Exists')
  }

}
let id=-1;
id = location.search.replace('?id=', '')
const calca = (e) => {
  e.preventDefault();

  if (document.getElementById('img').files.length === 0) {
    alert("Please select at least one file to upload.");
    return;
  }
  // const reader = new FileReader();
  if (document.getElementById('cata').value == 0) {
    alert("Please Select Catgory.");
    return;
  }

  let product = {
    title: document.getElementById('title').value,
    price: parseFloat(document.getElementById('price').value),
    Qunty: parseFloat(document.getElementById('Qunty').value),
    desc: document.getElementById('desc').value,
    cata: document.getElementById('cata').value,
    ingre:document.getElementById('ingre').value,
    nutri:document.getElementById('nutri').value,
    flavour:document.getElementById('flavour').value,
    qtyy:1,
    img: imgs
  }
  console.log(product);

  if(id==''){
    isExisted(product)
}
else
{   
UpdateData(`https://havmor-server.onrender.com/products/${id}`,product)
alert('hi')
setTimeout((window.location.href="../pages/product.html"),2000)}

  
}
document.querySelector('.add-card').addEventListener('submit', calca)

document.getElementById('img').addEventListener('change', () => {
  imgs = []
  function hi() {
    let files = document.getElementById('img').files;
    function readAndPreview(file) {
      if (/\.(jpe?g|png|gif|webp)$/i.test(file.name)) {
        const reader = new FileReader();

        reader.addEventListener(
          "load",
          () => {
            let imgk = reader.result;
            imgs.push(imgk)
            console.log(imgs);
          },
          false,
        );
        reader.readAsDataURL(file);
      }
    }
    if (files) {
      Array.prototype.forEach.call(files, readAndPreview);
    }
  }
  hi()
})
const get=async()=>{
  if(id!=''){
    alert(id)
  let res=await GetData(`https://havmor-server.onrender.com/products/${id}`)
  document.getElementById('title').value=res.title
   document.getElementById('price').value=res.price
     document.getElementById('Qunty').value=res.Qunty
     document.getElementById('desc').value=res.desc
     document.getElementById('cata').value=res.cata
    document.getElementById('ingre').value=res.ingre
  document.getElementById('nutri').value=res.nutri
    document.getElementById('flavour').value=res.flavour
  }
}
get()