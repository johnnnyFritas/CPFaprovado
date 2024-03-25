//password setting
//variables declarations
const formLogin = document.getElementById('login');

const handleSubmit = (event) => {
    event.preventDefault();

    const nameLogin = document.querySelector('input[name=name]').value;
    const password = document.querySelector('input[name=password]').value;

    if(nameLogin === 'RafaelSampaio' && password === 'venda102030') {
        window.location.replace('cpfAprovado.html');
    }else {
        alert('Senha incorreta e/ou usuário incorreto(s)!');
        window.location.reload();
    }
};

formLogin.addEventListener('submit', handleSubmit);