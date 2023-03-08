  const btnEl = document.querySelector('.btn')
  const inputEl = document.getElementById('input');
  const copyIconEl = document.querySelector(".fa-clipboard")
  const alertContainerEl = document.querySelector(".alert-container")
btnEl.addEventListener('click', ()=>{
    // console.log('yes')
    createPassword()
})
copyIconEl.addEventListener('click', ()=> {
    copyPassword();
})
const createPassword = () => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLength = 20;
    let password =  "";
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length) 
        password += chars.substring(randomNum, randomNum + 1);
        // console.log(password);
        
    }
    console.log(password);
    inputEl.value = password; 
    alertContainerEl.innerText = password + " - copied";   
}

const copyPassword = () => {
    if (inputEl.value){
    inputEl.select();
    inputEl.setSelectionRange(0, 999);
    navigator.clipboard.writeText(inputEl.value)
    alertContainerEl.classList.remove('active')
    setTimeout(() => {
        alertContainerEl.classList.add('active')
    }, 2000);
}
}