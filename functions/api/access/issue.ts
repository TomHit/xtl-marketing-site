// functions/api/validate-code.ts
export const onRequestPost = async (context: any) => {
  try {
    const { request } = context;

    const body = await request.json().catch(() => ({}));
    const code = String(body?.code || "").trim();

    if (!code) {
      return j({ ok: false, error: "missing_code" }, 400);
    }

    // forward to your verify endpoint
    const res = await fetch("https://xautrendlab.com/api/access/verify", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ code }),
    });

    const jres = await res.json().catch(() => ({}));

    return j(jres, res.status);
  } catch (e: any) {
    return j({ ok: false, error: e?.message || "server_error" }, 500);
  }
};

function j(obj: any, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}
