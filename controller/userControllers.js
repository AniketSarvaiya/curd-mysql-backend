const db = require('../config/db.js');
const { jwtgenerator } = require('../config/jwtGenerator.js')


const registerUser = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;
        console.log(firstname + lastname);

        const existsquery = `select * from users where email = ?`
        db.query(existsquery, [email], (err, result) => {
            const query = `INSERT INTO users (firstname , lastname, email, password) VALUES (?,?,?,?);`
            const values = [firstname, lastname, email, password];
            if (result.length == 0) {
                db.query(query, values, async (err, result) => {
                    if (!err) {
                        const data = { id: result.insertId };
                        console.log(data);
                        const token = await jwtgenerator(data);
                        res.send({ message: "Registration success...!", result, token });
                    }
                    else
                        res.send({ message: "Registration failed...!" });
                });
            }
            else
                res.send({ message: "User is already exist...!" })

        });
    } catch (error) {
        res.send(error);
    }
}


const updateOne = async (req, res) => {

    try {

        const id = req.params.id;
        const { firstname, lastname } = req.body;
        const query = `UPDATE users SET firstname=? , lastname =?  where id = ? ; `
        db.query(query, [firstname, lastname, id], (err, result) => {
            if (!err) {
                console.log(result);
                res.send({ message: "Update succesfuly...!" });
            }
            else {
                console.log(err);
                res.send({ message: "updation failed...!" });
            }
        })
    } catch (error) {

    }
}

const deleteone = (req, res) => {
    try {
        const id = req.params.id;
        const query = `DELETE FROM users WHERE id = ?`;
        db.query(query, [id], (err, result) => {
            if (!err) {
                console.log(result);
                res.send({ message: "delation successfull...!" });
            }
            else {
                console.log(err);
                res.send({ message: "Deletion failed...!" });
            }
        })
    } catch (error) {
        res.send(error)
    }
}

module.exports = { registerUser, updateOne, deleteone }