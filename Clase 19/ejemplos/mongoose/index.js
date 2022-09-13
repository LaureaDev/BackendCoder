import mongoose from "mongoose";
import * as model from "./models/usuario.js"

CRUD();

async function CRUD() {
    try {
            //Conexion a la base de datos
        const URL = 'mongodb://localhost:27017/ecommerce32065';
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('base de datos conectada');

            //Create
        const user = { 
        nombre: 'Daniel',
        apellido: 'Lobato',
        email:'dl@gmail.com',
        usuario: 'dl',
        password: '123456'
    };

        const userSaveModel = new model.users(user);
        const savedUser = await userSaveModel.save();
        console.log(savedUser)
        //Read 

        const userRead = await model.users.find({ nombre: 'Daniel'});
        console.log(userRead);

        //Update
        const updateUser = await model.uses.updateOne(
            { nombre: 'Daniel'}, { $set: {password: 5555}}
        );
        console.log(updateUser)

    }catch (error) {
        console.log(error)
    }
}