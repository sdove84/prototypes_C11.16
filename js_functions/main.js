function myMessage(){
    console.log('my message function');
}
function add(num1, num2){
    console.log(num1 + num2)
}
function add2(num3, num4){
    var total = num3 + num4;
    return total;
}
var add2result = add2(10,36);

function carFlip(element){
    $(element).hide();
}