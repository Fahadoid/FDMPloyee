<?php
    session_start();
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Headers: Content-Type");
    $db = new SQLite3('fdm.db');
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    $email_to = $data->to_email;
    $message = $data->message;
    $email_from = $data->from_email;
    $email_date = date('d/m/Y h:i:s a', time());

    $prep = $db->prepare("INSERT INTO MESSAGE(TO_EMAIL, FROM_EMAIL, BODY, EMAIL_DATE) VALUES(:to_email, :from_email, :body, :email_date)");
    $prep->bindValue(':to_email', $email_to, SQLITE3_TEXT);
    $prep->bindValue(':from_email', $email_from, SQLITE3_TEXT);
    $prep->bindValue(':body', $message, SQLITE3_TEXT);
    $prep->bindValue(':email_date', $email_date, SQLITE3_TEXT);
    $prep->execute();

    echo json_encode(array(
        "success" => true
    ));







