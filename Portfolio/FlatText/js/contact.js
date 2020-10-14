$(document).ready(function(){
	
	$('#submit').click(function(e){

			$('#submit').attr({'disabled' : 'true', 'value' : 'Sending ...' });
			$.post("send_email.php",function(result){
				//and after the ajax request ends we check the text returned
				if(result == 'sent'){
					//if the mail is sent remove the submit paragraph
					 $('#submit').remove();
					//and show the mail success div with fadeIn
					$('.contact-success').fadeIn(500);
				}else{
					//show the mail failed div
					$('.contact-fail').fadeIn(500);
					//reenable the submit button by removing attribute disabled and change the text back to Send
					$('#submit').removeAttr('disabled').attr('value', 'Submit');
				}
			});
		}
	});