<?php

$conn = mysqli_connect('localhost', 'root', '', 'test');

if(!$conn) {
	die("Connection Failed: " . mysqli_connect_error());
}
else
	echo("Success");

$sql = "SELECT * FROM resources";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
    	    	 	
echo $row['name'];
