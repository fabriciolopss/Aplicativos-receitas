---

# Aplicativo Receitas

## Visão geral

Este é um projeto React.js que permite aos usuários buscar receitas usando a API Spoonacular. Os usuários podem filtrar as receitas com base em diferentes critérios, visualizar os detalhes das receitas e até mesmo favoritar suas receitas favoritas, que são salvas no armazenamento local (LocalStorage).

## Funcionalidades

- **Busca de Receitas:** Os usuários podem pesquisar receitas digitando palavras-chave na barra de pesquisa.

- **Filtragem Avançada:** É possível filtrar as receitas por categoria, tipo de culinária, tempo de preparo e outros critérios.

- **Detalhes da Receita:** Os usuários podem clicar em uma receita para ver detalhes como ingredientes, instruções de preparo e tempo de cozimento.

- **Favoritos:** Os usuários podem favoritar receitas e essas informações são armazenadas no LocalStorage para acesso posterior.

## Como Executar

Para executar este projeto localmente, siga estas etapas:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/seu-projeto.git
   ```

2. **Navegue até o diretório do projeto:**
   ```bash
   cd seu-projeto
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o aplicativo:**
   ```bash
   npm start
   ```

O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000) em seu navegador.

## Configuração da API Spoonacular

Para usar a API Spoonacular neste projeto, você precisa obter uma chave de API gratuita em [Spoonacular API](https://spoonacular.com/food-api/console#Dashboard). Após obter sua chave, você deve configurá-la no arquivo de configuração do projeto.

1. Crie um arquivo `.env.local` na raiz do projeto.

2. Adicione sua chave de API Spoonacular no arquivo `.env.local`:
   ```env
   REACT_APP_SPOONACULAR_API_KEY=SUA_CHAVE_API_AQUI
   ```

## Contribuindo

Contribuições são bem-vindas! Se você quiser contribuir para este projeto, siga estas etapas:

1. Faça um fork do repositório.

2. Clone o fork para o seu ambiente de desenvolvimento:

   ```bash
   git clone https://github.com/seu-usuario/seu-fork.git
   ```

3. Crie um branch para suas alterações:

   ```bash
   git checkout -b feature/sua-feature
   ```

4. Faça suas alterações e adicione, commit e envie para o seu fork:

   ```bash
   git add .
   git commit -m "Adicione sua mensagem de commit aqui"
   git push origin feature/sua-feature
   ```

5. Abra um Pull Request no repositório principal e descreva suas alterações.

## Autor

- Fabricio Rocha Lopes(https://github.com/fabriciolopss)

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.

---
