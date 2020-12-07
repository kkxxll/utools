/**
 * find [在指定数组中查找包含指定键值的子项并返回该子项]
 * @param  {[Array]} arrayData [待遍历查找数据]
 * @param  {[Object]} keyItem [指定键值对象]
 * @return {[Object]} findItem [匹配对象]
 */

let find = (arrayData: Object[], keyItem: Object, getIndex: number): Object | null | undefined => {
    if(!(arrayData && keyItem)){
        return;
    }
    let findItem:null | Object = null, findIndex: number = -1, matchCount:number, keyArray: string[] = [], canContinue: boolean = true;
    for(let i in keyItem){
        if(keyItem.hasOwnProperty(i)){
            keyArray.push(i);
        }
    }
    arrayData.forEach((item: Object,index: number)=>{
        matchCount = 0;
        keyArray.forEach(key=>{
            if(item[key] === keyItem[key]){
                matchCount++;
            }
        });
        if(matchCount === keyArray.length && canContinue){
            findItem = item;
            findIndex = index;
            canContinue = false;
        }
    });
    return getIndex ? findIndex : findItem;
};

export default find;