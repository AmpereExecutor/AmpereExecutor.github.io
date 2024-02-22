document.getElementById("checkButton").addEventListener("click", function() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                if (xmlhttp.responseText.trim() === "Connected") {
                    alert("CONNECTED");
                } else {
                    alert("Error: Connected Packet not retrieved or does not match expected value.");
                }
            } else {
                alert("Error: Unable to retrieve Connected Packet. Status code: " + xmlhttp.status);
            }
        }
    };
    xmlhttp.open("GET", "https://ampereexecutor.github.io/", true);
    xmlhttp.send();
});