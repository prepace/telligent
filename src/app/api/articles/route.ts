"use server";

import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function POST(req: Request) {
  const supabase = await createClient();
  const formData = await req.formData();

  console.log(formData);

  // const { data, error } = await supabase
  //   .from("articles")
  //   .insert([
  //     {
  //       title,
  //       author_name, 
  //       author_email, 
  //       category, 
  //       slug, 
  //       description, 
  //       featuredImage, 
  //       imageDescription, 
  //       content,
  //       tags, 
  //       metaTitle, 
  //       metaDescription, 
  //       status, 
  //       publishDate
  //     }
  //   ]);

  // if (error) {
  //   console.error("Error inserting article:", error);
  //   return NextResponse.json({ error: "Failed to insert article", details: error }, { status: 500 });
  // }

  // return NextResponse.json({ message: 'Article created successfully', article: data }, { status: 201 });
  return NextResponse.json({hello: 'hello'})
}