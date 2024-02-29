class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch(this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque =  'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'atacou';
        }
        console.log(`O ${this.tipo} ${this.nome} atacou com ${ataque}`);
    }
}

const heroi1 = new Heroi('Gandalf', 2000, 'mago');
heroi1.atacar(); // Saída: O mago Gandalf atacou usando usou magia

const heroi2 = new Heroi('Conan', 35, 'guerreiro');
heroi2.atacar(); // Saída: O guerreiro Conan atacou usando usou espada