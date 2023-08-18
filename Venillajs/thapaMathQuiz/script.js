 let math_container = document.getElementById('math-container');
 let tr = math_container.getElementsByTagName('tr');




 for (let i = 0; i < tr.length; i++) {
     let No = tr[i].getElementsByTagName('td')[0];
     //let msg = document.getElementById('msg');
     let value1 = tr[i].getElementsByTagName('td')[1];
     let value2 = tr[i].getElementsByTagName('td')[3];
     let oprs = tr[i].getElementsByTagName('td')[2];
     let theans = tr[i].getElementsByTagName('td')[6];
     let usr = tr[i].getElementsByTagName('td')[5];
     let thmbs = tr[i].getElementsByTagName('td')[7];
     let pnts = tr[i].getElementsByTagName('td')[8];


     let v1 = Math.floor(Math.random() * 11);
     let v2 = Math.floor(Math.random() * 11);
     //First value will be bigger then second value
     if (v1 < v2) {
         [v1, v2] = [v2, v1];
     }

     //operators
     let operatordata = ['+', '-', '*', '/'];
     let operator = '';
     for (let i = 0; i < 1; i++) {
         let oprdata = Math.floor(Math.random() * 4);
         operator = operatordata[oprdata];

         if (operator == '+') {
             oprs.innerHTML = "+";
         } else if (operator == '-') {
             oprs.innerHTML = "-";
         } else if (operator == '*') {
             oprs.innerHTML = "x";
         } else if (operator == '/') {
             oprs.innerHTML = "÷";
         } else {
             oprs.innerHTML = ".";
         }
     }
     let correct_ans = Math.floor(eval(v1 + operator + v2));

     if (correct_ans == "Infinity" || correct_ans == "NaN") {
         correct_ans = "--";
     }
     if (correct_ans < 10) {
         correct_ans = "0" + correct_ans;
     }

     No.innerHTML = (i + 1) + '.';
     value1.innerHTML = v1;
     value2.innerHTML = v2;
     theans.innerHTML = correct_ans;
     thmbs.innerHTML = "<i class='fas fa-thumbs-down'></i>";
     thmbs.style.color = "red";

     const result = (param) => {
         var inputs = param.value;
         thmbs[findindex(param)].innerHTML = "";
         pnts[findindex(param)].innerHTML = "";
         if (!inputs) {
             msg[findindex(param)].innerHTML = "উত্তর লিখো!";
         } else {
             if (inputs == correct_ans) {
                 thmbs[findindex(param)].innerHTML = "<i class='fas fa-thumbs-up'></i>";
                 thmbs[findindex(param)].style.color = "green";
                 pnts[findindex(param)].innerHTML = 1;
             } else {
                 thmbs[findindex(param)].innerHTML = "<i class='fas fa-thumbs-down'></i>";
                 thmbs[findindex(param)].style.color = "red";
                 pnts[findindex(param)].innerHTML = 0;
             }
         }
     }
 }




 const jsgame = () => {
     for (let s = 0; s < tr.length; s++) {

     }
 }