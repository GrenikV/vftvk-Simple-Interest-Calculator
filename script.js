function compute(){
        //Things that are
        var p = document.getElementById("principal")
        var principal = document.getElementById("principal").value;
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);

        // Things that happen
        if(principal<=0){
        alert("Enter a postitive number");
        p.focus();
        }
        else{
        document.getElementById("result").innerHTML="If you deposit <Mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%.</mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\><br\>"
        }
    
    }
 function updateRate(){
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval;
    }
        
