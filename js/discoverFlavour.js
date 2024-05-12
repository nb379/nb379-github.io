function discoverFlavours() {
    const flavour = document.getElementById('flavourSelect').value;
    if (!flavour) {
        showModal('flavourAlertModal');
        return; 
    }


    const diets = Array.from(document.querySelectorAll('input[name="diet"]:checked')).map(el => el.value);

    if (diets.length === 0) {
        showModal('dietAlertModal');
        return;
    }
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; 

    

    const restaurants = [
        {
            name: "Masala Munch",
            flavour: "spicy",
            diets: ["vegan", "vegetarian", "gluten-free"],
            address: "101 Belgrave Road, Leicester",
            image: "1.jpg",
            description: "Masala Munch offers an exciting range of spicy Indian dishes, perfect for those who love a bit of heat.",
            popularDishes: ["Spicy Masala Dosa", "Chilli Paneer"],
            rating : 2.6,
        },
        {
            name: "Gulab Sweets",
            flavour: "sweet",
            diets: ["vegetarian"],
            address: "202 Melton Road, Leicester",
            image: "2.jpg",
            description: "Gulab Sweets is renowned for its exquisite range of Indian sweets and desserts, crafted using traditional methods.",
            popularDishes: ["Gulab Jamun", "Ras Malai"],
            rating : 3.5,
        },
        {
            name: "Tangy Tadka",
            flavour: "tangy",
            diets: ["vegan"],
            address: "303 Narborough Road, Leicester",
            image: "3.jpg",
            description: "Tangy Tadka offers a zestful twist on classic Indian dishes, perfect for those who crave tangy flavors.",
            popularDishes: ["Tamarind Rice", "Paneer Tikka"],
            rating : 4.5,
        },
        {
            name: "Spicy Treat",
            flavour: "spicy",
            diets: ["vegan","gluten-free"],
            address: "404 Uppingham Road, Leicester",
            image: "4.jpg",
            description: "Spicy Treat brings the fiery flavors of South India to the heart of Leicester with its authentic spicy cuisine.",
            popularDishes: ["Spicy Chicken Curry", "Vindaloo"],
            rating : 3.5,
        },
        {
            name: "Mithai Mandir",
            flavour: "sweet",
            diets: ["vegetarian"],
            address: "505 London Road, Leicester",
            image: "5.jpg",
            description: "Mithai Mandir serves heavenly sweet treats and desserts that are bound to satisfy your sweet tooth.",
            popularDishes: ["Kaju Katli", "Jalebi"],
            rating : 2.8,
        },
        {
            name: "Citrus Cafe",
            flavour: "tangy",
            diets: ["vegan", "vegetarian", "gluten-free"],
            address: "606 East Park Road, Leicester",
            image: "6.jpg",
            description: "Citrus Cafe delights with its tangy and refreshing Indian fusion dishes that are both vibrant and delicious.",
            popularDishes: ["Lime Rice", "Sambhar"],
            rating : 3.8,
        },
        
        {
            name: "Curry Leaf",
            flavour: "spicy",
            diets: ["vegan"],
            address: "707 Welford Road, Leicester",
            image: "7.jpg",
            description: "Curry Leaf features a bold array of spicy dishes that showcase the rich flavors of Indian cuisine.",
            popularDishes: ["Fiery Lamb Vindaloo", "Spicy Prawn Masala"],
            rating : 4.5,
        },
        {
            name: "Sugar Spice",
            flavour: "sweet",
            diets: ["vegetarian"],
            address: "808 Abbey Lane, Leicester",
            image: "8.jpg",
            description: "Sugar Spice offers a decadent menu of sweet Indian classics, from aromatic sweets to delightful pastries.",
            popularDishes: ["Sweet Lassi", "Besan Ladoo"],
            rating : 4.9,
        },
        {
            name: "Zesty Zing",
            flavour: "tangy",
            diets: ["vegetarian", "vegan"],
            address: "909 Aylestone Road, Leicester",
            image: "9.jpg",
            description: "Zesty Zing specializes in tangy and spicy Indian street food that packs a punch with every bite.",
            popularDishes: ["Bhel Puri", "Pav Bhaji"],
            rating : 4.0,
        },
        {
            name: "Royal Raj",
            flavour: "spicy",
            diets: ["vegetarian", "gluten-free"],
            address: "1010 King Street, Leicester",
            image: "10.jpg",
            description: "Royal Raj offers a regal dining experience with dishes spiced to perfection, using recipes passed down through generations.",
            popularDishes: ["Raj Kachori", "Mirchi Bada"],
            rating : 3,
        }
    ];

    const filteredRestaurants = restaurants.filter(restaurant => 
        restaurant.flavour === flavour && 
        diets.some(diet => restaurant.diets.includes(diet))
    );
    

    if (filteredRestaurants.length === 0) {
        resultsDiv.innerHTML = 'No matching restaurants found.';
        return;
    }

    filteredRestaurants.forEach(restaurant => {
        const div = document.createElement('div');
        div.className = 'restaurant-card';
        div.innerHTML = `
            <img src="images/${restaurant.image}" alt="View of ${restaurant.name}" class="restaurant-image">
            <div class="restaurant-card-content">
                <div class="restaurant-card-title">${restaurant.name}</div>
                <div class="restaurant-card-rating">${generateStarRating(restaurant.rating)}</div>
                <div class="restaurant-card-location">${restaurant.address}</div>
                <br></br>
                <div class="restaurant-card-desc">${restaurant.description}</div>
                <button class="button2" onclick="openBookingModal('${restaurant.name}')">Book Now</button>
                <button class="button2" onclick="showInfo('${restaurant.name}', '${restaurant.description}', '${restaurant.popularDishes.join(", ")}', '${restaurant.address}')">More Info</button>
            </div>
        `;
        document.getElementById('results').appendChild(div);
    });
}

