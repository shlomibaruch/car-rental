const mongoos = require('mongoose');
const userSchema = new mongoos.Schema({
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true }
});

const NewUser = mongoos.model("users", userSchema);

module.exports = {
    NewUser,
};
