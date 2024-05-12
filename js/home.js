document.getElementById('exploreButton').addEventListener('click', function() {
    var restaurantList = document.getElementById('restaurantList');
    if (restaurantList.style.display === 'none' || restaurantList.style.display === '') {
        restaurantList.style.display = 'block';
        restaurantList.innerHTML = `
        <br></br>
            <div class="restaurant">
                <img src="images/1.jpg" alt="View of Masala Munch" class="restaurant-image">
                <div class="restaurant-info">
                    <h3>Masala Munch</h3>
                    <p>101 Belgrave Road, Leicester</p>
                    <br></br>
                    <div class="rating">${generateStarRating(2.6)}</div>
                    <br></br>
                    <button class="button3">Book Now</button>
                    <button class="button3">More Info</button>
                </div>
                </div>
            </div>
            <div class="restaurant">
                <img src="images/2.jpg" alt="View of Gulab Sweets" class="restaurant-image">
                <div class="restaurant-info">
                    <h3>Gulab Sweets</h3>
                    <p>202 Melton Road, Leicester</p>
                    <br></br>
                    <div class="rating">${generateStarRating(3.5)}</div>
                    <br></br>
                    <button class="button3">Book Now</button>
                    <button class="button3">More Info</button>
                </div>
            </div>

            <div class="restaurant">
            <img src="images/3.jpg" alt="View of Tangy Tadka" class="restaurant-image">
            <div class="restaurant-info">
                <h3>Tangy Tadka</h3>
                <p>303 Narborough Road, Leicester</p>
                <br></br>
                <div class="rating">${generateStarRating(4.5)}</div>
                <br></br>
                <button class="button3">Book Now</button>
                <button class="button3">More Info</button>
            </div>
        </div>
        `;
    } else {
        restaurantList.style.display = 'none';
    }
});

function generateStarRating(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? '<i class="fa fa-star"></i>' : '<i class="fa fa-star-o"></i>';
    }
    return stars;
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

document.getElementById('toggleContrast').addEventListener('click', toggleHighContrast);

document.addEventListener('DOMContentLoaded', applyHighContrastSetting);

