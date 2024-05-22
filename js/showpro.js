import GetData from "../admin/components/get.js";

const ui = (data) => {
  document.querySelector(".pro-image").innerHTML = "";

  data.map((ele, i) => {
    let box = document.createElement("div");
    box.setAttribute("id", "box");

    let innerbox1 = document.createElement("div");
    innerbox1.setAttribute("id", "innerbox1");

    let innerbox2 = document.createElement("div");
    innerbox2.setAttribute("id", "innerbox2");
    
    let imgs = document.createElement("img");
    imgs.src = ele.img[0];
    imgs.setAttribute("id","pro-img")
    innerbox1.append(imgs);
    
    box.append(innerbox1,innerbox2)
    document.querySelector(".pro-image").append(box);
  });
};
const Get = async () => {
  let res = await GetData("http://localhost:3000/products");
  ui(res);
};

Get();
