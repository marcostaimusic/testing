const db = require('./db')
const mail = require('./mail')

//Real functions - non so perchè Mosh scrive "Mock functions"
module.exports.applyDiscount = function(order) {
    const customer = db.getCustomerSync(order.customerId)

    if (customer.points > 10) {
        order.totalPrice *= 0.9
    }
}

//dalla lezione Interaction Testing
module.exports.notifyCustomer = function (order){
    const customer = db.getCustomerSync(order.customerId)
    mail.send(customer.email, "Your order was placed succesfully")
}