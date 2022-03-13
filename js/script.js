/*------- Body Onload -------*/
function init(){
    title_checked();
    Customization_checkbox();
    cards1_2Selection();
    $(".card_2").addClass("d-none");
    cardsSelection();
    $(".second_address").hide();
    $(".section").hide();
    $(".depo").hide();
    $(".allPrices").addClass("d-none");
    $("#card_1_2_pay_1").addClass("d-none");
    $(".mr_miss_price_2").addClass("d-none");
    $(".space").addClass("d-none");
    $('.deletePrices').addClass("d-none");
    $(".eight").addClass("d-none");
    greenCard();
    $("#country").change();        
}

                    // page 1 //

/*------- Go to mr/miss/corporate/association form -------*/
function title_checked() {
    let a = document.querySelector('#Corporate');
    let b = document.querySelector('#Association'); 
    if (a.checked){
        $(".corporate").removeClass("d-none"); 
        $(".association").addClass("d-none");
        $(".cardAccount").removeClass("d-none");
        $(".mr_miss").addClass("d-none");
        $(".title").text('corporate information')
        $("#select_demo").addClass("d-none");
        $("#card_1_2_pay_2").addClass("d-none");
        delete_Mr_Miss();
        $(".deletePrices").addClass("d-none");
        $(".eight").removeClass("d-none");
        $("#CardSelection").change();
        document.querySelector('.upgrade8').innerHTML = "Fixed (upgrade corporate)";
        Corporate_Details()
        totalPrice_zero()
    }else if (b.checked) {
        $(".corporate").addClass("d-none");
        $(".association").removeClass("d-none");
        $(".cardAccount").removeClass("d-none");
        $(".mr_miss").addClass("d-none");
        $(".title").text('association information');
        $("#select_demo").addClass("d-none");
        $("#card_1_2_pay_2").addClass("d-none");
        delete_Mr_Miss();
        $(".deletePrices").addClass("d-none");
        $(".eight").removeClass("d-none");
        $("#CardSelection").change();
        document.querySelector('.upgrade8').innerHTML = "Fixed (upgrade association)";
        Association_Details()
        totalPrice_zero()
    }else {
        $(".corporate").addClass("d-none");
        $(".association").addClass("d-none");
        $(".cardAccount").addClass("d-none");
        $(".mr_miss").removeClass("d-none");
        $(".title").text('personal details')
        MrAndMiss()
        $('.section').hide();
        $('.depo').hide();
        $(".allPrices").addClass("d-none");
        $(".space").addClass("d-none");
        $(".card_1").show();
        $(".eight").addClass("d-none");
        $("#select_demo").removeClass("d-none");
        totalPrice_zero()
        deleteCard();
        $("#sec_custom").addClass("d-none");
        $("#sec_iban").addClass("d-none");
        $("#add_btn").removeClass("d-none");
        
    
    } 
  }


/*------- Mr/Miss Add Card -------*/
function addCard(){
    document.getElementById('sec_custom').classList.toggle("d-none");
    document.getElementById('sec_iban').classList.toggle("d-none");
    document.getElementById('add_btn').classList.toggle("d-none");
    document.querySelector('.card_1').classList.toggle("d-block");
    document.querySelector('.card_2').classList.toggle("d-none");
    document.querySelector('.circle').innerHTML = 2;
    $(".mr_miss_price_2").removeClass("d-none");
    $(".card_1_2_pay_2").removeClass("d-none");
}
/*------- Mr/Miss delete Card -------*/
function deleteCard(){
    document.querySelector('.circle').innerHTML = 1;
    $(".card_1").show();
    $(".card_2").addClass("d-none");
    $(".mr_miss_price_2").addClass("d-none");
    $(".card_1_2_pay_2").addClass("d-none");
    $('#Card_1_22').val('0');
    $('.selectPrice').change();
}

