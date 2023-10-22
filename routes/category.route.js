const express = require('express');
const router = express.Router();

const { body, param, validatorResult } = require('express-validator');

const categoryController = require('../controller/category.controller');

const idValidator = () => {
    return [
        param('id').isNumeric().withMessage('Enter only number')
    ]
}

const nameValidator = () => {
    return [
        body('name').not().isEmpty().withMessage('The field is required'),
        body('name').isString().withMessage('Enter only letters')
    ]
}

const updateValidator = () => {
    return [
        param('id').isNumeric().withMessage('Enter only number'),
        body('id').isNumeric().withMessage('Enter only number'),
        body('id').not().isEmpty().withMessage('This field is required'),
        body('name').isString().withMessage('Enter only letters'),
        body('name').not().isEmpty().withMessage('This field is required')
    ]
}

router.get('/', categoryController.findAll);
router.get('/:id', idValidator(), (req, res, next) => {
    const errors = validatorResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            status: false,
            data: errors.array()
        });
    }
    next();
}, categoryController.findOne);

router.post('/', nameValidator(), (req,res,next) => {

    const errors = validatorResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            status: false,
            data: errors.array()
        });
    }
    next();

}, categoryController.create);

router.patch('/:id', updateValidator(), (req,res,next) => {
    const errors = validatorResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            status: false,
            data: errors.array()
        });
    }
    next();

}, categoryController.update);

router.delete('/:id', idValidator(), (req,res,next) => {
    const errors = validatorResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({
            status: false,
            data: errors.array()
        });
    }
    next();

}, categoryController.deleteCategory);

module.exports = router;