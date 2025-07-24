function showoutputkinda() {
    document.getElementById("outputkinda").style.display = 'block';

    var userInput = document.getElementById("inputnumber").value;

    document.getElementById("pacman").style.display = "block";
    document.getElementById("think").style.display = "none";

    setTimeout(function() {
        document.getElementById("pacman").style.display = "none";
        document.getElementById("think").style.display = "block";
        document.getElementById("think").innerText = "u r thinking of... " + userInput + "!";
    }, 4000);
}
