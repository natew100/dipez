"use server";

export async function subscribeEmail(formData: FormData) {
  const email = formData.get("email") as string;

  if (!email || !email.includes("@") || !email.includes(".")) {
    return { error: "Please enter a valid email address." };
  }

  const apiKey = process.env.BEEHIIV_API_KEY;
  const pubId = process.env.BEEHIIV_PUBLICATION_ID;

  // If Beehiiv is not configured, store email for later
  if (!apiKey || !pubId) {
    console.log(`[DipEZ Waitlist] New signup: ${email}`);
    return { success: true };
  }

  try {
    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${pubId}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          reactivate_existing: false,
          send_welcome_email: true,
          utm_source: "dipez_landing_page",
        }),
      }
    );

    if (!res.ok) {
      const data = await res.json();
      return { error: data.message || "Something went wrong. Try again." };
    }

    return { success: true };
  } catch {
    return { error: "Something went wrong. Try again." };
  }
}
