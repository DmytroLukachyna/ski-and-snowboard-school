<?php 

$username = $_POST['customer_name'];
$userphone = $_POST['customer_phone'];
$usermail = $_POST['customer_mail'];
$userskiingdate = $_POST['customer_date'];
$userfeedback = $_POST['customer_message'];
$userconsent = $_POST['customer_consent'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$mail->isSMTP();
$mail->Host = 'smtp.ukr.net';
$mail->SMTPAuth = true;
$mail->Username = 'email@addre.ss';
$mail->Password = 'passdeletedandrevoked';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom('email@addre.ss', 'Sparcle Cleaning');
$mail->addAddress('email@addre.ss');
$mail->isHTML(true);

$mail->Subject = 'Письмо c Ski & Snowboard School';
$mail->Body    = '
	Пользователь тестового сайта <b>Ski & Snowboard School</b> оставил данные!<br><br> 
	Предоставлено ли право на ПД: ' . $userconsent . ' <br>
	Имя: ' . $username . ' <br>
	Телефон: ' . $userphone . ' <br>
	E-mail: ' . $usermail . '<br>
	Желаемая дата: ' . $userskiingdate . ' <br>
	Сообщение: ' . $userfeedback . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>