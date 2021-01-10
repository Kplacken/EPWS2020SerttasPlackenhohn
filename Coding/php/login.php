<?php

    $host = "localhost";
    $dbusername = "gksu";
    $dbpassword = "gksu";
    $dbname = "lg";

    // Create connection
    $conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);

    if (mysqli_connect_error()){
        die('Connect Error ('. mysqli_connect_errno() .') '
        . mysqli_connect_error());
    }
    else{
        // Check user login or not
        if(!isset($_SESSION['email'])){
            header("location: Homepage.html");
        }

    }

	?>