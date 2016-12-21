<?php
require "connect.php";
$query = "SELECT name FROM resources";
$result = mysqli_query($conn, $query);

$names = array();

while($row = mysqli_fetch_array($result))
{
	array_push($names, $row['name']);
}

echo json_encode($names);

?>