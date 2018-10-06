let btn = document.getElementById('btn');
btn.onclick = function () {
    let xhr = new XMLHttpRequest;
    xhr.open('get','/add',true);
    xhr.send(null)
}