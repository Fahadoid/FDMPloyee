<?php
    session_start();
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Headers: Content-Type");

    $db = new SQLite3('fdm.db');
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    $id = $data->id;
    $answer_data = array();
    $query = $db->prepare("SELECT * FROM ANSWER WHERE QUESTION_ID=:id");
    $query->bindValue(':id', $id);
    $answers = $query->execute();
    while ($row = $answers->fetchArray()) {
        $answer = array(
            'id' => $row['ID'],
            'responder' => $row['RESPONDER'],
            'body' => $row['BODY'],
            'date' => $row['ANSWER_DATE']
        );
        $answer_data[] = $answer;

    }
    echo json_encode($answer_data);