/*------- Mr/Miss Card1 & Card2 prices in the cart  -------*/
function selectPrice(elem){
    var currentVal = $(elem).val();
    number = (elem.id).slice(-1); 
    $('.Prices_' + number).addClass("d-none");
    $('#' + currentVal).removeClass("d-none");
}
function cards1_2Selection() {
    let selcet1_2 = "";
    let price1_2 = "";

    for (let i = 1; i < 3; i++) {
        selcet1_2 += "<div id='card_" + i + "' class='card_" + i + " mb-3 mt-4 col-md-12'><label for='Card" + i + "' class='form-label'>Card #" + i + " First Deposit</label><select class='selectPrice form-select' id='Card_1_2" + i + "' name='Card" + i + "' onchange='selectPrice(this)' ><option value='0' selected>0</option><option value='a" + i + "_10'>10 &euro;</option><option value='a" + i + "_20'>20 &euro;</option><option value='a" + i + "_30'>30 &euro; recommended</option><option value='a" + i + "_100'>100 &euro;</option></select></div>";
        price1_2 += "<div class= 'mr_miss_price_" + i + "'><div id='card_1_2_pay_" + i + "' class='reward space_1_2 d-flex flex-wrap justify-content-between'><div><i class='far fa-trash-alt text-danger me-1' onclick= 'delete_card_1_2(this)' id='" + i + "'></i>1 x card (annual fees)</div><div>29.90 &euro; </div></div><div id='a" + i + "_10' class='Prices_" + i + " deletePrices d-flex flex-wrap justify-content-between'><div><i class='far fa-trash-alt me-1' onclick= 'delete_Price_1_2(this)' id='" + i + "'></i>First deposit</div><div>10.00 &euro;</div></div><div id='a" + i + "_20' class='Prices_" + i + " deletePrices d-flex flex-wrap justify-content-between'><div><i class='far fa-trash-alt me-1' onclick= 'delete_Price_1_2(this)' id='" + i + "'></i>First deposit</div><div>20.00 &euro;</div></div><div id='a" + i + "_30' class='Prices_" + i + " deletePrices d-flex flex-wrap justify-content-between'><div><i class='far fa-trash-alt me-1' onclick= 'delete_Price_1_2(this)' id='" + i + "'></i>First deposit</div><div>30.00 &euro;</div></div><div id='a" + i + "_100' class='Prices_" + i + " deletePrices d-flex flex-wrap justify-content-between'><div><i class='far fa-trash-alt me-1' onclick= 'delete_Price_1_2(this)' id='" + i + "'></i>First deposit</div><div>100.00 &euro;</div></div>";
        }
        document.getElementById("select_demo").innerHTML = selcet1_2;
        document.getElementById("price_demo").innerHTML = price1_2;
    }

/*------- Mr/Miss red trash cards in the cart -------*/
function delete_card_1_2(){
    $("#sec_custom").addClass("d-none");
    $("#sec_iban").addClass("d-none");
    $("#add_btn").removeClass("d-none");
    deleteCard();
    totalPrice();
}

/*------- Mr/Miss trash - Delete the prices in the cart -------*/
function delete_Price_1_2(obj){
    let numb = obj.id;
    $('#Card_1_2' + numb).val('0');
    $('.selectPrice').change();
    totalPrice();
}
/*------- Mr/Miss Delete all the prices in the cart -------*/
function delete_Mr_Miss(){
    document.querySelector('.circle').innerHTML = 1;
    $(".card_1").show();
    $(".card_2").addClass("d-none");
    $('#Card_1_21').val('0');
    $('#Card_1_22').val('0');
    $('.selectPrice').change();
    totalPrice();
}




/*------- Customization & IBAN selection -------*/
function Customization_checkbox() {
    $(".cardAccountCheck").toggle();
}

/*------- Number of Customization & IBAN selection  -------*/
function selectCards(elem){
    var currentVal = $(elem).val();
    document.querySelector("#numberCircle").innerHTML = (currentVal);
    $('.section').hide().slice(0, currentVal).show();
    $('.depo').hide().slice(0, currentVal).show();
    $(".space").addClass("d-none").slice(1, currentVal).removeClass('d-none');
}

