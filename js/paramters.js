    //  Validation paramters //

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var dynamicContent = getParameterByName('seed');
$(document).ready(function() {
    if (dynamicContent == 'true') {
        $.getJSON("js/dataForm.json", function(data) {
            $("#FirstName").val(data[0].FirstName);
            $("#LastName").val(data[0].LastName);
            $("#CustomField").val(data[0].CustomField);
            $("#DateOfBirth").val(data[0].DateOfBirth);
            $("#CorporateDateOfBirth").val(data[0].DateOfBirth);
            $("#AssociationDateOfBirth").val(data[0].DateOfBirth);
            $("#CompanyName").val(data[0].CompanyName);
            $("#CorporateStructure").val(data[0].CorporateStructure);
            $("#AssociationName").val(data[0].AssociationName);
            $("#email").val(data[0].email);
            $("#PhoneNumber").val(data[0].PhoneNumber);
            $("#address").val(data[0].address);
            $("#zip").val(data[0].zip);
            $("#city").val(data[0].city);
            $("#answer").val(data[0].answer);
            MrAndMiss();
            address2();
            city_zip();
        })
    } 
});

    //  Sponsorship paramters //

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function modalShow() {

let dynamicContent = getParameterByName('sponsorship');
$.getJSON("js/sponsorship.json", function(data) {

    if (dynamicContent == (data[0].paramter)) {
        let today = new Date();
        let limit = new Date ((data[0].date));
        if (today <= limit) {
            $('#cuontdownModal').modal('show') ;
            cuontdown();
            let cardsNumber = $("#numberCircle").text();
            discount = Number(cardsNumber) * 5;
            $('#sponsorship').html('Sponsorship reward:' + " " + "<span id='discount'>"+ (discount) +"</span>" + '&euro;');
        }
    }
    else if (dynamicContent == (data[1].paramter)) {
        let today = new Date();
        let limit = new Date ((data[1].date));
        if (today > limit) {
            $('#expiredModal').modal('show');
        }
    }
})
};
