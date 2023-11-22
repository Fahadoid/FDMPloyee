<?php
    header("Access-Control-Allow-Origin: http://localhost:3000/");
    $db = new SQLite3('fdm.db');
    $first_name = $_POST['firstname'];
    $last_name = $_POST['lastname'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $mobile = $_POST['number'];

    $val = $db->query("SELECT * FROM USER");
    while ($row = $val->fetchArray()){
        if ($row['EMAIL'] == $email){
            header("Location: http://localhost:3000/login");
        }
    }
    $prep = $db->prepare("INSERT INTO USER(FIRST_NAME, LAST_NAME, EMAIL, PASSWORD, MOBILE) VALUES(:first_name, :last_name, :email, :password, :mobile)");
    $prep->bindValue(':first_name', $first_name, SQLITE3_TEXT);
    $prep->bindValue(':last_name', $last_name, SQLITE3_TEXT);
    $prep->bindValue(':email', $email, SQLITE3_TEXT);
    $prep->bindValue(':password', $password, SQLITE3_TEXT);
    $prep->bindValue(':mobile', $mobile, SQLITE3_TEXT);
    $prep->execute();

    header("Location: http://localhost:3000/");




