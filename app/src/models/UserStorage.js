"use strict";

class UserStorage {
    static #users = {
        id: ["a", "b", "c"],
        psword: ["1", "2", "3"],
    };

    // ...변수명 : 인자 여러 개를 받을 수 있다
    static getUsers(...params) {
        const users = this.#users;
        const newUsers = params.reduce((newUsers, params)=>{
            if(users.hasOwnProperty(params)){
                newUsers[params] = users[params];
            }
            return newUsers;
        }, {});
        console.log(newUsers);
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users);
        const userInfo = userKeys.reduce((newUser, info)=> {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage;