---
layout: post
title: 'YAML Tutorial | Using YAML With Python | PyYAML'
author: Tharun Shiv
tags: ['programming']
image: img/pyyaml.png
date: '2020-04-10T23:46:37.121Z'
draft: false
---

In this Article (Click to skip to that topic):

- [YAML: What is it?](#what-is-yaml)
- [Why do you need a YAML?](#why-yaml)
- [How to use PyYAML to use YAML Files?](#how-it-works)
- [Advantages of using YAML and PyYAML function](#pros)
- [Convert JSON to YAML in one click](#json)

<h3 id='what-is-yaml'> What is YAML? </h3>

_What if you had a very easy, simple, readable way to feed data dynamically to your program, regardless of the programming language using which it is written?? All of this by just writing a file with no programming knowledge?_

**YAML: YAML Ain't Markup Language**. YAML is a human friendly way to send data such as configuration data to your program. Just by editing the YAML file, the program will be able to read the values from the YAML File and use it.

_Ever used JSON files? YAML can be considered a more readable version of JSON files._

<br/>

    Want to learn Modern JavaScript ES6 - 2020??
    Scroll to the end of the post

<br/>
<h3 id='why-yaml'> Why do you need a YAML File? </h3>

Consider this situation. You have a program which installs a set of softwares onto your computer. This program can be used on many computers. Let us assume that, these are the computer specific data that is necessary to run the program on the computer:

1. This Computer's username
2. This Computer's password
3. The path in which the softwares must be installed in
4. The specific set of softwares that has to be installed in this partiular computer

If you were using the usual programming way of doing this, you would either

- Take in the inputs through some command line arguments ( which is difficult for non programmers to use )
- Change the code everytime you run on different machines ( that isn't a good way at all )

So what if I told you, you can have a text file, which is human readable, independent of the programming language that you are using, win which you can just fill in the above 4 data according to the computer, and the program will take care of the rest?
That is exactly what YAML helps you with.

<h3 id='how-it-works'> Creating your first YAML File </h3>

**Step 1:** Create a file by any name, say `config.yaml`. Make sure to use the extension `.yaml` to the file.<br/>
**Step 2:** A YAML file should start with the `---` like

    ---
    # YAML files start with ---
    # comments begin with a #
    # and they can be written anywhere

**Step 3:** You can have the **keys** in the YAML file, which may or may not hold any values in them. Below we have keys such as username, password, path, VLC Media Player etc., which we can use later in the program to grab their respective values.

    ---
    username: Shiv
    password: shiv@456

Note: YAML is case sensitive.

**Step 4:** You can have a list of items under a key, even nest them further

    ---
    username: Shiv
    password: shiv@456
    path:
        - VLC Media Player: /etc/vlc
        - Visual Studio Code: /etc/vscode
        - Google Chrome: /etc/chrome
    softwares:
        - VLC Media Player
        - Visual Studio Code
        - Google Chrome
        - Git Bash
        - Video Convertor
        - Node Js

So using the YAML syntax, we have easily listed the data we will need, to feed to our application.

**Step 5**: Now just save this file as `config.yaml`

<h3 id='examples'> How to use PyYAML to use YAML Files? </h3>

Now we have the `config.yaml`, all that we have to do is use it in our program. Say you are writing a Python program that uses this config file and installs the software. We will have to use a python package called **PyYaml**.

**Step 1:** Install pip ( Install Python from their website first if you don't have it )

- Download [get-pip.py](https://bootstrap.pypa.io/get-pip.py) to a folder on your computer.
- Open a command prompt and navigate to the folder containing get-pip.py.
- Run the following command:

  `python3 get-pip.py`

- Pip is now installed!

**Step 2:** Install PyYaml package now

`pip3 install pyyaml`

**Step 3:** Create a new Python File and open it - say `test.py` and add the following code to it, where we import using PyYAML

    import yaml     # import pyyaml package

    # open the yaml file and load it into data

    with open('config.yaml') as f:
        data = yaml.load(f, Loader=yaml.FullLoader)
        print(data)

Output:

    {
        'username': 'Shiv',
        'path': [
            {'VLC Media Player': '/etc/vlc'},
            {'Visual Studio Code': '/etc/vscode'},
            {'Google Chrome': '/etc/chrome'}
        ],
        'password': 'shiv@456',
        'softwares': [
            'VLC Media Player',
            'Visual Studio Code',
            'Google Chrome',
            'Git Bash',
            'Video Convertor',
            'Node Js'
        ]
    }

**Step 4:** Let us try to pick what we need from the config file

    from __future__ import print_function
    import yaml

    with open('config.yaml') as f:
        data = yaml.load(f, Loader=yaml.FullLoader)

        username = data['username']
        password = data['password']

        # printing the username
        print("The username is ", username)
        print("The password is ", password)

Output:

    The username is Shiv
    The password is shiv@456

Here we have grabbed the username and password from the data. Next, let us grab the software list from the config file.

**Step 5:** Grabbing the software list

    from __future__ import print_function
    import yaml

    with open('config.yaml') as f:
        data = yaml.load(f, Loader=yaml.FullLoader)

        username = data['username']
        password = data['password']
        path_list = data['path']
        software_list = data['softwares']

        # printing the username
        print("The username is ", username)
        print("The password is ", password)

        # the software list
        for software in software_list:
            print("Installing ", software, "...")

Output:

    The username is  Shiv
    The password is  shiv@456
    Installing  VLC Media Player ...
    Installing  Visual Studio Code ...
    Installing  Google Chrome ...
    Installing  Git Bash ...
    Installing  Video Convertor ...
    Installing  Node Js ...

Since the softwares are stored in a list, we can easily run a for loop and grab each software in the software variable and print it.

**Step 6:** Printing the paths where each software must be installed

Now, this isn't complex, so just analyze it. We are first looping over the list of items in the `path_list`, and then for each of those list item, say `{'VLC Media Player': '/etc/vlc'}`, we will now loop over softwares in the `software_list` to find if the software matches the key of this list item, so if 'VLC Media Player' from the `path_list` matches the 'VLC Media Player' from the `software_list`, then it prints the path of it. ( Read and analyze it again if you didn't get it, you will get it for sure. )

    from __future__ import print_function
    import yaml

    with open('config.yaml') as f:
        data = yaml.load(f, Loader=yaml.FullLoader)

        username = data['username']
        password = data['password']
        path_list = data['path']
        software_list = data['softwares']

        # printing the username
        print("The username is ", username)
        print("The password is ", password)

        # the paths are
        for path_dictionary in path_list:
            for software in software_list:
                if software in path_dictionary:
                    print("Install ",software," in ",path_dictionary[software])


        # the software list
        for software in software_list:
            print("Installing ", software, "...")

Output: ( drum rolls please....)

    The username is  Shiv
    The password is  shiv@456
    Install  VLC Media Player  in  /etc/vlc
    Install  Visual Studio Code  in  /etc/vscode
    Install  Google Chrome  in  /etc/chrome
    Installing  VLC Media Player ...
    Installing  Visual Studio Code ...
    Installing  Google Chrome ...
    Installing  Git Bash ...
    Installing  Video Convertor ...
    Installing  Node Js ...

<br/>

<h3 id='pros'> Advantages of using YAML and PyYAML? Why Should you use them? </h3>

###### 1. Readable and easy to write

The YAML file is easy to read as it doesn't contain any extra symbols other than the essential colons and spaces

###### 2. Write once, use everywhere

The same config file can be used for any programming language without modifications.

###### 3. Change values easily

Just by changing the values in one YAML file, it will get reflected in the program, thus need not go through the pain of changing values everywhere in the program, or search for the variable in the program that holds this value.

<h3 id='json'> Have a JSON file and wanna convert to YAML? </h3>
Check out this website where you can convert JSON into YAML : <a href="https://www.json2yaml.com/">JSON to YAML - online convertor</a>

<br/>

##### Bonus: Where do I learn JavaScript?

**JavaScript is THE Language right now, with thousands of high paid job and internship opportunities. I have got the exact place where you can learn The Modern JavaScript from, ask doubts and also get a Certificate on Completetion. Check out this course from Udemy <a href="https://www.udemy.com/course/javascript-tharunshiv/?referralCode=6326CE49CCF4074B11CE" target="_blank">(Click) JavaScript Modern ES6 - 2020 - The Complete Course - Udemy</a>. The first few videos are free on my YouTube Channel. Try them out here: <a href="https://www.youtube.com/playlist?list=PLQTwHWAmj18Y2dfj-8PkIogD9hrBzp4M9">Being a Pro - YouTube - JavaScript Playlist</a> Thank you for reading!**

<br/>

        Now you can subscribe to my blog to get the latest posts delivered directly to your inbox.

        Just enter your email below and confirm to subscribe!
        Get a FREE Ebook from me very soon!
