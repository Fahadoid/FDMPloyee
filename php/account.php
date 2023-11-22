    <?php
    session_start();
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Headers: Content-Type");
    $db = new SQLite3('fdm.db');
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    $email = $data->email;
    $val = $db->query("SELECT * FROM USER");
    $outcome = array();
    $isUser = false;
    while ($row = $val->fetchArray()){
        if ($email == $row['EMAIL']){
            $isUser = true;
            $user = array(
                'success' => true,
                'first_name' => $row['FIRST_NAME'],
                'last_name' => $row['LAST_NAME'],
                'email' => $row['EMAIL'],
                'mobile' => $row['MOBILE']
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