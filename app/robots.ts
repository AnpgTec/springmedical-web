import type { MetadataRoute } from "next";

/** Explicit allow rules for AI / answer-engine crawlers (GEO). */
const GEO_BOTS = [
  // OpenAI
  "GPTBot",
  "ChatGPT-User",
  // Anthropic
  "ClaudeBot",
  "anthropic-ai",
  // Perplexity
  "PerplexityBot",
  // Google Gemini
  "Google-Extended",
  // Microsoft Bing Search / Copilot (Copilot grounds on Bing index; no separate Copilot UA)
  "Bingbot",
  // DeepSeek
  "DeepSeekBot",
  // Baidu 文心一言 / ERNIE
  "ERNIEBot",
  "YiyanBot",
  // ByteDance 豆包
  "Bytespider",
  "Doubao",
  // Tencent 元宝 / 混元
  "Hunyuan",
  "TencentBot",
] as const;

export default function robots(): MetadataRoute.Robots {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://www.springmedical.hk";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      ...GEO_BOTS.map((userAgent) => ({ userAgent, allow: "/" as const })),
    ],
    sitemap: `${site}/sitemap.xml`,
  };
}
