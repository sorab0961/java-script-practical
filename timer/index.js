let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');

let start = document.getElementById('start');
let reset = document.getElementById('reset');

let disp = document.getElementById('disp');

let interval = 0;
let total = 0;

totalValue = ()=>{
    total = Number(hour.value)*3600 + Number(minute.value)*60 + Number(second.value);
}

Timer = ()=>{
    totalValue();
    total--;

    if(total >= 0)
    {
        let hr = Math.floor(total/3600);
        let mt = Math.floor((total/60) - (hr*60));
        let sc = total - ((hr*3600) + (mt*60));

        hour.value = hr;
        minute.value = mt;
        second.value = sc;
    }
    else{
        disp.innerText = "Time Over!!";
    }
}

start.addEventListener('click', ()=>{
    clearInterval(interval);
    interval = setInterval(Timer, 1000);

    disp.innerText = "Timer Started";
});

reset.addEventListener('click', ()=>{

    clearInterval(interval);

    hour.value = 0;
    minute.value = 0;
    second.value = 0;

    disp.innerText = "Timer";
});