<?php
    session_start();
    header("Access-Control-Allow-Origin: http://localhost:3000");
    $db = new SQLite3('fdm.db');
    $query = $db->query("SELECT * FROM NEWS");
    $news_data = array();
    while($row = $query->fetchArray()){
        $news = array(
            'id' => $row['ID'],
            'header' => $row['HEADER'],
            'body' => $row['BODY'],
            'date' => $row['NEWS_DATE']
        );
        $news_data[] = $news;
    }
    echo json_encode($news_data);
