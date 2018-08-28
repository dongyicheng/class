function dragStart(e){
    this.mx=e.pageX;
    this.my=e.pageY;
    this.startX=this.offsetLeft;
    this.startY=this.offsetTop;
    this.dragMove=dragMove.bind(this);
    this.dragEnd=dragEnd.bind(this);
    on(document,'mousemove',this.dragMove);
    on(document,'mouseup',this.dragEnd);
    fire(this,'myIndex');
}
function dragMove(e){
    e.preventDefault();
    let l=e.pageX-this.mx+this.startX,
        t=e.pageY-this.my+this.startY;
    this.style.left=l+'px';
    this.style.top=t+'px';
    fire(this,'myHit')
}
function dragEnd(){
    off(document,'mousemove',this.dragMove);
    off(document,'mouseup',this.dragEnd);
    fire(this,'myPos')
}