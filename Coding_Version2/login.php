<?php
		$server = "localhost";
		$user = "root";
		$pass = "";
		
		$email	= $_POST["email"];
		$passwd	= $_POST["passwd"];
		
		
	$verbindung = mysql_connect($server, $user, $pass) or die ("Keine Verbindung möglich");
	
	mysql_select_db("LG") or die ("Suche fehlgeschlagen");
	
	
	$sql = "SELECT * FROM login WHERE email='$email' AND passwd='$passwd'";
	
	$abfrage = mysql_query($sql);
	
		if (!mysql_num_rows($abfrage)) {
			echo "<p>Fehler! Nutzer ist nicht registriert!</p>";
		}
		while ($zeile = mysql_fetch_array($abfrage)) {
			echo "<p>'<a href='login.html'>Hier</a>' klicken f&uuml;r weiter</p>";
		}
	
	mysql_close ($verbindung);
	
	?>