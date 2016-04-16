Title: Hello World
Date: 2015-04-15 20:20
Modified: 2015-04-15 20:20
Category:
Tags: pelican, publishing
Slug: hello-world
Authors: Joshua Yoerger
Summary: Initial blog post

This is that obligatory first post wherein I offer the world at large my heartfelt salutations. As I made this blog with pelican, I feel doing this with Python would be appropriate.

```python
# hello.py


def greetings():
    print('Hello World!')
```
Loading our script in the Python REPL:

```shell
$ python
Python 3.5.1 |Anaconda 2.5.0 (x86_64)| (default, Dec  7 2015, 11:24:55)
[GCC 4.2.1 (Apple Inc. build 5577)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> from hello.py import greetings
>>> greetings()
Hello World!
```

Well, there you have it folks. Thanks for reading!
