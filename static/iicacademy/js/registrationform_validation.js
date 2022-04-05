
$(document).ready(function(){
 $(".progresscheck").change(function(){
      $(".progresscheck").prop('checked',false);
      $(this).prop('checked',true);
       
       if ($('#inprogressYes').prop("checked") ) {
	    $('#planned_graduationdiv').show();
	  } else if($('#inprogressNo').prop("checked")){
	    $('#planned_graduationdiv').hide();
	  }
  });
  $(".programdate").change(function(){
      $(".programdate").prop('checked',false);
      $(this).prop('checked',true);
  });
   $(".countryname").change(function(){
      $(".countryname").prop('checked',false);
      $(this).prop('checked',true);
       if ($('#othercountry_name').prop("checked") ) {
	    $('#otherCountryDiv').show();
	  } else{
	    $('#otherCountryDiv').hide();
	  }
  });
 /* $(".form-control").change(function(){
    $(this).css("border-color", "#D6D6FF");

		   $(".invalid-feedback").hide();
  });*/
 
});
 function otherCountryTableRow() {
 $('#mailBody> tbody> tr:last').after('<tr><td>Other Country</td><th>:</th><td>"+otherCountry+"</td></tr>');
 /* <tr><td>Other Country</td><th>:</th><td>"+otherCountry+"</td></tr>*/
}
function sendEmail() { 
var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
 var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
 
/*var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });*/

		var name = $("#name").val();
		var lastName = $("#lastName").val();
		var postalAddress = $("#postalAddress").val();
		var emailAddress = $("#emailAddress").val();
		var phone = $("#phone").val();
		var nameofInstitution = $("#nameofInstitution").val();
		var date = $("#date").val();
		var degree = $("#degree").val();
        var progressCheckedVal = $('input[name="progressCheck"]:checked').val();
		var programCheckedVal = $('input[name="programDate"]:checked').val();
		var countryName = $('input[name="countryName"]:checked').val();
		var otherCountry = $("#otherCountry").val();
		var otherCountryna = $("#otherCountry").val();
		var otherCountry = $("#otherCountry").val();

		
		if (name == "") {
		    alert("Please enter name");
	
		    return false;
		}
		if (lastName == "") {
		    alert("Please enter last name");
		    return false;
		}
		if (postalAddress == "") {
		    alert("Please enter postal address");
		    return false;
		}
		if (emailAddress == "") {
		    alert("Please enter email address");
		    return;
		}
		else if (emailAddress != '' && !emailReg.test(emailAddress)) {
        alert("Please enter a valid email");
        return;
   		 }
		if (phone == "") {
		    alert("Please enter phone number");
		    return false;
		}
		else if (phone != '' && !phoneno.test(phone)) {
        alert("Please enter correct phone number");
        return;
   		 }
		if (nameofInstitution == "") {
		    alert("Please enter name of institution");
		    return false;
		}
		
		
		
		if (progressCheckedVal == "" || progressCheckedVal == undefined) {
		    alert("Please check in progress status yes or no, to continue");
		    return false;
		}
		if(progressCheckedVal == "No" ){
			date ="N/A";
		}
		if(progressCheckedVal == "Yes" ){
		 if (date == "") {
		    alert("Please select date");
		    return false;
		}
		}
  		 if (degree == "") {
		    alert("Please enter degree");
		    return false;
		}
		
		if (programCheckedVal == "" || programCheckedVal == undefined) {
		    alert("Please check program date yes or no to continue.");
		    return false;
		}
		
  			if (countryName == "" || countryName == undefined) {
		    alert("Please check any country name to continue");
		    return false;
		}
		/*if (countryName == "NorthAmerica" || countryName == "Europe" || countryName == "Australasia/Oceania") {
		   otherCountry = "N/A"
		}*/
		
		if(countryName == "Other"){
			if (otherCountry == "" || otherCountry == undefined) {
		    alert("Please enter other country name");
		    return false;
			}
			countryName = otherCountry;
  		}
  		
		var text= "<table style='border:1px solid #c9e8d5; width:80%; background-color: #e4fded; font-weight: bold;'>"+
		"<tbody>"+
		"<tr><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>Name</td><th style='border-bottom: 1px solid #c9e8d5; padding:4px;'>:</th><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>"+name+"</td></tr>"+
		"<tr><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>LastName</td><th style='border-bottom: 1px solid #c9e8d5; padding:4px;'>:</th><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>"+lastName+"</td></tr>"+
		"<tr><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>Postal Address</td><th style='border-bottom: 1px solid #c9e8d5; padding:4px;'>:</th><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>"+postalAddress+"</td></tr>"+
		"<tr><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>Email Address</td><th style='border-bottom: 1px solid #c9e8d5; padding:4px;'>:</th><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>"+emailAddress+"</td></tr>"+
		"<tr><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>Phone</td><th style='border-bottom: 1px solid #c9e8d5; padding:4px;'>:</th><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>"+phone+"</td></tr>"+
		"<tr><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>Name of Institution</td><th style='border-bottom: 1px solid #c9e8d5; padding:4px;'>:</th><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>"+nameofInstitution+"</td></tr>"+
		"<tr><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>In progress</td><th style='border-bottom: 1px solid #c9e8d5; padding:4px;'>:</th><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>"+progressCheckedVal+"</td></tr>"+
		"<tr><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>Planned graduation date</td><th style='border-bottom: 1px solid #c9e8d5; padding:4px;'>:</th><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>"+date+"</td></tr>"+
		"<tr><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>Degree</td><th style='border-bottom: 1px solid #c9e8d5; padding:4px;'>:</th><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>"+degree+"</td></tr>"+
		"<tr><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>Start the program on September, 2021</td><th style='border-bottom: 1px solid #c9e8d5; padding:4px;'>:</th><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>"+programCheckedVal+"</td></tr>"+
		"<tr><td style='padding:4px;'>Preferred region for carrying out the practicals</td><th style='padding:4px;'>:</th><td style='padding:4px;'>"+countryName+"</td></tr>"+
		"</tbody>"+
		"</table>"
		
		Email.send({ 
        Host: "smtp.iicacademy.com", 
        Username: "hydrographicsurveyor@iicacademy.com", 
        Password: "AC@hydro#326", 
        To: 'hydrographicsurveyor@iicacademy.com', 
        From: "hydrographicsurveyor@iicacademy.com", 
        Subject:"Registration Acknowledgment", 
        Body: text
      }) 
        .then(function (message) { 
          //jAlert("Thank you! You will be reached shortly!");
         // window.location.href = "home.html";
          jAlert('Thank you! You will be reached shortly!', 'Custom Styles', function() {  
		      window.location.href = "home.html";
		  });
        }); 
       
    } 