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
operatorSelectedFlag = false;
canEqualFlag = false;
let resultShown = false;
let decimalFlag = false;

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
        
    if (Number(a[0])==0  &&  Number(a[1])!=0 && a[1]!=".")
    {
        if (a.substring(1,a.length) == "")
        return "0";
        return a.substring(1,a.length);
    }
    else if (a[0]=="-" && Number(a[1])==0  &&  Number(a[2])>0)
    {
        if (a.substring(0,1) + a.substring(2,a.length) == "")
        return "0";
        return a.substring(0,1) + a.substring(2,a.length);
    }
    return a;
}


function drawDots(a) //to be fixed
{   
    let length = a.length;
    
    {
        for (i=0; i<a.length;i++)
        {
            if (a[i]==".")
            {
                length = i;
            }
           
        }
    }

    {
        let offset = 0;
        if (a[0]!="-")
        {
            offset=0;
        }
        else if (a[0]=="-")
        {
            offset=1;
        }
        switch (length)
        {
                   case 4+offset:
                       return a.slice(0,1)+","+a.slice(1);
                       break;
                   case 5+offset:
                       return a.slice(0,2)+","+a.slice(2);
                       break;
                   case 6+offset:
                       return a.slice(0,3)+","+a.slice(3);
                       break;
                   case 7+offset:
                       return a.slice(0,1)+","+a.slice(1,4)+","+a.slice(4);
                       break;
                   case 8+offset:
                       return a.slice(0,2)+","+a.slice(2,5)+","+a.slice(5)
                       break;
                   case 9+offset:
                       return a.slice(0,3)+","+a.slice(3,6)+","+a.slice(6);
                       break;
       }
      
     
               
    }
     
    
    
   
 return a;
}

function checkDoubleZeros(number)
{
    if (result[0].toString() =="0" && number.toString() == "0")
    return true;
    else
    return false;
}


function updateResult(number,action)
{
    if(number=="decimal")
    {
        result=result+".";
      
    }
     if (number=="clear")
   {
    result = "0"
    value.style.fontSize = "60px";
    decimalFlag=false;
   }
     if (operatorSelectedFlag == true)
    {
            result = "0";
            operatorSelectedFlag=false;
            canEqualFlag=true;      
         decimalFlag=false;
    }
     if (modulusFlag==true && number!="print")
    {
        modulusFlag=false;
        result="0";
        previousNumber=Number(result)
        console.log(previousNumber)
    }
     if(result.length<9 &&  !isNaN(number) && !isNaN(parseFloat(number)))
    {
        if (resultShown==true)
        {
            result = "0"
            resultShown = false;
        }
        result.length<1
        {
            value.style.fontSize = "60px";
        }
        if (checkDoubleZeros(number)==false)
        {
            result = result.toString()+number;
        }
       
        result = checkZero(result)
    }
   
  
   
   value.textContent=drawDots(result); 
   resizeTextToFit();
   
}


function doAction(a)
{

    if(a=="AC")
    {
        canEqualFlag=false;
        updateResult("clear")
        selection("clear")
        
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
    operatorSelectedFlag=true;

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
        selectedOperator="none"
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
        result = result.toString()
        operatorSelectedFlag=true;
        decimalFlag=false;
        updateResult(result)
        resultShown = true;
    }
    else if (selectedOperator=="multiply")
    {
        result = previousNumber*Number(result)   
        result = result.toString()
        operatorSelectedFlag=true;
        decimalFlag=false;
        updateResult(result)
        resultShown = true;
    }
    else if (selectedOperator=="substract")
    {
        result = previousNumber-Number(result)   
        result = result.toString()
        operatorSelectedFlag=true;
        decimalFlag=false;
        updateResult(result)
         resultShown = true;
    }
    else if (selectedOperator=="add")
    {
            result = previousNumber+Number(result)  
            result = result.toString()
            operatorSelectedFlag=true;
            decimalFlag=false;
            updateResult(result)
            resultShown = true;
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
    else if (element.getAttribute("data-type")=="decimal")
    {
        if (decimalFlag==false)
        {
            decimalFlag=true;
            updateResult("decimal")
        }
       
    }
        
    

} 



button.forEach(element => { element.addEventListener("click",function (e){
   
    checkAction(element)
    
    
})
    
});
