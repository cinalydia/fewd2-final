/*eslint-env browser*/

//OBJECTS

var handTossed = {
    small: 9.99,
    medium: 12.99,
    large: 14.99
},
    thinCrust = {
        medium: 11.99,
        large: 13.99
    },
    nyStyle = {
        large: 16.99,
        exlarge: 19.99
    },
    glutenFree = {
        small: 10.99
    },
    cheese = {
        light: 0,
        normal: 0,
        extra: 2.99,
        double: 3.99
    },
    sauce = {
        regularTomato: 0,
        heartyTomato: 0.99,
        BBQ: 1.99
    },
    toppings = {
        topping: 0.99
    };
    //orderTotalArray = [];


//LOAD

window.addEventListener("load", function () {
    "use strict";
    var $ = function (id) {
        return window.document.getElementById(id);
    };
    $("handTossedOptions").style.display = "none";
    $("thinCrustOptions").style.display = "none";
    $("nyStyleOptions").style.display = "none";
    $("glutenFreeStyleOption").style.display = "none";
    
    
//FUNCTIONS
    
    function crustOptions() {
        //option 1 (hand tossed)
        var option1 = window.document.createElement("option");
        option1.setAttribute("id", "handTossedSmall");
        option1.setAttribute("value", handTossed.small);
        option1.innerHTML = "Hand Tossed Small";

        $("handTossedOptions").appendChild(option1);
        window.console.log(option1);
        
        //option 2 (hand tossed)
        var option2 = window.document.createElement("option");
        option2.setAttribute("id", "handTossedMedium");
        option2.setAttribute("value", handTossed.medium);
        option2.innerHTML = "Hand Tossed Medium";

        $("handTossedOptions").appendChild(option2);
        window.console.log(option2);
        
        //option 3 (hand tossed)
        var option3 = window.document.createElement("option");
        option3.setAttribute("id", "handTossedLarge");
        option3.setAttribute("value", handTossed.large);
        option3.innerHTML = "Hand Tossed Large";

        $("handTossedOptions").appendChild(option3);
        window.console.log(option3);
        
        //option 4 (thin crust)
        var option4 = window.document.createElement("option");
        option4.setAttribute("id", "thinCrustMedium");
        option4.setAttribute("value", thinCrust.medium);
        option4.innerHTML = "Thin Crust Medium";

        $("thinCrustOptions").appendChild(option4);
        window.console.log(option4);
        
        //option 5 (thin crust)
        var option5 = window.document.createElement("option");
        option5.setAttribute("id", "thinCrustLarge");
        option5.setAttribute("value", thinCrust.large);
        option5.innerHTML = "Thin Crust Large";

        $("thinCrustOptions").appendChild(option5);
        window.console.log(option5);
        
        //option 6 (ny style)
        var option6 = window.document.createElement("option");
        option6.setAttribute("id", "nyStyleLarge");
        option6.setAttribute("value", nyStyle.large);
        option6.innerHTML = "New York Style Large";

        $("nyStyleOptions").appendChild(option6);
        window.console.log(option6);
        
        //option 7 (ny style)
        var option7 = window.document.createElement("option");
        option7.setAttribute("id", "nyStyleExLarge");
        option7.setAttribute("value", nyStyle.exlarge);
        option7.innerHTML = "New York Style Ex Large";

        $("nyStyleOptions").appendChild(option7);
        window.console.log(option7);
        
        //option 8 (gluten free style)
        var option8 = window.document.createElement("option");
        option8.setAttribute("id", "glutenFreeSmall");
        option8.setAttribute("value", glutenFree.small);
        option8.innerHTML = "Gluten Free Small";

        $("glutenFreeStyleOption").appendChild(option8);
        window.console.log(option8);
    }
    function cheeseOptions() {
        //light
        var option1 = window.document.createElement("option");
        option1.setAttribute("id", "cheeseLight");
        option1.setAttribute("value", cheese.light);
        option1.innerHTML = "Light: No Charge";

        $("cheeseOptions").appendChild(option1);
        window.console.log(option1);
        
        //normal
        var option2 = window.document.createElement("option");
        option2.setAttribute("id", "cheeseNormal");
        option2.setAttribute("value", cheese.normal);
        option2.innerHTML = "Normal: No Charge";

        $("cheeseOptions").appendChild(option2);
        window.console.log(option2);
        
        //extra
        var option3 = window.document.createElement("option");
        option3.setAttribute("id", "cheeseExtra");
        option3.setAttribute("value", cheese.extra);
        option3.innerHTML = "Extra: $2.99";

        $("cheeseOptions").appendChild(option3);
        window.console.log(option3);
        
        //double
        var option4 = window.document.createElement("option");
        option4.setAttribute("id", "cheeseDouble");
        option4.setAttribute("value", cheese.double);
        option4.innerHTML = "Double: $3.99";

        $("cheeseOptions").appendChild(option4);
        window.console.log(option4);
    }
    function sauceOptions() {
        //regular tomato
        var option1 = window.document.createElement("option");
        option1.setAttribute("id", "regularTomato");
        option1.setAttribute("value", sauce.regularTomato);
        option1.innerHTML = "Regular Tomato: No Charge";

        $("sauceOptions").appendChild(option1);
        window.console.log(option1);
        
        //hearty tomato
        var option2 = window.document.createElement("option");
        option2.setAttribute("id", "heartyTomato");
        option2.setAttribute("value", sauce.heartyTomato);
        option2.innerHTML = "Hearty Tomato";

        $("sauceOptions").appendChild(option2);
        window.console.log(option2);
        
        //BBQ
        var option3 = window.document.createElement("option");
        option3.setAttribute("id", "bbq");
        option3.setAttribute("value", sauce.BBQ);
        option3.innerHTML = "BBQ: $1.99";

        $("sauceOptions").appendChild(option3);
        window.console.log(option3);
    }
    function toppingOptions() {
        //pepperoni
        var option1 = window.document.createElement("input");
        var text1 = window.document.createElement("p");
        text1.innerHTML = "Pepperoni: $0.99";
        option1.setAttribute("id", "pepperoni");
        option1.setAttribute("value", toppings.topping);
        option1.setAttribute("type", "checkbox");
        text1.setAttribute("id", "pepperoniText");
        
        $("toppingOptions").appendChild(option1);
        $("toppingOptions").appendChild(text1);
        window.console.log(option1);
        
        //sausage
        var option2 = window.document.createElement("input");
        var text2 = window.document.createElement("p");
        text2.innerHTML = "Sausage: $0.99";
        option2.setAttribute("id", "sausage");
        option2.setAttribute("value", toppings.topping);
        option2.setAttribute("type", "checkbox");
        text2.setAttribute("id", "sausageText");
        
        $("toppingOptions").appendChild(option2);
        $("toppingOptions").appendChild(text2);
        window.console.log(option2);
        
        //ham
        var option3 = window.document.createElement("input");
        var text3 = window.document.createElement("p");
        text3.innerHTML = "Ham: $0.99";
        option3.setAttribute("id", "ham");
        option3.setAttribute("value", toppings.topping);
        option3.setAttribute("type", "checkbox");
        text3.setAttribute("id", "hamText");
        
        $("toppingOptions").appendChild(option3);
        $("toppingOptions").appendChild(text3);
        window.console.log(option3);
        
        //bacon
        var option4 = window.document.createElement("input");
        var text4 = window.document.createElement("p");
        text4.innerHTML = "Bacon: $0.99";
        option4.setAttribute("id", "bacon");
        option4.setAttribute("value", toppings.topping);
        option4.setAttribute("type", "checkbox");
        text4.setAttribute("id", "baconText");
        
        $("toppingOptions").appendChild(option4);
        $("toppingOptions").appendChild(text4);
        window.console.log(option4);
        
        //salami
        var option5 = window.document.createElement("input");
        var text5 = window.document.createElement("p");
        text5.innerHTML = "Bacon: $0.99";
        option5.setAttribute("id", "salami");
        option5.setAttribute("value", toppings.topping);
        option5.setAttribute("type", "checkbox");
        text5.setAttribute("id", "baconText");
        
        $("toppingOptions").appendChild(option5);
        $("toppingOptions").appendChild(text5);
        window.console.log(option5);
        
        //peppers
        var option6 = window.document.createElement("input");
        var text6 = window.document.createElement("p");
        text6.innerHTML = "Peppers: $0.99";
        option6.setAttribute("id", "peppers");
        option6.setAttribute("value", toppings.topping);
        option6.setAttribute("type", "checkbox");
        text6.setAttribute("id", "peppersText");
        
        $("toppingOptions").appendChild(option6);
        $("toppingOptions").appendChild(text6);
        window.console.log(option6);
        
        //olives
        var option7 = window.document.createElement("input");
        var text7 = window.document.createElement("p");
        text7.innerHTML = "Olives: $0.99";
        option7.setAttribute("id", "olives");
        option7.setAttribute("value", toppings.topping);
        option7.setAttribute("type", "checkbox");
        text7.setAttribute("id", "olivesText");
        
        $("toppingOptions").appendChild(option7);
        $("toppingOptions").appendChild(text7);
        window.console.log(option7);
        
        //jalepenos
        var option8 = window.document.createElement("input");
        var text8 = window.document.createElement("p");
        text8.innerHTML = "Jalepenos: $0.99";
        option8.setAttribute("id", "jalepenos");
        option8.setAttribute("value", toppings.topping);
        option8.setAttribute("type", "checkbox");
        text8.setAttribute("id", "jalepenosText");
        
        $("toppingOptions").appendChild(option8);
        $("toppingOptions").appendChild(text8);
        window.console.log(option8);
        
        //mushrooms
        var option9 = window.document.createElement("input");
        var text9 = window.document.createElement("p");
        text9.innerHTML = "Mushrooms: $0.99";
        option9.setAttribute("id", "mushrooms");
        option9.setAttribute("value", toppings.topping);
        option9.setAttribute("type", "checkbox");
        text9.setAttribute("id", "mushroomsText");
        
        $("toppingOptions").appendChild(option9);
        $("toppingOptions").appendChild(text9);
        window.console.log(option9);
        
        //pineapple
        var option10 = window.document.createElement("input");
        var text10 = window.document.createElement("p");
        text10.innerHTML = "Pineapple: $0.99";
        option10.setAttribute("id", "pineapple");
        option10.setAttribute("value", toppings.topping);
        option10.setAttribute("type", "checkbox");
        text10.setAttribute("id", "pineappleText");
        
        $("toppingOptions").appendChild(option10);
        $("toppingOptions").appendChild(text10);
        window.console.log(option10);
        
        //onion
        var option11 = window.document.createElement("input");
        var text11 = window.document.createElement("p");
        text11.innerHTML = "Onion: $0.99";
        option11.setAttribute("id", "onion");
        option11.setAttribute("value", toppings.topping);
        option11.setAttribute("type", "checkbox");
        text11.setAttribute("id", "onionText");
        
        $("toppingOptions").appendChild(option11);
        $("toppingOptions").appendChild(text11);
        window.console.log(option11);
    }
    crustOptions();
    cheeseOptions();
    sauceOptions();
    toppingOptions();

    function getSum(total, num) {
        return total + num;
    }

//EVENT LISTENER(S)
        
    $("buildYourOrderBtn").addEventListener("click", function () {
        $("handTossed").checked = true;
        $("pepperoni").setAttribute("checked", "true");
        $("handTossedOptions").style.display = "block";

        $("crust").innerHTML = handTossed.small;
        subTotalArray[0] = parseFloat($("crust").innerHTML);
        
        $("cheese").innerHTML = $("cheeseOptions").value;
        subTotalArray[1] = parseFloat($("cheese").innerHTML);
        
        $("sauce").innerHTML = $("sauceOptions").value;
        subTotalArray[2] = parseFloat($("sauce").innerHTML);
        
        $("toppings").innerHTML = toppings.topping;
        subTotalArray[3] = parseFloat($("toppings").innerHTML);
        
        //window.console.log(eval(subTotalArray.join("+")));
        //$("totalOrder").innerHTML = eval(subTotalArray.join("+"));
        
        window.console.log(subTotalArray.reduce(getSum));
        $("totalOrder").innerHTML = subTotalArray.reduce(getSum).toFixed(2);
    });
    
    var subTotalArray = [];
    
    
    $("pizzaOrderForm").addEventListener("click", function (e) {
        
        var target = e.target;
        if (target === $("handTossed")) {
            $("handTossedOptions").style.display = "block";
            $("thinCrustOptions").style.display = "none";
            $("nyStyleOptions").style.display = "none";
            $("glutenFreeStyleOption").style.display = "none";
            
            $("crust").innerHTML = handTossed.small;
            
            //$("crust").innerHTML = $("handTossedOptions").value;
            subTotalArray[0] = parseFloat($("crust").innerHTML);
            //$("totalOrder").innerHTML = eval(subTotalArray.join("+"));
            
            $("totalOrder").innerHTML = subTotalArray.reduce(getSum).toFixed(2);
            
            window.console.log(subTotalArray.reduce(getSum));
            
        } else if (target === $("thinCrust")) {
            $("handTossedOptions").style.display = "none";
            $("thinCrustOptions").style.display = "block";
            $("nyStyleOptions").style.display = "none";
            $("glutenFreeStyleOption").style.display = "none";
            
            $("crust").innerHTML = thinCrust.medium;
            
            //$("crust").innerHTML = $("handTossedOptions").value;
            subTotalArray[0] = parseFloat($("crust").innerHTML);
            //$("totalOrder").innerHTML = eval(subTotalArray.join("+"));
            
            $("totalOrder").innerHTML = subTotalArray.reduce(getSum).toFixed(2);
            
            window.console.log(subTotalArray.reduce(getSum));
            
        } else if (target === $("nyStyle")) {
            $("handTossedOptions").style.display = "none";
            $("thinCrustOptions").style.display = "none";
            $("nyStyleOptions").style.display = "block";
            $("glutenFreeStyleOption").style.display = "none";
            
            $("crust").innerHTML = nyStyle.large;
            
            //$("crust").innerHTML = $("handTossedOptions").value;
            subTotalArray[0] = parseFloat($("crust").innerHTML);
            //$("totalOrder").innerHTML = eval(subTotalArray.join("+"));
            
            $("totalOrder").innerHTML = subTotalArray.reduce(getSum).toFixed(2);
            
            window.console.log(subTotalArray.reduce(getSum));
            
        } else if (target === $("glutenFree")) {
            $("handTossedOptions").style.display = "none";
            $("thinCrustOptions").style.display = "none";
            $("nyStyleOptions").style.display = "none";
            $("glutenFreeStyleOption").style.display = "block";
            
            $("crust").innerHTML = glutenFree.small;
            
            //$("crust").innerHTML = $("handTossedOptions").value;
            subTotalArray[0] = parseFloat($("crust").innerHTML);
            //$("totalOrder").innerHTML = eval(subTotalArray.join("+"));
            
            $("totalOrder").innerHTML = subTotalArray.reduce(getSum).toFixed(2);
            
            window.console.log(subTotalArray.reduce(getSum));
        }
    });
    
    $("handTossedOptions").addEventListener("change", function () {
        $("crust").innerHTML = $("handTossedOptions").value;
        subTotalArray[0] = parseFloat($("crust").innerHTML);
        //$("totalOrder").innerHTML = eval(subTotalArray.join("+"));
        
        $("totalOrder").innerHTML = subTotalArray.reduce(getSum).toFixed(2); window.console.log(subTotalArray.reduce(getSum));
    });
    
    $("thinCrustOptions").addEventListener("change", function () {
        $("crust").innerHTML = $("thinCrustOptions").value;
        subTotalArray[0] = parseFloat($("crust").innerHTML);
        //$("totalOrder").innerHTML = eval(subTotalArray.join("+"));
        
        $("totalOrder").innerHTML = subTotalArray.reduce(getSum).toFixed(2); window.console.log(subTotalArray.reduce(getSum));
    });
    
    $("nyStyleOptions").addEventListener("change", function () {
        $("crust").innerHTML = $("nyStyleOptions").value;
        subTotalArray[0] = parseFloat($("crust").innerHTML);
        //$("totalOrder").innerHTML = eval(subTotalArray.join("+"));
        
        $("totalOrder").innerHTML = subTotalArray.reduce(getSum).toFixed(2); window.console.log(subTotalArray.reduce(getSum));
    });
    $("glutenFreeStyleOption").addEventListener("change", function () {
        $("crust").innerHTML = $("glutenFreeStyleOption").value;
        subTotalArray[0] = parseFloat($("crust").innerHTML);
        //$("totalOrder").innerHTML = eval(subTotalArray.join("+"));
        
        $("totalOrder").innerHTML = subTotalArray.reduce(getSum).toFixed(2); window.console.log(subTotalArray.reduce(getSum));
    });

    $("cheeseOptions").addEventListener("change", function () {
        $("cheese").innerHTML = $("cheeseOptions").value;
        subTotalArray[1] = parseFloat($("cheese").innerHTML);
        //$("totalOrder").innerHTML = eval(subTotalArray.join("+"));
        
        $("totalOrder").innerHTML = subTotalArray.reduce(getSum).toFixed(2); window.console.log(subTotalArray.reduce(getSum));
        
    });
    
    $("sauceOptions").addEventListener("change", function () {
        $("sauce").innerHTML = $("sauceOptions").value;
        subTotalArray[2] = parseFloat($("sauce").innerHTML);
        //$("totalOrder").innerHTML = eval(subTotalArray.join("+"));
        
        $("totalOrder").innerHTML = subTotalArray.reduce(getSum).toFixed(2); window.console.log(subTotalArray.reduce(getSum));
    });
    
    $("toppingOptions").addEventListener("click", function (e) {
        var check = e.target.checked;
        
        if (check === true) {
            subTotalArray.push(parseFloat(e.target.value));
            $("totalOrder").innerHTML = subTotalArray.reduce(getSum).toFixed(2);
        } else {
            subTotalArray.pop(e.target.value);
            $("totalOrder").innerHTML = subTotalArray.reduce(getSum).toFixed(2);
        }
        
        
        //subTotalArray[3] = e.target.value;
        
        //window.console.log(subTotalArray);
        window.console.log(subTotalArray.reduce(getSum).toFixed(2));
    });
    

    
    
    

    
    
    
    
    
    
});



/*var toppingsArray = [];
        toppingsArray.push(e.target.value);
        /*if (e.target === $("pepperoni")) {
            toppingsArray.push(e.target.value);
        } else if (e.target === $("sausage")) {
            toppingsArray.push(e.target.value);
        }
        
        $("toppings").innerHTML = eval(toppingsArray);
        
        window.console.log(toppingsArray);
        
        
        if (target === $("pepperoni")) {
            $("toppings").innerHTML += toppings.topping;
            $("toppingsSelect").innerHTML += $("pepperoniText").innerHTML;
        }
        if (target === $("sausage")) {
            $("toppings").innerHTML += toppings.topping;
            $("toppingsSelect").innerHTML += $("sausageText").innerHTML;
        }*/
