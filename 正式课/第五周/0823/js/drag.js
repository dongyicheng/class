function dragStart(e) {
    e=e||window.event
    this.startX=this.offsetLeft;
    this.startY=this.offsetTop;
    this.mx=e.pageX;
    this.my=e.pageY;
    // this.flag=true;
    this.dragMove=dragMove.bind(this);
    this.dragEnd=dragEnd.bind(this);
    on(document,'mousemove',this.dragMove);
    on(document,'mouseup',this.dragEnd);
    // document.onmousemove=dragMove.bind(this)
    // document.onmouseup=dragEnd.bind(this)
    on(oDiv,'myFly',fly)
    on(oDiv,'myDrop',drop)
}
function dragMove(e) {
    // if(!this.flag)return
    e.preventDefault();
    e=e||window.event
    let x=e.pageX-this.mx,
        y=e.pageY-this.my;
    this.style.left=this.startX + x + 'px'
    this.style.top=this.startY + y + 'px'

    //速度
    if(!this.prevX){
        this.prevX=0;
    }
    this.speed=e.pageX - this.prevX
    this.prevX=e.pageX;
}
function dragEnd() {
    // this.flag=false;
    // document.onmousemove=null;
    off(document,'mousemove',this.dragMove)
    // document.onmouseup=null;
    off(document,'mouseup',this.dragEnd)
    if(!this.running) {
        fire(this,'myFly')
        // fly.call(this)//上次未执行完  不可执行新的
    }
    // drop.call(this)
    fire(this,'myDrop')
    this.maxL=(document.documentElement.clientWidth||document.body.clientWidth) - this.offsetWidth
    this.maxT=(document.documentElement.clientHeight||document.body.clientHeight) - this.offsetHeight

}