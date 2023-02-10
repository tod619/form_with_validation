const container = document.querySelector('.container')
const headingSpan2 = document.querySelector('.heading-span-2')
const form = document.querySelector('form')


// Input elements variables
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

const error = (input, message) => {
    const inputWrapper = input.parentElement
    inputWrapper.className = 'form-input-wrapper error'
    inputWrapper.querySelector('.message').textContent = message 
}

const success = (input) => {
    const inputWrapper = input.parentElement
    inputWrapper.className = 'form-input-wrapper success'

}

const checkrequiredFields = (inputArray) => {
    inputArray.forEach((input)=>{
        if(input.value.trim() === ""){
             // Display error message
            if(input.id === 'password2') {
                error(input, 'Password confirmation is required')
            } else {
                error(input, `${input.id} is required`)
            }
                       
        } else {
            // Display border success green
            success(input)
        }
    })
}


document.querySelector('.signup-btn').addEventListener('click', ()=>{
    container.classList.add('change')

    setTimeout(()=>{
        headingSpan2.textContent = 'Up'
    }, 200)
    
})

document.querySelector('.signin-btn').addEventListener('click', ()=> {
    container.classList.remove('change')
    setTimeout(()=>{
        headingSpan2.textContent = 'In'
    },200)
        
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkrequiredFields([username, email, password, password2])
})