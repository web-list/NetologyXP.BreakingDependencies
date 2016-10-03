"use strict";

function getCurrentCustomer() {
     return {
        name: "martin",
        rentals: [{
            "movieID": "F001",
            "days": 3
        }, {
            "movieID": "F002",
            "days": 1
        }, ]
    };
}

function getCustomerMovies() {
    return {
        "F001": {
            "title": "Ran",
            "code": "regular"
        },
        "F002": {
            "title": "Trois Couleurs: Bleu",
            "code": "regular"
        }
    };
}

function productionCode() {
    let customer = getCurrentCustomer();
    let movies = getCustomerMovies();
    processOrder(customer, movies);
}

function processOrder(customer, movies) {
    let totalAmount = 0;
    let frequentRenterPoints = 0;
    let result = `Rental Record for ${customer.name}\n`;

    for (let r of customer.rentals) {
        frequentRenterPoints += frequentRenterPointsFor(r);
    }
    for (let r of customer.rentals) {
        result += `\t${movieFor(r).title}\t${amountFor(r)}\n`;
    }
    for (let r of customer.rentals) {
        totalAmount += amountFor(r);
    }
    // add footer lines
    result += `Amount owed is ${totalAmount}\n`;
    result += `You earned ${frequentRenterPoints} frequent renter points\n`;

    console.log(result);

    function movieFor(rental) {return movies[rental.movieID];}

    function amountFor(r) {
        let thisAmount = 0;

        // determine amount for each movie
        switch (movieFor(r).code) {
            case "regular":
                thisAmount = 2;
                if (r.days > 2) {
                    thisAmount += (r.days - 2) * 1.5;
                }
                break;
            case "new":
                thisAmount = r.days * 3;
                break;
            case "childrens":
                thisAmount = 1.5;
                if (r.days > 3) {
                    thisAmount += (r.days - 3) * 1.5;
                }
                break;
        }

        return thisAmount;
    }

    function frequentRenterPointsFor(r) {
        return (movieFor(r).code === "new" && r.days > 2) ? 2 : 1;
    }
}

productionCode();


///####################
///Tests
// function assert(expected, actual){
//     if (expected !== actual) {
//         console.log(`Fail! Expected: ${expected}, Actual: ${actual}` );
//     }
// }
//
// function contains(string, substring){
//     return string.indexOf(substring) !== -1;
// }
//
//assert(productionCode(), true);