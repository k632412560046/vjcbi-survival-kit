# Deploy V5 AI: ngắn gọn

## Vì sao cần Vercel?
GitHub vẫn là nơi lưu và sửa code. GitHub Pages chỉ phục vụ file tĩnh, còn AI cần một server-side endpoint để giữ `OPENAI_API_KEY` bí mật. Vercel có thể deploy chính repo GitHub này và chạy cả website + `/api/chat`.

## Flow
GitHub repo → Vercel → website + `/api/chat` → OpenAI API

## Sau khi upload V5 lên GitHub
1. Tạo/import project trên Vercel từ repo `vjcbi-survival-kit`.
2. Không cần build command đặc biệt.
3. Thêm Environment Variable: `OPENAI_API_KEY`.
4. Thêm `OPENAI_MODEL=gpt-5.6-luna`.
5. Deploy.
6. Mở URL Vercel và bấm `Hỏi AI`.

## Khi muốn admin chỉ sửa Google Sheets
1. Tạo Sheet tab tên `Knowledge` theo `admin/knowledge-template.csv`.
2. Dùng Apps Script trong `admin/google-apps-script/Code.gs` và deploy Web App.
3. Trên Vercel thêm `KNOWLEDGE_URL=<Apps Script /exec URL>`.
4. Redeploy một lần. Từ sau đó admin chỉ sửa Sheet.
