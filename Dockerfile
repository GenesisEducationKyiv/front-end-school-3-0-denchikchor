# ——————————————————————————————
# Stage 1: збірка
# ——————————————————————————————
FROM node:18-alpine AS build

WORKDIR /app

# Копіюємо package.json і lock-файл, щоб скористатися кешем
COPY package*.json ./
RUN npm ci

# Копіюємо весь код і робимо production-збірку
COPY . .
RUN npm run build

# ——————————————————————————————
# Stage 2: сервірування зібраного бандла
# ——————————————————————————————
FROM nginx:stable-alpine

# Видаляємо дефолтну конфіг nginx (опціонально)
RUN rm /etc/nginx/conf.d/default.conf
# Копіюємо свій конфіг (якщо є) або створіть простий:
COPY nginx.conf /etc/nginx/conf.d/

# Копіюємо зібраний бандл із попереднього етапу
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
