function add(a,b)
{
    return a+b;
}
function substract(a,b)
{
    return a-b;
}
function mult(a,b)
{
    return a*b;
}
function divide(a,b)
{
    return a/b;
}

function clear()
{
    return 0;
}


const container = document.querySelector('.numberDisplay');
const value = document.querySelector('.value');
const button = document.querySelectorAll("button");
const btn_div =  document.querySelector('.btn_DIV');
const btn_mult =  document.querySelector('.btn_MULT');
const btn_sub =  document.querySelector('.btn_SUBSTRCT');
const btn_add =  document.querySelector('.btn_ADD');
result="0";
previousNumber=0;
printValue=result;
modulusFlag=false;
selectedOperator = "none";

const resizeTextToFit = () => {
    const containerWidth = container.offsetWidth;
    const textWidth = value.offsetWidth;

        if (textWidth > containerWidth) {
            const fontSize = parseInt(window.getComputedStyle(value).fontSize);
            const newFontSize = fontSize - 1;
            
            value.style.fontSize = newFontSize + 'px';
            resizeTextToFit();
        }
        
    };

function checkZero(a)
{
        
    if (Number(a[0])==0  &&  Number(a[1])>0)
    {
        return a.substring(1,a.length);
    }
    else if (a[0]=="-" && Number(a[1])==0  &&  Number(a[2])>0)
    {
        return a.substring(0,1) + a.substring(2,a.length);
    }
    return a;
}


function drawDots(a)
{   
    if (a % 1 == 0)
    {
        if (a[0]!="-")
        {
            if (a[5]!=undefined && a[6]!=undefined)
            {
                return a.slice(0,3)+"."+a.slice(3,6)+"."+a.slice(6);
            }
            else if (a[2]!=undefined && a[3]!=undefined)
            {
                return a.slice(0,3)+"."+a.slice(3);
            }
        
        }
 if (a[0]=="-")
    {
        {
            if (a[6]!=undefined && a[7]!=undefined)
            {
                return a.slice(0,4)+"."+a.slice(4,7)+"."+a.slice(7);
            }
            else if (a[3]!=undefined && a[4]!=undefined)
            {
                return a.slice(0,4)+"."+a.slice(4);
            }
        
        }
    }
    }
   
 return a;
}

function updateEqual(a)
{

}
function updateResult(number,action)
{
    if (modulusFlag==true && number!="print")
    {
        modulusFlag=false;
        result="0";
        previousNumber=Number(result)
        console.log(previousNumber)
    }
    if(result.length<9 &&  !isNaN(number) && !isNaN(parseFloat(number)))
    {
        result.length<1
        {
            value.style.fontSize = "60px";
        }
        result = result.toString()+number;
        result = checkZero(result)
    }
   if (number=="clear")
   {
    result = "0"
    value.style.fontSize = "60px";
   }
  
   
   value.textContent=drawDots(result); 
   resizeTextToFit();
   
}
function doAction(a)
{

    if(a=="AC")
    {
        updateResult("clear")
    }
    
   else if (a=="neg")
   {
        if (result[0]!="-")
        {
            result = "-"+result
        }
        else if (result[0]=="-"){
            result = result.substring(1,result.length)
        }
        updateResult("print")
   }
   else if (a=="modulus")
   {
    result= Number(result)/100;
    
        console.log(result)
        updateResult("print")
        modulusFlag=true;
   }
}
function selection(button)
{
    selectedOperator=button
    previousNumber=Number(result)
    console.log(previousNumber)
    updateResult("clear")

    if (button=="divide")
    {
            btn_div.classList.add("selected")
            btn_mult.classList.remove("selected")
            btn_sub.classList.remove("selected")
            btn_add.classList.remove("selected")
    }
    else  if (button=="multiply")
    {
            btn_div.classList.remove("selected")
            btn_mult.classList.add("selected")
            btn_sub.classList.remove("selected")
            btn_add.classList.remove("selected")
    }
    else  if (button=="substract")
    {
            btn_div.classList.remove("selected")
            btn_mult.classList.remove("selected")
            btn_sub.classList.add("selected")
            btn_add.classList.remove("selected")
    }
    else  if (button=="add")
    {
            btn_div.classList.remove("selected")
            btn_mult.classList.remove("selected")
            btn_sub.classList.remove("selected")
            btn_add.classList.add("selected")
    }
    else if (button = "clear")
    {
        btn_div.classList.remove("selected")
        btn_mult.classList.remove("selected")
        btn_sub.classList.remove("selected")
        btn_add.classList.remove("selected")
    }
}

function selectOperator(type, element)
{
    if (type=="divide")
    {
        selection(type)
        
    }
    else if (type=="multiply")
    {
        selection(type)
    }
    else if (type=="substract")
    {
        selection(type)
    }
    else if (type=="add")
    {
        selection(type)
    }

   
}

function equal()
{
    if (selectedOperator=="divide")
    {
        
        result = previousNumber/Number(result)
        result.toString()
        updateResult(result)
        
    }
    else if (selectedOperator=="multiply")
    {
        result = previousNumber*Number(result)
        result.toString()
        updateResult(result)
    }
    else if (selectedOperator=="substract")
    {
        result = previousNumber-Number(result)
        result.toString()
        updateResult(result)
    }
    else if (selectedOperator=="add")
    {
        result = previousNumber+Number(result)
        result.toString()
        updateResult(result)
    }
}
function checkAction(element)
{
    if (element.classList.contains("number"))
    {
        updateResult(element.innerHTML) 
    }
    else if (element.classList.contains("settings"))
    {
        doAction(element.getAttribute("data-type"))
        
    }
    else if (element.classList.contains("operator"))
    {
        selectOperator(element.getAttribute("data-type"),element)
    }
    else if (element.classList.contains("operatorEqual"))
    {
        equal()
    }

} 



button.forEach(element => { element.addEventListener("click",function (e){
   
    checkAction(element)
    
    
})
    
});
