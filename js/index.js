const product = document.querySelectorAll('.product');
const removeBtn = document.querySelectorAll('.btn-remove');
const table = document.querySelector('tbody');
// const createBtn = document.querySelector('#create')

// .addEventListener('click', createProduct);

// ITERATION 1

function updateSubtotal() {
  let price = document.querySelectorAll('.price span');
  let subtotal = document.querySelectorAll('.subtotal span');
  let acc = 0;
  [...price].map((eachprice, i) => {
    let unit = document.querySelectorAll('.amount');
    unit = [...unit][i].value;
    let parcial = Number(eachprice.innerHTML) * unit;
    [...subtotal][i].innerHTML = parcial;
    acc += parcial;
  });
  return acc;
}
console.log('Calculating subtotal, yey!');

//... your code goes here

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2 completed!
  //... your code goes here
  // ITERATION 3
  let total = document.querySelector('#total-value span');
  let totalsum = updateSubtotal();

  total.innerHTML = totalsum;
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const currentProduct = event.target.parentNode.parentNode;
  console.log(currentProduct);
  table.removeChild(currentProduct);
  calculateAll();
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let productName = document.querySelector(
    ".create-product input[type='text']"
  );
  let productPrice = document.querySelector(
    ".create-product input[type='number']"
  );
  const table = document.querySelector('tbody');
  if (productPrice.value != '' && productName.value != '') {
    table.innerHTML += `<tr class= "product">
  <td class="name">
      <span>${productName.value}</span>
  </td>
  <td class="price">$<span>${productPrice.value}</span></td>
  <td class="quantity">
      <input class="amount" type="number" value="0" min="0" placeholder="Quantity" />
  </td>
  <td class="subtotal">$<span>0</span></td>
  <td class="action">
      <button class="btn btn-remove">Remove</button>
  </td>
</tr>`;

    removeBtn = document.querySelectorAll('.btn-remove');
    [...removeBtn].map((elem) =>
      elem.addEventListener('click', function (e) {
        removeProduct(e);
      })
    );
    productName.value = '';
    productPrice.value = '';
  } else {
    alert('You must enter a price and a product');
  }
}
const createBtn = document.querySelector('#create');
createBtn.addEventListener('click', function (e) {
  createProduct(e);
});

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

[...removeBtn].map((elem) =>
  elem.addEventListener('click', function (event) {
    removeProduct(event);
  })
);

// let newBtn = document.querySelector('#create');
//   newBtn.addEventListener('click', function (e) {
//     createProduct(e);
//   });

//   let productName = document.querySelectorAll(
//     ".create-product input[type='text']"
//   );

//   let productPrice = document.querySelectorAll(
//     ".create-product input[type='number']"
//   );
// }
