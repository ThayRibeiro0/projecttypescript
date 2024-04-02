const reviewTotalDisplay = document.querySelector('#reviews');
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
import { LoyaltyUser } from './enums';
export function showReviewTotal(value, reviewer, isLoyalty) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : '';
    // Ensure reviewTotalDisplay is not null before setting its innerHTML
    if (reviewTotalDisplay !== null) {
        reviewTotalDisplay.innerHTML = value.toString() + ' review' + makeMultiple(value) + ' | last reviewed by ' + reviewer + ' ' + iconDisplay;
    }
    else {
        // Handle the case where reviewTotalDisplay is null
        console.error("reviewTotalDisplay is null");
    }
}
export function populateUser(isReturning, userName) {
    if (isReturning) {
        // Ensure returningUserDisplay is not null before setting its innerHTML
        if (returningUserDisplay !== null) {
            returningUserDisplay.innerHTML = 'back';
        }
        else {
            // Handle the case where returningUserDisplay is null
            console.error("returningUserDisplay is null");
        }
    }
    // Ensure userNameDisplay is not null before setting its innerHTML
    if (userNameDisplay !== null) {
        userNameDisplay.innerHTML = userName;
    }
    else {
        // Handle the case where userNameDisplay is null
        console.error("userNameDisplay is null");
    }
}
export function showDetails(value, element, price) {
    if (value) {
        const priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = price.toString() + '/night';
        element.appendChild(priceDisplay);
    }
}
export function makeMultiple(value) {
    if (value > 1 || value == 0) {
        return 's';
    }
    else
        return '';
}
export function getTopTwoReviews(reviews) {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars);
    return sortedReviews.slice(0, 2);
}
