const focusTimeImput = document.querySelector('#focusTime'),
breakTimeImput = document.querySelector('#breakTimer'),
pausedBtn = document.querySelector('.pause')

document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    localStorage.setItem('focusTime', focusTimeImput.value);
    localStorage.setItem('breakTime', focusTimeImput.value);
})
document.querySelector('.reset').addEventListener('click',(e)=>{
    startBtn.style.transform ='scale(1)';
    clearTimeout(initial);
    setProgress(0);
    mindiv.textContent = 0;
    secdiv.textContent = 0;
    bell.pause();

})
pausedBtn.addEventListener('click', (e)=>{
    if (paused === undefined) {
        return
    }
    if (paused) {
        paused = false;
        initial = setTimeout(decremenT(),60);
        pausedBtn.textContent = 'pause';
        pausedBtn.classList.remove('resume');
    }
    else {
        clearTimeout(initial);
        pausedBtn.textContent = 'resume';
        pausedBtn.classList.add('resume');
        paused = true;
    }
})
