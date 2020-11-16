import {app} from './app';
import * as dotenv from 'dotenv';
dotenv.config();

// Añadimos los puertos 
app.set('port', process.env.PORT || 3002);

// Almancenamos puertos en una variable para despues montar el server
const port = app.get('port');
app.listen(port, () => {
    console.log(`✔️ 🚀 >>>> Server working on PORT ${port}  <<<< 🚀 ✔️`);
});