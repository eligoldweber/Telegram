<?php

$botToken = "331685887:AAGbp2P-Fm0FKnrBOMOiC5pC4bGdffG5Nxg";
$website = "https://api.telegram.org.bot".$botToken;

$update = file_get_contents($website."/getUpdates");

$updateArray = json_decode($update,TRUE);

$text = $updateArray["result"][0]["message"]["text"];

print_r($text);

?>