let basket = JSON.parse(localStorage.getItem('basket'))
function Decrease(event, id){
    let current = basket.find(x=> +x.id=== +id)
    current.count--
    let span = event.target.nextElementSibling
    span.innerHTML = current.count
     localStorage.setItem('basket',JSON.stringify(basket))
    ShowAlert();
}
function Increase(event, id){
    let current = basket.find(x=> +x.id=== +id)
    current.count++
    let span = event.target.previousElementSibling
    span.innerHTML = current.count
     localStorage.setItem('basket',JSON.stringify(basket))
    ShowAlert();
}

function Delete(element,id){
    let basket = JSON.parse(localStorage.getItem('basket'))
    let ProductIndex = basket.findIndex((p) => p.id == id)
    basket.splice(ProductIndex,1)
    localStorage.setItem('basket',JSON.stringify(basket))
    element.parentElement.parentElement.remove();
    ShowAlert();
}
function ShowAlert(){
let basket = JSON.parse(localStorage.getItem('basket'))

if (basket.length === 0) {
    document.querySelector('#AlertMessage').classList.remove('d-none')
    document.querySelector('#Product-table').classList.add('d-none')
}
else{
    document.querySelector('#AlertMessage').classList.add('d-none')
    document.querySelector('#Product-table').classList.remove('d-none')

    let list = ''
    basket.forEach(x=>{
        let price = x.price.split('US $')
        list+= `
            <tr>
                        <td><i class="fa-solid fa-trash-can" id="delete" onclick = "Delete(event.target,${x.id})"></i></td>
                        <td><img style="width:80px;" src="${x.img}" alt=""></td>
                        <td>${x.name}</td>
                        <td>${x.price}</td>
                        <td><i class="fa-solid fa-minus" id="minus" onclick="Decrease(event,${x.id})"></i><span class="countNow">${x.count}</span><i class="fa-solid fa-plus" id="plus" onclick="Increase(event,${x.id})"></i></td>
                        <td>${x.price * x.count}</td>
                    </tr>
        `
    })

    let sum = 0;
    let count = 0;
    for (let item of basket) {
        sum+= item.count * item.price
        count+= item.count
    }
    document.querySelector('#tbody').innerHTML = list;
    document.querySelector('#').innerHTML = count;
    document.querySelector('#total').in
}
    ShowAlert();
}
ShowAlert();