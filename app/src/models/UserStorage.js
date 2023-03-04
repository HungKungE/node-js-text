"use strict";

const db = require("../config/db");

class UserStorage {
    // ...변수명 : 인자 여러 개를 받을 수 있다

    static getUserInfo(id) {
        return new Promise((resolve, reject) => {

            const query = "SELECT * FROM users WHERE id = ?;";

            db.query(query, [id], (err, data) => {
                console.log(data);
                if(err) reject(`${err}`);
                resolve(data[0]);
            });
        })
    }

    static async save(userInfo) {
        return new Promise((resolve, reject) => {

            const query = "insert into users(id, name, psword) values(?,?,?);";

            db.query(query, [userInfo.id, userInfo.name, userInfo.psword],
                (err) => {
                if(err) reject(`${err}`);
                resolve({ success : true });
            });
        })
    }
}

module.exports = UserStorage;