import connectDB from "@/app/lib/mongodb";
import Contacts from "@/app/models/contacts";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { firstName,lastName,email,PhoneNumber,textArea } = await req.json();

    console.log("firstName",firstName);
    console.log("lastName",lastName);
    console.log("email",email);
    console.log("PhoneNumber",PhoneNumber);
    console.log("textArea",textArea);

    try {
        await connectDB();
        await Contacts.create({firstName,lastName,email,PhoneNumber,textArea})

        return NextResponse.json({
            msg: ["Message Sent Successfully! I will contact you as soon as possible."], 
            success: true
        })
    } catch (error) {
        if(error instanceof mongoose.Error.ValidationError) {
            let errorList = [];
            for (let e in error.errors) {
                errorList.push(error.errors[e].message);
            }
            console.log(errorList);
            return NextResponse.json({msg: errorList})
        } else {
            return NextResponse.json({ msg: "Unable to send Message."});
        }
    }
}