function getvalue(value){
    var a = document.getElementById("val")
    a.value += value;

}
function clearresult(){
var b = document.getElementById("val")
b.value = " "

}
function getresult(){
var c = document.getElementById("val")
c.value = eval(c.value)

}
