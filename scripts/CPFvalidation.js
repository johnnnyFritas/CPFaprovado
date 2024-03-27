// fill the prompt to create the credit value! 
const premReais = document.getElementById('prem-reais');
const cred = prompt('Qual o valor do crédito que deseja que apareça na mensagem?');
premReais.innerHTML = 'R$' + cred + ',00';

// Funcionamento do Botão.
const form = document.getElementById('formulario');
const prem = document.getElementById('premiacao');
const destaque = document.getElementById('destaque');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const [nome] = ['nome'].map(name => form.querySelector(`[name="${name}"]`).value);

    prem.classList.remove('area-de-cpf__premiação');
    prem.classList.add('area-de-cpf__premiação-contemplado');
    destaque.classList.remove('area-de-cpf__premiação');
    destaque.classList.add('area-de-cpf__premiação-contemplado-destaque');  
    premReais.classList.remove('area-de-cpf__premiação');
    premReais.classList.add('area-de-cpf__premiação-contemplado-prem', 'remove-margin', 'animação-prem');
})