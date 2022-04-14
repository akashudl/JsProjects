

const tempload=()=>{
    let temp =document.getElementById('temp');
    temp.innerHTML="&#xf2cb"
    setTimeout(()=>{
        temp.innerHTML="&#xf2ca"
        temp.style.color="#ffcc00"
        setTimeout(()=>{
            temp.innerHTML="&#xf2c8"
            temp.style.color="rgb(255, 51, 0)"
            setTimeout(()=>{
                temp.innerHTML="&#xf2c7"
                temp.style.color="#d63031"
                
            },1000)
        },1000)

    },1000)

}
tempload()
setInterval(tempload,5000)
