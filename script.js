var i=99;
var sent = "99 bottle of beer on the wall, 99 bottle of beer, <br/>Take one down pass it around, 98 bottles of beer on the wall. <br/>"
while (i>1){
    for (var i=98; i>0; i--){
        
        if (i===2) {
            sent+="2 bottles of beer on the wall, 2 bottles of beer, <br/>Take one down pass it around, 1 bottle of beer on the wall. <br/>"
        }
        else if (i===1) {
            sent+="1 bottle of beer on the wall, 1 bottle of beer, <br/>Take it down pass it around, no more bottles of beer on the wall. <br/>"
        }
        else {
            sent+=i+" bottles of beer on the wall, "+i+" bottles of beer, <br/>Take one down pass it around, "+(i-1)+" bottles of beer on the wall. <br/>"
        }
    
    } 
    document.getElementById("main").innerHTML = sent
}
