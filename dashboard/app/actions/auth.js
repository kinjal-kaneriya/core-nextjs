"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

//SIGNUP ACTION
export async function signupAction(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  if (!name || !email || !password) {
    throw new Error("All fields are required");
  }

  const cookieStore = await cookies();

  cookieStore.set(
    "registered_user",
    JSON.stringify({ name, email, password }),
    {
      httpOnly: true,
      path: "/",
      // maxAge: 7 * 24 * 60 * 60, // 7 days 
    }
  );

  redirect("/login");
}

//LOGIN ACTION
export async function loginAction(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const cookieStore = await cookies();
  const registered = cookieStore.get("registered_user");

  if (!registered) {
    throw new Error("No account found. Please sign up.");
  }

  const user = JSON.parse(registered.value);

  if (user.email !== email || user.password !== password) {
    throw new Error("Invalid email or password");
  }

  cookieStore.set(
    "auth_user",
    JSON.stringify({ name: user.name, email: user.email }),
    {
      httpOnly: true,
      path: "/",
    }
  );

  redirect("/dashboard");
}
