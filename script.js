const avanca = document.querySelectorA11('btn.proximo');
const reiniciarBtn = document.getElementById('btn-reiniciar');

avanca.forEach(button =>
button.addEventListener('click', function() {
     const atual = document,querySelector('.ativo');
     const proximoPasso = 'passo- '+this.getAttribute('data-proximo');

atual.classList.remove('ativo');
const proximoElemento= document.getElementById(proximoPasso);

if(proximoElemento){
    proximoElemento.classList.add('ativo');
}else {
    console.error(`Elemento com ID "${proximoPasso}" não encontrado.`)
}

});
});

// reinicia o jogo ao clicar no botão de reinicio
if (reiniciarBtn) {
    reiniciarBtn.addEventListener('click', () => {
        const atual = document.querySelector(' .ativo');
        atual.classList.remove('ativo');
        document.getElementById('passo-0').classList.add('ativo');

    });

}
document.getAnimations
atual.addEventListener('proximo-passo');
('reiniciar') => ('passo-0');
// reinicia o jogo ao clicar no botão de reiniciar agora
if(proximoPasso)-('passo=0')'