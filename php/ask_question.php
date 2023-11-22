<?php
    session_start();
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Headers: Content-Type");
    $db = new SQLite3('fdm.db');
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    $title = $data->title;
    $asker = $data->asker;
    $body = $data->body;
    $q_date = date('d/m/Y h:i:s a', time());
    $val = $db->prepare("INSERT INTO QUESTION(TITLE, ASKER, BODY, QUESTION_DATE) VALUES(:q_title, :q_asker, :q_body, :q_date);");
    $val->bindValue(':q_title', $title, SQLITE3_TEXT);
    $val->bindValue(':q_asker', $asker, SQLITE3_TEXT);
    $val->bindValue(':q_body', $body, SQLITE3_TEXT);
    $val->bindValue(':q_date', $q_date, SQLITE3_TEXT);
    $val->execute();

    echo json_encode(array(
        "success" => true
    ));

//
//    $query = $db->prepare("SELECT * FROM QUESTION WHERE TITLE=:get_title AND ASKER=:get_asker");
//    $query->bindValue(":get_title", $title, SQLITE3_TEXT);
//    $query->bindValue(":get_asker", $title, SQLITE3_TEXT);
