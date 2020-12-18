

const calculatePrice = (person) =>
{

    var price = 250;
  
    return price;

}

const calculateTotalPrice = (persons) =>
{
    var totalPrice = 0;
    for (var i = 0 ; i < persons.length ; i++)
    {
        totalPrice += calculatePrice(persons[i]);
    }

    return totalPrice;
}

module.exports = {
    calculatePrice : calculatePrice,
    calculateTotalPrice : calculateTotalPrice
}