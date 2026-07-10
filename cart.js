let cart =
JSON.parse(localStorage.getItem("cart")) || [];

let cartItems =
document.getElementById("cart-items");

let total = 0;

function displayCart(){

cartItems.innerHTML = "";

total = 0;

cart.forEach((item,index)=>{

total += item.price;

cartItems.innerHTML += `

<div class="cart-item">

<div>
<h3>${item.name}</h3>
<p>₹${item.price}</p>
</div>

<button
class="remove-btn"
onclick="removeItem(${index})">

Remove

</button>

</div>

`;

});

document.getElementById(
"total-price"
).innerText =
`Total: ₹${total}`;

}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

displayCart();

}

function checkout(){

if(cart.length===0){

alert("Cart is empty");
return;

}

localStorage.removeItem("cart");

window.location.href =
"order-success.html";

}

displayCart();