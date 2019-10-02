import jwt from 'jsonwebtoken';
// Configurações da Sessão
import conf from '../../config/auth';
// Modelo do usuário
import User from '../models/Users';

class SessionController {
    async store(req, res) {
        // Dados pelo body
        const { email, password } = req.body;
        // Verifica se usuário existe
        const user = await User.findOne({ where: { email } });

        if (!user) {
            // Senão existe retorna erro
            return res.status(401).json({ msg: 'Usuário ou senha inválida!' });
        }

        if (!(await user.checkPassword(password))) {
            // Se senha inválida retorna erro
            return res.status(401).json({ msg: 'Senha inválida!' });
        }

        const { id, name } = user;
        // Se tudo ocorreu bem gera token para continuar a navegar pela aplicação em rotas privadas
        return res.json({
            user: {
                id,
                name,
                email,
            },
            token: jwt.sign({ id }, conf.secret, { expiresIn: conf.expiresIn }),
        });
    }
}

export default new SessionController();
