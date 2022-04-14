const counter=document.querySelectorAll('.counter');
console.log(counter)
counter.forEach((counters)=>{
    counters.innerHTML=0;
    const updatecounter=()=>{
        const target=+counters.getAttribute('data-target')
        const startincount=Number(counters.innerHTML);
        const incr=target/100;
        if(startincount<target)
        {
            counters.innerHTML=`${startincount+incr}`
            setTimeout(updatecounter,10)
        }
        
    }
    updatecounter();
})
