window.onload=function(){

    let who = ['the dog','my granma','his turtle','my bird'];
    let action = ['eat','pissed','crushed','broked'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];
    

    var random1 = Math.floor(Math.random() * (4-0)+0);
    var random2 = Math.floor(Math.random() * (4-0)+0);
    var random3 = Math.floor(Math.random() * (3-0)+0);
    var random4 = Math.floor(Math.random() * (5-0)+0);

    document.getElementById("excuse").innerHTML = who[random1] + " " + action[random2]+ " " + what[random3]+ " " + when[random4] ;
} 
           