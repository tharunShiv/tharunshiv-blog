---
layout: post
title: 'Hashicorp Vault | What & Why?'
author: Tharun Shiv
tags: ['system-admin']
image: img/vault-1-banner.png
date: '2022-01-02T07:17:37.121Z'
draft: false
---

**Video version:**
<iframe width="560" height="315" src="https://www.youtube.com/embed/4FeIlpuQY08" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Podcast version:**

<iframe src="https://anchor.fm/developertharun/embed/episodes/Hashicorp-Vault--What--Why---All-you-need-to-know-about-Vault--Secrets-management-e1ccv8p" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>

## Hashicorp Vault

![Mind Map](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2gcp6356v8m47z3tlnge.PNG)

Hashicorp Vault is an opensource software from Hashicorp. Vault is used to manage secrets. 

### What is a secret? 
Secrets can be considered as anything that one uses to authenticate, authorize themselves. Secrets are also pieces of information that are private to any user. 

Examples of secrets:
1. Username, password
2. API Tokens
3. Database credentials
4. TLS certificates
5. Credit card information

### State of secret sprawl
Applications use a lot of credentials to connect to various external services like databases, message brokers & cloud services. These credentials tend to stay in the config files, source code, version control systems like Github, log files, and plain text files. This form of exposing the secrets and making them vulnerable to unintended access is known as 'state of secret sprawl'. Vault tries to solve this problem.

## How does Vault solve this?

![Mind map](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x0kjzc4ogayfv3gjo38p.PNG)

**1. Centralization of secrets:**
Vault stores secrets in a centralized set of servers. This way, the process makes sure that the secrets are saved only at a single source and not at several places, which led to the 'state of secret sprawl'.

**2. Access control via ACLS:**
Vault provides the capability to create access policies for the users who will be authenticated & authorized to access the vault. The vault operator can decide what capabilities the user will have with the access that he has to the vault. For example, users with only read access to the public key can be created. Admin user who has the access to create new root certificates can be created. 

**3. Audits:**
Vault logs every interaction of the users with Vault. This way, the audits are present on who generated, updated, accessed, revoked the credentials. In conventional credential management, this process is minimal or absent.

**4. Encryption of secrets:**
Vault provides several options to the user to choose the type of storage backend that the user needs, according to their use cases.  Vault makes sure to encrypt the secrets stored at rest/in transit. This makes Vault more secure as Vault is less vulnerable to the hacked data being understood.

**5. Dynamic secrets:**
Vault provides an ability to create dynamic secrets that are short-lived TTL specific to individual clients such that the credentials can be easily revoked or rotated with a minimum possible blast radius. Here, a client can be a single instance of the application that is running anywhere in the infra. The credentials can be unique to that client, managed easily, and in case the credentials are compromised, due to the short-lived TTL either the credentials expire or they can also be revoked and a new set of credentials can be provided.

**6. Encryption as a service**
When we store confidential data like credit card details, phone numbers, Govt. ID card details of the users, which are very common, we do not want to put the users at risk of data theft. In case the backend data gets compromised, the hacker will find the details in plain text. Instead, it is better to encrypt the user's data and store it in the backend. There are various programming languages with various libraries that can do this encryption and decryption. Vault provides encryption as a service, where it exposes APIs using which the user can encrypt & decrypt the data and store it in his backend of choice. This makes sure that Vault does the heavy lifting of managing the keys by providing them, rotating them, encrypting, and decrypting the data, thereby making sure uniformity in the cryptographic operations.

**7. High availability:**
We all are aware of how crucial secret management in an organization is. In fact, it could also turn out to be a single point of failure unless the applications cache the credentials for a while. This makes us realize that we need more than one Vault instance running to have high availability. Vault also comes with HA, where you could have three instances of Vault in which one of them is elected master. The client can query any of the nodes, and the request is proxied by Vault to the actual master node and the master node sends back the response in the same flow.

In the upcoming episodes, we will look into 
1. The setup of Vault
2. Deep dive into the individual features of Vault

Links that help:
1. [Link to the mind map used in this episode](https://coggle.it/diagram/YdBcEtuO1UXy-FKH/t/hashicorp-vault/cbe6352d534de9839c2b94fc6714a33d5b9948b91e4ddbab8d6f4867bcda4fd4)
2. [Link to Hashicorp Vault](https://www.vaultproject.io)
3. [An Introduction to Hashicorp Vault by Armon](https://www.youtube.com/watch?v=VYfl-DpZ5wM)


You can find more articles here: https://www.tharunshiv.com

_Roadrunners is a series that is aimed at delivering concepts as precisely as possible. Here, a roadrunner is referred to as a person who does things super fast & efficiently. Are you a roadrunner?_

Thank you

Check out my YouTube Channel here: <a href="https://www.youtube.com/c/developerTharun">Being a Pro - YouTube</a> Thank you for reading!\*\*

> Follow my articles on Dev.to: https://dev.to/developertharun
