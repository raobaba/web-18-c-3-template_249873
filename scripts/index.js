// Add the coffee to local storage with key "coffee"
let url = "https://masai-mock-api.herokuapp.com/coffee/menu";
  
fetch(url).then(function(res){
    return res.json();

}).then(function(res){
    // console.log(res.menu.data);
    appendData(res.menu.data);
}).catch(function(err){
    console.log(err);
})

function appendData(data){
    console.log(data);
    let menu = document.getElementById('menu');
    data.forEach(function(el,ind){
        let image = document.createElement("img");
        image.src = el.image;
        image.style.width = "300px";
        image.style.height = "220px";
        let title = document.createElement('p');
        title.innerText = el.title;
        title.style.marginLeft = "120px";
        let price = document.createElement("p");
        price.innerText = el.price;
        price.style.marginLeft = "130px";
        let box = document.createElement("div");
        box.style.width = "300px";
        box.style.height = "350px";
        box.style.boxShadow = "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset";
        box.style.borderRadius = "5px";
        let btn = document.createElement("button");
        btn.innerText = "Add to  Bucket";
        btn.style.marginLeft = "100px";
        btn.style.cursor = "pointer";
        box.append(image,title,price,btn)
       menu.append(box);
    })
}
