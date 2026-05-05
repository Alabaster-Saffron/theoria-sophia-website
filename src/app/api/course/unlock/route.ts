import { NextResponse } from "next/server";
import { getProduct } from "@/lib/products";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

/** One unlock cookie per course, keyed by productId so unlocking one
 *  course doesn't grant access to others. */
export function cookieNameFor(productId: string) {
  return `course-${productId}-unlocked`;
}

export async function POST(request: Request) {
  try {
    const { productId, passcode } = (await request.json()) as {
      productId?: string;
      passcode?: string;
    };

    if (typeof productId !== "string" || !productId) {
      return NextResponse.json(
        { error: "Missing productId." },
        { status: 400 }
      );
    }

    const product = getProduct(productId);
    if (!product) {
      return NextResponse.json(
        { error: "Unknown course." },
        { status: 404 }
      );
    }

    if (typeof passcode !== "string" || passcode.trim() !== product.coursePasscode) {
      return NextResponse.json(
        { error: "That passcode does not match. Please try again." },
        { status: 401 }
      );
    }

    const res = NextResponse.json({ ok: true });
    res.cookies.set(cookieNameFor(productId), "1", {
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

export async function DELETE(request: Request) {
  try {
    const { productId } = (await request.json()) as { productId?: string };
    if (typeof productId !== "string" || !productId) {
      return NextResponse.json({ error: "Missing productId." }, { status: 400 });
    }
    const res = NextResponse.json({ ok: true });
    res.cookies.set(cookieNameFor(productId), "", { path: "/", maxAge: 0 });
    return res;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
