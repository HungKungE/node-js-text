"use strict";

const fs = require("fs").promises;

class UserStorage {
    static #getUserInfo(data, id) {
        return fs.readFile("./src/db/users/users.json")
        .then((data) => {
            const users = JSON.parse (data);
            const idx = users.id.indexOf(id);
            const userKeys = Object.keys(users); // => {id, psword, name}
            const userInfo = userKeys.reduce((newUser, info)=> {
                newUser[info] = users[info][idx];
                return newUser;
            }, {});
            console.log(userInfo);
            return userInfo;
        }).catch(console.error);
    }

    static #getUsers(data, isAll,params){
        const users= JSON.parse(data);
        if(isAll) return users;
        const newUsers = params.reduce((newUsers, param)=>{
            if(users.hasOwnProperty(param)){
                newUsers[param] = users[param];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    // ...변수명 : 인자 여러 개를 받을 수 있다
    static getUsers(isAll, ...params) {
        return fs.readFile("./src/db/users/users.json")
        .then((data) => {
            return this.#getUsers(data, isAll,params);
        }).catch(console.error);
    }

    static getUserInfo(id) {
        return fs.readFile("./src/db/users/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
        }).catch(console.error);;
    }

    static async save(userInfo) {
        const users = await this.getUsers(true);
        if(users.id.includes(userInfo.id)){
            throw "이미 존재하는 ID";
        }
        users.id?.push(userInfo.id);
        users.name?.push(userInfo.name);
        users.psword?.push(userInfo.psword);
        fs.writeFile("./src/db/users/users.json", JSON.stringify(users));
        return { success : true };
    }
}

module.exports = UserStorage;