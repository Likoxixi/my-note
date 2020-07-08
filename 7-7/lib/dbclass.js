const mysql = require("mysql"),
    dbconfig = require("./dbconfig")

class DB {
    constructor() {

        //连接数据库并创建连接对象
        let pool = mysql.createPool(dbconfig)

        //创建链接

        pool.getConnection((err, connection) => {
            if (err) {
                console.log(err)
            }
            else {
                this.con = connection
            }
        })
    }

    //执行增删改查
    query(sql) {
        return new Promise((resolve, reject) => {
            this.con.query(sql, (err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            })
        })
    }
}
module.exports = new DB()