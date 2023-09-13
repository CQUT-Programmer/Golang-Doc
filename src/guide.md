#  入门指南

Go语言诞生于2007年9月30日，由三位大佬共同创造，他们分别是`Ken Thompson`(贝尔实验室成员，Unix系统系统先驱，B语言创始人，C语言创始人)，`Rob Pike `（贝尔实验室成员，Unix系统先驱，UTF-8发明者之一，Go语言设计领头人），`Robert Griesemer`(JS V8引擎研发者，三人之中最年轻)，对了还有一位是领头人的妻子`Renee French`，她主导设计了Go语言的Logo，就是一只憨憨的土拨鼠，经过了三年的初步设计与研发，Go语言由谷歌公司于2009年11月10日正式以`BSD-3-Clause`协议开源，并推出了最初的版本，每半年发布一个二级版本，被称为21世纪的C语言。

![](https://camo.githubusercontent.com/2b507540e2681c1a25698f246b9dca69c30548ed66a7323075b0224cbb1bf058/68747470733a2f2f676f6c616e672e6f72672f646f632f676f706865722f6669766579656172732e6a7067)

::: tip

图中便是三位大佬设计Go语言的情景，里面不少典故和彩蛋。

:::



## 特性

- **语法简单** Go语言在自由度和灵活度上做了取舍，以此换来了更好的维护性和平滑的学习曲线，但是没法用Go整什么花活。
- **交叉编译** 在以往交叉编译往往需要一堆工具链，对于Go而言仅需要在编译时设置几个参数，即可在目标操作系统上运行。
- **天然并发** Go语言对于并发的支持是纯天然的，仅需一个关键字，就可以开启一个异步协程。
- **垃圾回收**  Go语言有着垃圾回收的功能，但并不需要虚拟机。
- **静态链接**  编译后的二进制文件不需要依赖运行环境，并且编译速度相当的快。
- **丰富的标准库** 从字符串处理到源码AST解析，功能强大且丰富的标准库是Go语言坚实的基础。



Go语言抛弃了继承，弱化了OOP，类，元编程，泛型，Lamda表达式等这些特性，拥有不错的性能和较低的上手难度，它非常适合用于云服务开发，应用服务端开发，甚至可以进行部分Linux嵌入式开发，不过由于带有垃圾回收，其性能肯定无法媲美C/C++这类系统级语言，但Go在其擅长的领域表现十分出色。虽然面世只有13年，但也已经有大量的行业采用了Go作为首选语言，尽管如此，Go语言仍有不少的缺点，比如令人诟病的错误处理，略显畸形的泛型，标准库虽然很丰富但内置的数据结构却没几个等等，不过总的来说这是一门非常年轻且具有活力的现代语言，值得学习。



<br>

此外，Go还是一门完全开源的语言，由开源社区和官方共同维护Go语言的发展，官方地址是在谷歌仓库里，但是Github上有一份同样的镜像仓库。

谷歌开源地址：[Go Google Open Source](https://cs.opensource.google/go)

Github地址：[golang/go: The Go programming language (github.com)](https://github.com/golang/go)

语言官网：[The Go Programming Language](https://go.dev/)

<br/>

## 安装

Go语言下载：[Downloads - The Go Programming Language](https://go.dev/dl/)

![](https://public-1308755698.cos.ap-chongqing.myqcloud.com//img/202309131608448.png)

### windows

选择windows版本，有zip和msi可以选，前者是源文件，下载到本地后需要你自己配置环境变量，后者是安装引导程序，自动配置环境变量。

对于前者而言，你需要自己配置的环境变量有

- GOROOT - 这是go的安装路径
- GOPATH - 这是go的依赖存放路径

无论哪种安装方式，最后能正常显示版本即可。

```cmd
PS C:\Users\someone> go version
go version go1.21.0 windows/amd64
```

### linux

拿ubuntu举例，复制想要的版本的链接，下载到本地

```sh
$ wget https://golang.google.cn/dl/go1.21.1.linux-amd64.tar.gz
```

解压文件

```sh
$ tar -C /usr/local/ -xzf go1.21.1.linux-amd64.tar.gz
```

导出环境变量

```sh
$ export PATH=$PATH:/usr/local/go/bin
```

 查看安装版本

```sh
$ go version
go version go1.21.1 linux/amd64
```

能够正确显示版本即可。

<br/>



## 开发工具



#### Vscode

Vscode是一款开源的代码编辑器，有许多拓展和插件，支持许多语言，也包括Go语言。

教程：[(82条消息) VSCode搭建Go开发环境（2020-04-13更新）_闹闹吃鱼的博客-CSDN博客_vscode配置go语言开发环境](https://blog.csdn.net/AdolphKevin/article/details/105480530)

<br/>

#### Goland

Goland是JetBrain旗下的为Go语言打造的智能编辑器，不过由于要付费，请根据自身情况选择。

教程：[(82条消息) Go语言下载安装教程|Goland配置教程|2021|Windows_付友友友的博客-CSDN博客_goland社区版](https://blog.csdn.net/m0_46685221/article/details/115051174)



## 快速开始

```go
package main

import "fmt"

func main() {
	fmt.Println("Hello, 世界")
}
```

输出

```
Hello, 世界

Program exited.
```

当一切准备好后，就可以开始学习Go的基础语法了。



## 寄语

在学习的过程中遇到琢磨不透的困难可以先跳过，学习任何一门语言都是先笼统的了解这个语言的大致语法与结构，再去深究一些特性和细节，教程中的理念也是如此，适合入门学习。笔者本人也仅仅只是一名普通学生，难免会有疏漏和勘误，如果有发现任何错误可以在Github提交PR，如果觉得文档还不错可以在Github上点一个Star。



