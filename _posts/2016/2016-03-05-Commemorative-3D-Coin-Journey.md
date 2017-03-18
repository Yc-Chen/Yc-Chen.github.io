---
layout: post
title: A Commemorative Journey on 3D Printed Coins
category: Blogs
tags: 3DPrinting, OpenCV, Blender
keywords: 3DPrinting, OpenCV, Blender, hobby
description: A summary of the face coin project. It failed due to not enough resolution. However it's been fun to explorer the technology.
---

After six months of work, it didn't fully work out. This is the git repo:

[https://github.com/Yc-Chen/Blender_OpenCV](https://github.com/Yc-Chen/Blender_OpenCV)

and lots of 3D printed legacies:

![5](/public/img/posts/3D_facecoins.JPG)

Many thanks to Richard for helping me setting up the 3D printer!

### Where it started
Last year(2015) September I went with
[IdeeënLab](http://www.ideeenlab.nl/) to the [Eindhoven Maker Faire](http://www.eindhovenmakerfaire.nl/archive/eindhoven-maker-faire-2015/). During the fair we provided a face-coin service to the visitors. We asked visitors to sit down to take a photo of their face profile. Then we used Blender software to build a coin model with the face profile. The visitors can pick up their own face-coin from a 3D printer. People liked it a lot for it being a sentimental article, something they can put as home exhibition or as an attachment on their bags.

Then I started to think: I know OpenCV, I know Python and Blender has a Python interface; why not make an online automatic 3D printing service using using Python to combine Blender and OpenCV?

There came the project of face-coin.

### How it went
I decided not to follow exactly what we did. In the fair we took profile face pictures and we carved out face manually. A lot of face recognition intelligence happened during the manual process. To make it able to process any random face images as an online service, it is very difficult to create that intelligence with my knowledge. So I gave up that approach; instead I went for edge detection, hoping this would give sufficient identifiability for any random images, not even restricted to face images.

The first difficulty I encountered was that it is not easy to build a printable Blender model in Blender to be able to be printed. In the beginning I tried extracting countours and sending coordinates to Blender to create Bezier curves and extrude them outwards the cylinder surface. It failed because the countour can have clock-wise and counter-clock-wise directions. This direction determines the extrusion direction. When the model has inward extrusion, the 3D printer cannot handle it. Furthermore, the Bezier curves and the mesh fill in Blender creates very complicated inner structure. I still don't understand the mechanism behind it. But this can also be the reason of model failure.

The Blender Python API is not well documented at all. I had to rely extensively on other people's examples and tweak my search terms to get results. The Blender API is more like for building the Blender GUI, instead of for creating macros. It was difficult to understand the working mechanism of Blender. There are 'scene', 'edit mode', '3d view', etc. Many functions are restricted to one of them; when using them under the wrong environment it sends out an error message but I have no idea how to debug it. Some API options are no where to find any description. It is impossible to know what are the availble options and what are their differences.

The big failure comes to the 3D printer. When I finally build the face-coin model with a frontal face picture and send it to the printer, the result is disappointing. While Blender model looks pretty from a laptop screen, the 3D print looks ugly. The face looks hilarious on the printed model; it has lost so much resolution that the face is highly distorted. There is a thick nose, a wide-open mouth, strange hair styles, deformed ears and so on. However I'm not able to improve the 3D printer technology as a hobby so I decided to stop here.

### What is the end
From this project I learned a lot about Blender. Maybe there is some interesting stuff to work on. The Blender has a special type of mesh programming, BMesh, which provides much more flexibility than the traditional mesh generators. It gives you control over each single node, line and surface. But theres aren't many existing tools to use it yet. It could be useful to start a Github project to develop a plugin based on BMesh.

The tool can be interesting for other ideas. If lowing the requirement of resolution, one can think of, for example, a signature seal. Otherwise it is also good idea to go for higher resolution 3D Printing methods, like metal or glass.
