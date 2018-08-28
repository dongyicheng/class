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
    /*document.onmousemove = dragMove.bind(this);
    document.onmouseup = dragEnd.bind(this);*/
}
function dragMove(e) {
    e = e || window.event;
    //根据鼠标的移动距离 和 盒子的初始位置  去设置盒子当前的位置
    var l = e.pageX - this.mx + this.startX,//盒子当前 x 轴的位置
        t = e.pageY - this.my + this.startY;//盒子当前 y 轴的位置
    this.style.left = l + 'px';
    this.style.top = t + 'px';

    if(!this.prevX){//存储上一次 move触发时；鼠标的x轴位置
        this.prevX = this.mx;
    }
    this.speed = e.pageX - this.prevX;// 两次move触发时，x轴移动的距离当作速度
    this.prevX = e.pageX;
}
function dragEnd() {
    //移除绑定的事件
    /*document.onmousemove = null;
    document.onmouseup = null;*/
    off(document,'mousemove',this.DragMove);
    off(document,'mouseup',this.DragEnd);
    fire(this,'myFly')
}