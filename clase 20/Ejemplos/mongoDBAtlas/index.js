
import mongoose from 'mongoose'

const URL = 'mongodb+srv://Laureano2279:NB1503uu@cluster0.uyfy9hb.mongodb.net/?retryWrites=true&w=majority'
const userModel = mongoose.model('usuarios', userSchema);


try {
    await mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    const users = await userModel.find()
    console.log('Base de datos conectada')
}
catch (error) {
    console.log(`Error de conexión a la base de datos ${error}`)
}


