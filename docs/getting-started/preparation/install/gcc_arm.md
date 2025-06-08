# 安装 GCC ARM 工具链

## 下载地址
访问 ARM 开发者官网 [Arm GNU Toolchain Downloads](https://developer.arm.com/downloads/-/arm-gnu-toolchain-downloads) 

## 安装步骤

1. 下载 Windows (mingw-w64-x86_64) 分类下的 .exe 文件

![alt text](/install/2.png)

> 图：下载红箭头所指的文件

2.  **运行安装向导**

    在安装过程中，请务必留意并勾选 **"Add path to environment variable"** (将路径添加到环境变量) 的选项。

3.  **验证安装**

    安装完成后，打开一个新的 [命令行终端](#什么是命令行终端) ，然后输入以下命令：
    ```bash
    arm-none-eabi-gcc --version
    ```
    如果屏幕上成功输出了 GCC 的版本信息，则代表安装成功，类似：
    ```txt
    arm-none-eabi-gcc (GNU Tools for STM32 13.3.rel1.20240926-1715) 13.3.1 20240614
    Copyright (C) 2023 Free Software Foundation, Inc.
    This is free software; see the source for copying conditions.  There is NO
    warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
    ```

## 什么是命令行终端？

命令行终端（Command-Line Interface，CLI）是一种通过输入文本命令与计算机进行交互的方式。

在 Windows 系统中，常用的命令行终端有两个：

### 1. 命令提示符（Command Prompt）

- 打开方法：
  按下 `Windows键 + R`，输入 `cmd`，然后按回车键。

### 2. PowerShell

- 打开方法：
  在“开始菜单”中搜索 **PowerShell**，然后点击打开。

