<?php

$autoResponse = true; // "true" enables the auto-response system, "false" disables it
$autoResponseSubject = 'Thank you for your email';
$autoResponseMessage = 'Hi, this is just an automated email to let you know that we have successfully received your email.';
$autoResponseHeaders = 'From: info@bidayadesign.com';  

// Set the mail variables
$email_to =   'info@bidayadesign.com'; // The email address to which the email will be sent
$name     =   $_POST['name'];
$email    =   $_POST['email'];
$msg	  =   $_POST['message'];
$subject  =   'Mail from Bidaya';

$message = 'From: ' . $name . "\r\n" . 'Email: ' . $email . "\r\n\r\n" . 'Message: ' . "\r\n" . $msg;

/** The $header variable is for the additional headers in the mail function.
We are assigning 2 values, FROM and REPLY-TO. That way, whenever we want to reply,
the mail system (e.g. Gmail, Yahoo, Hotmail, etc.) will know who we reply to. **/
 
$headers = 'From: ' . $name.' <'.$email.'>' . "\r\n";
$headers .= 'Reply-To: ' . $email . "\r\n";

if(mail($email_to, $subject, $message, $headers)){
	if($autoResponse === true){
		mail($email, $autoResponseSubject, $autoResponseMessage, $autoResponseHeaders);
	}
	header ('Location: https://bidayadesign.com/contact-us-success.html');
} else {
	header ('Location: https://bidayadesign.com/contact-us-error.html');
}

?>