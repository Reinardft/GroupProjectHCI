function OpenEvent(frawlsallaEvent) {
    var i;
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0 ; i < tabcontent.length ; i++) {
        tabcontent[i].style.display = "none";
    }
    
    document.getElementById(frawlsallaEvent).style.display = "block";
}