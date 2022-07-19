let timer = document.getElementById('timer');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let working = false;
let h = 0, m = 0, s = 0, ms = 0;

function Start() {
    if(working) return;
    Disable(start, true)

    Disable(reset, false)
    Disable(stop, false)
    
    working = true;

    setInterval(() => {
        if(!working) return;
        ms = parseInt(ms);
        s = parseInt(s);
        m = parseInt(m);
        h = parseInt(h);

        ms+=10;
    
        if(ms == 1000) {
            
            s++;
            ms=0;
        }
        if(s == 60) {
            m++;
            s=0;
        }
        if(m == 60) {
            h++;
            m=0;
        }

        if (s < 10 || s == 0) {
            s = '0' + s;
        }
    
        if (m < 10 || m == 0) {
            m = '0' + m;
        }
    
        if (h < 10 || h == 0) {
            h = '0' + h;
        }
        
    
        ChangeTimer(`${h}:${m}:${s}:${ms}`);
    }, 10)
}

function Stop() {
    if(!working) return;
    working = false;
    Disable(stop, true)
    Disable(start, false)
}

function Reset() {
    Disable(reset, true)
    Stop()
    h = 0, m = 0, s = 0, ms = 0;
    ChangeTimer(`00:00:00:00`)
}

function ChangeTimer(content) {
    timer.innerHTML = content;
}

function Disable(button, value) {
    if(value) {
        let att = document.createAttribute('disabled');
        att.value = value;

        button.setAttributeNode(att);
        return;
    }
    button.removeAttribute('disabled')
}