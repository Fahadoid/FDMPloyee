<?php

    session_start();
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Headers: Content-Type");
    $db = new SQLite3('fdm.db');
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    $q_id = $data->q_id;
    $responder = $data->responder;
    $body = $data->body;
    $a_date = date('d/m/Y h:i:s a', time());
    $val = $db->prepare("INSERT INTO ANSWER(QUESTION_ID, RESPONDER, BODY, ANSWER_DATE) VALUES(:q_id, :a_responder, :a_body, :a_date);");
    $val->bindValue(':q_id', $q_id, SQLITE3_INTEGER);
    $val->bindValue(':a_responder', $responder, SQLITE3_TEXT);
    $val->bindValue(':a_body', $body, SQLITE3_TEXT);
    $val->bindValue(':a_date', $a_date, SQLITE3_TEXT);
    $val->execute();

    echo json_encode(array(
        "success" => true
    ));