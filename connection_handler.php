<?php
// Receive the incoming JSON payload
$payload = json_decode(file_get_contents('php://input'), true);

// Assuming you're just testing, you can directly print the message along with the time taken to connect
echo "Connected Successfully (time it took in milliseconds to connect): " . $_SERVER['REQUEST_TIME_FLOAT'] * 1000;
?>