/*------- Corporate & Association prices in the cart  -------*/
function selectPrice2(obj){
    var currentVal = $(obj).val();
    number = (obj.id).slice(-1);
    $('.C_A_Prices_' + number).addClass("d-none");
    $('#' +number+'_'+ currentVal).removeClass("d-none");
    inToArray(parseInt(number),currentVal);
    console.log(arrayValues);    
}

/*------- The cards of Customization & IBAN selection  -------*/
function cardsSelection() {
    let custAndIban = "";
    let selectCards = "";
    let popo = "";

for (let i = 1; i < 7; i++) {
    custAndIban += "<div class='section_" + i + " section row'><div class='mb-3 col-md-6'><label for='Card_Custom_IBAN' class='form-label'>Indicate here the desired customization</label><input type='text' class='form-control' id='Card_Custom_IBAN' name='Card_Custom_IBAN' oninput='Corporate_Details()'></div><div class='mb-3 col-md-6'><label for='CustomField' class='form-label'>IBAN UK</label><div class='d-md-flex justify-content-md-between'><div> <label for='uk_" + i + "' class='me-2'><input type='radio' class='radio_item flag' name='iban_" + i + "' id='uk_" + i + "' checked><img src='images/united-kingdom.png' class='UKpng'></label><label for='fra_" + i + "'><input type='radio' class='radio_item flag' name='iban_" + i + "' id='fra_" + i + "'><img src='images/france.png' class='FRANCEpng'></label></div></div></div></div>";
    selectCards += "<div class='Card_" + i + " depo mb-3 mt-4 col-md-12'><label for='Card" + i + "' class='form-label'>Card #" + i + " First Deposit</label><select class='selectPrice2 form-select' id='Card" + i + "' name='Card" + i + "' onchange='selectPrice2(this)'><option value='0' selected>0</option><option value='10'>10 &euro;</option><option value='20'>20 &euro;</option><option value='30'>30 &euro; recommended</option><option value='100'>100 &euro;</option></select></div>";
    popo += "<div class= 'C_A_price_" + i + "'><div id='card_pay_" + i + "' class='reward space d-flex flex-wrap justify-content-between'><div><i class='far fa-trash-alt text-danger me-1' onclick= 'delete_card(this)' id='trash_red" + i + "' ></i>1 x card (annual fees)</div><div>29.90 &euro; </div></div><div id='" + i + "_10' class='allPrices C_A_Prices_" + i + " d-flex flex-wrap justify-content-between'><div class='ms-3'><i class='far fa-trash-alt me-1' onclick= 'delete_Price(this)' id='" + i + "'></i>First deposit</div><div>10.00 &euro;</div></div><div id='" + i + "_20' class='allPrices C_A_Prices_" + i + " d-flex flex-wrap justify-content-between'><div class='ms-3'><i class='far fa-trash-alt me-1' onclick= 'delete_Price(this)' id='" + i + "'></i>First deposit</div><div>20.00 &euro;</div></div><div id='" + i + "_30' class='allPrices C_A_Prices_" + i + " d-flex flex-wrap justify-content-between'><div class='ms-3'><i class='far fa-trash-alt me-1' onclick= 'delete_Price(this)' id='" + i + "' ></i>First deposit</div><div>30.00 &euro;</div></div><div id='" + i + "_100' class='allPrices C_A_Prices_" + i + " d-flex flex-wrap justify-content-between'><div class='ms-3'><i class='far fa-trash-alt me-1' onclick= 'delete_Price(this)' id='" + i + "'></i>First deposit</div><div>100.00 &euro;</div></div></div>";
}

document.getElementById("demo").innerHTML = custAndIban;
document.getElementById("demo2").innerHTML = selectCards;
document.getElementById("demo3").innerHTML = popo;

}



