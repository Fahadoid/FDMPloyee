<?php
    session_start();
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Headers: Content-Type");
    $db = new SQLite3('fdm.db');
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    $username = $data->username;
    $password = $data->password;
    $val = $db->query("SELECT * FROM USER");
    $outcome = array();
    $isUser = false;
    while ($row = $val->fetchArray()){
        if ($username == $row['EMAIL'] && $password == $row['PASSWORD']){
            $isUser = true;
            $user = array(
                'success' => true,
                'email' => $username
            );
            $outcome[] = $user;
        }
        //echo "{$row['ID']} {$row['FIRST_NAME']} {$row['LAST_NAME']} {$row['EMAIL']} {$row['PASSWORD']}\n";
    }
    if ($isUser) {
        echo json_encode($outcome);
    }else {
        echo json_encode(array(
            'success' => false
        ));
    }


