const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
            trim: true,
        },

        lastname: {
            type: String,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
        },

        password: {
            type: String,
            required: true,
            minlength: 6,
        },

        role: {
            type: String,
            enum: ["candidate", "recruiter"],
            default: "candidate",
        },

        profile: {
            bio: {
                type: String,
                trim: true,
            },

            skills: {
                type: [String],
                default: [],
            },

            experience: {
                type: Number,
                default: 0,
                min: 0,
            },

            resume: {
                url: String,
                publicId: String,
            },
        },

        company: {
            name: {
                type: String,
                trim: true,
            },

            website: {
                type: String,
                trim: true,
            },

            description: {
                type: String,
                trim: true,
            },
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);