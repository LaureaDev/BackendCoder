import mongoose from "mongoose";
import * as model from "./models/usuario.js";

CRUD();

async function CRUD() {
    try {
        //Conexión a la base de datos
        const URL = 'mongodb://localhost:27017/ecommerce32065';
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Base de datos conectada');
            const user = { 
                nombre: 'Daniel', 
                apellido: 'Lobato', 
                email: 'dl@hotmail.com',
                usuario: 'dl',
                password: 123456
        };

        const userSaveModel = new model.users(user);
        //const savedUser = await userSaveModel.save();
        //console.log(savedUser);
        //Read
        const updatedUser = await model.users.updateOne(
            { nombre: 'Daniel' }, { $set: {password: 5555} }
        );
        console.log(updatedUser)
      } catch (error){
          console.log(error)
      }
    }
      