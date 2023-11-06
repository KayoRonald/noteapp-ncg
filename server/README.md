<h1>Documentação do back-end</h1>


| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `api_key` | `string` | **Obrigatório**. A chave da sua API |

#### Retorna todos as notações

```http
  GET /note
```
**Resposta:**

```json
data: {
  {
  "id": "2fd2c248-a6d7-4a60-ba55-a58867e31fcb",
  "title": "Minha primeira notação",
  "description": "Descrição da notação"
  },
  {
    "id": "62b14ec5-dd98-480c-8ba4-454f29b41a79",
    "title": "Minha segunda notação",
    "description": "Descrição da notação"
  }
}
```

#### Retorna uma nota

```http
  GET /note/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer |

**Resposta:**
```json
data: {
  {
    "id": "2fd2c248-a6d7-4a60-ba55-a58867e31fcb",
    "title": "Minha primeira notação",
    "description": "Descrição da notação"
  }
}
```

#### Atualiza uma nota

```http
  PUT /note/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string`     | **Obrigatório**. O ID do item que você quer atualizar |

body:
* `title`: O novo título da nota.
* `description`: O novo corpo da nota.

**Resposta:**
```json
data: {
  {
    "id": "2fd2c248-a6d7-4a60-ba55-a58867e31fcb",
    "title": "Ninha atualização",
    "description": "Descrição atualizada"
  }
}
```

#### Deleta uma nota

```http
  DELETE /note/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer deletar|

**Resposta:**
```json
{
  "message": "Note deleted successfully."
}
```
