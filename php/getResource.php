<?php
	$sql = "SELECT name FROM resources";
    $result = mysqli_query($conn, $sql);
	echo "<select classe='form-control'>";
    while($row = mysqli_fetch_array($result)){
	echo "<option>" . $row['name'] . "</option>";
	};  

?>