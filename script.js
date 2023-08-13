document.addEventListener("DOMContentLoaded", function() {
    const responseTextarea = document.getElementById("responseTextarea");
    const responseForm = document.getElementById("responseForm");

    // Function to append new responses to the text area
    function appendResponse(response) {
        responseTextarea.value += response + "\n";
    }

    // Handle form submission
    responseForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Send the captured response to the server (using AJAX)
        const capturedResponse = responseTextarea.value;
        sendResponseToServer(capturedResponse);
    });

    // Function to send captured response to the server
    function sendResponseToServer(response) {
        const url = "your_php_script.php";
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    appendResponse("Server response: " + xhr.responseText);
                } else {
                    appendResponse("Error: " + xhr.statusText);
                }
            }
        };
        xhr.send("response=" + encodeURIComponent(response));
    }
});
