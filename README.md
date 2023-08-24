Receitas Deliciosas
Visão geral
Este é um projeto React.js que permite aos usuários buscar receitas usando a API Spoonacular. Os usuários podem filtrar as receitas com base em diferentes critérios, visualizar os detalhes das receitas e até mesmo favoritar suas receitas favoritas, que são salvas no armazenamento local (LocalStorage).

Funcionalidades
Busca de Receitas: Os usuários podem pesquisar receitas digitando palavras-chave na barra de pesquisa.

Filtragem Avançada: É possível filtrar as receitas por categoria, tipo de culinária, tempo de preparo e outros critérios.

Detalhes da Receita: Os usuários podem clicar em uma receita para ver detalhes como ingredientes, instruções de preparo e tempo de cozimento.

Favoritos: Os usuários podem favoritar receitas e essas informações são armazenadas no LocalStorage para acesso posterior.

Como Executar
Para executar este projeto localmente, siga estas etapas:

Clone o repositório:

bash
Copy code
git clone https://github.com/seu-usuario/seu-projeto.git
Navegue até o diretório do projeto:

bash
Copy code
cd seu-projeto
Instale as dependências:

bash
Copy code
npm install
Inicie o aplicativo:

bash
Copy code
npm start
O aplicativo estará disponível em http://localhost:3000 em seu navegador.

Configuração da API Spoonacular
Para usar a API Spoonacular neste projeto, você precisa obter uma chave de API gratuita em Spoonacular API. Após obter sua chave, você deve configurá-la no arquivo de configuração do projeto.

Crie um arquivo .env.local na raiz do projeto.

Adicione sua chave de API Spoonacular no arquivo .env.local:

env
Copy code
REACT_APP_SPOONACULAR_API_KEY=SUA_CHAVE_API_AQUI
Contribuindo
Contribuições são bem-vindas! Se você quiser contribuir para este projeto, siga estas etapas:

Faça um fork do repositório.

Clone o fork para o seu ambiente de desenvolvimento:

bash
Copy code
git clone https://github.com/seu-usuario/seu-fork.git
Crie um branch para suas alterações:

bash
Copy code
git checkout -b feature/sua-feature
Faça suas alterações e adicione, commit e envie para o seu fork:

bash
Copy code
git add .
git commit -m "Adicione sua mensagem de commit aqui"
git push origin feature/sua-feature
Abra um Pull Request no repositório principal e descreva suas alterações.

Autor
Seu Nome
Licença
Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE para obter detalhes.

