# AppBanco

npm init

// --- NODE -- //

npm install express 
npm install -g nodemon
npm install cors

// --- DOCKER --- //

docker-compose up -d
// -d pra nao deixar o docker preso no console
//docker ps <- ver status



// -- CONEXAO BANCO -- //
npm install prisma                    <-- framework
npx prisma init

npx prisma migrate dev <Arquivo>

npx prisma studio

npm install @prisma/client

extensao vscode - prisma

