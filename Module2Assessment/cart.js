///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((total, currentVal) => currentVal.price + total, 0)

console.log(summedPrice)
//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice (cartTotal, couponValue, tax){
    const taxRate = cartTotal * tax
    const finalPrice = cartTotal + taxRate
    const priceWithCoupon = finalPrice - couponValue
    console.log(priceWithCoupon)
    return priceWithCoupon
}
calcFinalPrice(26.97, 5, .09)

//WITH ARROW FUNCTION//
// calcFinalPrice = (cartTotal, couponValue, tax) => {
//     const taxRate = cartTotal * tax
//     const finalPrice = cartTotal + taxRate
//     const priceWithCoupon = finalPrice - couponValue
//     console.log(priceWithCoupon)
//     return priceWithCoupon
// }
// calcFinalPrice(54.34, 10, .09)

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    
    The 4 properties I'll be using on my customer object are as followed: name, birthday, email, favoriteDish, hasKids.

    Each of the first 4 properties will be a string; the last property, hasKids will return true or false.

    I chose these properties for the purpose of personalization in marketing. With the above info, we can customize a unique experience for the customer by staying in touch with them, sending birthday deals and knowing their favorite dish or if they have children.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = [
    {
        name: 'James Brown',
        birthday: '10/10/1965',
        email: 'watchyoself@gmail.com',
        favoriteDish: 'Spaghetti',
        hasKids: true
    }
]
