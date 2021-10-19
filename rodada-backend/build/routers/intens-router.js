"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const itens_repository_1 = __importDefault(require("../repositories/itens-repository"));
const itensRouter = express_1.default.Router();
itensRouter.post('/itens', (req, res) => {
    res.send('Cria novo item');
    const item = req.body;
    itens_repository_1.default.criar(item, (id) => {
        if (id) {
            res.status(201).location(`/itens/${id}`).send();
        }
        else {
            res.status(400).send();
        }
    });
});
itensRouter.get('/itens', (req, res) => {
    const itens = [
        {
            id: 1,
            nome: 'Produto 1',
            descricao: 'Descrição do produto 1'
        },
        {
            id: 2,
            nome: 'Produto 2',
            descricao: 'Descrição do produto 2'
        }
    ];
    res.send('Lê todos os itens');
    itens_repository_1.default.lerTodos((itens) => res.json(itens));
});
itensRouter.get('/itens/:id', (req, res) => {
    const id = +req.params.id;
    const item = {
        id: id,
        nome: `Produto ${id}`,
        descricao: `Descrição do produto ${id}`
    };
    res.json(item);
    res.send(`Lê o item ${id}`);
});
itensRouter.put('/itens/:id', (req, res) => {
    const id = +req.params.id;
    res.send(`Atualiza o item ${id}`);
    res.status(204).send();
});
itensRouter.delete('/itens/:id', (req, res) => {
    const id = +req.params.id;
    res.send(`Apaga o item ${id}`);
    res.status(204).send();
});
exports.default = itensRouter;
