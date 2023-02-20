

const products=[
    {
        id:1,
        title:"Air Force",
        colors:[
            {
                code: "black",
                img:"./Projectimg/air.png",
            },
            {
                code: "darkblue",
                img:"./Projectimg/air2.png",
                
            },
        ],
    
    },
    {
        id:2,
        title:"Air Jordan",
        colors:[
            {
                code: "lightgray",
                img:"./Projectimg/jordan.png",
            },
            {
                code: "green",
                img:"./Projectimg/jordan2.png",
                
            },
        ],
    
    },
    {
        id:3,
        title:"Blazer",
        colors:[
            {
                code: "white",
                img:"./Projectimg/blazer.png",
            },
            {
                code: "darkgreen",
                img:"./Projectimg/blazer2.png",
                
            },
        ],
    
    },
    {
        id:4,
        title:"Crater",
        colors:[
            {
                code: "black",
                img:"./Projectimg/crater.png",
            },
            {
                code: "lightgray",
                img:"./Projectimg/crater2.png",
                
            },
        ],
    
    },
    {
        id:5,
        title:"Hippie",
        colors:[
            {
                code: "gray",
                img:"./Projectimg/hippie.png",
            },
            {
                code: "black",
                img:"./Projectimg/hippie2.png",
                
            },
        ],
    
    },
]

choosenProduct = products[0];

const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductColors = document.querySelectorAll('.color');
const currentProductSizes = document.querySelectorAll('.size')

const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');

menuItems.forEach(function(item, index){
    item.addEventListener("click", function(){
wrapper.style.transform = `translateX(${-100*index}vw)`;
        
choosenProduct = products[index];
currentProductTitle.textContent=choosenProduct.title.toUpperCase();
currentProductColors.textContent=choosenProduct.title.toUpperCase();
currentProductImg.src=choosenProduct.colors[0].img;

currentProductColors.forEach(function(color,index){
color.style.backgroundColor= choosenProduct.colors[index].code;
});
    });
});

currentProductColors.forEach(function(color,index){
color.addEventListener("click", function(){
    currentProductImg.src=choosenProduct.colors[index].img;
})
});

currentProductSizes.forEach(function(size,index){
size.addEventListener("click", function(){
currentProductSizes.forEach(function(size,index){
size.style.backgroundColor="white";
size.style.color="black";
});
size.style.backgroundColor="black";
size.style.color="white";
});

});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", function(){
payment.style.display="flex";
});
close.addEventListener("click", function(){
payment.style.display="none";
});
