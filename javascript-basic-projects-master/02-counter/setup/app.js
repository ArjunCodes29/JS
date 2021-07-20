// setting intial count
let count = 0;


// select value and button
const value = document.getElementById('value')
const btns = document.querySelectorAll(".btn")


// for each method calls a function once for each element in an array(in this case
// it is a nodelist)
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
    const styles = e.currentTarget.classList;// not sure how e works but 
    // here we are seeing whch button was pressed and then find the classes the button has
    if(styles.contains('decrease')){
        count--;
    }
    else if(styles.contains("increase")){
        count++;
    }
    else if(styles.contains("round")){
       count =  Math.round(count/10) *10
    }  
    else{
        count=0
    }//not much of diff between if if if and if else the main oen is that in if
    // else if one of it is true only it will run but for if if whichever is true will all run
    if(count>0){
        value.style.color = 'green'
    }
    if(count<0){
        value.style.color = 'red'
    }
    if(count==0){
        value.style.color = 'black'
    }
    value.textContent = count; // here we are pushing the count variable into value
    // we use .textContent because we are changing the text content
    });
});

