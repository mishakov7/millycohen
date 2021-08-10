function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
    window.location.href = "http://localhost/millycohen-com/drawings/";

}

function drop(e) {
    e.preventDefault();
    
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.querySelector("#" + data));
}

function allowDrop(e) {
    e.preventDefault();
}