import { NextResponse } from "next/server";
import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";

const FLAGS_FILE = path.join(process.cwd(), "change-requests.json");
const UPLOADS_DIR = path.join(process.cwd(), "public", "flag-uploads");

interface FlagEntry {
  id: string;
  timestamp: string;
  page: string;
  section: string;
  element: string;
  notes: string;
  status: "pending" | "done";
  imageFilename?: string;
}

async function readFlags(): Promise<FlagEntry[]> {
  try {
    const data = await readFile(FLAGS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeFlags(flags: FlagEntry[]) {
  await writeFile(FLAGS_FILE, JSON.stringify(flags, null, 2));
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const page = formData.get("page") as string;
    const section = formData.get("section") as string;
    const element = formData.get("element") as string;
    const notes = formData.get("notes") as string;
    const imageFile = formData.get("image") as File | null;

    let imageFilename: string | undefined;

    if (imageFile && imageFile.size > 0) {
      await mkdir(UPLOADS_DIR, { recursive: true });
      const ext = imageFile.name.split(".").pop() || "jpg";
      imageFilename = `flag-${Date.now()}.${ext}`;
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      await writeFile(path.join(UPLOADS_DIR, imageFilename), buffer);
    }

    const entry: FlagEntry = {
      id: `flag-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      timestamp: new Date().toISOString(),
      page,
      section,
      element,
      notes,
      status: "pending",
      ...(imageFilename ? { imageFilename } : {}),
    };

    const flags = await readFlags();
    flags.push(entry);
    await writeFlags(flags);

    return NextResponse.json({ ok: true, id: entry.id });
  } catch (err) {
    console.error("Flag API error:", err);
    return NextResponse.json({ error: "Failed to save flag" }, { status: 500 });
  }
}

export async function GET() {
  const flags = await readFlags();
  return NextResponse.json(flags);
}
