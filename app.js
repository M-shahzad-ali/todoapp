var list=document.getElementById("submit");
//Add value function

function addValue(){
    var value=document.getElementById("val");
   
    var tag=document.createElement("li")
    tag.setAttribute("class","underline")
  
    var putting=document.createTextNode(value.value);
  
   
  tag.appendChild(putting);
  list.appendChild(tag);
  value.value="";
  //Delete Button
  
  var btn=document.createElement("button");
  btn.setAttribute("class","sett");
  btn.setAttribute("onclick","delbtn(this)")
  var delBtn=document.createTextNode("DELETE");
  btn.appendChild(delBtn);
  tag.appendChild(btn);
  //Edit button
 var editBtn=document.createElement("button");
 //editBtn.setAttribute("src","https://images.unsplash.com/photo-1511189226387-984ec4ffea80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80")

 var editText=document.createTextNode("EDIT");
 editBtn.setAttribute("onclick","Edit(this)");
editBtn.setAttribute("class","sett");
 editBtn.appendChild(editText);
 tag.appendChild(editBtn);

 var  para=document.createElement("p");
 var date=new Date();
 
 para.append(date);
 tag.appendChild(para);

  

}
 //Delete list function
 function delbtn(e){
  e.parentNode.remove();
  }
//delete All function
function delall(){
  list.innerHTML=""}

 //edit function
 function Edit(e){
  // var a=e.parentNode.firstChild.nodeValue;
  var val=prompt("write what you want",e.parentNode.firstChild.nodeValue);
  e.parentNode.firstChild.nodeValue=val;

   



 }