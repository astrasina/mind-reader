function showoutputkinda() {
    document.getElementById("outputkinda").style.display = 'block';
    var originalContent = document.getElementById("pacman").innerHTML;
    document.getElementById("pacman").innerHTML;
        setTimeout(function() {
            document.getElementById("pacman").style.display = "none";
        }, 4000);
        setTimeout(function() {
            document.getElementById("think").style.display = 'block';
        }, 4000);
}