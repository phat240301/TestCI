function add(a,b){
    let c = a+b;
    if(isNaN(c)){
        throw new Error('Input error');
    }
    return c;
}
function minus(a,b){
    let c = a-b;
    if(isNaN(c)){
        throw new Error('Input error');
    }
    return c;
}
module.exports={
    add,minus
}