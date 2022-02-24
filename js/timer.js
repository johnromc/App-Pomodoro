const d = document,
l = d.querySelector('.clock'),
mindiv = d.querySelector('.minutes'),
secdiv = d.querySelector('.seconds'),
bell = d.querySelector('audio'),
startBtn = d.querySelector('.start');

localStorage.setItem('btn', 'focus');

let initial, totalSecs, perc, paused, mins, seconds;

startBtn.addEventListener('click', ()=>{
    let btn = localStorage.getItem('btn');

    if (btn === 'focus') {
        mins = +localStorage.getItem('focusTime');
    }
    else{
        mins = +localStorage.getItem('breakTime')
    }

    seconds = mins * 60;
    totalSecs = mins * 60;
    setTimeout(decremenT(),60);
    startBtn.style.transform ='scale(0)'
    paused = false;
});

function decremenT(){
    mindiv.textContent = Math.floor(seconds/60);
    secdiv.textContent = seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`;
    if (circle.classList.contains('danger')) {
        circle.classList.remove('danger');
    }
    if(seconds > 0){
        perc = Math.ceil(((totalSecs - seconds) / totalSecs) * 100);
        setProgress(perc)
        seconds--;
        initial = window.setTimeout("decremenT()",1000);
        
        if (seconds < 10) {
            circle.classList.add('danger')
        }
    }else{
        mins = 0;
        seconds = 0;
        bell.play();
        let btn = localStorage.getItem('btn');

        if(btn === 'focus'){
            startBtn.textContent = 'start break'
            startBtn.classList.add('break');
            localStorage.setItem('btn', 'break');
        }
        else{
            startBtn.classList.remove('break');
            startBtn.textContent='start focus';
            localStorage.setItem('btn','focus');
        }
        startBtn.style.transform='scale(1)'
    }

}