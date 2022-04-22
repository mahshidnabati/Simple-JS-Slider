const images=['image1.jpg','image2.jpg','image3.jpg'];
const btnNext=document.getElementById('next');
const btnBack=document.getElementById('back');
function funcNext() {
    let srcState=document.getElementById('img').attributes.src.value;
    let imagesState=srcState.substring(7);
    let imageStateIndex=images.indexOf(imagesState);
    if (imageStateIndex>=0 && imageStateIndex<images.length-1) {
        imageStateIndex++;
        document.getElementById('img').src='images/'+images[imageStateIndex];
    }else{
        document.getElementById('img').src='images/'+images[0];
    }
}
function funcBack() {
    let srcState=document.getElementById('img').attributes.src.value;
    let imagesState=srcState.substring(7);
    let imageStateIndex=images.indexOf(imagesState);
    
    if (imageStateIndex>0 && imageStateIndex<images.length) {
        imageStateIndex--;
        console.log(imageStateIndex);
        document.getElementById('img').src='images/'+images[imageStateIndex];
        console.log('test2');
    }else{        
        document.getElementById('img').src='images/'+images[images.length-1];
        console.log('test1');
    }
}