function openBookingModal(restaurantName) {
    document.getElementById('restaurantName').textContent = restaurantName; 
    document.getElementById('bookingModal').style.display = 'block'; 
}


function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function confirmBooking(event) {
    event.preventDefault(); 
    const date = document.getElementById('bookingDate').value;
    const time = document.getElementById('bookingTime').value;
    const restaurantName = document.getElementById('restaurantName').textContent;
    const receiptDetails = `Your booking at ${restaurantName} is confirmed for ${date} at ${time}.`;
    document.getElementById('receiptDetails').textContent = receiptDetails;
    closeModal('bookingModal');
    document.getElementById('bookingReceipt').style.display = 'block'; 
}


function modifyBooking() {
    document.getElementById('bookingReceipt').style.display = 'none';
    document.getElementById('bookingModal').style.display = 'block'; 
}

window.onclick = function(event) {
    if (event.target.className === 'modal') {
        closeModal(event.taowrget.id);
    }
}

function showInfo(name, description, dishes, address) {
    const infoText = `
        <h3 class="h3-2">${name}</h3>
        <p class="h3-2">${description}</p>
        <p class="h3-2"><strong>Address:</strong> ${address}</p>
        <p class="h3-2"><strong>Popular Dishes:</strong> ${dishes}</p>
    `;
    document.getElementById('infoText').innerHTML = infoText;
    document.getElementById('infoModal').style.display = 'block';
}

function toggleHighContrast() {
    var body = document.body;
    body.classList.toggle('high-contrast');

    
    if (body.classList.contains('high-contrast')) {
        localStorage.setItem('highContrast', 'enabled');
    } else {
        localStorage.removeItem('highContrast');
    }
}


function applyHighContrastSetting() {
    if (localStorage.getItem('highContrast') === 'enabled') {
        document.body.classList.add('high-contrast');
    }
}

function showModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

window.onclick = function(event) {
    if (event.target.className === 'modal') {
        closeModal(event.target.id);
    }
}

document.getElementById('toggleContrast').addEventListener('click', toggleHighContrast);

document.addEventListener('DOMContentLoaded', applyHighContrastSetting);

function generateStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fa fa-star"></i>';
        } else {
            stars += '<i class="fa fa-star-o"></i>';
        }
    }
    return stars;
}
