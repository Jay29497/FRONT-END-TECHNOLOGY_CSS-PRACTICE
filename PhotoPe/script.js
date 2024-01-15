// document.addEventListener('DOMContentLoaded', ()=>{
//     const canvas = new fabric.Canvas('canvas');
//     const image = document.getElementById('file');
//     const brightness = document.getElementById('brightness');
//     const contrast = document.getElementById('contrast');
//     const saturation = document.getElementById('saturation');
//     const hue = document.getElementById('hue');
//     const shadow = document.getElementById('shadow');
//     const explore = document.getElementById('explore');
//     const blur = document.getElementById('blur');
//     const downloadbtn = document.getElementById('download')

//     function handleImage (e){
//         const file = e.target.files[0] //[image0, image1, image2, image3]
//         if(file){
//             // const reader = new fabric.Image(file);
//             console.log(file);
//         }

//     }   
// })

// function editRange (){
//     const con = document.getElementById('con');
//     const sat = document.getElementById('sat');
//     const blu = document.getElementById('blu');
//     const hu = document.getElementById('hu');
//     const sha = document.getElementById('sha');
//     const exp = document.getElementById('exp');
// }

var brightnessClick = false;

function brightnessHandler(){
    const brightnessInput = document.getElementById('brightness');
    brightnessClick = !brightnessClick;
    if(brightnessClick){
        brightnessInput.style.display = "block"
    }
    else{
        brightnessInput.style.display = "none"
    }
}
