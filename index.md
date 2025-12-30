---
layout: main.njk
title: wendryl.dev
---
# wendryl.dev
### Conteúdo tech toda semana.
---
<ul class="posts">
    {%- for post in collections.post -%}
    <li class="post">
        <img class="post__cover" src="{{ post.data.cover }}" alt="{{ post.data.coveralt }}">
        <div class="post__content">
            <h2>
                {{ post.data.title }}
            </h2>
            <span class="post__date">
                {{ post.date | prettydate }}
            </span>
            <h3 class="post__subtitle">
                {{ post.data.summary }}
            </h3>
            <a href="{{ post.data.page.url }}">
                Ler post
            </a>
        </div>
    </li>
    {% endfor %}
</ul>
