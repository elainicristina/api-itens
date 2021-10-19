"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("./database"));
const itensRepository = {
    criar: (item, callback) => {
        const sql = 'INSERT INTO itens (nome, descricao) VALUES (?, ?)';
        const params = [item.nome, item.descricao];
        database_1.default.run(sql, params, function (_err) {
            callback(this === null || this === void 0 ? void 0 : this.lastID);
        });
    },
    lerTodos: (callback) => {
        const sql = 'SELECT * FROM itens';
        const params = [];
        database_1.default.all(sql, params, (_err, rows) => callback(rows));
    },
};
exports.default = itensRepository;
