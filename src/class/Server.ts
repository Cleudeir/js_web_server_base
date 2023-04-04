import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();

class Server {
    public express: express.Application

    public constructor() {
        this.express = express()
        this.middleware()
    }
    private middleware() {
        this.express.use(express.json())
        this.express.use(cors())
        this.express.listen(process.env.PORT_EXPRESS || 3336, () => {
            console.log(`initial => http://localhost:${process.env.PORT_EXPRESS || 3336}`)
        })
    }
}
export default new Server().express