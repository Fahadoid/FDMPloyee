<?php
    session_start();
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Headers: Content-Type");
    $db = new SQLite3('fdm.db');
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    $user = $data->user;
    $first_name = $data->first_name;
    $last_name = $data->last_name;
    $email = $data->email;
    $password = $data->password;
    $mobile = $data->mobile;
    $query = $db->prepare("UPDATE USER SET FIRST_NAME=:fname, LAST_NAME=:lname, EMAIL=:email, PASSWORD=:pword, MOBILE=:mobile WHERE EMAIL=:user");
    $query->bindValue(':fname', $first_name, SQLITE3_TEXT);
    $query->bindValue(':lname', $last_name, SQLITE3_TEXT);
    $query->bindValue(':email', $email, SQLITE3_TEXT);
    $query->bindValue(':pword', $password, SQLITE3_TEXT);
    $query->bindValue(':mobile', $mobile, SQLITE3_TEXT);
    $query->bindValue(':user', $user, SQLITE3_TEXT);
    $query->execute();

    echo json_encode(array("success" => true));


