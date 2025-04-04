"use server";

import { v4 as uuidv4 } from 'uuid';
import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(req: Request) {
  const supabase = await createClient(); // Assuming you have this helper to create a Supabase client

  // Fetch the user data
  const { data: { user }, error: userError } = await supabase.auth.getUser();

  if (userError) {
    // If there’s an error getting the user, return an error response
    return new Response(JSON.stringify({ error: 'User authentication failed' }), {
      status: 401, // Unauthorized
    });
  }

  if (!user) {
    // If no user is found, return an error response
    return new Response(JSON.stringify({ error: 'User not found' }), {
      status: 404, // Not found
    });
  }

  // Fetch articles for the authenticated user
  const { data: articles, error: articleError } = await supabase
    .from('articles')
    .select('*')
    .eq('author_id', user.id);

  if (articleError) {
    // If there’s an error fetching articles, return an error response
    return new Response(JSON.stringify({ error: 'Error fetching articles' }), {
      status: 500, // Internal Server Error
    });
  }

  // If everything goes well, return the articles
  return new Response(JSON.stringify(articles), {
    status: 200, // OK
  });
}

export async function POST(req: Request) {
  const supabase = await createClient();
  const formData = await req.formData();
  const dataObj = Object.fromEntries(formData.entries());

  const photo_id = uuidv4();

  const {
    title,
    author_name,
    author_email,
    category,
    slug,
    description,
    image_description,
    content,
    tags,
    meta_title,
    meta_description,
    status,
    publish_date
  } = dataObj;

  const { data: { user } } = await supabase.auth.getUser();

  let publicImageUrl = '';

  if (dataObj.featured_image) {
    const file = dataObj.featured_image;
    const fileExtension = file.name.split('.').pop();
    const filePath = `${user.id}/${photo_id}.${fileExtension}`;
    const { data: uploadImage, error: uploadImageError } = await supabase.storage.from('article-image').upload(filePath, file)

    if (uploadImageError) {
      console.error("Error uploading image:", uploadImageError);
      return NextResponse.json({ error: "Failed to upload image", details: uploadImage }, { status: 500 });
    }

    publicImageUrl = `https://sxhsyakujgbaomutfnac.supabase.co/storage/v1/object/public/article-image/${filePath}`;

  }


  const { data, error } = await supabase
    .from("articles")
    .insert([
      {
        title,
        author_name, 
        author_email, 
        category, 
        slug, 
        description, 
        image_url: publicImageUrl,
        image_description, 
        content,
        tags: tags.toString(), 
        meta_title, 
        meta_description, 
        status, 
        publish_date
      }
    ]);

  if (error) {
    console.error("Error inserting article:", error);
    return NextResponse.json({ error: "Failed to insert article", details: error }, { status: 500 });
  }

  return NextResponse.json({ message: 'Article created successfully', article: data }, { status: 201 });
  // return NextResponse.json({hello: 'hello'})
}