This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Ejecutar la aplicacion

First, run the development server:

```bash
# development
npm run dev

# production
npm run start
```

## Ejecutar test

First, run the development server:

```bash
# development
npm run test
```

## Comandos para dockerizar y ejecutar la aplicación en Next.js

### 1. Construir la imagen Docker

```bash
docker build -t spotify-app .
```

### 2. Ejecutar la imagen

```bash
docker run -p 3000:3000 spotify-app
```


