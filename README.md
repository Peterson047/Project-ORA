<div align="center">
  <img src="ollama-nextjs-ui.gif">
</div>

<h1 align="center">
  ORA Model + Ollama LLM UI
</h1>

<div align="center">
  
![GitHub Repo stars](https://img.shields.io/github/stars/jakobhoeg/nextjs-ollama-llm-ui)
  
</div>

Comece rapidamente com Modelos de Linguagem Grande (LLMs) de forma **rápida**, **local** e até mesmo **offline**. Este projeto tem como objetivo ser a maneira mais fácil para você começar com LLMs. Nenhuma configuração tediosa e irritante é necessária!

# Funcionalidades ✨

- **UI bonita e intuitiva:** Inspirada no ChatGPT, para melhorar a similaridade na experiência do usuário.
- **Totalmente local:** Armazena conversas no armazenamento local para conveniência. Sem necessidade de executar um banco de dados.
- **Totalmente responsivo:** Use seu celular para conversar, com a mesma facilidade que no desktop.
- **Configuração fácil:** Nenhuma configuração tediosa e irritante é necessária. Basta clonar o repositório e começar!
- **Realce de sintaxe de código:** Mensagens que incluem código são destacadas para fácil acesso.
- **Copie blocos de código facilmente:** Copie facilmente o código destacado com um clique.
- **Download/Pull & Delete de modelos:** Faça download e delete modelos diretamente pela interface.
- **Alternar entre modelos:** Troque entre modelos rapidamente com um clique.
- **Histórico de conversas:** As conversas são salvas e facilmente acessadas.
- **Modo claro e escuro:** Alternar entre modo claro e escuro.

# Prévia

https://github.com/jakobhoeg/nextjs-ollama-llm-ui/assets/114422072/08eaed4f-9deb-4e1b-b87a-ba17d81b9a02

# Requisitos ⚙️

Para usar a interface web, estes requisitos devem ser atendidos:

1. Baixe [Ollama](https://ollama.com/download) e o tenha em execução. Ou execute-o em um contêiner Docker. Verifique a [documentação](https://github.com/ollama/ollama) para instruções.
2. Node.js (18+) e npm são necessários. [Download](https://nodejs.org/en/download)

# Implemente o seu próprio no Vercel ou Netlify com um clique ✨

[![Implementar com Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjakobhoeg%2Fnextjs-ollama-llm-ui&env=NEXT_PUBLIC_OLLAMA_URL&envDescription=Sua%20URL%20Ollama) [![Botão de implementação no Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jakobhoeg/nextjs-ollama-llm-ui)

Você precisará definir sua variável de ambiente [OLLAMA_ORIGINS](https://github.com/ollama/ollama/blob/main/docs/faq.md) em sua máquina que está executando Ollama:


```
OLLAMA_ORIGINS="https://seu-app.vercel.app/"
```


# Instalação 📖

[![Status de empacotamento](https://repology.org/badge/vertical-allrepos/nextjs-ollama-llm-ui.svg?columns=3)](https://repology.org/project/nextjs-ollama-llm-ui/versions)

Use um pacote pré-construído de um dos gerenciadores de pacotes suportados para executar um ambiente local da interface web. Alternativamente, você pode instalar a partir do código-fonte com as instruções abaixo.

> [!NOTA]  
> Se seu frontend rodar em algo diferente de `http://localhost` ou `http://127.0.0.1`, você precisará definir OLLAMA_ORIGINS para a URL do seu frontend.
>
> Isso também está declarado na [documentação](https://github.com/ollama/ollama/blob/main/docs/faq.md#how-do-i-configure-ollama-server):
> 
> `Ollama permite solicitações de origens cruzadas de 127.0.0.1 e 0.0.0.0 por padrão. Origens adicionais podem ser configuradas com OLLAMA_ORIGINS`

## Instalar a partir do código-fonte

**1. Clone o repositório para um diretório em seu PC via prompt de comando:**
````git clone https://github.com/jakobhoeg/nextjs-ollama-llm-ui```

```
git clone https://github.com/jakobhoeg/nextjs-ollama-llm-ui
```

**2. Open the folder:**

```
cd nextjs-ollama-llm-ui
```

**3. Rename the `.example.env` to `.env`:**

```
mv .example.env .env
```

**4. If your instance of Ollama is NOT running on the default ip-address and port, change the variable in the .env file to fit your usecase:**

```
NEXT_PUBLIC_OLLAMA_URL="http://localhost:11434"
```

**5. Install dependencies:**

```
npm install
```

**6. Start the development server:**

```
npm run dev
```

**5. Go to [localhost:3000](http://localhost:3000) and start chatting with your favourite model!**

# Upcoming features

This is a to-do list consisting of upcoming features.
- ✅ Voice input support
- ✅ Code syntax highlighting
- ⬜️ Ability to send an image in the prompt to utilize vision language models.
- ⬜️ Ability to regenerate responses
- ⬜️ Import and export chats

# Tech stack

[NextJS](https://nextjs.org/) - React Framework for the Web

[TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework

[shadcn-ui](https://ui.shadcn.com/) - UI component built using Radix UI and Tailwind CSS

[shadcn-chat](https://github.com/jakobhoeg/shadcn-chat) - Chat components for NextJS/React projects

[Framer Motion](https://www.framer.com/motion/) - Motion/animation library for React

[Lucide Icons](https://lucide.dev/) - Icon library

# Helpful links

[Medium Article](https://medium.com/@bartek.lewicz/launch-your-own-chatgpt-clone-for-free-on-colab-shareable-and-online-in-less-than-10-minutes-da19e44be5eb) - How to launch your own ChatGPT clone for free on Google Colab. By Bartek Lewicz.

[Lobehub mention](https://lobehub.com/blog/5-ollama-web-ui-recommendation#5-next-js-ollama-llm-ui) - Five Excellent Free Ollama WebUI Client Recommendations
