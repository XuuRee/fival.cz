<!--
	Personal portfolio. All rights reserved.
	Filip Valchář aka fival / filipvalchar@gmail.com
-->

<?php
$field_first = $_POST['first'];
$field_last = $_POST['last'];
$field_email = $_POST['email'];
$field_subject = $_POST['subject'];
$field_message = $_POST['message'];

$mail_to = 'filipvalchar@gmail.com';
$subject = 'Message from a site visitor!';

$body_message = 'From: '.$field_first.' '.$field_last."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Subject: '.$field_subject."\n";
$body_message .= 'Message: '.$field_message."\n\r";

$headers .= 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Thank you for the message. I will contact you shortly.');
		window.location = 'index.html';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Message failed. Please, send an email to filipvalchar@gmail.com');
		window.location = 'index.html';
	</script>
<?php
}
?>