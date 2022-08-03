// let allCategories = document.querySelector('#allCate')
// allCategories.addEventListener('click', () => {
//   document.querySelector('.all-category-menu').classList.toggle('activeCatMenu')

// })





// function clock() {
//     const hours = document.querySelector(".hours");
//     const minutes = document.querySelector(".minutes");
//     const seconds = document.querySelector(".seconds");

//     hours.innerHTML = new Date().getHours();
//     minutes.innerHTML = new Date().getMinutes();
//     seconds.innerHTML = new Date().getSeconds();

//     if (minutes.innerHTML.toString().length == 1) {
//       minutes.innerHTML = "0" + minutes.innerHTML;
//     }

//     if (seconds.innerHTML.toString().length == 1) {
//       seconds.innerHTML = "0" + seconds.innerHTML;
//     }

//     if (hours.innerHTML.toString().length == 1) {
//       hours.innerHTML = "0" + hours.innerHTML;
//     }
//   }

//   const interval = setInterval(clock, 1000);
let hamburger_menu_icon = document.querySelector('#MenuIcon')
let close_sidebar_icon = document.querySelector('#closeIcon')

hamburger_menu_icon.addEventListener('click',() => {
  let sidebar = document.querySelector('#SidebarMobile')
  sidebar.classList.add('active-sidebar')
  close_sidebar_icon.style.transform = 'rotate(360deg)'
})

close_sidebar_icon.addEventListener('click',() => {
  let sidebar = document.querySelector('#SidebarMobile')
  sidebar.classList.remove('active-sidebar')
  close_sidebar_icon.style.transform = 'rotate(0deg)'
})

let imgBtn = document.querySelectorAll('.slider-item')
imgBtn.forEach(x => {
  x.addEventListener('click', () => {
    document.querySelector('.top-img img').src = document.querySelector('.slider-item img').src
  })
})


if (localStorage.getItem('basket') === null) {
    localStorage.setItem('basket',JSON.stringify([]))
}

let addCart = document.querySelectorAll('#addToCart')

for (let addBtn of addCart) {
  addBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    let basket = JSON.parse(localStorage.getItem('basket'));
    let prodImg = event.target.parentElement.parentElement.parentElement.children[0].children[0].src
    let prodName = event.target.parentElement.parentElement.parentElement.children[1].children[0].innerText
    let prodPrice = event.target.parentElement.parentElement.parentElement.children[2].children[0].children[0].innerText
    let prodId = event.target.parentElement.parentElement.parentElement.id
    let existProd =basket.find(x=>x.id === prodId)
    if (existProd === undefined) {
      basket.push({
        id: prodId,
        name: prodName,
        img: prodImg,
        price: prodPrice.split('US $')[1],
        count: 1
      })
    }
    else{
      existProd.count+=1;
    }
    localStorage.setItem('basket',JSON.stringify(basket))
    ShowCount();
    
  })
  
}
function ShowCount(){
  let basket = JSON.parse(localStorage.getItem('basket'))
  let count =  basket.length
  document.querySelector('#basketCount').innerHTML = count

}
ShowCount();

window.onscroll = () => {
  stickHeader();
  scrollFunction();
}

var header = document.querySelector(".header-bottom");
var scrollTopBtn = document.querySelector(".scroll-top");
var sticky = header.offsetTop;

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}

function stickHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
}

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
})