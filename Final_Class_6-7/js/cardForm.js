/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

window.addEventListener("load", function () {
    "use strict";
    var maxNum = 16,
        maxNum2 = 13,
        maxNum3 = 15;
    
    
    $("cardNum").addEventListener("input", function () {
        var cardNumber = $("cardNum").value,
            cardNumSplit = cardNumber.split(""),
            cardNumSplitFirst = cardNumSplit[0],
            cardNumOne = cardNumSplit[1];
        
        if ($("cardNum").value.length > maxNum) {
            $("cardError").innerHTML = "Enter valid number";
            $("cardError").style.color = "#ed2121";
            $("cardNum").style.border = "1px solid #ed2121";
            $("placeOrderBtn").style.background = "#ed2121";
            $("placeOrderBtn").disabled = true;
        } else {
            $("cardError").innerHTML = "";
            $("cardNum").style.border = "1px solid #0acc13";
            $("placeOrderBtn").disabled = false;
            $("placeOrderBtn").style.background = "#0acc13";
        }
        
        if (cardNumSplitFirst === "4") {
            $("cardType").innerHTML = "Visa";
            $("cardType").style.color = "#0acc13";
        } else if (cardNumSplitFirst === "5" && cardNumOne === "1") {
            $("cardType").innerHTML = "Master Card";
            $("cardType").style.color = "#0acc13";
        } else if (cardNumSplitFirst === "5" && cardNumOne === "2") {
            $("cardType").innerHTML = "Master Card";
            $("cardType").style.color = "#0acc13";
        } else if (cardNumSplitFirst === "5" && cardNumOne === "3") {
            $("cardType").innerHTML = "Master Card";
            $("cardType").style.color = "#0acc13";
        } else if (cardNumSplitFirst === "5" && cardNumOne === "4") {
            $("cardType").innerHTML = "Master Card";
            $("cardType").style.color = "#0acc13";
        } else if (cardNumSplitFirst === "5" && cardNumOne === "5") {
            $("cardType").innerHTML = "Master Card";
            $("cardType").style.color = "#0acc13";
        } else if (cardNumSplitFirst === "3" && cardNumOne === "7") {
            $("cardType").innerHTML = "American Express";
            $("cardType").style.color = "#0acc13";
        } else {
            $("cardType").innerHTML = "";
        }
        
    });
    
    
    
    
    
});
        
