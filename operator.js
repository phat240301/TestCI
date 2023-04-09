function add(a,b){
    a = parseInt(a);
    b = parseInt(b);
    let c = a+b;
    if(isNaN(c)){
        throw new Error('Input error');
    }
    return c;
}
function minus(a,b){
    a = parseInt(a);
    b = parseInt(b);
    let c = a-b;
    if(isNaN(c)){
        throw new Error('Input error');
    }
    return c;
}
module.exports={
    add,minus
}