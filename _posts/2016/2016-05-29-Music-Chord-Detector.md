---
layout: post
title: Machine Learning Based Music Chord Detector
category: Technology
tags: Programming, Machine Learning
keywords: Programming, hobby, computer vision
description: description
---

Recently I got an idea about using machine learning to build a music chord detector. A quick google search shows that some work has been done in this field but no good open source tool for that. Existing chord detection tools are based on chromagrames, which is not sufficient in feeling the 'mood' or subtleties in chord progression. Chord progression for music is a bit like object recognition in computer vision; there is some complex non-linear neural-network-like process happend in chord recognition.

A machine learning project always needs a good database. I start with labeling chords for songs. To start with, I set a goal of 120 songs, only 4-beat songs, no blues chord, human voice preferred. Now I'm busy with that.

P.S. Human voice is preferred because then the database can be easily modified for another purpose: generate chords based on the melody. Because human voice can be separated by comparing the left and right channel. Then I will have a database of melodies labeled with chords, which makes another interesting application for song writers!
