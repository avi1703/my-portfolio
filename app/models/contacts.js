import mongoose ,{ Schema } from "mongoose"

const contactSchema = new Schema({
    firstName: {
        type: String,
        required: [true,"firstName is required"],
        trim: true,
        minLength: [2,"firstName must have more than 2 characters"],
        maxLength: [25,"firstName must be shorter than 25 characters"],
    },

    lastName: {
        type: String,
        trim: true,
    },

    email: {
        type: String,
        required: [true,"E-mail is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    },

    PhoneNumber: {
        type: String,
        trim: true,
    },

    textArea:{
        type: String,
        required: [true,"Message is required"],
    },

    date: {
        type: Date,
        default: Date.now,
    },
})

const Contacts = mongoose.models.Contacts || mongoose.model('Contacts', contactSchema);

export default Contacts