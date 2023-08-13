<?php
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["response"])) {
    $capturedResponse = $_POST["response"];

    // Do something with the captured response (e.g., process, validate, etc.)

    // Send a response back to the client
    $serverResponse = "Response received and processed on the server.";
    echo $serverResponse;
}
?>
