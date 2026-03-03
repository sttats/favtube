FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Use /favtube as the container root to match repository layout
WORKDIR /favtube

COPY backend-cs/*.csproj /favtube/backend-cs/
WORKDIR /favtube/backend-cs
RUN dotnet restore

# Copy the whole project (frontend, backend, packages) into image
WORKDIR /favtube
COPY . .

WORKDIR /favtube/backend-cs
RUN dotnet publish -c Release -o /favtube/backend-cs/out

FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /favtube/backend-cs
COPY --from=build /favtube/backend-cs/out .
EXPOSE 3003
CMD ["dotnet", "backend-cs.dll", "--urls", "http://0.0.0.0:3003"]