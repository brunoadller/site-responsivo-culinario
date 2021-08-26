//scroll significa rolagem 
//evento responsável por rolar a pagina
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0)
})

//funcao do menu media

function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle')
    const navigation = document.querySelector('.navigation')

    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}