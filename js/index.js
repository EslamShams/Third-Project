let england = document.getElementById('england'),
    germany = document.getElementById('germany'),
    spain = document.getElementById('spain'),
    italy = document.getElementById('italy'),
    france = document.getElementById('france');
/// Links

england.onclick = () => window.location.href = "primerleague.html";

france.onclick = () => window.location.href = "france.html";

germany.onclick = () => window.location.href = "germany.html";

italy.onclick = () => window.location.href = "italy.html";

spain.onclick = () => window.location.href = "spain.html";

/// Links

//// Date

let myDate = new Date(),
    today = myDate.getDate(),
    month = myDate.getMonth() + 1,
    year = myDate.getFullYear(),
    printDate = document.getElementById("matches");
printDate.textContent = `Today Matches ${today}/${month}/${year}`;  

 ///Date

let myFrames = document.getElementsByTagName('iframe');
germany.onmouseover = ()=> {
    if(myFrames[0].style.display='none'){
        myFrames[0].style.display='block'
    }
}
germany.onmouseleave = ()=> {
    if(myFrames[0].style.display='block'){
        myFrames[0].style.display='none'
    }
}

spain.onmouseover = ()=> {
    if(myFrames[1].style.display='none'){
        myFrames[1].style.display='block'
    }
}
spain.onmouseleave = ()=> {
    if(myFrames[1].style.display='block'){
        myFrames[1].style.display='none'
    }
}
england.onmouseover = ()=> {
    if(myFrames[2].style.display='none'){
        myFrames[2].style.display='block'
    }
}
england.onmouseleave = ()=> {
    if(myFrames[2].style.display='block'){
        myFrames[2].style.display='none'
    }
} 
italy.onmouseover = ()=> {
    if(myFrames[3].style.display='none'){
        myFrames[3].style.display='block'
    }
}
italy.onmouseleave = ()=> {
    if(myFrames[3].style.display='block'){
        myFrames[3].style.display='none'
    }
}
france.onmouseover = ()=> {
    if(myFrames[4].style.display='none'){
        myFrames[4].style.display='block'
    }
}
france.onmouseleave = ()=> {
    if(myFrames[4].style.display='block'){
        myFrames[4].style.display='none'
    }
}



///// Top Gallary
const messi = document.getElementById('messi'),
      ronaldo = document.getElementById('ronaldo'),
      salah = document.getElementById('salah'),
      mbappe = document.getElementById('mbappe'),
      messiBox = document.getElementById('messi-box'),
      ronaldoBox = document.getElementById('ronaldo-box'),
      salahBox = document.getElementById('salah-box'),
      mbappeBox = document.getElementById('mbappe-box');
///// Top Gallary

//// Bottom Gallary
const neymar = document.getElementById('neymar'),
      grizmaan = document.getElementById('grizmaan'),
      pogba = document.getElementById('pogba'),
      aguero = document.getElementById('aguero'),
      neymarBox = document.getElementById('neymar-box'),
      grizmaanBox = document.getElementById('grizmaan-box'),
      pogbaBox = document.getElementById('pogba-box'),
      agueroBox = document.getElementById('aguero-box');

///// Bottom Gallary

messi.onmouseover = ()=>{
    if(messiBox.style.display="none") {
        messiBox.style.display="block"

    }
}
messi.onmouseleave = ()=>{
    if(messiBox.style.display="block") {
        messiBox.style.display="none"

    }
}
ronaldo.onmouseover = ()=>{
    if(ronaldoBox.style.display="none") {
        ronaldoBox.style.display="block"

    }
}
ronaldo.onmouseleave = ()=>{
    if(ronaldoBox.style.display="block") {
        ronaldoBox.style.display="none"

    }
}
salah.onmouseover = ()=>{
    if(salahBox.style.display="none") {
        salahBox.style.display="block"

    }
}
salah.onmouseleave = ()=>{
    if(salahBox.style.display="block") {
        salahBox.style.display="none"

    }
}
mbappe.onmouseover = ()=>{
    if(mbappeBox.style.display="none") {
        mbappeBox.style.display="block"

    }
}
mbappe.onmouseleave = ()=>{
    if(mbappeBox.style.display="block") {
        mbappeBox.style.display="none"

    }
}
neymar.onmouseover = ()=>{
    if(neymarBox.style.display="none") {
        neymarBox.style.display="block"

    }
}
neymar.onmouseleave = ()=>{
    if(neymarBox.style.display="block") {
        neymarBox.style.display="none"

    }
}
grizmaan.onmouseover = ()=>{
    if(grizmaanBox.style.display="none") {
        grizmaanBox.style.display="block"

    }
}
grizmaan.onmouseleave = ()=>{
    if(grizmaanBox.style.display="block") {
        grizmaanBox.style.display="none"

    }
}
pogba.onmouseover = ()=>{
    if(pogbaBox.style.display="none") {
        pogbaBox.style.display="block"

    }
}
pogba.onmouseleave = ()=>{
    if(pogbaBox.style.display="block") {
        pogbaBox.style.display="none"

    }
}
aguero.onmouseover = ()=>{
    if(agueroBox.style.display="none") {
        agueroBox.style.display="block"
    }
}
aguero.onmouseleave = ()=>{
    if(agueroBox.style.display="block") {
        agueroBox.style.display="none"

    }
}
window.onscroll = () =>{
    if(messiBox.style.display="block") {
        messiBox.style.display="none"

    }
    if(ronaldoBox.style.display="block") {
        ronaldoBox.style.display="none"

    }
    if(salahBox.style.display="block") {
        salahBox.style.display="none"

    }
    if(mbappeBox.style.display="block") {
        mbappeBox.style.display="none"

    }
    if(neymarBox.style.display="block") {
        neymarBox.style.display="none"

    }
    if(grizmaanBox.style.display="block") {
        grizmaanBox.style.display="none"

    }
    if(pogbaBox.style.display="block") {
        pogbaBox.style.display="none"

    }
    if(agueroBox.style.display="block") {
        agueroBox.style.display="none"

    }
    if(myFrames[0].style.display='block'){
        myFrames[0].style.display='none'
    }
    if(myFrames[1].style.display='block'){
        myFrames[1].style.display='none'
    }
    if(myFrames[2].style.display='block'){
        myFrames[2].style.display='none'
    }
    if(myFrames[3].style.display='block'){
        myFrames[3].style.display='none'
    }
    if(myFrames[4].style.display='block'){
        myFrames[4].style.display='none'
    }
}