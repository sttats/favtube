# ビルド用ステージ
FROM maven:3.9-eclipse-temurin-17 AS build
WORKDIR /app/backend-java

COPY backend-java/pom.xml .
RUN mvn -q dependency:go-offline

COPY backend-java/src ./src
RUN mvn -q package -DskipTests

# 実行用ステージ
FROM eclipse-temurin:17-jre
WORKDIR /app

COPY --from=build /app/backend-java/target/backend-java-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 3004
ENTRYPOINT ["java", "-jar", "app.jar", "--server.port=3004"]