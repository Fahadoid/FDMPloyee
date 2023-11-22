<?php
    session_start();
    header("Access-Control-Allow-Origin: http://localhost:3000");
    $db = new SQLite3('fdm.db');

    $users = $db->query("SELECT * FROM USER");
    $user_data = array();
    while($row = $users->fetchArray()){
        $user = array(
            'id' => $row['ID'],
            'first_name' => $row['FIRST_NAME'],
            'last_name' => $row['LAST_NAME'],
            'email' => $row['EMAIL'],
            'mobile' => $row['MOBILE']
        );
        $user_data[] = $user;
    }
    echo json_encode($user_data);
