<?php
	
	if(isset($_POST['name'])) {
		//Variables from test submissions that lectora makes available
		$sender = 		$_POST['name'];
		$senderEmail = 	$_POST['email'];
		$subjectText = 	$_POST['subject'];
		$messageText = 	$_POST['message'];

		//define the receiver of the email
		$to = 'jbailey0157@gmail.com';
		//define the subject of the email
		$subject = $subjectText;
		//the message of the email
		$message = $messageText;
		//define the headers we want passed. Note that they are separated with \r\n
		$headers = "From: ".$email."\r\nReply-To: no-reply@none.com";

		mail($to, $subject, $message, $headers);

		// echo('	<h4>".$sender."</h4>
		// 		<h4>".$senderEmail."</h4>
		// 		<h4>".$subjectText."</h4>
		// 		<h4>".$messageText."</h4>');
		
		die();
	}
?>


