# APP FullStack - Bank
  <img alt="[Shows an illustrated sun in light mode and a moon with stars in dark mode." src="https://www.devmedia.com.br/arquivos/Artigos/43033/fig7.png">


## Front-End

+ React 
+ CSS 3 
+ Axios<

## Back-End

+ Node.js 
+ Express
+ Prisma
+ Cors


## API
+ PostGresSQL - Docker-Compose

<hr/>

## Start Server
+ **Back:** npm run dev - Diretorio raiz
+ **Front:** npm Start - Diretorio front/bank
+ **API:** Só abrir o docker

 npm init

## NODE 

```
npm install express 
npm install -g nodemon
npm install cors
```

## DOCKER 

Install Docker: https://learn.microsoft.com/pt-br/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package

```
docker-compose up -d
docker ps
```


## CONEXAO BANCO | ORM 
```
npm install prisma                  
npx prisma init
npx prisma migrate dev <Arquivo>
npx prisma studio
npm install @prisma/client
```
