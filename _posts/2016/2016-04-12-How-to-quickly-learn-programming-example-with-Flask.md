---
layout: post
title: How to quickly learn programming - my example with Flask
category: Technology
tags: Programming
keywords: Programming, OpenCV, Blender, hobby
description: It is never difficult to learn the syntax of a programming language. The real challenge is how to deal with the overwelmed information and find a good place to start. In this series of posts I'm trying to scetch an overview of programming; it consists 3 maps from the top level to the bottom level. Then for those who want to start to learn programming from scratch, it will become easier to know where to start and dive deeper. This series of posts is intended for people having at least a bachelor's or a master's degree so that there is some knowledge system established. It will be useful in learning programming.
---

It is never difficult to learn the syntax of a programming language. The real challenge is how to deal with the overwelmed information and find a good place to start. In this series of posts I'm trying to scetch an overview of programming; it consists 3 maps from the top level to the bottom level. Then for those who want to start to learn programming from scratch, it will become easier to know where to start and dive deeper. This series of posts is intended for people having at least a bachelor's or a master's degree so that there is some knowledge system established. It will be useful in learning programming.

In this blog I'm going to use Flask-based web app as an example to illustrate why it is important to know where you are in the 'map' and how to find the best learning route for yourself.

Flask is a micro web framework written in Python. The online documentation is [here](http://flask.pocoo.org/). I used it to develop a multi-platform user interface and a hub. There are some other similar tools like Django, Meteor and Microsoft .NET. I will explain later why I chose Flask. The 'multi-platform' feature is realized by using a web framework. So any operation system with a browser will be able to use it. Browsers, such as Chrome, IE, Safari, etc, serve as a virtualization layer. Thanks to the fast development of smart phones, the technology to make websites automatically adjust to the screen size is also readily available - Bootstrap. The official term of this feature is called 'responsive design'. Below is my learning route:

**As a first step, I know it will work and the rest is just a matter of time.** This is a very important first step. The knowledge to know that is gained from multiple resources, including Google App Engine(GAE), Amazon Web Service and even router configurations. I have always paid attention to the technologies we use everyday and tried to understand how they work. The GAE based GoAgent can serve as a data bridge and I learned that it is possible to do sort of data processing using a 'web framework', a new word for me. From the Amazon Web Service I learned it is easy to set up a web server. From router configurations I picked up words like DNS and DHCP. Based on the experience I can guess web app is possible for my purpose then the next step is to find good tools.

**I chose Flask and Bootstrap because I know Python and I have a Github blog.** I'm already familiar with Python and starting with Flask will be easier than starting with Django. If an error happens, I would quickly know whether it is the Python language problem or the program logic problem. The Bootstrap knowledge comes from this blog. The source is [here](https://github.com/Yc-Chen/Yc-Chen.github.io). I copied the template and tweak the Bootstrap to change the layout.

**I started my development by forking other Github projects, not by the Flask document.** Apart from Google's search tool, Github's search tool is also very powerful. I found several similar projects and started my development by changing '_\_author__´. :-P In the beginning examples are much more useful than the documents. Documents for programming is like dictionaries for languages. No one starts learning a language by reading dictionaries.

**When I finished my MVP, I started reading the Flask document.** MVP is short for minimum viable product. It means something working with the least functionality. With the MVP running, I start reading the document to learn other APIs to think how to make it better. Even if I mess up something, I can always roll back to the MVP. 

It is only at this stage I start building the knowledge of my own. From the document I read what are the recommended ways of using APIs, how to structure the project and what is package-specific. For example I have been wondering what is the difference in html templates between `{ { something } }` and `{ % something % }`. Searching 'html curl braket' does give me an explanation on **what is the difference**. But the document is able to explain **why is the difference**, which is due to the Jinjia template, something resembles Django format. The document also helps me find out the deprecated codes, which I copied from other projects.




