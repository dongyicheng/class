import axios from 'axios';

export const getBannerData = ({commit},obj)=>{
    axios.post('/bannerList').then((data)=>{
        this.arr=data.data
        commit('changeBannerData',data.data)
        console.log(data)
    })
}