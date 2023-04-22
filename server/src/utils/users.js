require("dotenv").config()
const {PASSWORD} = process.env
const users = [{email: 'londerogerardo@gmail.com', password: PASSWORD }]
module.exports = users;