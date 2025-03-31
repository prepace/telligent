"use server";

import { stripe } from "@/config/stripe";
import { supabase } from "@/config/supabase";
import { checkActiveSubscription } from "@/utils/document_helpers";

export const subscribe = async ({ email, userId }: { email: string; userId: string }) => {
	const { data, error } = await supabase
		.from("subscriptions")
		.select("stripe_customer_id")
		.eq("user_id", userId)
		.in("status", ["active"]);

	if (error) {
		console.error("Error fetching subscription:", error);
		return { url: null, error: "An error occurred while checking your subscription." }; // Better error message
	}

	const customerEmail = data?.[0]?.stripe_customer_id ? undefined : email;
	const customer = data?.[0]?.stripe_customer_id || undefined;

	if (data?.[0]?.stripe_customer_id) {
		const hasActiveSubscription = await checkActiveSubscription(userId);

		if (hasActiveSubscription) {
			return { url: null, error: "You already have an active subscription." }; // Better error message
		}
	}

	const { url } = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		customer_email: customerEmail,
		customer,
		line_items: [
			{
				price: process.env.STRIPE_MONTHLY_PRICE_ID!,
				quantity: 1,
			},
		],
		metadata: {
			userId,
		},
		mode: "subscription",
		success_url: `${process.env.NEXT_PUBLIC_URL!}/success`,
		cancel_url: `${process.env.NEXT_PUBLIC_URL!}/`,
	});

	return { url, error: null };
};
