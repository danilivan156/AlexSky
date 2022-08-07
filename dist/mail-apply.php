<?php

$recepient = "your@mail.ru";
$siteName = "Alex Sky";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$message = trim($_POST["message"]);
$message = "Apply-form \nName: $name \nPhone: $phone \nEmail: $email \nMessage: $message";

$pagetitle = "Application from the website \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>