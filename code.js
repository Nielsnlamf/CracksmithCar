function move(button) {
    console.log(button.id + " was called")
}

window.onload=function(){
    document.querySelectorAll('.movement').forEach(item => {
        item.addEventListener('click', () => {
            move(item)
        })
})}

var socket = io();
