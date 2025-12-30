---
title: Nova stack para o blog
summary: De Jekyll para 11ty - E mais algumas coisas sobre geradores de site estático
cover: https://images.pexels.com/photos/4061531/pexels-photo-4061531.jpeg
coveralt: A mão de uma pessoa digitando em um teclado de um Macbook.
tags: post
layout: post.njk
draft: false
---
## Olá mundo!

O blog está de cara nova. 

Meu antigo blog utilizava [Jekyll](https://jekyllrb.com/). Como eu achava um pouco trabalhoso demais
fazer alterações usando essa ferramenta optei por mudar nossa stack.

Cheguei a testar [Astro](https://astro.build/) e [Hugo](https://gohugo.io/) mas achei que essas bibliotecas precisavam de muita configuração,
e uma curva de aprendizado muito íngreme.

Pra quem não sabe, esse tipo de biblioteca é chamado de [SSG](https://en.wikipedia.org/wiki/Static_site_generator) (Static Site Generator ou gerador de site estático em português).

Aqui tem uma lista de SSG's: [https://jamstack.org/generators/](https://jamstack.org/generators/)

Agora estou usando [11ty](https://www.11ty.dev/) (ou Eleventy). Muito mais simples, fácil de utilizar e fácil de aprender na minha opinião.

Com poucas linhas de código você já tem um site simples rodando, além de ser muito fácil de fazer deploy utilizando Github Pages por exemplo.


```bash
# crie o diretório do seu site
mkdir meu-blog
cd meu-blog

# inicialize o npm
npm init -y
npm pkg set type="module"

# instale o 11ty
npm i @11ty/eleventy

# Teste
echo "# Hello World" >> index.md
npx @11ty/eleventy --serve
```

A configuração de plugins e de qualquer coisa que vc precise para configurar um site estático ou blog é explicada na [documentação do 11ty](https://www.11ty.dev/docs/)

Pretendo trazer mais conteudo sobre o eleventy nesse blog, como configurar plugins, filtros, etc.

Te vejo no próximo post!
