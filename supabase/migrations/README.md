# 使用 Service Role Key 設定 Admin

## 📝 設定步驟

### 1. 新增環境變數

在 `.env.local` 加入 Service Role Key：

```env
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

> 💡 **取得 Service Role Key**：
> Supabase Dashboard → Settings → API → Project API keys → `service_role` (secret)

---

### 2. 執行 SQL Migration

在 Supabase Dashboard → SQL Editor 依序執行：

1. `001_create_profiles.sql`
2. `002_create_subscriptions.sql`
3. `003_create_admin_tables.sql`

---

### 3. 設定 Admin 角色

#### 方式 A：使用 API（推薦）

```bash
# 啟動開發伺服器
npm run dev

# 使用 curl 或 Postman 呼叫 API
curl -X POST http://localhost:3000/api/admin/set-role \
  -H "Content-Type: application/json" \
  -d '{
    "email": "zz41354899@gmail.com",
    "role": "admin"
  }'
```

#### 方式 B：直接執行 SQL

在 Supabase Dashboard SQL Editor：

```sql
UPDATE auth.users
SET raw_app_meta_data = COALESCE(raw_app_meta_data, '{}'::jsonb) || '{"role": "admin"}'::jsonb
WHERE email = 'zz41354899@gmail.com';
```

---

### 4. 驗證設定

```sql
SELECT 
    email,
    raw_app_meta_data->>'role' as role
FROM auth.users
WHERE email = 'zz41354899@gmail.com';
```

應該看到 `role` 欄位為 `admin`。

---

### 5. 測試

1. **登出再登入** → 確保 JWT 更新
2. 訪問 `/pro/admin` → 確認可以進入
3. 訪問 `/dashboard/settings` → 測試名稱修改

---

## 🔒 安全性說明

- ✅ Service Role Key 只存在後端（`.env.local`）
- ✅ `app_metadata` 只能透過 Service Role Key 修改
- ✅ Client 端無法偽造角色
- ⚠️ 不要將 Service Role Key 提交到 Git
