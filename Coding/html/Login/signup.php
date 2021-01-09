<?php
    $firstname = filter_input(INPUT_POST, 'vname');
    $surname = filter_input(INPUT_POST, 'nname');
    $email = filter_input(INPUT_POST, 'email');

    if (!empty($firstname)){
    if (!empty($surname)){
    if (!empty($email)){

    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "lg";

    // Create connection
    $conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);

    if (mysqli_connect_error()){
        die('Connect Error ('. mysqli_connect_errno() .') '
        . mysqli_connect_error());
    }
    else{
        $sql = "INSERT INTO login (vname, nname, email)
        values ('$firstname','$surname','$email')";
        if ($conn->query($sql)){
        echo "New record is inserted sucessfully";
        }
        else{
            echo "Error: ". $sql ."
            ". $conn->error;
        }
            $conn->close();
    }
    }}}

	?>