import { NextResponse } from "next/server";
import { put, list, del } from "@vercel/blob";

interface FlagEntry {
  id: string;
  timestamp: string;
  page: string;
  section: string;
  element: string;
  notes: string;
  status: "pending" | "done";
  imageUrl?: string;
}

const FLAGS_PREFIX = "flags/";
const IMAGES_PREFIX = "flag-images/";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const page = formData.get("page") as string;
    const section = formData.get("section") as string;
    const element = formData.get("element") as string;
    const notes = formData.get("notes") as string;
    const imageFile = formData.get("image") as File | null;

    let imageUrl: string | undefined;

    // Upload replacement image if provided
    if (imageFile && imageFile.size > 0) {
      try {
        const ext = imageFile.name.split(".").pop() || "jpg";
        const blob = await put(`${IMAGES_PREFIX}${Date.now()}.${ext}`, imageFile, {
          access: "public",
        });
        imageUrl = blob.url;
      } catch (imgErr) {
        console.error("Image upload failed (flag will still save):", imgErr);
      }
    }

    const entry: FlagEntry = {
      id: `flag-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      timestamp: new Date().toISOString(),
      page,
      section,
      element,
      notes,
      status: "pending",
      ...(imageUrl ? { imageUrl } : {}),
    };

    // Store flag as individual JSON blob
    await put(`${FLAGS_PREFIX}${entry.id}.json`, JSON.stringify(entry), {
      access: "public",
      contentType: "application/json",
    });

    return NextResponse.json({ ok: true, id: entry.id });
  } catch (err) {
    console.error("Flag API error:", err);
    return NextResponse.json({ error: "Failed to save flag" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const { blobs } = await list({ prefix: FLAGS_PREFIX });

    const flags: FlagEntry[] = await Promise.all(
      blobs.map(async (blob) => {
        const res = await fetch(blob.url);
        return res.json();
      })
    );

    // Sort newest first
    flags.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());

    return NextResponse.json(flags);
  } catch (err) {
    console.error("Flag API error:", err);
    return NextResponse.json([], { status: 200 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = (await request.json()) as { id?: string };
    if (!id || typeof id !== "string") {
      return NextResponse.json({ error: "Missing flag id" }, { status: 400 });
    }

    const { blobs } = await list({ prefix: `${FLAGS_PREFIX}${id}` });
    if (blobs.length === 0) {
      return NextResponse.json({ error: "Flag not found" }, { status: 404 });
    }

    const flagBlob = blobs[0];
    let imageUrl: string | undefined;
    try {
      const res = await fetch(flagBlob.url);
      const entry = (await res.json()) as FlagEntry;
      imageUrl = entry.imageUrl;
    } catch {
      // proceed with flag deletion even if we can't read the entry
    }

    await del(flagBlob.url);
    if (imageUrl) {
      try {
        await del(imageUrl);
      } catch (imgErr) {
        console.warn("Failed to delete flag image (flag was removed):", imgErr);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Flag DELETE error:", err);
    return NextResponse.json({ error: "Failed to delete flag" }, { status: 500 });
  }
}
