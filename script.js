const textContent = document.querySelector('.text-content');
const message = document.querySelector('.message');
const anchor = document.querySelector('.anchor');
const hide = document.querySelector('.hidden0')
const icon0 = document.querySelector('.icon0');
const icon1 = document.querySelector('.icon1');
const icon2 = document.querySelector('.icon2');



textContent.addEventListener('click' , function(){
    message.classList.toggle('hidden');
}
);

anchor.addEventListener('click' ,function(){
     hide.remove('hidden0');
     icon0.remove('icon0');
     icon1.remove('icon1');
     icon2.remove('icon2')
})