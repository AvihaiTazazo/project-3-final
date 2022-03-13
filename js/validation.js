// The First Form Validation (page 1)
$(document).ready(function () {
    $.validator.addMethod("minAge", function(value, element, min) {
        var today = new Date();
        var birthDate = new Date(value);
        var age = today.getFullYear() - birthDate.getFullYear();
     
        if (age > min+1) {
            return true;
        }
     
        var m = today.getMonth() - birthDate.getMonth();
     
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
     
        return age >= min;
    });
    
    $('#formValidation1').validate({
        rules: {
            firstname: {
                required: true,
            },
            lastname:{
                required: true,
                maxlength: 26
            },
            DateOfBirth: {
                required: true,
                minAge: 18
            },
            CorporateDateOfBirth: {
                required: true,
                minAge: 18
            },
            AssociationDateOfBirth: {
                required: true,
                minAge: 18
            },
            CompanyName:{
                required: true,
            },
            CorporateStructure:{
                required: true,
                maxlength: 26
            },
            AssociationName:{
                required: true,
                maxlength: 20
            },
            confirm_1:{
                required: true
            },

        },
        messages:{
            firstname:{
                required:'This field is required.',
            },
            lastname:{
                required:'This field is required.',
                maxlength:'Please enter no more than 11 characters.'
            },
            DateOfBirth:{
                required:'This field is required.',
                minAge:'Must be at least 18 years old.'
            },
            CorporateDateOfBirth:{
                required:'This field is required.',
                minAge:'Must be at least 18 years old.'
            },
            AssociationDateOfBirth:{
                required:'This field is required.',
                minAge:'Must be at least 18 years old.'
            },
            CompanyName:{
                required:'This field is required.',
            },
            CorporateStructure:{
                required:'This field is required.',
                maxlength:'Please enter no more than 26 characters.'
            },
            AssociationName:{
                required:'This field is required.',
                maxlength:'Please enter no more than 20 characters.'
            },
            confirm_1:{
                required:'This field is required.'
            },
        },
    })
    $('#continue_1').click(function() {
         // Details in greencard
        $('.green_month_years2').text($('.green_month_years1').text())
        $('.top_line2').text($('.green_month_years1').text())
        $('.bottom_line2').text($('.bottom_line1').text())
       if($('#formValidation1').valid()){
           //Go from page 1 to page 2
        document.getElementById('section_2').classList.remove("d-none");
        document.getElementById('section_1').classList.add("d-none");
        document.getElementById('nabar2').classList.remove("d-none");
        document.getElementById('nabar1').classList.add("d-none");    
       }
    });
});

// The Second Form Validation (page 2)
$(document).ready(function(){   
    $('#formValidation2').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            PhoneNumber:{
                required: true,
                digits: true,
                minlength: 2,
                maxlength: 11
            },
            address:{
                required: true,
                maxlength: 30
            },
            addAddress:{
                maxlength: 30
            },

            city:{
                required: true,
                maxlength: 25
            },
            zip:{
                required: true,
                maxlength: 15
            },
            DeliveryAddress:{
                required: true,
                maxlength: 30
            },
            DeliveryAddAddress:{
                maxlength: 30
            },
            DeliveryCity:{
                required: true,
                maxlength: 25
            },
            DeliveryZip:{
                required: true,
                maxlength: 15
            },
            answer:{
                required: true,
                minlength: 5,
                maxlength: 22
            },
            confirm_2:{
                required: true
            },
        },
        messages:{
            email:{
                required:'This field is required.',
                email:'Please enter a valid email address.'
            },
            PhoneNumber:{
                required:'This field is required.',
                minlength:'Please enter at least 2 characters.',      
                maxlength:'Please enter no more than 11 characters.'
            },
            address:{
                required:'This field is required.',
                maxlength:'Please enter no more than 30 characters.'
            },
            addAddress:{
                maxlength:'Please enter no more than 30 characters.'
            },
            city:{
                required:'This field is required.',
                maxlength:'Please enter no more than 25 characters.'
            },
            zip:{
                required:'This field is required.',
                maxlength:'Please enter no more than 15 characters.'
            },
            DeliveryAddress:{
                required:'This field is required.',
                maxlength:'The delivery address 1 may not be greater than 30 characters.'
            },
            DeliveryAddAddress:{
                maxlength:'The delivery address 2 may not be greater than 30 characters.'
            },
            DeliveryCity:{
                required:'This field is required.',
                maxlength:'The delivery city may not be greater than 25 characters.'
            },
            DeliveryZip:{
                required:'This field is required.',
                maxlength:'The delivery zip code may not be greater than 15 characters.'
            },
            answer:{
                required:'This field is required.',
                minlength:'Please enter at least 5 characters.',      
                maxlength:'Please enter no more than 22 characters.'
            },
            confirm_2:{
                required:'This field is required.'
            },
        },
    })

    $('#continue_2').click(function() {
        if ($('#formValidation2').valid()){
            modalShow();
            totalPrice();
            //Go from page 2 to page 3
            document.getElementById('section_3').classList.remove("d-none");
            document.getElementById('section_2').classList.add("d-none");
            document.getElementById('nabar3').classList.remove("d-none");
            document.getElementById('nabar2').classList.add("d-none");        
        }
    });
});



    