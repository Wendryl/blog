---
layout: post
title: "Part-time freelancing - Advices to successfuly deliver freelancing
projects"
date: 2024-03-04T12:44:20 -03:00
tags: freelancing fullstack dev rails
author: Wendryl Santos
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
  {% for tag in page.tags %}
    <span>#{{ tag }}</span>
  {% endfor %}
</div>
My goal here is to share some insights that I had after working for a while as a
part-time freelancer in big projects - generally building fullstack applications
from scratch.

## Keep it simple
Fulltime jobs leaves little room for us to work on personal projects, side
hustles or freelancing jobs. That's  why I believe you should avoid building
complex apps or complex aproaches
in your freelance projects.  

If you're working a long time in a big side project you will whether give-up on
that project, or complete it as fast as you can leaving a lot of bugs and
[spaghetti code](https://en.wikipedia.org/wiki/Spaghetti_code) in the way.
That will be bad both for your clients and your reputation with them.

My main advice to avoid those types of complexity is to use something you're
familiar with and, if possible, a fullstack solution.

## Wisely choose your stack
If I would start a freelance project today I would definitely go for
[Rails](https://rubyonrails.org/). As I said before, if possible,
you should choose a fullstack framework to build your project.

Even though I am not familiar with Rails, or with Ruby at all, Rails has an
interesting development approach of common tasks like CRUD's.

For instance, Rails has a feature called scaffolding, which basically let's you
create migrations, controller, model and views for a specific resource of you
app using only the command bellow:

```bash
$ rails generate scaffold Post name:string title:string content:text
```

Also, Rails is a fullstack framework, which will avoid the hard work of
maintaining two code bases (front-end, back-end).

My biggest mistake when working in freelance projects was building front-end
separated from back-end. Because of lack of time and close deadlines, both code bases were a mess.

Front-end/back-end approaches are good for teams with multiple developers. You 
can split the tasks and finish stuff faster. But when working as a solo
freelancer, the best approach would be to use something fullstack like Rails.

## Use something you're familiar with
Another bad decision that I took in my past projects was to choose some new
framework to learn while I was building that project. That caused a lot of
headaches.  
It is a good idea to choose a new framework to build personal projects
or side hustles that don't have a clear deadline. But when you're working
for a client, he will want his product to be delivered in time. Don't play
with stuff you don't know if your deadline is close. 

## Don't go for big crazy projects
Lastly, don't throw yourself into a Netflix or Uber clone. These
crazy, multi-millionaire projects will spend all your free time and give you a
lot of stress. On the other hand small projects will pay you faster and keep
your clients happy.
Trust me, if you get a big, complex project you will probably not get paid in
time and it will drain all your energy at the end.

I hope these advices help you if you're planning to start freelancing.  
See you in the next post!
