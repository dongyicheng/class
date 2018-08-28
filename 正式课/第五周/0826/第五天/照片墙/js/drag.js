function dragStart(e) {
    //this 都是盒子
    e = e || window.event;
    this.startX = this.offsetLeft;
    this.startY = this.offsetTop;// 记录了盒子的初始位置

    this.mx = e.pageX;
    this.my = e.pageY;

    this.DragMove = dragMove.bind(this);
    this.DragEnd = dragEnd.bind(this);
    on(document,'mousemove',this.DragMove);
    on(document,'mouseup',this.DragEnd);

    fire(this,'myIndex');//在鼠标摁下时，触发 增加ZIndex层级的函数
}
function dragMove(e) {
    e.preventDefault();
    e = e || window.event;
    var l = e.pageX - this.mx + this.startX,
        t = e.pageY - this.my + this.startY;
    this.style.left = l + 'px';
    this.style.top = t + 'px';
    fire(this,'myHit');
}
function dragEnd() {
    //移除绑定的事件

    off(document,'mousemove',this.DragMove);
    off(document,'mouseup',this.DragEnd);
    // fire(this,'myHit');
    fire(this,'myChangePos');
}