import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {

        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: false,
            default: "user"
        }

},
{ timestamps: true }

)
//สร้างตัวแปร  User ขี้นมา ถ้ามีแล้วให้ใช้ User Schema ตัวเดิม ถ้าไม่มีให้สร้าง User ใหม่
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;