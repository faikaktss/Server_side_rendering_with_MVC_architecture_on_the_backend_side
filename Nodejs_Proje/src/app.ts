import express , { request, Request, response, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import userRouter from './routes/userRouter';
import path from 'path';
import { fileURLToPath } from 'url';


const app = express();
const prisma  = new PrismaClient();

const PORT = 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.json());
 
app.use('/users',userRouter);


app.listen(PORT,() =>{
    console.log(`Server is running on`)
})

/* 
ORM VE ODM
ORM:
-Veri tabanında bağımsızlık sağlar
-Modüler ve okunaklı kod yazmamızı salar
-SQL injection gibi güvenlik tehditlerinden bizi korur
-Daha verimli sorgu atmamızı sağlar
-Veri tabanı şemaları yönetmeyi kolaylaştırır
 */

/*
    MVC Mimarisi:       
    Model >Uygulamanın verilerini buradan kontrol ederiz
    View > Kullanıcıya gösterilecek olan arayüzü temsil eder
    Controller > Model ve View arasında köprü görevi görür, gelen istekleri işler ve uygun yanıtı döner

 */