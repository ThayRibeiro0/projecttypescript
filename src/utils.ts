const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
import { LoyaltyUser, Permissions } from './enums'
import  { Review }  from './interfaces'

export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : ''
    // Ensure reviewTotalDisplay is not null before setting its innerHTML
    if (reviewTotalDisplay !== null) {
        reviewTotalDisplay.innerHTML = value.toString() + ' review' + makeMultiple(value) + ' | last reviewed by ' + reviewer + ' ' + iconDisplay;
    } else {
    // Handle the case where reviewTotalDisplay is null
        console.error("reviewTotalDisplay is null");
    }
}

export function populateUser(isReturning : boolean, userName: string ) {
    if (isReturning){
        // Ensure returningUserDisplay is not null before setting its innerHTML
        if (returningUserDisplay !== null) {
            returningUserDisplay.innerHTML = 'back';
        } else {
    // Handle the case where returningUserDisplay is null
    console.error("returningUserDisplay is null");
    }
    }
    // Ensure userNameDisplay is not null before setting its innerHTML
    if (userNameDisplay !== null) {
        userNameDisplay.innerHTML = userName;
    } else {
    // Handle the case where userNameDisplay is null
        console.error("userNameDisplay is null");
}


}

export function showDetails(value: boolean | Permissions, element : HTMLDivElement, price: number) {
    if (value) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
}

export function makeMultiple(value: number) : string {
    if (value > 1 || value == 0) {
        return 's'
    } else return ''
}

export function getTopTwoReviews(reviews : Review[]) : Review[]  {
 const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
 return sortedReviews.slice(0,2)
}