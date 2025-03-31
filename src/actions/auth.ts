"use client";

import { supabase } from "@/config/supabase";
import type { UserCredentials } from "@/types";

export async function login(email: string, password: string) {
	const { error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) {
		return { error: error.message };
	}

	return { success: true };
}

export async function signup({ email, password }: UserCredentials) {
	const { error } = await supabase.auth.signUp({
		email,
		password,
		options: {
			emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
		},
	});

	if (error) {
		console.error("Signup error:", error);
		return { error: error.message };
	}

	return { success: true };
}
