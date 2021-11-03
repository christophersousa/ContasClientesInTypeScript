class ClienteController {
    constructor(clientes, contas) {
        this.inputName =
            document.querySelector("#name");
        this.inputCpf =
            document.querySelector("#cpf");
        this.inputConta =
            document.querySelector("#conta");
        this.clientes = clientes;
        this.contas = contas;
    }
    inserir(evento) {
        console.log("OI");
        evento.preventDefault();
        const conta = this.contas.pesquisar(this.inputConta.value);
        let novoCliente = new Cliente(this.inputName.value, this.inputCpf.value, conta);
        console.log(novoCliente);
        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }
    listar() {
        console.log(this.clientes.listar());
        this.clientes.listar().forEach(cliente => {
            this.inserirClienteNoHTML(cliente);
        });
    }
    inserirClienteNoHTML(cliente) {
        const divCLiente = document.querySelector(".clientes");
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click', (event) => {
            console.log('removendo conta ' + cliente.toString());
            this.clientes.remover(cliente.cpf);
            event.target.parentElement.remove();
        });
        elementoP.appendChild(botaoApagar);
        divCLiente.appendChild(elementoP);
    }
}
