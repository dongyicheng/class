export const add = (state,obj)=>{
  state.count += obj;
};

//修改 banner数据
export const  changeBannerData = (state,obj)=>{
  console.log(obj);
  state.bannerData = obj;
};


//修改列表数据
export const changeHomeList = (state,obj) =>{
  state.homeList  = obj;
};

//修改列表数据的
export  const changeListData = (state,obj)=>{
  state.listData = state.listData.concat(obj);
};

//删除列数据中的某一项
export const removeListOne = (state,obj) => {
  //目标是把 state.listData 中的  obj  这一项 删除； obj就是传进来的 this.item
  state.listData = state.listData.filter((item)=>{
    return item !== obj
  })
};

//添加列表数据中的一项
export const addListOne = (state,obj) => {
  state.listData.unshift(obj);
};

//给收藏列表添加一项
export const addCollect = (state,obj) => {
  state.collectList.indexOf(obj)==-1 ? state.collectList.unshift(obj) : null;
  // 判断 列表中是否已经存在该项， 若有就不再添加
};

//给收藏列表中删除一项
export const removeCollect = (state,obj) => {
  state.collectList = state.collectList.filter((item)=>{
    return item !== obj;
  })
};
