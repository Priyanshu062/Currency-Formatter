
function format() {    
    var rupees =document.getElementById('amt').value;
    // alert(rupees)
    n= new Number(rupees);
    n1= n.toLocaleString("en-IN");
    document.getElementById('rs').innerHTML=`&#x20b9 ${n1}`;


    
    var rupees =document.getElementById('amt').value;
    // alert(rupees)
    n= new Number(rupees);
    n1= n.toLocaleString("en-US");
    document.getElementById('dollar').innerHTML=`$ ${n1}`;

    
    var rupees =document.getElementById('amt').value;
    // alert(rupees)
    n= new Number(rupees);
    n1= n.toLocaleString("ja-JP");
    document.getElementById('yen').innerHTML=`&#165 ${n1}`;
     
}

 