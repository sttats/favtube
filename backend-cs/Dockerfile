FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

WORKDIR /app

# .csproj を先にコピーして restore（キャッシュを活用）
COPY *.csproj ./
RUN dotnet restore

# ソース全体をコピーしてビルド
COPY . .
RUN dotnet publish -c Release -o /app/out

FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app/out .
EXPOSE 3003
CMD ["dotnet", "backend-cs.dll", "--urls", "http://0.0.0.0:3003"]