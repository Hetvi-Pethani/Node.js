const UserModel = require('../models/UserModel');

const fs = require('fs');

const TablePage = async (req, res) => {
    try {
        let record = await UserModel.find({});
        return res.render('view', {
            record
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}


const formPage = (req, res) => {
    return res.render('add');
}

const Dashboard = (req, res) => {
    return res.render('Dashboard');
}


const insertData = async (req, res) => {
    try {
        await UserModel.create({
            name: req?.body?.name,
            phone: req?.body?.phone,
            image: req?.file?.path
        })
        console.log("user is insert");
        return res.redirect('/form')
    } catch (err) {
        console.log(err);
        return false;
    }
}


const deleteUser = async (req, res) => {
    try {
        let id = req?.query?.did;
        let old = await UserModel.findById(id);
        fs.unlinkSync(old?.image)
        let user = await UserModel.findByIdAndDelete(id);
        console.log("record delete");
        return res.redirect('/view');
    } catch (err) {
        console.log(err);
        return false;
    }
}


const updateUser = async (req, res) => {
    try {
        let id = req?.query?.id;
        let single = await UserModel.findById(id);
        return res.render('edit', {
            single
        })
    } catch (err) {
        console.log(err);
        return false
    }
}


const updateData = async (req, res) => {
    try {
        let id = req.body.id;
        const editid = req.body?.editid;
        if (req.file) {
            let old = await UserModel.findById(editid);
            fs.unlinkSync(old?.image)
            await UserModel.findByIdAndUpdate(editid, {
                name: req?.body?.name,
                phone: req?.body?.phone,
                image: req.file?.path,
            })
            console.log("record update");
            return res.redirect('/view')

        } else {
            let old = await UserModel.findById(id);
            await UserModel.findByIdAndUpdate(editid, {
                name: req?.body?.name,
                phone: req?.body?.phone,
                image: old?.image
            })
            console.log("record update");
            return res.redirect('/view')

        }

    } catch (err) {
        console.log(err);
        return false;
    }
}


module.exports = {
    TablePage, formPage, insertData, deleteUser, updateUser, updateData, Dashboard
}