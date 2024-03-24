let inp = document.querySelector("#inp")
let button = document.querySelectorAll("button")

let buttonArray = Array.from(button)
let string = "";

buttonArray.forEach(btn =>{
    btn.addEventListener("click", function(event){
        console.log(event.target.innerHTML)
        if(event.target.innerHTML == "AC"){
            
            string = " ";
            inp.value = string;
        }
        else if(event.target.innerHTML == "DE"){
            string = string.substring(0,string.length-1);
            inp.value = string
        }
        else if(event.target.innerHTML == "="){
            string = eval(string)       //eval -> evaluate convert string into number and evaluate the operations
            inp.value = string;
        }
        else{
            string = string + event.target.innerHTML;
            inp.value = string;
        }
        


        
        
        
    })
})


