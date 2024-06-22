---
sidebar_position: 1
---

# Hosting: Introduction

Stockedhome allows you to host the entire application backend and web server on your own server. If you want full control over your data and application, this is the way to go.

## Can I Host Just Some Data?
Indeed you can! Stockedhome is built with this use in mind. Data like community notes and store products would be quite hard to source yourself, so we let you host all of your personal data on your own server while still using our data for the rest&mdash;and we still give you the option to host everything yourself if you want.

## Scope - What's Hosted?

When deciding how much to self-host, you have a few primary options:
* **Full Hosting**: Every part of Stockedhome goes through your server. Nothing hits the Stockedhome SAAS servers.
    * User accounts are stored on your servers, meaning users cannot join a household on the Stockedhome SAAS servers without a second account.
* **Full Household Hosting**: You host the data for one or more households entirely on your servers while still letting the members of that household use the Stockedhome SAAS servers for other households.
    * User accounts are stored on Stockedhome servers, but all data used within that household is stored on your servers.
* **Partial Household Hosting**: You host the more sensitive data, such as meal plans, food preferences, and shopping lists, while still using Stockedhome servers for things like community notes and store products.
    * User accounts are stored on Stockedhome servers, but any data you've chosen to host is stored on your servers.

These are not hard-set presets. You have the option to host as much or as little as you want. For example, you could host just the household members and meal plans while keeping food preferences and shopping lists on Stockedhome servers.

## Primary and Supplementary Servers

In order to facilitate the above configurability, Stockedhome has the ability to connect to (up to) two servers at once. It will always prefer the Primary Server if it provides the data. If the Primary Server is configured to not provide the data, the application will use the Supplementary Server. When using a household hosting setup, the Primary Server is your server, and the Supplementary Server is the Stockedhome SAAS server. In a full hosting setup, both servers are your server.


### Responsibilities of the Primary Server

The Primary Server is only responsible for what you configure it to be. However, it cannot:
* Host the web application; the web application is always hosted on the Supplementary Server.
* Provide the mobile app; the mobile app cannot be self-hosted.
    * The exception to this is if you [build your own Android APK](./05-building-from-source/android.md) and install it on your devices. This is not recommended for most users.

### Responsibilities of the Supplementary Server

The Supplementary Server is responsible for everything the Primary Server is not. This includes:
* Hosting the web application
* User accounts and authentication

The Supplementary Server also cannot provide the mobile app.
