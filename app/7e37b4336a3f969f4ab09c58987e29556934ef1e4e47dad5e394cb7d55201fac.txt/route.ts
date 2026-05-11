const TOKEN = "7e37b4336a3f969f4ab09c58987e29556934ef1e4e47dad5e394cb7d55201fac";

export function GET() {
  return new Response(TOKEN, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
