<?php
    session_start();
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Headers: Content-Type");

    $db = new SQLite3('fdm.db');
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    $to_email = $data->email;
    $post_data = array();
    if (isset($to_email)) {
        $query = $db->prepare("SELECT * FROM MESSAGE WHERE TO_EMAIL=:to_email");
        $query->bindValue(':to_email', $to_email, SQLITE3_TEXT);
        $emails = $query->execute();
        while ($row = $emails->fetchArray()) {
            $messages = array(
                'id' => $row['ID'],
                'to_email' => $row['TO_EMAIL'],
                'from_email' => $row['FROM_EMAIL'],
                'body' => $row['BODY'],
                'date' => $row['EMAIL_DATE']
            );
            $post_data[] = $messages;
        }
    }
    echo json_encode($post_data);

