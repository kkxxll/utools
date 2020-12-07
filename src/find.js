"use strict";
/**
 * find [在指定数组中查找包含指定键值的子项并返回该子项]
 * @param  {[Array]} arrayData [待遍历查找数据]
 * @param  {[Object]} keyItem [指定键值对象]
 * @return {[Object]} findItem [匹配对象]
 */
Object.defineProperty(exports, "__esModule", { value: true });
let find = (arrayData, keyItem, getIndex) => {
    if (!(arrayData && keyItem)) {
        return;
    }
    let findItem = null, findIndex = -1, matchCount, keyArray = [], canContinue = true;
    for (let i in keyItem) {
        if (keyItem.hasOwnProperty(i)) {
            keyArray.push(i);
        }
    }
    arrayData.forEach((item, index) => {
        matchCount = 0;
        keyArray.forEach(key => {
            if (item[key] === keyItem[key]) {
                matchCount++;
            }
        });
        if (matchCount === keyArray.length && canContinue) {
            findItem = item;
            findIndex = index;
            canContinue = false;
        }
    });
    return getIndex ? findIndex : findItem;
};
exports.default = find;
