const shoeItems = document.createElement("div");
const allBuyBtns = document.querySelectorAll(".btn-primary");
let totalPrice = document.getElementById("totalPrice");

const updateTotalPrice = () => {
  let total = 0;
  let allProductsShop = document.querySelectorAll(".item-container");

  allProductsShop.forEach((item) => {
    let price = Number(
      item.getElementsByClassName("price")[0].innerText.replace("$", "")
    );

    let quantity = Number(
      item.getElementsByClassName("input-quantity")[0].value
    );

    //  console.log( price);
    //  console.log(quantity);

    total = total + price * quantity;
  });
  totalPrice.innerText = `  $${total}`;
};

danger.addEventListener("click", () => {
  console.log(updateTotalPrice());
});

let i = 0;

allBuyBtns.forEach((item, index) => {
  item.addEventListener("click", (eo) => {
    {
      // Change button from "buy" to "Done"

      item.setAttribute("disabled", "");
      item.classList.remove("btn-primary");
      item.classList.add("btn-success");
      item.innerHTML = "&#10004; Done";
    }

    {
      //  show mabrooook popup
      const popUp = document.createElement("div");
      body.append(popUp);
      popUp.classList.add("done-pop-up");
      popUp.innerHTML = `Add to  <i class="fa-solid fa-cart-shopping"></i>`;

      setTimeout(() => {
        popUp.style.transform = "translateX(-60vw)";
      }, 1500);

      setTimeout(() => {
        popUp.remove();
      }, 4000);
    }

    i++;

    //  create "عرض المُشتريات"  div

    body.append(shoeItems);
    shoeItems.classList.add("show-items");
    shoeItems.innerHTML = `
      <i class="fa-solid fa-cart-shopping"></i>   عرض المُشتريات <span class="in-show-items">${i}</span> 
      `;

    {
      let card = item.parentElement.parentElement.parentElement;
      let imgSrc = card
        .getElementsByClassName("card-img-top")[0]
        .getAttribute("src");
      let itemName = card.getElementsByClassName("card-title")[0].innerText;
      let itemPrice = card.getElementsByClassName("price")[0].innerText;
      // console.log(imgSrc);
      // console.log(itemName);
      // console.log(itemPrice);

      let addProduct = `
    <div dir="rtl" class="item-container">

    <div class="img-title-parent">
        <img src="${imgSrc}" alt="">
        <p class="product-name">${itemName}</p>
    </div>



    <div style="display: flex; align-items: center;">
        <input type="number" value="1" min="1"  class="input-quantity" dir="ltr" id="input-quantity" >
        <p >الكمية</p>

    </div>

    <div class="price">
    ${itemPrice}
    </div>


    <div class="btn btn-secondary">
        حذف
    </div>




</div>
    `;
      // blackScreen.innerHTML += addProduct;
      let allProducts = document.getElementById("allProducts");

      allProducts.innerHTML += addProduct;
    }
    updateTotalPrice();

    console.log(`index =>  ${index}`);

    console.log(i);
  });
});

let closea = document.getElementById("closea");
closea.addEventListener("click", (eo) => {
  blackScreen.style.transform = "translateX(-110vw)";
});

shoeItems.addEventListener("click", (eo) => {
  blackScreen.style.transform = "translateX(0)";
});

const totalePrice = (indexOne, indexTwo) => {
  let avrage = 0;

  avrage = indexOne + indexTwo;
};

blackScreen.addEventListener("change", () => {
  updateTotalPrice();
});

blackScreen.addEventListener("click", (eo) => {
  if (eo.target.classList.contains("btn-secondary")) {
    eo.target.parentElement.remove();
    updateTotalPrice();

    i--;
    shoeItems.innerHTML = `
   <i class="fa-solid fa-cart-shopping"></i>   عرض المُشتريات <span class="in-show-items">${i}</span> 
   `;

    let nameOfDletedProduct =
      eo.target.parentElement.getElementsByClassName("product-name")[0]
        .innerText;

    let allCardsInGallay = document.querySelectorAll(".card");

    allCardsInGallay.forEach((item) => {
      let nameOfProducte =
        item.getElementsByClassName("card-title")[0].innerText;

      if (nameOfProducte == nameOfDletedProduct) {
        let doneButton = item.getElementsByClassName("btn-success")[0];

        doneButton.removeAttribute("disabled", "");
        doneButton.classList.remove("btn-success");
        doneButton.classList.add("btn-primary");
        doneButton.innerText = "buy"
      }
    });

  }
});
