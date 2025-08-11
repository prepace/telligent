import { createBrowserClient } from "@supabase/ssr";
import { createMockSupabaseClient } from "@/utils/supabase/mock";

const isWireframe = process.env.NEXT_PUBLIC_WIREFRAME === "true";

// In wireframe mode, export a mock client and avoid touching env/real network
export const supabase = isWireframe
	? createMockSupabaseClient()
	: createBrowserClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
	);
