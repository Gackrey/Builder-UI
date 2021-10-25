let content_section = document.querySelector('.content-section');
let burgerbox = document.querySelector('.burgerbox');
let firstcross = document.querySelector('.firstcross');
let middledash = document.querySelector('.middledash');
let lastcross = document.querySelector('.lastcross');
let copybutton = document.getElementsByClassName('btncopy');
let scrollToggle = true;
burgerbox.addEventListener('click',()=>{
    firstcross.classList.toggle('rotatef');
    lastcross.classList.toggle('rotatel');
    middledash.classList.toggle('remove');
    content_section.classList.toggle('toggle');
    if(scrollToggle){
        document.querySelector('body').style.overflow = 'hidden';
        scrollToggle = !scrollToggle;
    }
    else{
        document.querySelector('body').style.overflow = 'initial';
        scrollToggle = !scrollToggle;
    }
});
content_section.addEventListener('mouseover',()=>{
    firstcross.classList.toggle('rotatef');
    lastcross.classList.toggle('rotatel');
    middledash.classList.toggle('remove');
    content_section.classList.toggle('toggle')
    document.querySelector('body').style.overflow = 'initial';
})
Array.from(copybutton).forEach(element=> {
    element.addEventListener('click', ()=>{
        element.innerText = 'copied';
        element.disabled = true;
        setTimeout(() => {
            element.innerText = 'copy';
            element.disabled = false;
        }, 2000);
        let copied = element.parentElement.nextSibling.nextSibling;
        var range = document.createRange();
        range.selectNode(copied);
        window.getSelection().removeAllRanges(); // clear current selection
        window.getSelection().addRange(range); // to select text
        document.execCommand("copy");
        window.getSelection().removeAllRanges();// to deselect
    });
  });