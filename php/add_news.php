<?php
    session_start();
    header("Access-Control-Allow-Origin: http://localhost:3000/");
    $db = new SQLite3('fdm.db');
    $headline = $_POST['headline'];
    $post = $_POST['post'];
    $news_date = date('d/m/Y h:i:s a', time());

    $prep = $db->prepare("INSERT INTO NEWS(HEADER, BODY, NEWS_DATE) VALUES(:header, :body, :news_date)");
    $prep->bindValue(':header', $headline, SQLITE3_TEXT);
    $prep->bindValue(':body', $post, SQLITE3_TEXT);
    $prep->bindValue(':news_date', $news_date, SQLITE3_TEXT);
    $prep->execute();

    header("Location: http://localhost:3000/");