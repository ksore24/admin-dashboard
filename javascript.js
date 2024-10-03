const newButton = document.querySelector('.newButton');
const uploadButton = document.querySelector('.uploadButton');
const shareButton = document.querySelector('.shareButton');

newButton.addEventListener('click', onClickFunction);
uploadButton.addEventListener('click', onClickFunction);
shareButton.addEventListener('click', onClickFunction);

newButton.addEventListener('hover', onHoverFunction);
uploadButton.addEventListener('hover', onHoverFunction);
shareButton.addEventListener('hover', onHoverFunction);

function onClickFunction(){
    window.location.href = "#";
}

function onHoverFunction(){
    
}