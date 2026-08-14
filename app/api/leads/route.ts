import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";
import type { Locale } from "@/lib/i18n";
import { isLocale } from "@/lib/i18n";

type Body = {
  name?: string;
  phone?: string;
  email?: string;
  product?: string;
  datetime?: string;
  note?: string;
  contact_pref?: string;
  locale?: string;
  source?: string;
  source_ref?: string;
};

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const phone = (body.phone || "").trim() || null;
  const email = (body.email || "").trim() || null;
  if (!name) {
    return NextResponse.json({ error: "name_required" }, { status: 400 });
  }
  if (!phone && !email) {
    return NextResponse.json({ error: "contact_required" }, { status: 400 });
  }

  const locale = isLocale(body.locale || "") ? (body.locale as Locale) : "zh-HK";
  const source =
    body.source === "treatment" ||
    body.source === "shop" ||
    body.source === "other" ||
    body.source === "contact"
      ? body.source
      : "contact";

  const remarkParts = [
    body.product ? `諮詢項目: ${body.product}` : "",
    body.datetime ? `希望時間: ${body.datetime}` : "",
    body.contact_pref ? `聯絡偏好: ${body.contact_pref}` : "",
    body.note || "",
  ].filter(Boolean);

  let supabase;
  try {
    supabase = createServiceClient();
  } catch {
    return NextResponse.json(
      { error: "server_misconfigured", detail: "SUPABASE_SERVICE_ROLE_KEY required" },
      { status: 500 }
    );
  }

  const { data, error } = await supabase
    .from("leads")
    .insert({
      source,
      source_ref: body.source_ref || body.product || null,
      name,
      email,
      phone,
      product_or_treatment: body.product || null,
      remark: remarkParts.join("\n") || null,
      locale,
      status: "new",
    })
    .select("id")
    .single();

  if (error) {
    console.error("leads insert", error);
    return NextResponse.json({ error: "insert_failed", detail: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, id: data.id });
}
