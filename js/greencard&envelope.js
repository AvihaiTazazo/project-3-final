 /*------- Greencard Date -------*/
function greenCard(){
    const d = new Date();
    let month = ("0" + (d.getMonth() + 1)).slice(-2); 
    let year = (d.getFullYear()+ 2) .toString().substr(-2);
    // document.querySelector(".green_month_years2").innerHTML = (month + "/" + year);
    document.querySelector(".green_month_years").innerHTML = (month + "/" + year);
}
/*------- Put mr/miss details in the green card and the envelope -------*/
function MrAndMiss(){
    let x = document.querySelector('#FirstName').value;
    let y = document.querySelector('#LastName').value;
    let z = document.querySelector(".envelope_top_line");
    let top_line = document.querySelector('.top_line');
    let b = document.querySelector('#CustomField').value;
    let bottom_line = document.querySelector(".bottom_line");
    let custom_cart = document.querySelector("#custom_cart");
    z.innerHTML = x + " " + y;
    top_line.innerHTML = x + " " + y;
    bottom_line.innerHTML = b; 
    custom_cart.innerHTML = " ,Custom Field: " + b;
}
/*------- Put corporate details in the green card and the envelope -------*/
function Corporate_Details(){
    let CompanyName = document.querySelector('#CompanyName').value;
    let CorporateStructure = document.querySelector('#CorporateStructure').value;
    let top_line = document.querySelector('.top_line');
    let c = document.querySelector('#Card_Custom_IBAN').value;
    let bottom_line = document.querySelector('.bottom_line');
    let envelope_top_line = document.querySelector(".envelope_top_line");
    top_line.innerHTML = CompanyName + " " + CorporateStructure;
    envelope_top_line.innerHTML = CompanyName + " " + CorporateStructure;
    bottom_line.innerHTML = c;    
}
/*------- Put association details in the green card and the envelope -------*/
function Association_Details(){
    let AssociationName = document.querySelector('#AssociationName').value;
    let top_line = document.querySelector('.top_line');
    let bottom_line = document.querySelector('.bottom_line');
    let envelope_top_line = document.querySelector(".envelope_top_line");
    let c = document.querySelector('#Card_Custom_IBAN').value;
    top_line.innerHTML = AssociationName;
    bottom_line.innerHTML = c; 
    envelope_top_line.innerHTML = AssociationName;
}

                        /*------- Put Details from page 2 to the envelope -------*/
                        
/*------- Put address field in the envelope -------*/
function address2(){
    let x = document.querySelector('#address').value;
    let y = document.querySelector(".address3");
    y.innerHTML = x;
}
/*------- Put city & zip in the envelope -------*/
function city_zip(){
    let x = document.querySelector('#city').value;
    let y = document.querySelector('#zip').value;
    let z = document.querySelector(".city_zip");
    z.innerHTML = x + "," + y;   
}
/*------- Put the chosen country field in the envelope -------*/
function country2(selTag) {
  let x = selTag.options[selTag.selectedIndex].text;
  let y = document.querySelector(".country3");
  y.innerHTML =  x;
}
