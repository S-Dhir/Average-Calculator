//It was difficult to make the names so if they are a bit confusing sorry. I will try to change this in a future update. This version: 1.0.0
var gwhut=2;//how many inputs are there
var i=0;//how many times does the while loop go. 
var thinge;//answer (but this is not yet divided!)
thinge=0;

//How to take out average- add all the numbers and then divided it by the number of numbers.
var sum=0;//the grand final answer
function myfunction(){//Here the calculation is done
    thinge=0;
    i=0;
    sum=0; 
    while (i<gwhut){
        i=i+1;//Let me explain, i value is 0 but there is not element with 0 value it start from 1. Then it increase. Now let's say there are 2 inputs. Gwhut will be 2. then i will be 1. Calculation is done. but be cause of the loop it will happen again since i=1 and gwhut=2. i is added and the value of the element with id i (not "i") is taken again. this is also the reason for the id's to be numbers.
        thinge=Number(thinge)+Number(document.getElementById(i).value);
        sum=thinge/gwhut;//dividing the sum with the number of numbers
        document.getElementById("output").innerHTML=sum;//giving the output
    }
}
function moreinput(){//here the input is added
    gwhut=gwhut+1;//this step here broadcasts a message that one more input is added
    document.getElementById("input")/*the div that holds the inputs*/.innerHTML=document.getElementById("input").innerHTML+'<input type="number" oninput="myfunction()" id="'+gwhut+'" class="avinput">';//and here the inputs are added
}