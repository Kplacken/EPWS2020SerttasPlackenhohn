<?php
		$server = "localhost";
		$user = "root";
        $pass = "ahgase1_";
        $db = "LG";
        
        $l_id	= $_POST["l_id"];
		$vname	= $_POST["vname"];
		$nname	= $_POST["nname"];
		$email	= $_POST["email"];
		$status	= $_POST["status"];
		
		echo 'Hello world!';
	$verbindung = mysqli_connect($server, $user, $pass) or die ("Keine Verbindung möglich");
	
	mysql_select_db("LG") or die ("Suche fehlgeschlagen");
	
	
	$sql = "INSERT INTO login (l_id, vname, nname, email, status) VALUES ('', '$vname', '$nname', '$email', '$status')";
	
    if ($verbindung->query($sql) === TRUE) {
        echo "Erfolgreich registriert!";
      } else {
        echo "Error: " . $sql . "<br>" . $verbindung->error;
      }
      
      $verbindung->close();
	
	?>