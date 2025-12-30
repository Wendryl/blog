---
title: Nova stack para o blog
summary: Usando 11ty para construir um site estático
cover: https://p0.piqsels.com/preview/968/1021/122/macbook-computer-laptop-technology-thumbnail.jpg
coveralt: Um laptop ao lado de uma xícara de café
tags: post
layout: post.njk
draft: false
---
## Olá mundo!

O blog está de cara nova. 

Meu antigo blog utilizava [Jekyll](https://jekyllrb.com/) como gerador de conteúdo estático. Como eu achava um pouco trabalhoso
fazer alterações usando Jekyll optei por mudar nossa stack de [SSG](https://en.wikipedia.org/wiki/Static_site_generator).

Cheguei a testar [Astro](https://astro.build/) e [Hugo](https://gohugo.io/) mas achei que esses geradores precisavam de muita configuração,
e uma curva de aprendizado muito íngreme.

Agora estou usando [11ty](https://www.11ty.dev/) (ou Eleventy). Este SSG tem como objetivo a simplicidade.
Em alguns instantes vc consegue ter uma configuração básica para começar seu site estático ou blog, veja só:  


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
