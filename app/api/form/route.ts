// app/api/submit-form/route.ts
import dbConnect from "../../lib/db";
import FormData from "@/app/models/Form";
import { NextResponse } from "next/server";

interface FormDataRequestBody {
    name: string;
    email: string;
    details: string;
    phoneNumber: string;
    budget: string;
  }
  
  export async function POST(request: Request) {
    try {
      await dbConnect();
      const body: FormDataRequestBody = await request.json();
      const { name, email, details, phoneNumber, budget } = body;
      
      const newFormData = await FormData.create({ 
        name, 
        email, 
        details, 
        phoneNumber, 
        budget 
      });
  
      return NextResponse.json(newFormData, { status: 201 });
    } catch (error) {
      console.error("Error saving form data:", error);
      if (error instanceof Error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
      }
      return NextResponse.json(
        { error: "An unknown error occurred" },
        { status: 500 }
      );
    }
  }