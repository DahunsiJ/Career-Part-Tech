// const form = document.querySelector('.order-form');
// const title = document.querySelector('#title');
// const surName = document.querySelector('#surNam');
// const firstNam = document.querySelector('#firstNam');
// const othername = document.querySelector('#othername');
// const phoneNumber = document.querySelector('#phoneNumber');
// const email = document.querySelector('#email');
// const address = document.querySelector('#address');
// const pickupDatet = document.querySelector('#pickupDate');
// const deliveryDate = document.querySelector('#deliveryDate');
// const orderDate = document.querySelector('#orderDate');
// const textarea = document.querySelector('#textarea');




// form.addEventListener('submit', e => {
//     e.preventDefault();
//     console.log(order-form.value)
// });

// const don = document.querySelector('.signin-form');

// don.addEventListener('submit', e => {
//     e.preventDefault();
//     console.log(form.loginemail.password.value);
// });
function fillForm(){
    const welcomeMsg = document.getElementById('welcome');
    const title = document.getElementById('title');
    const surName = document.getElementById('surname');
    const firstName = document.getElementById('firstName')

    welcomeMsg.innerHTML = "Welcome "+title.value +surName.value+ firstName.value +".<br>";
    formcontent.innerHTML = "";
}