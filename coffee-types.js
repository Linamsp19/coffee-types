function coffee(ingredient1, ingredient2, ingredient3, ingredient4) {
    if (ingredient1 === "Coffee" && ingredient2 === "Coffee" ) {
        console.log("Espresso");
    } else {
        if (ingredient1 === "Espresso" && ingredient2 === "Water") {
            console.log("Americano");
        } else if (ingredient1 === "Espresso" && ingredient2 === "Steamed Milk") {
            console.log("Flat white");
        } else if (ingredient1 === "Espresso" && ingredient2 === "Steamed Milk" && ingredient3 === "Milk Foam") {
            console.log("Latte");
        } else if (ingredient1 === "Espresso" && ingredient2 === "Steamed Milk" && ingredient3 === "Cream") {
            console.log("Latte Macchiato");
        } else if (ingredient1 === "Espresso" && ingredient2 === "Ice Cream" && ingredient3 === "Grated Chocolate") {
            console.log("Glace");
        } else if (ingredient1 === "Chocolate" && ingredient2 === "Espresso" && ingredient3 === "Steamed Milk" && ingredient4 === "Cream") {
            console.log("Mocha");
        } else {
            console.log("O");
        }
    }
}

coffee("Coffee", "Coffee");
coffee("Espresso", "Water");
coffee("Espresso", "Steamed Milk");
coffee("Espresso", "Steamed Milk", "Milk Foam");
coffee("Espresso", "Steamed Milk", "Cream");
coffee("Espresso", "Ice Cream", "Grated Chocolate");
coffee("Chocolate", "Espresso", "Steamed Milk", "Cream");
