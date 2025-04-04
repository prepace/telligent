import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";
import { serialize } from "cookie";

export async function POST(req: Request) {
  try {
    // Parse incoming request
    const { session, first_name, last_name } = await req.json();

    const supabase = await createClient();

    console.log(session)

    if (session) {
      // Serialize session data
      const sessionData = JSON.stringify(session);

      // Set session in an HTTP-only cookie
      const cookie = serialize('supabase_session', sessionData, {
        path: '/',
        httpOnly: true, // Prevents JavaScript access
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days expiration
      });

      // Insert user into the database (users table)
      const { data, error } = await supabase
        .from('users') // Use your users table here
        .upsert({ 
          id: session.id, 
          first_name, 
          last_name,
          email: session.email,
        })
        .single(); // .single() ensures that only one row is returned

      if (error) {
        console.error(error)
        return NextResponse.json({ error: 'Error inserting user' }, { status: 500 });
      }

      // Set cookie in response header
      const response = NextResponse.json({ message: 'Session set successfully' });
      response.headers.set('Set-Cookie', cookie);
      
      return response;
    } else {
      return NextResponse.json({ error: 'No session data received' }, { status: 400 });
    }
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to set session cookie' }, { status: 500 });
  }
}