/*------- Corporate & Association red trash cards in the cart -------*/
var arrayValues = [0, 0, 0, 0, 0];
console.log(arrayValues);
function delete_card(obj){
    console.log(obj);
    let numb = obj.id.slice(-1);
    $('.C_A_Prices_' + numb).addClass("d-none");
    console.log(numb);
    arrayValues.splice((numb-2),1);
    arrayValues.push(0);
    console.log(arrayValues);
    let firstPick = $('#CardSelection').val();
    let currentVal = firstPick - 1;
    $('#CardSelection').val(currentVal);
    $('#CardSelection').change();
    inToSelectCardLabel();
    totalPrice();
}

function inToArray(i, val) {
    if (i!=1) {        
        arrayValues [i-2]= val;
    }
}
function inToSelectCardLabel() {
    for (let i = 0; i < arrayValues.length; i++) {
        $('#Card'+(i+2)).val(arrayValues[i])
        $('#Card'+(i+2)).change();
    }
    }

/*------- Corporate & Association trash - Delete the prices in the cart -------*/
function delete_Price(obj){
    console.log(obj);
    let numb = obj.id;
    console.log(numb);
    $('#Card' + numb).val('0');
    $('.selectPrice2').change();
    totalPrice();
}

    
                    // page 2 //

/*------- Add Delivery Address -------*/
function delivery_second_address() {
    $(".second_address").toggle();
}


                    // page 3 //
                    
/*------- Total price  -------*/
function totalPrice() {
    let sum = 0;
    // fixed upgrade 8 euro
    let Corporate = document.querySelector('#Corporate').checked;
    let Association = document.querySelector('#Association').checked; 
    let upgradeVal = 0;
    if (Corporate || Association){
        let upgrade = $(".upgradeVal").text();
        console.log(upgrade);
        upgradeVal = parseInt(upgrade[0]);
        console.log(upgradeVal);
    }
    // Cards prices 29.90 euro
    let cardsNumber = $("#numberCircle").text();
    let cardsPricesVal = Number(cardsNumber) * 29.90;
    // Mr/Miss card 1 prices 10-100 euro
    let price1= $('#Card_1_21').val();
    console.log(price1);
    let price1Val= price1.slice(3,)
    console.log(price1Val);
    // Mr/Miss card 2 prices 10-100 euro
    let price2= $('#Card_1_22').val();
    console.log(price2);
    let price2Val= price2.slice(3,)
    console.log(price2Val);
    // Corporate & Association card 1 prices 10-100 euro
    let C_A_price1= $('#Card1').val();
    console.log(C_A_price1);
    // Corporate & Association cards 2-6 prices 10-100 euro
    let pricesArray = arrayValues.map(function (x) { 
        return parseInt(x, 10); 
    });
    let prices2_6= pricesArray.reduce((a, b) => a + b, 0);
    console.log(prices2_6);
    // Sponsorship discount 5 euro per a card 
    let dynamicContent = getParameterByName('sponsorship');
    let discount = 0;
    if (dynamicContent == "AKT9812") {
        let cardsNumber = $("#numberCircle").text();
        discount = Number(cardsNumber) * 5;
        $('#sponsorship').html('Sponsorship reward:' + " " + "<span id='discount'>"+ (discount) +"</span>" + '&euro;');
        console.log(discount);
    }
    // total 
    sum = cardsPricesVal + upgradeVal + Number(C_A_price1) + Number(price1Val) + Number(price2Val) + Number(prices2_6) - Number(discount) ;
    let total = sum.toFixed(2);

    $(".totalPrice").html(total + ' &euro;');
}

function totalPrice_zero() {
    let sum = 0;
    let total = sum.toFixed(2);
    $(".totalPrice").html(total + ' &euro;');
}




/*------- Reward modal cuontdown -------*/

function cuontdown() {
    // Set the date we're counting down to
var countDownDate = new Date("Jul 5, 2022 15:00:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.querySelector('.Days').innerHTML =days;
  document.querySelector('.Hours').innerHTML =('0' + hours).slice(-2);
  document.querySelector('.Minutes').innerHTML =('0' + minutes).slice(-2);
  

//   // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementsByClassName("Countdown").addClass("d-none");
  }
}, 1000);
    
}




