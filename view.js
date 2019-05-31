$(document).ready(function(){

    var listItems = reservations.forEach(function(element){

        return `
        <li>
        Customer Name: ${element.customerName}
        Customer Phone Number: ${element.phoneNumber}
        Customer Email: ${element.customerEmail}
        Customer ID: ${element.customerID}
        </li>
        `

    });

    $("#reservations").append(listItems);

    
})
