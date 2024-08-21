const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let clientes = [];
let pedidos = [];
let restaurantes = [];
let entregadores = [];
let pratos = [];

app.post('/clientes', (req, res) => {
    const { nome, telefone, endereco } = req.body;
    const cliente = { id: clientes.length + 1, nome, telefone, endereco };
    clientes.push(cliente);
    res.status(201).json(cliente);
});


app.get('/clientes', (req, res) => {
    res.json(clientes);
});




app.post('/restaurantes', (req, res) => {
    const { nome, endereco, telefone, tipoCozinha } = req.body;
    const restaurante = { id: restaurantes.length + 1, nome, endereco, telefone, tipoCozinha };
    restaurantes.push(restaurante);
    res.status(201).json(restaurante);
});


app.get('/restaurantes', (req, res) => {
    res.json(restaurantes);
});


app.post('/entregadores', (req, res) => {
    const { nome, telefone, veiculo, carteiraTrabalho } = req.body;
    const entregador = { id: entregadores.length + 1, nome, telefone, veiculo, carteiraTrabalho };
    entregadores.push(entregador);
    res.status(201).json(entregador);
});


app.get('/entregadores', (req, res) => {
    res.json(entregadores);
});




app.post('/pratos', (req, res) => {
    const { nome, preco, descricao, restauranteId } = req.body;
    const prato = { id: pratos.length + 1, nome, preco, descricao, restauranteId };
    pratos.push(prato);
    res.status(201).json(prato);
});


app.get('/pratos', (req, res) => {
    res.json(pratos);
});




app.post('/pedidos', (req, res) => {
    const { data, hora, total, clienteId, restauranteId, entregadorId, pratos } = req.body;
    const pedido = { id: pedidos.length + 1, data, hora, total, clienteId, restauranteId, entregadorId, pratos };
    pedidos.push(pedido);
    res.status(201).json(pedido);
});


app.get('/pedidos', (req, res) => {
    res.json(pedidos);
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
