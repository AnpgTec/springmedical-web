# Spring Medical Web

Next.js 15 官网（从 `demo/website` 迁移）。三语 SSG：`zh-HK`（默认）/ `zh-CN` / `en`。

```bash
npm install
npm run dev
```
f
访问：`http://localhost:3000/zh-HK`

你需要在 .env.local 补全（缺一不可）

SUPABASE_SERVICE_ROLE_KEY=   # Supabase → Settings → API → service_role

#Paypal的暂时不配置，因为没启用。

NEXT_PUBLIC_PAYPAL_CLIENT_ID=
PAYPAL_CLIENT_ID=            # 可与上面相同
PAYPAL_CLIENT_SECRET=
PAYPAL_MODE=sandbox
PayPal：https://developer.paypal.com → Sandbox App 取 Client ID / Secret。
Webhook（可选）：指向 https://你的域名/api/paypal/webhook，事件选 Capture Completed；填 PAYPAL_WEBHOOK_ID 才会验签。


#对于SEO和GEO的测试，正式域名绑好之后才是真正的收录环境。

先确认两件事：

用 https://springmedical-web.vercel.app 测（这个能直接打开）。带 getshanghai-projects 的那个地址会跳 Vercel 登录页，爬虫进不去。
NEXT_PUBLIC_SITE_URL 现在如果还是长域名，sitemap.xml / robots.txt 里的地址会指错。改成 https://springmedical-web.vercel.app 后再测更准。
技术自测（马上能做）

在浏览器打开：

https://springmedical-web.vercel.app/robots.txt
应允许 *，并列出 GPTBot / PerplexityBot 等；Sitemap: 指向当前站点。
https://springmedical-web.vercel.app/sitemap.xml
里面的 URL 应都能点开，且和 NEXT_PUBLIC_SITE_URL 一致。
任选一页看「网页源代码」：有 <title>、description、hreflang（繁/简/EN）。
Google 工具：

Rich Results Test 贴一页 URL
URL Inspection（Search Console 加属性后）点「请求编入索引」
本地模拟爬虫：

curl -A "Googlebot" -I https://springmedical-web.vercel.app/zh-HK
curl -A "GPTBot" -I https://springmedical-web.vercel.app/zh-HK
应返回 200，不要 401/403，也不要跳到 Vercel Login。

SEO 收录怎么看

Google Search Console 添加网址属性
提交 sitemap
几天后看「网页」有没有编入索引、有没有被屏蔽
搜索：site:springmedical-web.vercel.app（正式域名后改成 site:www.springmedical.hk）
GEO（AI 引用）怎么测

收录没法像 Google 那样「请求索引」，主要看爬虫能不能读、内容是否可引用：

robots.txt 已放行 GPTBot、ChatGPT-User、ClaudeBot、PerplexityBot、Google-Extended
用上面的 curl -A "GPTBot" 确认不是登录墙
过几天在 ChatGPT / Perplexity 问：「尖沙咀 Spring Medical 有哪些疗程？」「Thermage FLX 是什么？」看会不会提到你们、有没有链到知识库/疗程页
注意： *.vercel.app 上 AI 引用通常很少。正式域名 + Search Console 提交 sitemap 之后，再测一次才有意义。
