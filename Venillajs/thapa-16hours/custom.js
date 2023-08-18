//counter
const counters = document.querySelectorAll('.counters');

counters.forEach((a)=>{
    a.innerHTML = 0;
    const updateCounter = () =>{
        const target = +a.getAttribute('data-target');
        const curValue = +a.innerHTML;
        const icr = target / 100;
        if(target > curValue){
            a.innerHTML = Math.round(curValue + icr);
            setTimeout(updateCounter,100);
        }else{
            a.innerHTML = target;
        }
    }
    updateCounter();
    
})




//1st part
const diva = document.querySelector('.apidiv');
const request = new XMLHttpRequest();
request.open('get','https://restcountries.eu/rest/v2/alpha/bd');
request.send();

request.addEventListener('load',function(){
    const arr = this.responseText;
    const data = JSON.parse(arr);
    const HTMLdata = `
        <img id="flag" src="${data.flag}" alt="">
        <br>
        <h1 id="name">${data.name}</h1>
        <br>
        <h3 id="capital">${data.capital}</h3>
        <hr>
        <br>
        <div class="footer">
            <span>${data.alpha2Code}</span>
            <span>${data.subregion}</span>
            <span>${data.region}</span>
        </div>
        <br>
    `;
    diva.insertAdjacentHTML('afterbegin',HTMLdata);
});




//2nd part

const Qz = document.querySelector('#Qz');
const Qzbtn = document.querySelector('#Qzbtn');

const headers = {
    headers:{
        Accept:'application/json'
    }
};

Qzbtn.addEventListener('click', async ()=>{
    try{
        const getData = await fetch('https://icanhazdadjoke.com/',headers);
        const Data = await getData.json();
        Qz.innerHTML = Data.joke;
    }catch(err){
        console.log(err);
    }
});




//3rd light on-off
const light = document.querySelector('#light');
const ltbtn = document.querySelector('#ltbtn');

ltbtn.addEventListener('click',()=>{
    light.classList.toggle('light-on');
});



//4th animetion
const proses = ()=>{
    const temp = document.querySelector('#animesh');
    temp.innerHTML = "" ;
    temp.style.color = "red";
    setTimeout(()=>{
        temp.innerHTML = "" ;
        temp.style.color = "orange";
    },100);
    setTimeout(()=>{
        temp.innerHTML = "" ;
        temp.style.color = "yellow";
    },200);
    setTimeout(()=>{
        temp.innerHTML = "" ;
        temp.style.color = "yellowgreen";
    },300);
    setTimeout(()=>{
        temp.innerHTML = "" ;
        temp.style.color = "green";
    },400);
}

setInterval(proses,500);




//5th temp calculator
const tempareture = () => {
    const inputVal = document.getElementById('tempInput').value;
    console.log(inputVal);
    const scaleVal = document.getElementById('scale');
    const agga = scale.options[scaleVal.selectedIndex].value;
    console.log(agga);
    const faransi = (cel)=>{
        let faren = Math.round((cel * 9/5) + 32);
        return faren;
    }
    const celesi = (far)=>{
        let celes = Math.round((far - 32 ) * 5/9);
        return celes;
    }
    
    if(agga == 'cel'){
        let results = faransi(inputVal);
        document.getElementById('tempResult').innerHTML = `${results} ফারেনহাইট` ;
    }else{
        let result = celesi(inputVal);
        document.getElementById('tempResult').innerHTML = `${result} সেলসিয়াস`;
    }

}


//Mega
const Add = document.querySelector('#megaAdd');
const mainDiv = document.querySelector('.boxs');


const addTolocal = () =>{
    const allData = document.querySelectorAll('textarea');
    const notes = [];
    allData.forEach((da) =>{
        notes.push(da.value);
    });
    // console.log(JSON.stringify(notes));
    localStorage.setItem('thapa-16h',JSON.stringify(notes));
}

const addNewNote = (text = '') =>{
    const note = document.createElement('div');
    note.classList.add('box');
    const htmlData = `
            <div class="icons">
                <i class="fas fa-edit"></i>
                <i class="fas fa-trash-alt"></i>
            </div>
            <textarea class="${text ? 'hide' : ''}" cols="30" rows="5" placeholder="Write Something"></textarea>
            <p class="info ${text ? '' : 'hide'}"></p>
    `;
    note.insertAdjacentHTML('afterbegin',htmlData);




    const upd = note.querySelector('.fa-edit');
    const del = note.querySelector('.fa-trash-alt');
    const set = note.querySelector('.info');
    const wri = note.querySelector('textarea');

    del.addEventListener('click',()=>{
        note.remove();
        addTolocal();
    });


    wri.value = text;
    set.innerHTML = text;


    upd.addEventListener('click',()=>{
        set.classList.toggle('hide');
        wri.classList.toggle('hide');
        addTolocal();
    });


    wri.addEventListener('change',(e)=>{
        const info = e.target.value;
        set.innerHTML = info;
    });

    mainDiv.appendChild(note);
    addTolocal();
};


const getLocal = JSON.parse(localStorage.getItem('thapa-16h'));
if(getLocal){getLocal.forEach((e)=>addNewNote(e))};

Add.addEventListener('click',() => addNewNote());