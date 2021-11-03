class ClienteController {

    private inputName: HTMLInputElement;
    private inputCpf: HTMLInputElement;
    private inputConta: HTMLInputElement;

    private clientes: Clientes;
    private contas: Contas;

    constructor(clientes: Clientes, contas: Contas) {
        this.inputName =
            <HTMLInputElement>document.querySelector("#name")
        this.inputCpf =
            <HTMLInputElement>document.querySelector("#cpf");
        this.inputConta =
            <HTMLInputElement>document.querySelector("#conta");
        
        this.clientes = clientes;
        this.contas = contas;
    }

    inserir(evento: Event) {
        console.log("OI")
        evento.preventDefault();

        const conta = this.contas.pesquisar(this.inputConta.value)

        let novoCliente = new Cliente(this.inputName.value,
            this.inputCpf.value, conta);
        console.log(novoCliente)    
        this.clientes.inserir(novoCliente);
        this.inserirClienteNoHTML(novoCliente);
    }

    listar(): void {
        console.log(this.clientes.listar())
        this.clientes.listar().forEach(
            cliente => {
                this.inserirClienteNoHTML(cliente);
            }
        );
    }

    inserirClienteNoHTML(cliente: Cliente) {
        const divCLiente = document.querySelector(".clientes");
        const elementoP = document.createElement('p');
        elementoP.textContent = cliente.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo conta ' + cliente.toString());
                this.clientes.remover(cliente.cpf);
                (<Element>event.target).parentElement.remove();
            }
            );
        elementoP.appendChild(botaoApagar);
        divCLiente.appendChild(elementoP);
    }


}
