"use strict";
// Code Tidy
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainProperty = void 0;
const utils_1 = require("./utils");
const enums_1 = require("./enums");
const propertyContainer = document.querySelector('.properties');
const reviewContainer = document.querySelector('.reviews');
const container = document.querySelector('.container');
const button = document.querySelector('button');
const footer = document.querySelector('.footer');
let isLoggedIn;
// Reviews
const reviews = [
    {
        name: 'Sheila',
        stars: 5,
        loyaltyUser: enums_1.LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: enums_1.LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: enums_1.LoyaltyUser.SILVER_USER,
        date: '27-03-2021',
    },
];
const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: enums_1.Permissions.ADMIN,
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};
// Array of Properties
const properties = [
    {
        image: '../images/colombia-property.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+112343823978921, 'marywinkle@gmail.com'],
        isAvailable: true
    },
    {
        image: 'images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 30,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [+1298239028490830, 'garydavis@hotmail.com'],
        isAvailable: false
    },
    {
        image: 'images/london-property.jpg',
        title: 'London Flat',
        price: 25,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 'SW4 5XW',
            country: 'United Kingdom',
        },
        contact: [+34829374892553, 'andyluger@aol.com'],
        isAvailable: true
    },
    {
        image: 'images/malaysian-hotel.jpeg',
        title: 'Malia Hotel',
        price: 35,
        location: {
            firstLine: 'Room 4',
            city: 'Malia',
            code: 45334,
            country: 'Malaysia'
        },
        contact: [+60349822083, 'lee34@gmail.com'],
        isAvailable: false
    }
];
// Functions
(0, utils_1.showReviewTotal)(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
(0, utils_1.populateUser)(you.isReturning, you.firstName);
// Add the properties
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = properties[i].title;
    const image = document.createElement('img');
    image.setAttribute('src', properties[i].image);
    card.appendChild(image);
    (0, utils_1.showDetails)(you.permissions, card, properties[i].price);
    // Ensure propertyContainer is not null before appending child
    if (propertyContainer !== null) {
        propertyContainer.appendChild(card);
    }
}
let count = 0;
function addReviews(array) {
    if (!count) {
        count++;
        const topTwo = (0, utils_1.getTopTwoReviews)(array);
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div');
            card.classList.add('review-card');
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name;
            // Ensure reviewContainer is not null before appending child
            if (reviewContainer !== null) {
                reviewContainer.appendChild(card);
            }
            else {
                // Handle the case where reviewContainer is null
                console.error("reviewContainer is null");
            }
        }
        // Ensure container is not null and button is not null before removing the button
        if (container !== null && button !== null) {
            container.removeChild(button);
        }
        else {
            // Handle the case where either container or button is null
            console.error("container or button is null");
        }
    }
}
// Ensure button is not null before adding the event listener
if (button !== null) {
    button.addEventListener('click', () => addReviews(reviews));
}
else {
    // Handle the case where button is null
    console.error("button is null");
}
let currentLocation = ['London', '11.03', 17];
if (footer !== null) {
    footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°';
}
else {
    console.error("footer is null");
}
// Classes
class MainProperty {
    constructor(src, title, reviews) {
        this.src = src;
        this.title = title;
        this.reviews = reviews;
    }
}
exports.MainProperty = MainProperty;
let yourMainProperty = new MainProperty('images/italian-property.jpg', 'Italian House', [{
        name: 'Olive',
        stars: 5,
        loyaltyUser: enums_1.LoyaltyUser.GOLD_USER,
        date: '12-04-2021'
    }]);
const mainImageContainer = document.querySelector('.main-image');
const image = document.createElement('img');
image.setAttribute('src', yourMainProperty.src);
if (mainImageContainer !== null) {
    mainImageContainer.appendChild(image);
}
else {
    console.error("mainImageContainer is null");
}
