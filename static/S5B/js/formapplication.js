		window.addEventListener("load", function() {
		  const form = document.getElementById('myForm');
		  form.addEventListener("submit", function(e) {
		    e.preventDefault();
		    const data = new FormData(form);
		    const action = e.target.action;
		    fetch(action, {
		      method: 'POST',
		      body: data,
		    })
		    .then(() => {
		      alert("Success!");
		    })
		  });
		});

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
         
         $(function(){
     	    var dtToday = new Date();
     	    
     	    var month = dtToday.getMonth() + 1;
     	    var day = dtToday.getDate();
     	    var year = dtToday.getFullYear();
     	    if(month < 10)
     	        month = '0' + month.toString();
     	    if(day < 10)
     	        day = '0' + day.toString();
     	    
     	    var maxDate = year + '-' + month + '-' + day;

     	    // or instead:
     	    // var maxDate = dtToday.toISOString().substr(0, 10);

     	    $('#date').attr('min', maxDate);
     	});
          function otherCountryTableRow() {
          $('#mailBody> tbody> tr:last').after('<tr><td>Other Country</td><th>:</th><td>"+otherCountry+"</td></tr>');
          /* <tr><td>Other Country</td><th>:</th><td>"+otherCountry+"</td></tr>*/
         }
		 function scrollONtop_general() { 
			var scrollToToponMobGen = $('html, body').animate({scrollTop: $(this).offset().top + '1600px'}, 'fast');
			scrollToToponMobGen;
		 }
		 function scrollONtop_education() { 
			var scrollToToponMobedu = $('html, body').animate({scrollTop: $(this).offset().top + '2350px'}, 'fast');
			scrollToToponMobedu;
		 }
		 
       /*  function sendEmail() { 
         var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
         var firstNameReg = /^[A-Za-z ]*$/;
         var lastNameReg = /^[A-Za-z ]*$/;
         var institutionReg = /^[A-Za-z ]*$/;
         var degreeReg = /^[A-Za-z ]*$/;
         		var firstName = $("#firstName").val();
         		var lastName = $("#lastName").val();
         		var mailingAddress = $("#mailingAddress").val();
         		var emailAddress = $("#emailAddress").val();
         		var phoneNumber = $("#phoneNumber").val();
         		var nameofInstitution = $("#nameofInstitution").val();
         		var date = $("#date").val();
         		var degree = $("#degree").val();
                 var progressCheckedVal = $('input[name="progressCheck"]:checked').val();
         		var programCheckedVal = $('input[name="programDate"]:checked').val();
         	
         	var w =	$(window).width();
			var scrollToTop = $('html, body').animate({scrollTop: $(this).offset().top + '1007px'}, 'fast');
			
         		if (firstName == "") {
					$("#firstName").css("border-color", "red");
					$("#firstName").focus();
         		    alert("Please enter firstname");
					scrollToTop;
					if (w < 576) {
						scrollONtop_general();
					}
         		    return;
         		}
         		   else if (firstName != '' && !firstNameReg.test(firstName)) {
					   $("#firstName").css("border-color", "red");
					   $("#firstName").focus();
                       alert("Please enter alphabets only");
					  scrollToTop;
					if (w < 576) {
						scrollONtop_general();
					}
                       return;
                  }else{
					  $("#firstName").css("border-color", "#ced4da");
				  }
         		if (lastName == "") {
					$("#lastName").css("border-color", "red");
					$("#lastName").focus();
					scrollToTop;
					if (w < 576) {
						scrollONtop_general();
					}
         		    alert("Please enter last name");
         		    return false;
         		}
         		 else if (lastName != '' && !lastNameReg.test(lastName)) {
					 $("#lastName").css("border-color", "red");
					$("#lastName").focus();
                     alert("Please enter alphabets only");
					 scrollToTop;
					if (w < 576) {
						scrollONtop_general();
					}
                     return;
                }else{
					$("#lastName").css("border-color", "#ced4da");
				}
         		if (mailingAddress == "") {
					 $("#mailingAddress").css("border-color", "red");
					$("#mailingAddress").focus();
					scrollToTop;
					if (w < 576) {
						scrollONtop_general();
					}
         		    alert("Please enter mailing address");
         		    return false;
         		}else{
					$("#mailingAddress").css("border-color", "#ced4da");
				}
         		if (emailAddress == "") {
					 $("#emailAddress").css("border-color", "red");
					$("#emailAddress").focus();
					scrollToTop;
					if (w < 576) {
						scrollONtop_general();
					}
         		    alert("Please enter email address");
         		    return;
         		}
         		else if (emailAddress != '' && !emailReg.test(emailAddress)) {
					$("#emailAddress").css("border-color", "red");
					$("#emailAddress").focus();
					scrollToTop;
					if (w < 576) {
						scrollONtop_general();
					}
                 alert("Please enter a valid email");
                 return;
            		 }else{
					$("#emailAddress").css("border-color", "#ced4da");
				}
         		if (phoneNumber == "") {
					$("#phoneNumber").css("border-color", "red");
					$("#phoneNumber").focus();
					scrollToTop;
					if (w < 576) {
						scrollONtop_general();
					}
         		    alert("Please enter phone number");
         		    return false;
         		}else{
					$("#phoneNumber").css("border-color", "#ced4da");
				}
         		
         		if (nameofInstitution == "") {
					
					$("#nameofInstitution").css("border-color", "red");
					$("#nameofInstitution").focus();
         		    alert("Please enter name of institution");
					scrollToTop;
					if (w < 576) {
						scrollONtop_education();
					}
         		    return false;
         		}
         		else if (nameofInstitution != '' && !institutionReg.test(nameofInstitution)) {
					
					$("#nameofInstitution").css("border-color", "red");
					$("#nameofInstitution").focus();
					scrollToTop;
					if (w < 576) {
						scrollONtop_education();
					}
                    alert("Please enter alphabets only");
                    return;
               }else{
					$("#nameofInstitution").css("border-color", "#ced4da");
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
					
					 $("#date").css("border-color", "red");
					$("#date").focus();
					scrollToTop;
					if (w < 576) {
						scrollONtop_education();
					}
         		    alert("Please select date");
         		    return false;
         		}else{
					$("#date").css("border-color", "#ced4da");
				}
         		}
           		 if (degree == "") {
					 
					  $("#degree").css("border-color", "red");
					$("#degree").focus();
					scrollToTop;
					if (w < 576) {
						scrollONtop_education();
					}
         		    alert("Please enter degree");
         		    return false;
         		}
           		else if (degree != '' && !degreeReg.test(degree)) {
					
					 $("#degree").css("border-color", "red");
					$("#degree").focus();
					scrollToTop;
					if (w < 576) {
						scrollONtop_education();
					}
                    alert("Please enter alphabets only");
                    return;
               }else{
					$("#degree").css("border-color", "#ced4da");
				}
         		if (programCheckedVal == "" || programCheckedVal == undefined) {
         		    alert("Please check preferences yes or no to continue.");
         		    return false;
         		}
         		document.getElementById("loaderMask").style.display = "block";
         		var text= "<table style='border:1px solid #c9e8d5; width:80%; background-color: #e4fded; font-weight: bold;'>"+
         		"<tbody>"+
         		"<tr><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>First Name</td><th style='border-bottom: 1px solid #c9e8d5; padding:4px;'>:</th><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>"+firstName+"</td></tr>"+
         		"<tr><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>Last Name</td><th style='border-bottom: 1px solid #c9e8d5; padding:4px;'>:</th><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>"+lastName+"</td></tr>"+
         		"<tr><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>Mailing Address</td><th style='border-bottom: 1px solid #c9e8d5; padding:4px;'>:</th><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>"+mailingAddress+"</td></tr>"+
         		"<tr><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>Email Address</td><th style='border-bottom: 1px solid #c9e8d5; padding:4px;'>:</th><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>"+emailAddress+"</td></tr>"+
         		"<tr><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>Phone Number</td><th style='border-bottom: 1px solid #c9e8d5; padding:4px;'>:</th><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>"+phoneNumber+"</td></tr>"+
         		"<tr><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>Name of Institution</td><th style='border-bottom: 1px solid #c9e8d5; padding:4px;'>:</th><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>"+nameofInstitution+"</td></tr>"+
         		"<tr><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>In progress</td><th style='border-bottom: 1px solid #c9e8d5; padding:4px;'>:</th><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>"+progressCheckedVal+"</td></tr>"+
         		"<tr><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>Planned graduation date</td><th style='border-bottom: 1px solid #c9e8d5; padding:4px;'>:</th><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>"+date+"</td></tr>"+
         		"<tr><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>Degree</td><th style='border-bottom: 1px solid #c9e8d5; padding:4px;'>:</th><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>"+degree+"</td></tr>"+
         		"<tr><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>Start the program on September, 2021</td><th style='border-bottom: 1px solid #c9e8d5; padding:4px;'>:</th><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>"+programCheckedVal+"</td></tr>"+
         		
         		"</tbody>"+
         		"</table>"
         		
         		/*Email.send({ 
                 Host: "smtp.iicacademy.com", 
                 Username: "hydrographicsurveyor@iicacademy.com", 
                 Password: "AC@hydro#326", 
                 To: 'hydrographicsurveyor@iicacademy.com', 
                 From: "hydrographicsurveyor@iicacademy.com", 
                 Subject:"Registration Acknowledgment", 
                 Body: text
               }) 
         		Email.send({ 
                    Host: "smtp.iicacademy.com", 
                    Username: "nauticalcartographer@iicacademy.com", 
                    Password: "Ac@iic%3!Te$", 
                    To: 'nauticalcartographer@iicacademy.com', 
                    From: "nauticalcartographer@iicacademy.com", 
                    Subject:"Registration Acknowledgment", 
                    Body: text
                  })
                
                 .then(function (message) { 
                	 document.getElementById("loaderMask").style.display = "none";
                  // alert('Thank you! You will be reached shortly!'); 
                	 alert('Thank you! We will contact you shortly...');  
                 }); 
         		
         		document.getElementById("myForm").reset();
         		document.getElementById("myForm2").reset();
             } 
            */
         function sendMessage(){
        	 var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        	 
        	 var contactEmail = $("#contactEmail").val();
      		 var contactMessage = $("#contactMessage").val();
      		
      		if (contactEmail == "") {
				$("#contactEmail").css("border-color", "red");
				$("#contactEmail").focus();
     		    alert("Please enter email address");
     		    return;
     		}
     		else if (contactEmail != '' && !emailReg.test(contactEmail)) {
				$("#contactEmail").css("border-color", "red");
				$("#contactEmail").focus();
             alert("Please enter a valid email");
             return;
        	}else{
					$("#contactEmail").css("border-color", "#ced4da");
				}		
     		 if (contactMessage == "") {
				 $("#contactMessage").css("border-color", "red");
				$("#contactMessage").focus();
     		     alert("Please enter Message");
     		     return false;
     		 }else{
					$("#contactMessage").css("border-color", "#ced4da");
				}
     		document.getElementById("loaderMask").style.display = "block";
     		var text= "<table style='border:1px solid #c9e8d5; width:80%; background-color: #e4fded; font-weight: bold;'>"+
     		"<tbody>"+
     		"<tr><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>Email Address</td><th style='border-bottom: 1px solid #c9e8d5; padding:4px;'>:</th><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>"+contactEmail+"</td></tr>"+
     		"<tr><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>Message</td><th style='border-bottom: 1px solid #c9e8d5; padding:4px;'>:</th><td style='border-bottom: 1px solid #c9e8d5; padding:4px;'>"+contactMessage+"</td></tr>"+
     		"</tbody>"+
     		"</table>"
     		
     		Email.send({ 
                Host: "smtp.iicacademy.com", 
                Username: "nauticalcartographer@iicacademy.com", 
                Password: "Ac@iic%3!Te$", 
                To: 'nauticalcartographer@iicacademy.com', 
                From: "nauticalcartographer@iicacademy.com", 
                Subject:"Registration Acknowledgment", 
                Body: text
              })
              .then(function (message) { 
            	  document.getElementById("loaderMask").style.display = "none";
                 // alert('Thank you! You will be reached shortly!');
                  alert('Thank you! We will contact you shortly...');  
                }); 
        		document.getElementById("contactForm").reset();
         }	