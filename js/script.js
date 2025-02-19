

// ============================================

// Cart array to store selected items
let cart = [];

// Function to handle Buy Now button click
function redirectToProductDetail(button) {
    const productElement = button.closest('.card');
    const product = {
        title: productElement.getAttribute('data-title'),
        description: productElement.getAttribute('data-description'),
        price: parseFloat(productElement.getAttribute('data-price')),
        image: productElement.getAttribute('data-image'),
        quantity: 1 // Default quantity to 1
    };

    // Check if product is already in the cart and increase quantity if so
    const existingProduct = cart.find(item => item.title === product.title);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push(product); // Add product to cart
    }

    // Redirect to cart page
    localStorage.setItem('cart', JSON.stringify(cart)); // Store cart in localStorage
    window.location.href = 'cart.html'; // Redirect to cart page
}

//  here is array to save data from card 

const products = [
 
  {
      title: "Mehndi Powder (5 Filter) 1KG",
      description: "1KG Panna Mehndi Powder (5 filter smooth & stringy powder) No chemical Pure Organic",
      price:400,
      image: "./img/mehndipowder1.png",
      badge: "Best Seller"
  },

  {
      title: "Mehndi Powder (5 Filter) 500GM",
      description: "500gm Panna Mehndi Powder (5 filter smooth & stringy powder) No chemical Pure Organic",
      price:200,
      image: "./img/mehndipowder1.png",
      badge: "Best Seller"
  },
  {
      title: "Mehndi Powder (5 Filter) 250GM",
      description: "250gm Panna Mehndi Powder (5 filter smooth & stringy powder) No chemical Pure Organic",
      price:140,
      image: "./img/mehndipowder1.png",
      badge: "Best Seller"
  },

  {
    title: "100GM Mehndi Powder",
    description: "100 GM Panna Mehndi Powder (5 filter smooth & stringy powder).",
    price: 60,
    image: "./img/250gmpowder.png",
    badge: "On Sale"
},
 
  {
      title: "BAQ Mehndi Powder (7 filter) 500GM",
      description: "500gm BAQ Panna Mehndi Powder (7 filter smooth & stringy powder)specially for Brides No chemical Pure Organic ",
      price:300,
      image: "./img/baqpowder.png",
      badge: "Best Seller"
  },

 


     {
    title: "1Litre Mehndi Mix Oil",
    description: "1 litre Mehndi Mix Oil For Darkstain.",
    price:1300,
    image: "./img/1literoil.png",
    badge: "Best Seller"
    },

   
   
    {
    title: "200ML Mehndi Mix Oil ",
    description: "200ML Mehndi Mix Oil For Dark Stain , Chemical Free & Skin Friendly Product.",
    price:340,
    image: "./img/100ml oil.png",
    badge: "On Sale"
    },
   
    {
    title: "100ML Mehndi Mix Oil ",
    description: "100ML Mehndi Mix Oil For Dark Stain , Chemical Free & Skin Friendly Product.",
    price:180,
    image: "./img/100ml oil.png",
    badge: "On Sale"
    },
   
    {
    title: "30ML Mehndi Mix Oil ",
    description: "30ML Mehndi Mix Oil For Dark Stain , Chemical Free & Skin Friendly Product.",
    price:40,
    image: "./img/30mloil.png",
    badge: "On Sale"
    },

   

  // 250gram powder ------------------------------------------------------------------
  {
      title: "Henna Kit For Beginners (7 items)",
      description: "250GM Mehndi Powder <br> 100ML Mehndi Mix Oil <br> 1 Stocking <br> 1 Pin (0.38mm) <br> 3 Piping Bag <br> 1 CelloTape <br> 20 Precut Sheets (transparent). ",
      price:380,
      image: "./img/7item beeginer kit.png",
      badge: "On Sale"
  },

   // 250gram powder ------------------------------------------------------------------
  {
      title: "Henna Kit For Beginners (8 items)",
      description: "250GM Mehndi Powder <br> 100ML Mehndi Mix Oil <br> 1 Stocking <br> 1 Pin (0.38mm) <br> 3 Piping Bag <br> 1 CelloTape <br> 20 Precut Sheets (transparent) <br> 1 Tape Cutter (small size).",
      price:469,
      image: "./img/beg8item.png",
      badge: "On Sale"
  },
 
  {
      title: "Henna Kit For Professional (9 items)",
      description: "500GM Mehndi Powder <br>200ML Mehndi Mix Oil <br> 1 Stocking <br> 1 Pin (0.38mm) <br> 5 Piping Bag <br> 1 CelloTape <br> 30 Precut Sheets (transparent) <br> 2 pcs transparent sheet (1 meter).",
      price:650,
      image: "./img/pro_kit1.png",
      badge: "On Sale"
    
  },
  {
      title: "Henna Kit For Demo (8 items)",
      description: "100GM Mehndi Powder <br> 30ML Mehndi Mix Oil <br> 1 Stocking <br> 1 Pin (0.38mm) <br> 1 Piping Bag <br> 1 CelloTape <br> 10 Precut Sheets (transparent) <br> 6 Empty Cones.",
      price:249,
      image: "./img/demokit.png",
      badge: "On Sale"
  },

 
  {
      title: "Oragnic Mehndi Cones 12pcs",
      description: "Pack of 12 organic mehndi cones, For darker color , keep the mehndi on your hands for at least 6 hours . After that use Aftercare oil for removing Henna and use Aftercare balm for moisturing your hand. Avoid Water for 8 hours After removing Henna ",
      price:240,
      image: "./img/12cones.png",
      badge: "On Sale"
  },
 
  {
      title: "Pack of 5 cones with 1 After care Oil & 1 After Care Balm",
      description: " For darker color , keep the mehndi on your hands for at least 6 hours . After that use Aftercare oil for removing Henna and use Aftercare balm for moisturing your hand. Avoid Water for 8 hours After removing Henna ",
      price:215,
      image: "./img/5cones.png",
      badge: "On Sale"
  },
  {
      title: "Pack of 5 cones only",
      description: "pack of 5 cone only For darker color , keep the mehndi on your hands for at least 6 hours . After that use Aftercare oil for removing Henna and use Aftercare balm for moisturing your hand. Avoid Water for 8 hours After removing Henna ",
      price:100,
      image: "./img/5coneonly.jpg",
      badge: "On Sale"
  },

  {
      title: "Bridal Cones Kit",
      description: "Pack of 12 organic mehndi cones, 1 After Care balm , 1 After Care Oil  keep the mehndi on your hands for at least 6 hours . After that use Aftercare oil for removing Henna and use Aftercare balm for moisturing your hand. Avoid Water for 8 hours After removing Henna.",
      price:355,
      image: "./img/conewithoil.png",
      badge: "On Sale"
  },

  {
    title: "After Care Balm",
    description:" 8 Gram (One Pcs.) Eucalyptus & Levandar Flavour For Dark Stain",
    price: 55,
    image: "./img/balm.png",
    badge: "Best Seller"
    },

    {
        title: "After Care Oil ",
        description: "30ML (One PCS)  Eucalyptus & Levandar Flavour.",
        price:60,
        image: "./img/after care oil.png",
        badge: "On Sale"
        },
  {
      title: "Cello Tape",
      description: "Rolling and Sealing Mehndi Cones (10Rs per Pcs)",
      price:10,
      image: "./img/tape.jpg",
      badge: "On Sale"
  },
  {
      title: "Stocking",
      description: "It helps to strain mehndi paste 40Rs pair 20Rs single ",
      price:20,
      image: "./img/stocking.jpg",
      badge: "On Sale"
  },

  {
      title: "Piping Bag 100pcs (SMALL SIZE) ",
      description: "To fill Henna Paste neatly & easily",
      price:200,
      image: "./img/piping bag .jpg",
      badge: "On Sale"
  },
  
  {
      title: "Tape Cutter",
      description: "Small Size",
      price:80,
      image: "./img/tape_cutter.jpg",
      badge: "On Sale"
  },
  
  {
      title: "Frozen pre cut Cellophane Sheets (100pcs)",
      description: "5inch x 7inch Frozen Mix Printed Cone Rolling Sheets 100pcs.",
      price:70,
      image: "./img/cone_roll2.jpg",
      badge: "On Sale"
  },
  
  {
      title: "Pre Cut Cellophane Sheets (100pcs)",
      description: "5inch x 7inch Transparent Cone Rolling Sheets 100pcs.  ",
      price:50,
      image: "./img/precutcello.png",
      badge: "On Sale"
  },
  
  {
      title: "0.38mm Pin (50pcs)",
      description: "this pin is used to roll Henna Cone (Portrait cone, Sider cone , Figure cone )",
      price:500,
      image: "./img/pin0.38.png",
      badge: "On Sale"
  },
  
 
 
  {
      title: "Green Pin (1pack)",
      description: "this pin is used to roll Henna Cone approximatly 60-70 pin in each pack)",
      price:50,
      image: "./img/greenpack.png",
      badge: "On Sale"
  },

];


function renderProducts() {
  const container = document.querySelector('.card-container'); // Ensure you have this element in your HTML
  container.innerHTML = ''; // Clear existing content

  products.forEach(product => {
      const cardHTML = `
          <div class="card" data-title="${product.title}" data-description="${product.description}" data-price="${product.price}" data-image="${product.image}">
              <img src="${product.image}" alt="${product.title}">
              <div class="sale-badge">${product.badge}</div>
              <div class="card-content">
                  <h2 class="card-title">${product.title}</h2>
                  <p class="card-description">${product.description}</p>
                  <p class="card-price">₹${product.price.toFixed(2)}</p>
                  <button class="cssbuttons-io-button" onclick="redirectToProductDetail(this)">
                      Buy Now
                      <div class="icon">
                          <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0 0h24v24H0z" fill="none"></path>
                              <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path>
                          </svg>
                      </div>
                  </button>
              </div>
          </div>`;
      
      container.innerHTML += cardHTML; // Append the new card HTML
  });
}

window.onload = renderProducts;

