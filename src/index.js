import express from 'express';
import env from 'dotenv';
// modulo de rotas
import routes from './routes';
// Importação do banco de dados
import './database';
// Classe do servidor onde ocorre toda a configuração de middlewares e rotas
class App {
    constructor() {
        // Instanciando servidor express
        this.server = express();
        // Chamando métodos
        this.middlewares();
        // Chamando rotas
        this.routes();
    }

    middlewares() {
        // Requisições do tipo json
        this.server.use(express.json());
        // Variaveis de ambiente
        env.config();
    }

    routes() {
        // Configurando rotas na aplicação
        this.server.use(routes);
    }
}

export default new App().server;
