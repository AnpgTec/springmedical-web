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
NEXT_PUBLIC_PAYPAL_CLIENT_ID=
PAYPAL_CLIENT_ID=            # 可与上面相同
PAYPAL_CLIENT_SECRET=
PAYPAL_MODE=sandbox
PayPal：https://developer.paypal.com → Sandbox App 取 Client ID / Secret。
Webhook（可选）：指向 https://你的域名/api/paypal/webhook，事件选 Capture Completed；填 PAYPAL_WEBHOOK_ID 才会验签。

