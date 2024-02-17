---
layout: post
title:  "Hello World!"
date:   2024-02-17 00:45:49 -0300
tags: blogging tech
---
<style>
  .tags {
    text-align: right;
    margin-bottom: 10px;
  }
  
  .tags span {
    background: #efefef;
    color: #696969;
    border-radius: 8px;
    padding: 2px 5px;
  }
</style>
<div class="tags">
  {% for tag in site.tags %}
    <span>#{{ tag[0] }}</span>
  {% endfor %}
</div>

Hello there! 
This is my first post on this blog and it's basically a test to check if things will run smoothly with the blog's deploy process.   
I hope you stay tuned for the next upcoming stuff! 
