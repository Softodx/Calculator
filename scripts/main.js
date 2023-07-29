// add and remove the class "dark"
// to the body to make the dark mode


const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

const buttondk = document.querySelector('.button-dk')


buttondk.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
})

// adding the function to the buttons, and 
// the use "eval" to calculate the string on the display  

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonActive = button.textContent;

        if (button.id === "clean") {
            display.textContent = "0";
            return;
        }

        if (button.id === "erase") {
            if (display.textContent.length === 1 || display.textContent === "Error!") {
                display.textContent = "0";
            } else{
                display.textContent = display.textContent.slice(0,-1);
            }
            return;
        }

        if (button.id === "equal") {
            try {
                display.textContent = eval(display.textContent);
            } catch (error) {
                display.textContent = "Error!";
            }
            
            return
        }

        if (display.textContent === "0" || display.textContent === "Error!") {
            display.textContent = buttonActive;
        }
        else {
            display.textContent += buttonActive;
        }
    })
})