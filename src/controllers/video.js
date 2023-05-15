const {getAllVideos} = require('../services/video');

const getList = (req, res) => {
    res.send({ data: getAllVideos() });
};

const getDetail = (req, res) => {
    res.send({data: 'Detalles'});
};

const createItem = (req, res) => {
    res.send({data: 'Creado'});
};

const updateItem = (req, res) => {
    res.send({data: 'Actualizado'});
};

const deleteItem = (req, res) => {
    res.send({data: 'Eliminado'});
};

module.exports = {
    getList,
    getDetail,
    createItem,
    updateItem,
    deleteItem
};
