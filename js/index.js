//Contact Form Submission
$(document).ready(function() {

	//the form fields
	var name = $('#name').val();
	var email = $('#email').val();
	var subject = $('#subject').val();
	var message = $('#message').val();
  //success message div
  var success = $('.form-success');

	//the form and submit button
	var contactForm = $('#contact');
	var submitBtn = $('#submit-btn');

	$(contactForm).submit(function(e) {

	e.preventDefault();

  var url = "contactForm.php"; // the script where you handle the form input.

    $.ajax({

           type: "POST",
           url: url,
           data: $('#contact').serialize(), // serializes the form's elements.
           success: function(data)
           {
              console.log(contactForm);
               console.log(data); // show response from the php script.
               $(contactForm)[0].reset();
               $("html, body").animate({ scrollTop: $('.main').offset().top }, 800);
               $(success).hide().html('Thank you for reaching out, I will be in touch').fadeIn(2700);
           },
           error: function()
           {
               $(success).hide().html('Something went wrong :(').fadeIn(2700);
           }


    });

    return false; // avoid to execute the actual submit of the form.
});

});