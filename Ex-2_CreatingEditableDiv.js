// create a new element
let divElem=document.createElement('div');

// adding text to the created element
let val=localStorage.getItem('text');
let text;
if(val==null){
    text=document.createTextNode('Click here to edit!');
}
else{
    text=document.createTextNode(val);
}

divElem.appendChild(text);

// set attributes to the created element
divElem.setAttribute('id','elem');
divElem.setAttribute('class','ele');
divElem.setAttribute('style','border:2px solid blue; width:200px;height:50px; margin:0px 30px; padding:20px;');

// grab the main container
let container=document.querySelector('.container');
let first=document.getElementById('myFirst');

// insert the element before element with id:- myFirst
container.insertBefore(divElem,first);
console.log(divElem,container,first);

// add event listener to the divElem
divElem.addEventListener('click',function(){
    let noTextArea=document.getElementsByClassName('textarea').length;
    if(noTextArea==0){
        let html=elem.innerHTML;
        divElem.innerHTML=`<textarea class="form-control textarea" id="textarea" rows="3">${html}</textarea> `;    
    }

    //listen for the blur event on textarea
    let textarea=document.getElementById('textarea');
    textarea.addEventListener('blur',function(){
        elem.innerHTML=textarea.value;
        localStorage.setItem('text',textarea.value);
    })
})
