import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST(req: Request) {
  try {
    const { session } = await req.json();

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

      const response = NextResponse.json({ message: 'Session set successfully' });
      response.headers.set('Set-Cookie', cookie);
      return response;
    } else {
      return NextResponse.json({ error: 'No session data received' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Failed to set session cookie' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  // Clear the session cookie
  const sessionCookie = serialize("supabase_session", "", {
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Secure cookie in production
    sameSite: "lax",
    expires: new Date(0), // Expire immediately
  });

  const response = NextResponse.json({ message: "Logged out successfully" });
  response.headers.set("Set-Cookie", sessionCookie); // Set expired cookie to clear session
  return response;
}