---
layout: post
title: 'Microservices Architecture for Roadrunners | 6 key benefits'
author: Tharun Shiv
tags: ['system-admin']
image: img/encryption.png
date: '2021-10-25T14:17:37.121Z'
draft: false
---

The modern internet today is programmed in such a way that, the traffic is encrypted. Now, what does this encryption mean? In simple terms, encryption ensures only those who are meant to understand the information do so, and for others, it is just gibberish.

## Encryption

Encryption transforms readable plaintext into unreadable ciphertext that only the intended users can understand. This prevents attackers from making sense of the data even if they get access to it. The intended users will be aware of how to convert the ciphertext into plaintext, a process known as decryption.

A simple encryption example is, say alphabet A -> 1, B -> 2, C -> 3, so on.. So the word CAB would be 321. The receiver will convert the 321 back to plain text by mapping the numbers to alphabets -> CAB.

Even though the above encryption-decryption looks simple, the modern encryption-decryption algorithms are far more complex in practice and are computationally intensive. Most encryption algorithms use a “key”, which could be a combination of text, numbers & special characters. This key would be used in the encryption or decryption processes. The point of using a key here is, even if the middleman knows the algorithm involved in the encryption process, they will not be able to decrypt it unless they know the key. This is like having the access to the lock, but not having the key to unlock it.

## Types of Encryption Algorithms

1. Symmetric algorithms
2. Asymmetric algorithms

### Symmetric algorithm

![Symmetric algorithm](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8zmp1fviolnwijclpq9b.png)

A symmetric algorithm uses the same key for both encryption and decryption. Remember, even though the middleman gets to know about the algorithm involved in the encryption process, the data is safe as long as they do not get access to the key. The previous substitution example ( CAB ) that we saw is a simple demonstration of symmetric algorithms. There is one issue here, the key must be protected even though both parties need it. Sending the key over the internet unencrypted is like announcing to everyone who hears it as to what the key is, to encrypt and decrypt the message.

Examples of symmetric algorithms: Advanced Encryption Standard ( AES ), ChaCha20, 3DES, Blowfish.
Asymmetric algorithm

Asymmetric algorithms use different keys for encryption and decryption. Here, you can encrypt the data using one key, and decrypt the data using another. Thanks to mathematics. Since computers are well known to handle computationally intensive mathematics, asymmetric algorithms became popular. Here, one can have two separate keys, where one of the keys can remain private and never needs to be shared with anyone.

The owner of the pair of keys will be sharing the public key with everyone and keeping the private key with him. There are two scenarios possible here with the pair of keys:

1. Anyone with the public key will be able to encrypt the message with this public key and only the one who owns the private key ( the owner ) will be able to decrypt the message.

![illustration](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/201nk51wuqqmzbrsr83l.png)

2. The owner of the private key will encrypt a message with the private key, and anyone with the public key will be able to decrypt the message using the public key. Since the message can be only encrypted using the private key, and that is possible only by the owner, this technique ensures that it is indeed the owner who has encrypted the message, and this serves as a form of digital signature.

![illustration](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/wyartw2412o50bi0u3rn.png)

Examples of asymmetric algorithms: Diffie-hellman, RSA.

You can find more articles here: https://www.tharunshiv.com

_Roadrunners is a series that is aimed at delivering concepts as precisely as possible. Here, a roadrunner is referred to as a person who does things super fast & efficiently. Are you a roadrunner?_

Thank you

Check out my YouTube Channel here: <a href="https://www.youtube.com/c/developerTharun">Being a Pro - YouTube</a> Thank you for reading!\*\*

> Follow my articles on Dev.to: https://dev.to/developertharun
