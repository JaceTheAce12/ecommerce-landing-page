const products = [
    { name: "Cool Black Tee", price: 14.99, image: "/images/product1.jpg" },
    { name: "Cool Green Tee", price: 19.99, image: "/images/product2.jpg" },
    { name: "Cool Black Long Tee", price: 24.99, image: "/images/product3.jpg" }
];

const reviewsData = [
    {
        name: "Jared Fillmore",
        avatar: "/images/avatar1.png",
        review: "I absolutely love the products from jclothing. The quality and style are unmatched. I've been a loyal customer for years!",
        starPlaceholder: "/images/5starRating.svg"
    },
    {
        name: "Elizabeth Lewis",
        avatar: "/images/avatar2.png",
        review: "The clothing is not only fashionable but also comfortable. I highly recommend jclothing for anyone looking for quality fashion.",
        starPlaceholder: "/images/5starRating.svg"
    },
    {
        name: "Grant Phillips",
        avatar: "/images/avatar3.png",
        review: "Great clothing selection and excellent service. I'm impressed with jclothing's commitment to sustainable fashion.",
        starPlaceholder: "/images/5starRating.svg"
    },
    {
        name: "Ryan Gosling",
        avatar: "/images/avatar4.png",
        review: "I've found my go-to clothing brand with jclothing. The stylish designs and quality materials are top-notch!",
        starPlaceholder: "/images/5starRating.svg"
    },
];

function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("product-card");
    
    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.name;
    
    const productName = document.createElement("h2");
    productName.textContent = product.name;
    
    const productPrice = document.createElement("p");
    productPrice.textContent = `$${product.price.toFixed(2)}`;
    
    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "ADD TO CART";
    
    card.appendChild(productImage);
    card.appendChild(productName);
    card.appendChild(productPrice);
    card.appendChild(addToCartButton);
    
    return card;
}

function addProductCards() {
    const productList = document.querySelector("#productList");
    
    products.forEach((product) => {
        const productCard = createProductCard(product);
        productList.appendChild(productCard);
    });
}

window.addEventListener("load", addProductCards);

// Function to create and append review cards
function createReviewCard(review) {
    const reviewContainer = document.querySelector("#product-review");

    const reviewCard = document.createElement("div");
    reviewCard.classList.add("review-card");

    const avatar = document.createElement("img");
    avatar.src = review.avatar;
    avatar.alt = `${review.name}'s Avatar`;
    avatar.classList.add("customer-avatar");

    const reviewText = document.createElement("div");
    reviewText.classList.add("review-text");

    const customerName = document.createElement("h3");
    customerName.textContent = review.name;

    const starRating = document.createElement("img");
    starRating.src = review.starPlaceholder;
    starRating.alt = `Rating: ${review.rating} stars`;
    starRating.classList.add("star-rating");

    const customerReview = document.createElement("p");
    customerReview.textContent = `"${review.review}"`;

    reviewText.appendChild(customerName);
    reviewText.appendChild(starRating);
    reviewText.appendChild(customerReview);

    reviewCard.appendChild(avatar);
    reviewCard.appendChild(reviewText);

    reviewContainer.appendChild(reviewCard);
}

// Append review cards using the data
reviewsData.forEach((review) => {
    createReviewCard(review);
});

const mobileMenu = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

