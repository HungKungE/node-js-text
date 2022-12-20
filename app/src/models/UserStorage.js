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
}

module.exports = UserStorage;