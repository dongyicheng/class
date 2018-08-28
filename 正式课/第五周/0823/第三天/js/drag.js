function dragStart(e) {
    e = e || window.event;

    this.DragMove = dragMove.bind(this);
    this.DragEnd = dragEnd.bind(this);
    // document.onmousemove = this.DragMove;
    on(document,'mousemove',this.DragMove);
    // document.onmouseup = this.DragEnd;
    on(document,'mouseup',this.DragEnd);

    this.startX = this.offsetLeft;
    this.startY = this.offsetTop;

    this.mx = e.pageX;
    this.my = e.pageY;

    on(oDiv,'myFly',fly);
    on(oDiv,'myDrop',drop);
}
function dragMove(e) {
    e = e || window.event;
    var x = e.pageX - this.mx,
        y = e.pageY - this.my;
    this.style.left = this.startX + x + 'px';
    this.style.top = this.startY + y + 'px';
    if(!this.prevX){
        this.prevX = 0;
    }
    this.speed = e.pageX - this.prevX;
    this.prevX = e.pageX;
}
function dragEnd() {
    // document.onmousemove = null;
    off(document,'mousemove');
    // document.onmouseup = null;
    off(document,'mouseup');
    this.maxL = (document.documentElement.clientWidth||document.body.clientWidth) - this.offsetWidth;
    if(!this.running){
        fire(this,'myFly','qqq');
        // fly.call(this);
    }
    this.maxT = (document.documentElement.clientHeight||document.body.clientHeight) - this.offsetHeight;
    // drop.call(this);
    fire(this,'myDrop');
}