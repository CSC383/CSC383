<?php

$conn = mysqli_connect('127.0.0.1', 'root', 'test', 'test');

if(!$conn) {
	die("Connection Failed: " . mysqli_connect_error());
}
