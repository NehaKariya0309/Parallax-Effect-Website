let overlay=document.querySelector('.overlay');
// let content=document.querySelector('.content');
let part=document.querySelectorAll('.part');
let wall=document.querySelector('.Wall');
let campaigns=document.querySelector('.campaigns');

let knowmore=document.querySelector('.knowmore');
window.addEventListener('scroll',function(){
    overlay.style.backgroundSize=100+window.pageYOffset*0.1+'%';
   
    // knowmore.style.backgroundSize=100+window.pageYOffset+'%';
    // let p3=part3.style.opacity;
    // let p2=part2.style.opacity;
   
    part[0].style.opacity=1-(this.window.pageYOffset)*0.01;
    part[1].style.opacity=1-(this.window.pageYOffset)*0.01;
    part[10].style.opacity=1-(this.window.pageYOffset)*0.01;
    
    let op=part[0].style.opacity;

       

    part.forEach((e)=>{
        if(op!=0){
            let shift=(-1)*this.window.pageYOffset*0.1+'px';
    
            e.style.transform=`translateX(${shift})`;
        // console.log(shift);
        }
        
        
    })
 
})

let images=document.querySelectorAll('.gallery img');
images.forEach((e)=>{
    e.addEventListener('mouseover',()=>{
        e.style.transform='scale(1.3)';
        e.style.transition='all 0.5s ease-in-out';
    })
    e.addEventListener('mouseout',()=>{
        e.style.transform='scale(1)';
      
    })
})


