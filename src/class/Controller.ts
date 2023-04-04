import dotenv from 'dotenv';
import { PathParams } from 'express-serve-static-core';
dotenv.config();
import Server from './Server';

class Controller {
    async get(path : String , _function : Function){
        const _path =  path as PathParams
        Server.get(_path , async (req, res) => {
            const query = req.query
            console.log(query)
            const result = _function(query)
            res.send(result);
          }); 
    }
    async post(path : String , _function : Function){
        const _path =  path as PathParams
        Server.post(_path, async (req, res) => {
            const body = req.body
            console.log(body)
            const result = _function(body)
            res.send(result);
          }); 
    }
    async put(path : String , _function : Function){
        const _path =  path as PathParams
        Server.put(_path, async (req, res) => {
            const query = req.query
            const body = req.body
            console.log(body, query)
            const result = _function(query,body)
            res.send(result);
          }); 
    }
    async remove(path : String , _function : Function){
        const _path =  path as PathParams
        Server.delete(_path, async (req, res) => {
            const query = req.query
            console.log(query)
            const result = _function(query)
            res.send(result);
          }); 
    }
}
export default new Controller()