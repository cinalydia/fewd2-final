/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

window.addEventListener("load", function () {
    "use strict";
    
//LOAD
    $("otherOptionText").style.display = "none";
    $("otherOptionTextBill").style.display = "none";
    
    /*var deliveryInfoArray = [],
        otherOptionArray = [],
        otherOptionSelected = $("otherOption").selected,
        otherOptionBillSelected = $("otherOptionBill").selected;
    $("otherOptionText").style.display = "none";
    $("otherOptionTextBill").style.display = "none";*/
    
//DELIVERY FORM VALUES
    
    /*$("deliveryOrderForm").addEventListener("change", function (e) {
        //var target = e.target;
        if (target === $("nameOrder")) {
            deliveryInfoArray[0] = target.value;
            window.console.log(deliveryInfoArray);
        } else if (target === $("streetAddressOrder")) {
            deliveryInfoArray[1] = target.value;
            window.console.log(deliveryInfoArray);
        } else if (target === $("addressNumberOrder")) {
            deliveryInfoArray[2] = target.value;
            window.console.log(deliveryInfoArray);
        } else if (target === $("cityAddressOrder")) {
            deliveryInfoArray[3] = target.value;
            window.console.log(deliveryInfoArray);
        } else if (target === $("stateAddressOrder")) {
            deliveryInfoArray[4] = target.value;
            window.console.log(deliveryInfoArray);
        } else if (target === $("zipAddressOrder")) {
            deliveryInfoArray[5] = target.value;
            window.console.log(deliveryInfoArray);
        } else if (target === $("phoneAddressOrder")) {
            deliveryInfoArray[6] = target.value;
            window.console.log(deliveryInfoArray);
        } else if (target === $("emailAddressOrder")) {
            deliveryInfoArray[7] = target.value;
            window.console.log(deliveryInfoArray);
        } 
    });
    
    
    
    $("nameOrder").addEventListener("change", function () {
        deliveryInfoArray[0] = $("nameOrder").value;
        window.console.log(deliveryInfoArray);
    });
    $("streetAddressOrder").addEventListener("change", function () {
        deliveryInfoArray[2] = $("streetAddressOrder").value;
        window.console.log(deliveryInfoArray);
    });
    $("addressNumberOrder").addEventListener("change", function () {
        deliveryInfoArray[3] = $("addressNumberOrder").value;
        window.console.log(deliveryInfoArray);
    });
    $("cityAddressOrder").addEventListener("change", function () {
        deliveryInfoArray[4] = $("cityAddressOrder").value;
        window.console.log(deliveryInfoArray);
    });
    $("stateAddressOrder").addEventListener("change", function () {
        deliveryInfoArray[5] = $("stateAddressOrder").value;
        window.console.log(deliveryInfoArray);
    });
    $("zipAddressOrder").addEventListener("change", function () {
        deliveryInfoArray[6] = $("zipAddressOrder").value;
        window.console.log(deliveryInfoArray);
    });
    $("phoneAddressOrder").addEventListener("change", function () {
        deliveryInfoArray[7] = $("phoneAddressOrder").value;
        window.console.log(deliveryInfoArray);
    });
    $("emailAddressOrder").addEventListener("change", function () {
        deliveryInfoArray[8] = $("emailAddressOrder").value;
        window.console.log(deliveryInfoArray);
    });
    
    $("buildYourOrderBtn").addEventListener("click", function () {
        window.console.log(deliveryInfoArray);
    });
    
    
//GRAB ADDRESS TYPE    
    
    $("addressType").addEventListener("change", function (e) {
        var target = e.target.value;
            otherOptionSelected = $("otherOption").selected;
            //otherOptionArray.pop(target);
        
        if (target === "House") {
            deliveryInfoArray[1] = target;
            //otherOptionArray.push(target);
        } else if (target === "Apartment") {
            deliveryInfoArray[1] = target;
            //otherOptionArray.push(target);
        } else if (target === "Business") {
            deliveryInfoArray[1] = target;
            //otherOptionArray.push(target);
        } else if (target === "Campus") {
            deliveryInfoArray[1] = target;
            //otherOptionArray.push(target);
        } else if (target === "Hotel") {
            deliveryInfoArray[1] = target;
            //otherOptionArray.push(target);
        } else if (target === "Dorm") {
            deliveryInfoArray[1] = target;
            //otherOptionArray.push(target);
        } else if (target === "Other") {
            deliveryInfoArray[1] = $("otherOptionText").value;
            //otherOptionArray.push(target);
        }
        
        if (otherOptionSelected === true) {
            $("otherOptionText").style.display = "block";
        } else {
            $("otherOptionText").style.display = "none";
        }
        
        window.console.log(otherOptionArray);
        //otherOptionArray.push(otherOptionText)
    });
    
    
$("sameAsDelivery").addEventListener("click", function () {
     $("nameBill").value = $("nameOrder").value;
     $("streetAddressOrderBill").value = $("streetAddressOrder").value;
     $("addressNumberOrderBill").value = $("addressNumberOrder").value;
     $("cityAddressOrderBill").value = $("cityAddressOrder").value;
     $("stateAddressOrderBill").value = $("stateAddressOrder").value;
     $("zipAddressOrderBill").value = $("zipAddressOrder").value;
     $("phoneAddressOrderBill").value = $("phoneAddressOrder").value;
     $("emailAddressOrderBill").value = $("emailAddressOrder").value;
});
    
    if (otherOptionBillSelected === true) {
        $("otherOptionTextBill").style.display = "block";
    } else {
        $("otherOptionTextBill").style.display = "none";
    }*/
    
    var deliveryInfoArray = [],
        billingArray = [];
    
    
    $("addressType").addEventListener("change", function (e) {
        var target = e.target.value;
        if (target === "Other") {
            $("otherOptionText").style.display = "block";
        } else {
            $("otherOptionText").style.display = "none";
            $("otherOptionText").value = "";
        }
        if (target === "House") {
            deliveryInfoArray[1] = $("addressType").value;
        } else if (target === "Apartment") {
            deliveryInfoArray[1] = $("addressType").value;
        } else if (target === "Business") {
            deliveryInfoArray[1] = $("addressType").value;
        } else if (target === "Campus") {
            deliveryInfoArray[1] = $("addressType").value;
        } else if (target === "Hotel") {
            deliveryInfoArray[1] = $("addressType").value;
        } else if (target === "Dorm") {
            deliveryInfoArray[1] = $("addressType").value;
        }
    });
    
    $("deliveryOrderForm").addEventListener("change", function (e) {
        var target = e.target;
        
        if (target === $("nameOrder")) {
            deliveryInfoArray[0] = $("nameOrder").value;
        } else if (target === $("streetAddressOrder")) {
            deliveryInfoArray[2] = $("streetAddressOrder").value;
        } else if (target === $("addressNumberOrder")) {
            deliveryInfoArray[3] = $("addressNumberOrder").value;
        } else if (target === $("cityAddressOrder")) {
            deliveryInfoArray[4] = $("cityAddressOrder").value;
        } else if (target === $("stateAddressOrder")) {
            deliveryInfoArray[5] = $("stateAddressOrder").value;
        } else if (target === $("zipAddressOrder")) {
            deliveryInfoArray[6] = $("zipAddressOrder").value;
        } else if (target === $("phoneAddressOrder")) {
            deliveryInfoArray[7] = $("phoneAddressOrder").value;
        } else if (target === $("emailAddressOrder")) {
            deliveryInfoArray[8] = $("emailAddressOrder").value;
        } else if (target === $("otherOptionText")) {
            deliveryInfoArray[1] = $("otherOptionText").value;
        }
        
        window.console.log(deliveryInfoArray);
    });
    
    
    $("sameAsDelivery").addEventListener("click", function () {
        $("nameBill").value = deliveryInfoArray[0];
        
        $("streetAddressOrderBill").value = deliveryInfoArray[2];
        
        $("addressNumberOrderBill").value = deliveryInfoArray[3];
        
        $("cityAddressOrderBill").value = deliveryInfoArray[4];
        
        $("stateAddressOrderBill").value = deliveryInfoArray[5];
        
        $("zipAddressOrderBill").value = deliveryInfoArray[6];
        
        $("otherOptionBill").value = deliveryInfoArray[1];
    });
    
    $("addressTypeBill").addEventListener("change", function (e) {
        var target = e.target.value;
        if (target === "Other") {
            $("otherOptionTextBill").style.display = "block";
        } else {
            $("otherOptionTextBill").style.display = "none";
            $("otherOptionTextBill").value = "";
        }
        if (target === "House") {
            billingArray[1] = $("addressType").value;
        } else if (target === "Apartment") {
            billingArray[1] = $("addressType").value;
        } else if (target === "Business") {
            billingArray[1] = $("addressType").value;
        } else if (target === "Campus") {
            billingArray[1] = $("addressType").value;
        } else if (target === "Hotel") {
            billingArray[1] = $("addressType").value;
        } else if (target === "Dorm") {
            billingArray[1] = $("addressType").value;
        }
    });
    
    
    $("billingOrderForm").addEventListener("change", function (e) {
        var target = e.target;
        
        if (target === $("nameBill")) {
            billingArray[0] = $("nameBill").value;
        } else if (target === $("streetAddressOrderBill")) {
            billingArray[2] = $("streetAddressOrderBill").value;
        } else if (target === $("addressNumberOrderBill")) {
            billingArray[3] = $("addressNumberOrderBill").value;
        } else if (target === $("cityAddressOrderBill")) {
            billingArray[4] = $("cityAddressOrderBill").value;
        } else if (target === $("stateAddressOrderBill")) {
            billingArray[5] = $("stateAddressOrderBill").value;
        } else if (target === $("zipAddressOrderBill")) {
            billingArray[6] = $("zipAddressOrderBill").value;
        } else if (target === $("otherOptionText")) {
            billingArray[1] = $("otherOptionText").value;
        }
        
        window.console.log(billingArray);
    });
    
});


    
    