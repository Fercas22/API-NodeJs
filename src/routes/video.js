const express = require('express');
const router = express.Router();
const {
    getList,
    getDetail,
    createItem,
    updateItem,
    deleteItem
} = require('../controllers/video');
const { checkSession } = require('../middlewares/origin')
//TODO http://localhost:3001/v1/video
/**
 * Lista de videos
 */
router.get('', getList);

router.get('/:id', getDetail);

router.post('', createItem);

router.put('/:id', updateItem);

router.delete('/:id', checkSession, deleteItem);

module.exports = router;
