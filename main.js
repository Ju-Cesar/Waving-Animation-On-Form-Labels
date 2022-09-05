const labels = document.querySelectorAll('.form-control label');
const inputs = document.querySelectorAll('.form-control input');

labels.forEach(label => {
    label.innerHTML = label.innerText
                        .split('')
                        .map((letter,idx) => `<span style="transition-delay:${idx * 30}ms;">${letter}</span>`)
                        .join('');
});
inputs.forEach(input => {
    input.addEventListener('focus',()=>{
        input.nextElementSibling.classList.add('go-up');
    })
    input.addEventListener('blur',()=>{
        if(!input.value){
            input.nextElementSibling.classList.remove('go-up');
        }
    })
    
})

