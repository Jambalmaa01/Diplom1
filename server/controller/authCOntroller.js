const User= require('../model/authModel')
const {hashPassword, comparePassword}=require('../middlewares/authj')
const jwt=require("jsonwebtoken")


exports.signup = async (req, res) => {
console.log("Signup Hit");
try {
// validation
const { name, email, password } = req.body;
if (!name) {
return res.json({
error: "Name is required",
});
}
if (!email) {
return res.json({
error: "Email is required",
});
}
if (!password || password.length < 6) {
return res.json({
error: "Password is required and should be 6 characters long",
});
}
const exist = await User.findOne({ email });
if (exist) {
return res.json({
error: "Email is taken",
});
}
// hash password
const hashedPassword = await hashPassword(password);
try {
const user = await new User({
name,
email,
password: hashedPassword,
}).save();
// create signed token
// const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
// expiresIn: "7d",
// });
//   console.log(user);
const { password, ...rest } = user._doc;
return res.json({
token,
user: rest,
});
} catch (err) {
console.log(err);
}
} catch (err) {
console.log(err);
}
}; 

exports.singupGet=async(req, res)=>{
    res.send("hi get")
}
