
document.querySelector('.main-side-nav').innerHTML=`
<div class="search_icon_sidebar">
            <img src="https://www.havmor.com/themes/havmornew/images/search-icon.svg" alt="">
        </div>
        <div class="location_icon_sidebar">
            <a href="../pages/closeby.html"><img src="https://www.havmor.com/themes/havmornew/images/map-icon.svg" alt=""></a>
        </div>
        <div class="surprise_icon_sidebar">
            <a href="../index.html#surpriseme"><img src="https://www.havmor.com/themes/havmornew/images/sticky-icon3.svg" alt=""></a>
        </div>`
document.querySelector('.main-search-page').innerHTML=`
<div class="main-searchbar">
            <div id="search_button_searcbar"><input id="d_search" type="search" placeholder="Search your favorite ice cream flavor">
                <div id="search_icon_main_searchbar" href=""><img src="https://www.havmor.com/themes/havmornew/images/search-icon.svg" alt=""></div></div>
            <br>
            <div id="sorted-search">
                
            </div>
            <button id="close_search">Close Search</button>
        </div>
`
import GetData from "../admin/components/get.js"
document.querySelector('.main-search-page').classList.add('hidden')
const ui=(data)=>{
    document.getElementById('sorted-search').innerHTML=""
    data.splice(0, 5).map((ele,i)=>{
        let p=document.createElement('p');
        p.setAttribute('id','Searched_items');
        p.innerHTML=ele.title
        p.addEventListener('click',async ()=>{
            window.location.href=`../pages/showpro.html?title=${ele.title}`
        })
        document.getElementById('sorted-search').append(p)
        if(i==4){
            return 1
        }
    })
}
GetData
const get=async()=>{
    let res=await GetData('https://havmor-server.onrender.com/products')
    let values_hi=document.getElementById('d_search').value;
    let realdata= await res.filter((ele)=>ele.title.toLowerCase().includes(values_hi.toLowerCase()))
    console.log(realdata);
    ui(realdata)
    if(realdata.length==0){
        console.log(123);
        document.getElementById('sorted-search').innerHTML = "Searched product Not Found.."
        
    }
   
}
document.getElementById('d_search').addEventListener('input',get)
document.querySelector('.search_icon_sidebar').addEventListener('click',()=>{
    document.querySelector('.main-search-page').classList.remove('hidden')
})
document.querySelector('#close_search').addEventListener('click',()=>{
    document.querySelector('.main-search-page').classList.add('hidden')
})
document.getElementById('search_icon_main_searchbar').addEventListener('click', () => {
    document.getElementById('d_search').value= "";
 })
