<?php
        $email;$name;$message;$phone;$captcha;
        if(isset($_POST['email'])){
          $email=$_POST['email'];
        }if(isset($_POST['name'])){
          $name=$_POST['name'];
        }if(isset($_POST['phone'])){
          $phone=$_POST['phone'];
        }if(isset($_POST['message'])){
          $message=$_POST['message'];
        }if(isset($_POST['g-recaptcha-response'])){
          $captcha=$_POST['g-recaptcha-response'];
        }
        if(!$captcha){
          echo '<h2>Please check the captcha form. Go back to Contact Page</h2>';
          exit;
        }
		## secretKey removed for privacy
        $secretKey = "###";
        $ip = $_SERVER['REMOTE_ADDR'];
        $response=file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secretKey."&response=".$captcha."&remoteip=".$ip);
        $responseKeys = json_decode($response,true);
        if(intval($responseKeys["success"]) !== 1) {
          echo '<h2>Spam</h2>';
        } else {
			$email_to =   'info@bidayadesign.com'; // The email address to which the email will be sent
			$name     =   $_POST['name'];
			$email    =   $_POST['email'];
			$message  =   $_POST['message'];
			$phone	  =   $_POST['phone'];
			$subject  =   'Mail from Bidaya';

			$message = 'From: ' . $name . "\r\n" . 'Email: ' . $email . ' Phone: ' . $phone ."\r\n\r\n" . 'Message: ' . "\r\n" . $message;

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
				header ('Location: https://bidayadesign.com/contact-us-error.php');
			}
        }
?>