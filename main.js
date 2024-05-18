var op=document.getElementById("operation");
function delet(event){
    op.textContent=" ";
}
function show(event){
    op.textContent += event.target.textContent;
}
function calculate(){
    try{
    var result=eval(op.textContent);
    op.textContent=result;
    }
    catch(error){
        op.textContent="ERROR"
    }
}