
//import data from './data.json' assert {type: 'json'};
//var mydata = JSON.parse(data);
//document.getElementById('allmap').innerHTML += `<a onmouseover="val(this.getAttribute('xlink:title'))" xlink:title="${mydata[0].title}">
//                    <g class="upazila additonalupazila" id="${mydata[0].name}">
//${mydata[0].path}
//</g>
//</a>
//<a onmouseover="val(this.getAttribute('xlink:title'))" xlink:title="${mydata[1].title}">
//                    <g class="upazila additonalupazila" id="${mydata[1].name}">
//${mydata[1].path}
//</g>
//</a>`;



function fetchData() {
fetch('./data.json')
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        document.getElementById('allmap').innerHTML += `<a onmouseover="val(this.getAttribute('xlink:title'))" xlink:title="${mydata[0].title}">
                    <g class="upazila additonalupazila" id="${mydata[0].name}">
${mydata[0].path}
</g>
</a>
<a onmouseover="val(this.getAttribute('xlink:title'))" xlink:title="${mydata[1].title}">
                    <g class="upazila additonalupazila" id="${mydata[1].name}">
${mydata[1].path}
</g>
</a>`;
        })
            .catch((error) => {
                console.log(`Error Fetching data : ${error}`)
                document.getElementById('country').innerHTML = 'Error Loading Data'
            });

}

fetchData()
