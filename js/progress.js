const circle = document.querySelector('.progress-ring-circle'),
radius = circle.r.baseVal.value,
circunference = radius * 2 * Math.PI;

circle.style.strokeDasharray = circunference;
circle.style.strokeDashaoffset = circunference;

function setProgress(percent){
    const offset = circunference - ( percent/100) * circunference;
    circle.style.strokeDashaoffset = offset;
}
