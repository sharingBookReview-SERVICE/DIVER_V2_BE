# Project Overview

## Diver v. 2.0

This is version 2 of Diver - Book Review SNS. [The original project](https://github.com/sharingBookReview-SERVICE/sharingBookReview-BE) was the first group project of its developers in late 2021. As of 2022, former developer of Diver came together to enhance it with new skills and technics.

## Features

Diver provides **Reviews** and **Collections** of books and users can share them like in SNS. With implementation of **basic CRUD**, users can post, read, update and delete Reviews. Collections are made up of books sharing common ground. It could be genre, tags or users can create their own Collection freely. Both Reviews and Collections support comments and likes.

**Tag system** is a core function of Diver. Users can input one or more tags when writing a review on a book. Those tags are accumulated and calculated to create an array of most used tags on each book. For example, *Harry Potter and Sorcerer's Stone* would be described as 'fantasy', 'youth novel' and 'film adaption' by tags. The most used tags of each book dynamically changes as users write more reviews with tags. Adversely, each tag automatically create its own collection, called **Tag Collection** to distinguish it from (user-made) Custom Collection. Also, when writing reviews, Diver suggests most used tags of the book to users. For the system, it can at least prevent polymorph of tags caused by nature of Korean language being agglutinative. For users, it gives better UX, since users can just click most used tags and also adding some of their own. This system is created to show that developers craved to do something just more than CRUD, and apply advanced logics and  algorithms to development.

**Personal Feed** is the other core function of Diver. To attract users to sharing their reviews and collections, Diver provides Feeds. Users may request one of three different Feeds: Recent, Popular or Social. **Recent Feed** is the most basic feed that shows users unread reviews written in 7 days. Unlike basic Read operation, it requires pagination and management of reading records. **Popular Feed** shows only trending reviews: recent unread reviews with high number of likes. **Social Feed** shows only reviews of followee of the current user. With three different types Feeds, users can choose the best Feed that suits themselves.

**Follow** is the heart of SNS of Diver. Users can follow others to constantly receive their reviews.  

All information on books are collected from [Naver Book Search API](https://developers.naver.com/docs/search/book/) and stored in Diver database.

[//]: # (todo 각각의 기능을 코드로 정리해서 하단 How it works 에 첨부하고 링크 걸어주기)

# Contributors

# Project Timeline

# Stacks

# Architecture & CI/CD

# API Documentation
[Goto API Documentation](https://sharingbookreview-service.github.io/DIVER_API_DOCS/#tag/Review/paths/~1books~1:book_id~1reviews~1:review_id/put)

# How it works

# Install