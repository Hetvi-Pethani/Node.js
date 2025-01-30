const express = require('express');

const routes = express.Router();

const multer = require('multer');


const st = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'uploads')

    },
    filename: (req, file, cb) => {
        const uniq = Math.floor(Math.random() * 1000000);
        cb(null, `${file.fieldname}-${uniq}`)
    }
})

const fileUpload = multer({ storage: st }).single('avatar')

const { addPage, viewPage, insertRecord } = require('../controllers/CrudController');

routes.get('/', viewPage);
routes.get('/add', addPage);
routes.post('/insertRecord', fileUpload, insertRecord);
routes.get('/deleterecord');

module.exports = routes;