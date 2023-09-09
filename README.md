<h1 align="center">
    <strong>noteapp-ncg</strong>
</h1>

Este projeto é um site para fazer anotações, feito em Next.js e Golang.

![MIT License](https://img.shields.io/badge/License-MIT-green.svg)

## **Stack utilizada**

Esse projeto foi feito utilizando as seguintes tecnologias:

**Front-end:** Next, Typescript, chakra-ui

**Back-end:** Golang, Fiber, Gorm

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu `.env`.

| Variável | Descrição | Valor padrão |
|---|---|---|
| `API_URL` | URL da API no .env dentro do app  | `http://localhost:8080` |
| `PORT` | Porta do servidor backend .env dentro do serve | `8080` |

A variável `API_URL` deve apontar para o URL do servidor backend. A variável `PORT` controla a porta na qual o servidor backend será executado.
```env
API_URL=http://localhost:8080
```
```env
PORT=8080
```


## **Contribuições**

- Faça um `fork` desse repositório;
  
- Cria uma `branch` com a sua feature: `git checkout -b minha-feature`;
  
- Faça `commit` das suas alterações: `git commit -m 'feat: Minha nova feature'`;

- Faça push para a sua branch: `git push origin minha-feature`.


## **Licença**

O projeto é licenciado sob a licença MIT.
