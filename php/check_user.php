<?php
    session_start();
    header("Access-Control-Allow-Origin: http://localhost:3000");
    $status = session_status();
    $user = Array();
    if ($status == 2){
        if (isset($_SESSION['email'])){
            $authenticated = array(
                'is_authenticated' => true,
                'email' => $_SESSION['email']
            );
        }else{
            $authenticated = array(
                'is_authenticated' => false,
                'email' => "None"
            );
        }
        $user[] = $authenticated;
    }else{
        $user[] = array(
            "session" => false
        );
    }
    echo json_encode($user);


