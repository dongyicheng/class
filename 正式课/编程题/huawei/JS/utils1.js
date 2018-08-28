// var utils={
//     toAry:function (arg) {
//         var ary=[];
//         try{
//            ary=[].slice.call(arg);
//         }catch(e){
//             for (let i = 0; i < arg.length; i++) {
//                 ary.push(arg[i])
//             }
//         }
//         return ary;
//     }
// }



var utils={
    toAry:function (arg) {
        var ary=[];
        try{
            ary=[].slice.call(arg)
        }catch (e){
            for (let i = 0; i < arg.length; i++) {
                ary.push(arg[i])
            }
        }
        return ary
    }
}