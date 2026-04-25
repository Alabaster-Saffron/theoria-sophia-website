import { NextResponse } from "next/server";

const COURSE_PASSCODE = "Evesgardenparty";
const COOKIE_NAME = "fha-hbd-unlocked";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export async function POST(request: Request) {
  try {
    const { passcode } = (await request.json()) as { passcode?: string };

    if (typeof passcode !== "string" || passcode.trim() !== COURSE_PASSCODE) {
      return NextResponse.json(
        { error: "That passcode does not match. Please try again." },
        { status: 401 }
      );
    }

    const res = NextResponse.json({ ok: true });
    res.cookies.set(COOKIE_NAME, "1", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: COOKIE_MAX_AGE,
    });
    return res;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, "", { path: "/", maxAge: 0 });
  return res;
}
