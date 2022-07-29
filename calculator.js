function cb(val){
    
    document.getElementById("screen").value+=val;
    
}
function c(){
    document.getElementById("screen").value=null
}
function equal(){
    var text= document.getElementById("screen").value
    document.getElementById("screen").value=eval(text)
}