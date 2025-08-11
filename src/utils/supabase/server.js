import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { createMockSupabaseClient } from "@/utils/supabase/mock";

export async function createClient() {
  // Wireframe mode: return mock client to avoid DB calls on server
  if (process.env.NEXT_PUBLIC_WIREFRAME === "true") {
    return createMockSupabaseClient();
  }
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        }
      },
      cookieOptions: {
        name: "supabase_session", // Customize cookie name here
        lifetime: 60 * 60 * 24 * 7, // Cookie expiration (e.g., 7 days)
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      },
    }
  );
}
