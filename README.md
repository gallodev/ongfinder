# 🔎 ONG Finder

O ONG Finder tem o objetivo de facilitar a localização de ONG's próximas de sua geolicalização.

## 🔗 URL's

🌍 [http://ongfinder.azurewebsites.net/](http://ongfinder.azurewebsites.net/)

## 🛠 Stack

 - Node
 - Jest
 - Knex
 - Selenium

## ⚠️ Requerimentos

- Node v16+
- NPM
- docker & docker-composer

## 🗃 Variaveis de ambiênte

O arquivo `.env.sample` possui exemplo de env  

| Variable | Description |
| --- | -- |
| `PORT` | Define a porta utilizada pelo serviço Sample: PORT=3333 |
| `DATABASE_URL` | Define a host de banco de dados: DB_HOST='xxx' |
| `BASE_URL` | Define a URL principal da aplicação |
| `SECRET` | JWT secret |
|

## 🎬 Instalação

- Primeiro clonar o projeto `git clone https://github.com/gallodev/ongfinder/api` 

- Entrar no diretório `api` e executar o comando `docker-compose up -d` ou `npm run docker-compose` para subir os serviços de banco de dados

- Após concluir executar o comando `docker run -p 3333:3333 -d gallodev/ongfinder` ou `npm run docker-up`

- Depois em seu navegador acesse [http://localhost:3333](http://localhost:3333) ou a porta personalizada de acordo com o seu env.

- 📁 repositório: [https://github.com/gallodev/ongfinder/api](https://github.com/gallodev/ongfinder/api)

## 🗂 Folder structure

```bash
📦 src
 ├── 📂 controllers
 ├── 📂 libs
 ├── 📂 services
 ├── 📜 app.ts
 ├── 📜 router.ts
 └── 📜 server.ts
```