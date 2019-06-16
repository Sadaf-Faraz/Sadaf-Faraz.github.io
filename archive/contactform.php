<?php
if(isset($_POST['submit'])){
$name = $_POST['name'];
$subject = $_POST['subject'];
$mainFrom = $_POST['email'];
$message= $_POST['message'];

$mailTo = "sadaffaraz17@gmail.com";
$headers = "From: ".$mailFrom;
$txt = "You have received an e-mail from ".$name.".\n\n".$message;
mail($mailTo, $subject, $txt, $headers);
header("Location: contact.html?mailsend");
}



?>

