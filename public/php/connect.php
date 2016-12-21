<?php

$conn = mysqli_connect('localhost', 'root', 'test', 'test');

if(!$conn) {
	die("Connection Failed: " . mysqli_connect_error());
}
