function showHideNavigation() {
    var x = document.getElementById("navHide");
    if (x.className.indexOf("aurum-show") === -1) {
        x.className += " aurum-show";
    } else {
        x.className = x.className.replace(" aurum-show", "");
    }
}

// Modal Image Gallery
function onClick(element) {
    document.getElementById("image-view").src = element.src;
    document.getElementById("gallery-view").style.display = "block";
}
