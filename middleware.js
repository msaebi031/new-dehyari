// middleware.js
import { NextResponse } from "next/server";
import { getIronSession } from "iron-session/edge";

// This function can be marked `async` if using `await` inside
export const middleware = async (request) => {
  // Create a cookies instance
  const response = NextResponse.next();
  const session = await getIronSession(request, response, {
    cookieName: "login",
    password: process.env.PASSWORD_COOKI,
  });
  const { user } = session;
  if (!user?.contenteshy) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return response;
};

export const config = {
  matcher: ["/panelAdmin/news", "/panelAdmin/alert"],
};
