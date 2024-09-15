## 🌐 [English Version of README](README_EN.md)

# Discover-Rocketseat
# Discover Lipelacross Links

O **Discover Lipelacross Links** é um projeto desenvolvido para demonstrar habilidades de criação de interfaces utilizando Next.js, React e TypeScript. O projeto inclui uma interface de usuário com alternância entre modo claro e escuro, links para redes sociais e portfólio, e uma funcionalidade de troca de tema.

## 🔨 Funcionalidades do Projeto

- Alternância entre modo claro e escuro.
- Exibição de perfil com foto e informações.
- Links para redes sociais e portfólio.
- Responsividade para diferentes tamanhos de tela.

### Exemplo Visual do Projeto

![Exemplo Visual](public/assets/preview.png) <!-- Certifique-se de substituir o link da imagem pelo correto -->

## ✔️ Técnicas e Tecnologias Utilizadas

- **Next.js**: Framework para React que permite a criação de aplicações web e sites estáticos.
- **React**: Biblioteca para criação de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **CSS Modules**: Sistema de módulos CSS para estilização.
- **Ionicons**: Conjunto de ícones utilizados no projeto.
- **Local Font Loading**: Utiliza fontes locais para melhor performance e personalização.

## 📁 Estrutura do Projeto

- **Extra/**
    - `assets.zip`: Pacote de arquivos adicionais para o projeto.
    - `DevLinks • Projeto Discover (Community).fig`: Arquivo de design do projeto.
    - `ionicons.designerpack.zip`: Pacote de designer do Ionicons.

- **LICENSE**: Licença do projeto.

- **next-env.d.ts**: Arquivo de configuração do TypeScript para Next.js.

- **next.config.mjs**: Configuração do Next.js.

- **package-lock.json**: Arquivo de bloqueio de versão do npm.

- **package.json**: Dependências e scripts do projeto.

- **public/**
    - **assets/**
        - `avatar-light.png`: Imagem do perfil em modo claro.
        - `avatar.png`: Imagem do perfil em modo escuro.
        - `bg-desktop-light.jpg`: Imagem de fundo para modo claro em desktop.
        - `bg-desktop.jpg`: Imagem de fundo para modo escuro em desktop.
        - `bg-mobile-light.jpg`: Imagem de fundo para modo claro em mobile.
        - `bg-mobile.jpg`: Imagem de fundo para modo escuro em mobile.
        - `logo-github.svg`: Ícone do GitHub.
        - `logo-instagram.svg`: Ícone do Instagram.
        - `logo-linkedin.svg`: Ícone do LinkedIn.
        - `logo-youtube.svg`: Ícone do YouTube.
        - `moon-stars.svg`: Ícone da lua e estrelas para modo escuro.
        - `sun.svg`: Ícone do sol para modo claro.
    - `favicon.ico`: Ícone do site.
    - `index.html`: Arquivo HTML principal.

- **README.md**: Documento de informações e instruções sobre o projeto.

- **src/**
    - **app/**
        - `favicon.ico`: Ícone da aplicação.
        - **fonts/**
            - `GeistMonoVF.woff`: Fonte monoespaçada.
            - `GeistVF.woff`: Fonte variável.
        - `globals.css`: Estilos globais do projeto.
        - `layout.tsx`: Layout principal da aplicação.
        - `page.module.css`: Estilos específicos da página.
        - `page.tsx`: Componente da página principal.
        - `script.ts`: Funções auxiliares para troca de tema.

- **tsconfig.json**: Configuração do TypeScript.

## 🛠️ Abrir e rodar o projeto

Para iniciar o projeto localmente, siga os passos abaixo:

1. **Certifique-se de que o Node.js está instalado**:
    - O [Node.js](https://nodejs.org/) é necessário para rodar o projeto. Você pode verificar se já o tem instalado com:

      ```bash
      node -v
      ```

    - Se não estiver instalado, baixe e instale a versão recomendada.

2. **Clone o Repositório**:
    - Copie a URL do repositório e execute o comando abaixo no terminal:

      ```bash
      git clone <URL_DO_REPOSITORIO>
      ```

3. **Instale as Dependências**:
    - Navegue até o diretório do projeto e execute:

      ```bash
      npm install
      ```

4. **Inicie o Servidor de Desenvolvimento**:
    - Execute o comando:

      ```bash
      npm run dev
      ```

    - Acesse `http://localhost:3000` no seu navegador para visualizar o projeto.

## 🌐 Deploy

Para fazer o deploy do projeto, você pode usar serviços como [Vercel](https://vercel.com/) ou [Netlify](https://www.netlify.com/). Siga as instruções específicas do serviço escolhido para conectar seu repositório e publicar seu site.
