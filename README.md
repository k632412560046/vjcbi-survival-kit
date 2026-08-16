# VJCBI Survival Kit V5 — Embedded AI

Bản này bổ sung **Survival AI ngay trong website**. Dữ liệu AI hiện được tạo từ file Survival Kit DOCX ngày 16/08/2026, tổng cộng 47 knowledge chunks.

## Cấu trúc

- `index.html`, `styles.css`, `app.js`, `data.js`: frontend
- `api/chat.js`: serverless AI endpoint
- `knowledge/knowledge.json`: dữ liệu nền hiện tại
- `admin/knowledge-template.csv`: cấu trúc dữ liệu chuẩn cho admin
- `admin/google-apps-script/Code.gs`: endpoint để sau này dùng Google Sheets làm CMS

## Quan trọng

GitHub Pages chỉ host frontend tĩnh. Để `/api/chat` hoạt động và giữ API key an toàn, deploy repo này lên **Vercel** (hoặc backend serverless tương đương) và đặt `OPENAI_API_KEY` dưới dạng environment variable. Không bao giờ ghi API key vào `app.js`, `data.js` hay repo public.

## Environment variables

- `OPENAI_API_KEY`: bắt buộc
- `OPENAI_MODEL`: mặc định `gpt-5.6-luna`
- `KNOWLEDGE_URL`: tùy chọn. Khi có Google Sheet + Apps Script, dán endpoint JSON vào đây. Nếu bỏ trống, AI dùng `knowledge/knowledge.json`.
- `ALLOWED_ORIGIN`: tùy chọn nếu frontend ở domain khác backend.

## Admin sau này

Mục tiêu vận hành là: **Admin sửa Google Sheet, website và AI cùng đọc dữ liệu mới**. Xem `admin/ADMIN_GUIDE.md`.
