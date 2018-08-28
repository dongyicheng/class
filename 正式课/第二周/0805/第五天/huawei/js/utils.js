var utils = {
    toJson: function (str) {
        var obj = {};
        try{
          obj = JSON.parse(str);
        }catch (e) {
          obj = eval(`(${str})`);
        }
        return obj;
    },
    listToAry: function (a) {
        var ary = [];
        try {
            ary = [].slice.call(a)
        }catch (e) {
            for(let i = 0; i < a.length; i++){
                ary.push(a[i])
            }
        }
        return ary
    }

};
// var utils = (function () {
//     var toJSON = function (str) {
//         var obj = {};
//         try{
//             obj = JSON.parse(str);
//         }catch (e) {
//             obj = eval(`(${str})`);
//         }
//         return obj;
//     };
//     return {
//         toJSON:toJSON
//     }
// })()
