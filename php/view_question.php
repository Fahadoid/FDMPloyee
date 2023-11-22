<?php
    session_start();
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Headers: Content-Type");

    $db = new SQLite3('fdm.db');
    $query = $db->query("SELECT * FROM QUESTION");
    $q_data = array();
    while($row = $query->fetchArray()){
        $question = array(
            'id' => $row['ID'],
            'title' => $row['TITLE'],
            'asker' => $row['ASKER'],
            'body' => $row['BODY'],
            'date' => $row['QUESTION_DATE']
        );
        $q_data[] = $question;
    }
    echo json_encode($q_data);