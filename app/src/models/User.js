"use strict";

const UserStorage = require("./UserStorage");

class User{
    //생성자
    constructor(body){
        this.body = body;
    }

    async login(){
        const client = this.body;

        const {id, psword} = await UserStorage.getUserInfo(client.id);

        if(id){
            if (id === client.id && psword === client.psword){
                return { success : true }; 
            }
            return { success : false, msg: "wrong psword!"};
        }

        return { success : false, msg: "wrong Id!"};
    }

    async register(){
        const client = this.body;
        try{
            const response = await UserStorage.save(client);
            return response;
        } catch(err) {
            return {success: false, msg: err};
        }
    }
};

module.exports = User;