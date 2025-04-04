"use client";

import { supabase } from "@/config/supabase";
import type { UserCredentials } from "@/types";

export async function login(email: string, password: string) {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) {
		return { error: error.message };
	}

	const response = await fetch('/api/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ session: data.session })
	});
	
	if (response.ok) {
    return { success: true };
  } else {
    const errorData = await response.json();
    return { error: errorData.error || 'Failed to set session cookie' };
  };
}

export async function register(email: string, password: string, first_name?: string, last_name?: string) {
	
	const { data: { session }, error } = await supabase.auth.signUp({
		email,
		password,
	});

	if (error) {
		console.error("Signup error:", error);
		return { error: error.message };
	};

	console.log(session)

	const response = await fetch('/api/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ 
			session: session?.user,
			first_name,
			last_name,
		 })
	});

	return { success: true };
}
