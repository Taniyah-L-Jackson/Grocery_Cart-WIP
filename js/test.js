//item amount cannot be less than 1

//add items to list
function add(fName, lName) {
    event.preventDefault();
    var message = document.getElementById('output')
    message.innerText = "mundo";

    var cart = { 
        Item_One: fName,
        Price: lName
    }

    console.log(cart)
}

//remove items from list
function remove(params) {
    
}





//-------------------------------------------
//add items to checkout list
//use onclick
//When Checkout is pressed, reset checkout list to zero
//Keep track of sold items