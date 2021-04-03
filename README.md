# ApostleAI

ApostleAI is a conversation bot modeled after Paul the Apostle, commonly known as Saint Paul, an apostle who spread the teachings of Jesus in the first-century world.

[![prophet-ai](https://circleci.com/gh/prophet-ai/ApostleAI/tree/automatic-unit-testing.svg?style=shield)](https://circleci.com/gh/prophet-ai/ApostleAI)
[![prophet-ai](https://circleci.com/gh/prophet-ai/ApostleAI/tree/automatic-unit-testing.svg?style=svg)](https://circleci.com/gh/prophet-ai/ApostleAI)

To run the this project on your local machine;
1. Install [`NodeJS`](https://nodejs.org/en/download/).
2. Change the current working directory to the location where you want the cloned directory.
3. In your terminal type, `$ git clone https://github.com/prophet-ai/ApostleAI`.
5. After the repo has been cloned, hit the terminal with a `npm install` which should install all dependencies, in this case the only one necessary should be [Express.js](https://github.com/expressjs/express).

Once the dependencies have been installed, to start the local server;
1. In your terminal, switch to your project directory and type `npm run start` which will run the server and host the application.
2. Nagivate to `hostname:8080` in your browser to see the project live. In local environments hostname will be `localhost`.

> Note: Any updates saved to the files in your project folder will automatically be dispalyed on this server.
---
# Documentation

## Features

**Improved already implemented GUI**

Our team improved on our already implemented GUI from Assignment 2 by adding some stylistic features as well as revolving conversation suggestions along the top of the page.

**![](https://lh5.googleusercontent.com/owrMG2ecGGikl0MJm1uH4UFDpf-vaAqNDPvLOtnvqu-VfEB_dEpon4tdSdqPADqZHm1Jerwp0WGmMe1-3rKO3ZhnnGQlIxcxvqROvvfWRPlyvmTANofgPS8xc4uPpubdcsmlJnoL)**

**Added an additional topic to our bot’s conversational repertoire**

Our team added more topics to our bot’s conversational repertoire. Namely, the bot can now discuss topics like the meaning of life, purpose in life, and more!
| Topic | Chat Example|
|--|--|
| Meaning of life | user: What is the meaning of life?<br>bot: Maybe the meaning of life is in front of you right now, would you notice it?|
| Purpose in life | user: What is my purpose? <br>bot: Finding your purpose for living is your purpose for living.|
| General Philosophy | user: Tell me something philosophical <br>bot: To exist is to live|


**Added detection for user messages outside of topics**

Our bot can detect when a user is trying to talk about a topic that it doesn’t know or understand, and is able to respond with an adequate response.

**![](https://lh5.googleusercontent.com/IEIk-leTmoVvWKPtMgS_-k6L6fPL5d4kANB0rcsYMjoSQT-8zV1muMuRHffoXc957Q6fEae7cgQGAIsmcSHbXjEOXJ_ekNNHs6q917OOLgdrLjgmPX-_cFrH9DNKz5mNHkiwTzaK)**

**Implementation of Porter-Stemming for spelling correction**

Our team implemented the Porter-Stemming algorithm to correct any spelling errors in the user’s message before it is sent off to Wit.AI. This spell correction can be seen in action in the server side logs.

**![](https://lh4.googleusercontent.com/dpYPR9oocJkP4U-hotNCpqVgHP904s_ewabgJNI_HDfh4ZrUrGVMJmduXWzqLUvJ85W9yhAFRMlmJscBGePf_5BKYg3Gb3V6c4yoosZWa5HJ2jrGwmTsxFMMo75s4gBsxUI7Mnvw)**
*See the porter stemmer correction in action*

**Implementation of Wit.AI**

Our team implemented [Wit.AI](https://wit.ai/), a natural language interface from Facebook, Inc. We use Wit.AI to process our user’s message’s and extract the ‘intent’ of the message. Our code makes API calls to Wit.AI including the user’s message, and in return we get a string of JSON data which includes what the bot could derive in terms of intention from the original user message. This is the cornerstone for our bot’s intelligence as we use these intents to decide how the bot will respond. The bot is trained on various different intents to accommodate our different topics and can be easily trained to understand more.

**![](https://lh3.googleusercontent.com/VTElfTCfeHmNmJTxaSjO2zPvJyQlntps6OyYU59zvtRn3gqPbwnUa5CpET7-N2ua5bleIjQaPkwuhO7XV7xNq3tsD4EgB_mpF-1AVBvTZSyvgPAo_bSsrguhF8qqvze6yt8D9EzN)**
*Wit.AI Dashboard*

**Implementation of Synonym Recognition through Wit.AI**

Utilizing our implementation of Wit.AI, we were able to utilize some of Wit’s built-in functions to process synonyms. Our bot is naturally good at understanding synonyms and is able to extract the intention from the message with great confidence, and we augmented pre existing features to be even more precise.

**![](https://i.imgur.com/2bHBz6o.png)**
**![](https://i.imgur.com/1ymTNhj.png)**

**Implementation of Named Entity Recognition through Wit.AI**

Another feature of Wit.AI is named entity recognition that is built into its understanding processes, which we can use to detect specific entities like the user or the bot in conversation. Any detected entities by Wit.AI are sent via API call as well.

> user: What is your name? // bot can detect user is asking about the bot itself<br>bot: I am ApostleAI, but you can call me Paul for short. //provides appropriate response

**Implementation of Sentiment Analysis through Wit.AI**

Thanks to our prior work with Wit.AI we were able to implement Sentiment Analysis to derive the mood of the user’s message. Utilizing Wit.AI’s Trait system, we are able to detect either a positive, neutral, or negative sentiment for the user’s message. By gauging the sentiment of the message, our bot is able to respond with an adequate and appropriate response in either a positive, neutral, or negative sentiment/tone.

| Chat | Sentiment | Bot Response |
|--|--|--|
| 'I failed my exam' | `negative` | 'Sometimes life is hard, you can do it!' |
| 'It is good to see you!' | `positive` | 'Hi There!' |

**Implementation of Socket.IO for messaging between user and bot**

Our team implemented [Socket.IO](https://socket.io/)  originally as a means to allow our bot to converse with other bots, however after many attempts to connect with other bot’s, we were unsuccessful since the Apostle was too intelligent for other bots to understand. Thankfully, we were able to refactor the code and utilize it to send messages back and forth between the user and the bot. This enables us to have as many simultaneous independent conversations with the bot across multiple chat windows.

**![](https://lh4.googleusercontent.com/0RkTdH7Nhwq8BJGWMcr15IP8gLJOgtBjfIaspZCxBdwxf8B8bExs4nou79Fq_IbCrbidPUC3WTKx2THpDZAt7m4EqNm1R1r8i-lesZ0d3gpgEpr8tKJf1timZ6YzzYlEdEgf-EvK)**
*Connections being logged with message events highlighted*

**Automatic unit testing using GitHub and CI tool**

Our team has implemented Unit Testing thanks to the [Jest JavaScript testing framework](https://jestjs.io/) from Facebook, Inc.

Additionally, we have implemented automated testing thanks to [CircleCI](https://circleci.com/), which automatically runs our unit tests anytime a commit is pushed to selected branches, and will not allow failed commits to be pushed to the

production branch (main branch). You can view our custom pipeline [here](https://circleci.com/gh/prophet-ai/ApostleAI).

**![](https://lh5.googleusercontent.com/yQaNyIrPnc62JMhoNEZEctFg-kTWhO6lFOcn740OtgNsRTRTawcjnVjjX75B8inWT4rzCjcSMIFfQeSho53QcDjjV6AZYB-CpVwcnTHVqhr9insUsTaA-jbpb1GLfGAYdEi_BS6M)**
*CircleCI unit tests being ran*

**![](https://lh3.googleusercontent.com/qhMO6-To__m17XlMVUlCNV_nAFdZ0upmRNtObRQ5kcgsMan262JB7D1xmN8WEERlMYrU34ZVIh9BhtOTv0GPB0Or5SaxsWMjSoDTOlGsmcWPIC_k8aobPQcv_SjbeusqOL14klPA)**
*Git CI pipeline*

## Additional Features

**Fully customized server side logging system**

Our team has implemented a fully customized server side logging system which provides information on sockets connected to the socket server, messages being sent to and from the bot, returned information from Wit.AI, and more!![](https://lh5.googleusercontent.com/NzIr3kIehRWijiT-Ef88v6c_JrCUToUqGyivcf5y0HRCFWHDRWmVPC0hHY95toCAYVNmOfsYL8m0gSyX4zi_YwL_5F_dFQYxFXCVKbZdxaAphsahkB7_abfVSLBo3zKga7e2yTEx)

**Save chat log of conversation with the bot**

Our team implemented a very rudimentary chat logging and saving system. At any point in your conversation with the bot, you can save a text file which contains all messages up to that point.

**![](https://lh3.googleusercontent.com/TywCPETfChpX_gzTwyKqUa4Wkhs9dA0O_dmgkluhGnZdHHNlzfXDp-I7wh7RUewHuiJAAC6P2OXkhE9FY3Gyu1pA9BDkk4Oh97npcJDo_bFU3I5P3rxfZYZxPrLIYp7Fsj-9qCVA)**

---
![alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/The_Predication_of_Saint_Paul_LACMA_M.2000.179.24.jpg/800px-The_Predication_of_Saint_Paul_LACMA_M.2000.179.24.jpg)

### Happily brought to you by The Prophet-AI team 👁⃤
![alt text](https://avatars.githubusercontent.com/u/78770750?s=200&v=4)

