<?php

$recepient = "your@mail.ru";
$siteName = "Alex Sky";

$phone = trim($_POST["phone"]);
$message = "Phone: $phone";

$pagetitle = "Application from the website \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>