//item amount cannot be less than 1

//add items to list

var cart = [] //start with an empty shopping cart
var checkout = 0 //checkout prices total (in qty)

function add(item, price, cart) { //push elements to the list when the '+' is pressed (pass an empty cart through the program also)

    event.preventDefault(); //to prevent any unwanted event from happening
    // var listName = document.getElementById('list name one') //to show in the DOM
    // var listPrice = document.getElementById('list price one') //to show in the DOM
    // var listNameTwo = document.getElementById('list name two') //to show in the DOM
    // var listPriceTwo = document.getElementById('list price two') //to show in the DOM
    var shoppingList = document.getElementById('shoppingList')

    //set up the list to store the elements
    if(!cart.length) { //if the cart is empty
        cart.push ({ //push item to array
            name: item,
            price: price,
            qty: 1
        });

        // listName.innerHTML = `${item}`; //show the item name
        // listPrice.innerHTML = `${price}`; //show the item price   
        // Use cart.length to display the number
        shoppingList.innerHTML = JSON.stringify(cart)

        checkout += price //needs a plus because it possibly gets reset somewhere in the code

    }else { //if the cart is not empty

        let found = false; // set the found variable to false to search for the variable

        //item is found (repetitive item)
        cart.forEach(function(buyingItem) { //find the element in the cart

            if(buyingItem.name == item) { //increment the qty and price if there is a match
                buyingItem.qty++
                buyingItem.price += price
                checkout += price
                found = true;
            }
        });


        //item is not found
        if(!found) { //!false is true
            cart.push ({ //push item to array
                name: item,
                price: price,
                qty: 1
                
            });

            // listName.innerHTML = `${item}` //show the item name
            // listPrice.innerHTML = `${price}`; //show the item price 
            shoppingList.innerHTML = JSON.stringify(cart)

            checkout += price
        }

    }

    var result = document.getElementById('output') //to show in the DOM
    result.innerText = checkout.toFixed(2); //total
}

function remove(item, price, cart) { //remove elements from the list when '-' is pressed (pass cart also)

    event.preventDefault(); //to prevent any unwanted event from happening
    var listName = document.getElementById('list name') //to show in the DOM
    var listPrice = document.getElementById('list price') //to show in the DOM

    if(cart.length != 0) { //if the cart is not empty

        let found = false ; // set the found variable to false to search for the variable

        //item is found (repetitive item)
        cart.forEach(function(buyingItem,idx) { //find the element in the cart (idx is to find the specific location of the element)

            if(buyingItem.name == item) { //decrement the qty and price if there is a match

                buyingItem.qty--
                buyingItem.price -= price
                checkout -= price
                found = true;

                if(buyingItem.qty <= 0) { //this is to remove the item completely
                    cart.splice(idx, 1) //use splice to remove specific element (idx is used to remove that specific element)
                }

                // listName.innerHTML = item //show the item name
                // listPrice.innerHTML = price; //show the item price 
                shoppingList.innerHTML = JSON.stringify(cart).value
    
            }

        });

    }

    var result = document.getElementById('output') //to show in the DOM
    result.innerText = checkout.toFixed(2); //total
    
}




//set counter to 0
//when button is pressed, add item to cart 
//-------------------------------------------
//add items to checkout list
//use onclick
//When Checkout is pressed, reset checkout list to zero
//Keep track of sold items

