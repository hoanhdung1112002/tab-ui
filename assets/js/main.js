// tabui

const tabItems = document.querySelectorAll(".tab-item");
const paneItems = document.querySelectorAll(".tab-pane");
var line = document.querySelector(".line")

tabItems.forEach(function(item, index){
    var pane = paneItems[index]
    item.onclick = function(){
        var itemActive = document.querySelector(".tab-item.active");
        itemActive.classList.remove("active");
        this.classList.add("active");

        line.style.width = this.offsetWidth + 'px';
        line.style.left = this.offsetLeft + 'px';

        var paneActive = document.querySelector(".tab-pane.active");
        paneActive.classList.remove("active");
        pane.classList.add("active");
    }
});