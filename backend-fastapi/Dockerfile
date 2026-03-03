FROM python:3.12-slim

WORKDIR /app

# 依存インストール（キャッシュ活用）
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# ソースをコピー
COPY . .

EXPOSE 3001
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "3001"]