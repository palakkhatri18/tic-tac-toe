function func(x)
{
    // console.log(x)
    var m = Number(localStorage.getItem("y"));
    setvar(x,m)
    // console.log(m)
    if(m%2==1)
    {
        // odd wala case
        document.getElementById(x).innerHTML = 0
        document.getElementById(x).disabled = true
        m = m+1
        localStorage.setItem("y",m);
        // console.log(m)
    }
    else{
        document.getElementById(x).innerHTML = 'X'
        document.getElementById(x).disabled = true
        m = m+1
        localStorage.setItem("y",m);
        // console.log(m)
    }
    myresult()
}
function stop()
{
    document.getElementById('1').disabled=true
    document.getElementById('2').disabled=true
    document.getElementById('3').disabled=true
    document.getElementById('4').disabled=true
    document.getElementById('5').disabled=true
    document.getElementById('6').disabled=true
    document.getElementById('7').disabled=true
    document.getElementById('8').disabled=true
    document.getElementById('9').disabled=true
}

function setvar(p,q)
{
    //console.log("hello")
    if(Number(q)%2==0){
        if(p=='1'){
            localStorage.setItem("a","1");
        }
        if(p=='2'){
            localStorage.setItem("b","1");
        }
        if(p=='3'){
            localStorage.setItem("c","1");
        }
        if(p=='4'){
            localStorage.setItem("d","1");
        }
        if(p=='5'){
            localStorage.setItem("e","1");
        }
        if(p=='6'){
            localStorage.setItem("f","1");
        }
        if(p=='7'){
            localStorage.setItem("g","1");
        }
        if(p=='8'){
            localStorage.setItem("h","1");
        }
        if(p=='9'){
            localStorage.setItem("i","1");
        }
    }
    if(Number(q)%2==1){
        if(p=='1'){
            localStorage.setItem("a","2");
        }
        if(p=='2'){
            localStorage.setItem("b","2");
        }
        if(p=='3'){
            localStorage.setItem("c","2");
        }
        if(p=='4'){
            localStorage.setItem("d","2");
        }
        if(p=='5'){
            localStorage.setItem("e","2");
        }
        if(p=='6'){
            localStorage.setItem("f","2");
        }
        if(p=='7'){
            localStorage.setItem("g","2");
        }
        if(p=='8'){
            localStorage.setItem("h","2");
        }
        if(p=='9'){
            localStorage.setItem("i","2");
        }
    }
}
function myresult()
{
    var myresult=false
var pal1=localStorage.getItem("a")
var pal2=localStorage.getItem("b")
var pal3=localStorage.getItem("c")
var pal4=localStorage.getItem("d")
var pal5=localStorage.getItem("e")
var pal6=localStorage.getItem("f")
var pal7=localStorage.getItem("g")
var pal8=localStorage.getItem("h")
var pal9=localStorage.getItem("i")
    var arr1 = [pal1, pal2, pal3]
    var arr2 = [pal4, pal5, pal6]
    var arr3 = [pal7, pal8, pal9]
    //console.log(arr1)
    //console.log(arr2)
    //console.log(arr3)
    if(arr1[0]==arr1[1] && arr1[1]==arr1[2] && arr1[0]!=0 && arr1[1]!=0 && arr1[2]!=0)
    {
     wins(pal1)
     console.log("hllo") 
     myresult=true
    }
    if(arr2[0]==arr2[1] && arr2[1]==arr2[2] && arr2[0]!=0 && arr2[1]!=0 && arr2[2]!=0)
    {
     wins(pal2) 
     myresult=true
    }
    if(arr3[0]==arr3[1] && arr3[1]==arr3[2] && arr3[0]!=0 && arr3[1]!=0 && arr3[2]!=0)
    {
     wins(pal3)
     myresult=true
    }
    
    if(arr1[0]==arr2[1] && arr2[1]==arr3[2] && arr1[0]!=0 && arr2[1]!=0 && arr3[2]!=0)
    {
     wins(pal5)
     myresult=true 
    }
    if(arr1[2]==arr2[1] && arr2[1]==arr3[0] && arr1[2]!=0 && arr2[1]!=0 && arr3[1]!=0)
    {
     wins(pal5)
     myresult=true
    }

    if(arr1[0]==arr2[0] && arr2[0]==arr3[0] && arr1[0]!=0 && arr2[0]!=0 && arr3[0]!=0)
    {
     wins(pal6) 
     myresult=true
    }
    
    if(arr1[2]==arr2[2] && arr2[2]==arr3[2] && arr1[2]!=0 && arr2[2]!=0 && arr3[2]!=0)
    {
     wins(pal9) 
     myresult=true
    }
    if(myresult==false && localStorage.getItem('y')=='10')
    {
        console.log('match-tie')
        
        document.getElementById('result').innerHTML="tie"
        document.getElementById('result').className="alert alert-primary"

    }
}
    
function wins(t){
    if(t==2){
        console.log("Zero WINS")
        document.getElementById('result').innerHTML="zero wins"
        document.getElementById('result').className="alert alert-primary"


    }
    else
    {
        console.log("kaata wins")
        document.getElementById('result').innerHTML="kaata wins"
        document.getElementById('result').className="alert alert-primary"

    }
}