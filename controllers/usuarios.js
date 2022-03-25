const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {
    const { q, hola, page = 1, limit } = req.query;
    res
        .json({
            msg: 'get API - controller',
            q,
            hola,
            page,
            limit
        })
};

const usuariosPost = (req = request, res = response) => {
    const { body: { nombre, edad } } = req;
    res
        .status(201)
        .json({
            msg: 'post API - controller',
            nombre,
            edad
        })
}

const usuariosPut = (req = request, res = response) => {
    const { id } = req.params;
    res
        .status(500)
        .json({
            msg: 'put API - controller',
            id
        })
}

const usuariosPatch = (req = request, res = response) => {
    res
        .status(201)
        .json({
            msg: 'patch API - controller'
        })
}

const usuariosDelete = (req = request, res = response) => {
    const { id } = req.params;
    res
        .json({
            msg: 'delete API - controller',
            id
        })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosPatch,
    usuariosDelete,
};
