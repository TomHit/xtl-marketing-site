export const onRequestPost = async (context: any) => {
  try {
    const { request, env } = context;

    const body = await request.json().catch(() => ({}));
    const codeRaw = String(body?.code || "").trim();

    if (!codeRaw) return j({ ok: false, error: "missing_code" }, 400);

    const code = normalizeCode(codeRaw);

    const kv = env?.CODES_KV; // must match your KV binding name
    if (!kv) return j({ ok: false, error: "kv_not_bound" }, 500);

    const key = `code:${code}`;
    const raw = await kv.get(key);
    if (!raw) return j({ ok: false, error: "invalid_code" }, 401);

    let rec: any = null;
    try {
      rec = JSON.parse(raw);
    } catch {
      rec = null;
    }
    if (!rec) return j({ ok: false, error: "bad_record" }, 500);

    const nowMs = Date.now();
    const expMs = Number(rec.expires_ms || 0);

    if (expMs > 0 && nowMs > expMs) {
      await kv.delete(key);
      return j({ ok: false, error: "code_expired" }, 401);
    }

    const used = Number(rec.used_count || 0);
    const maxUses = Number(rec.max_uses || 1);

    if (used >= maxUses) return j({ ok: false, error: "code_already_used" }, 401);

    // simplest safe behavior: one-time codes delete immediately
    if (maxUses <= 1) {
      await kv.delete(key);
    } else {
      rec.used_count = used + 1;
      await kv.put(key, JSON.stringify(rec));
    }

    return j({ ok: true });
  } catch (e: any) {
    return j({ ok: false, error: e?.message || "server_error" }, 500);
  }
};

function normalizeCode(x: string) {
  return x.trim().toUpperCase().replace(/\s+/g, "");
}

function j(obj: any, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}
