# 安装 Visual Studio Code（VS Code）轻量级编辑器
  
## 下载地址

官网：[https://code.visualstudio.com](https://code.visualstudio.com)

## 安装步骤

下载 Windows 安装程序并运行安装。

![alt text](/install/1.png)
>图：安装过程中勾选 “添加到 PATH” 选项。

安装完成后启动 VS Code，前往扩展商店（Extensions）安装以下插件：

   - ✅ `C/C++`（微软官方，提供语法高亮、跳转、调试支持）
   - ✅ `Cortex-Debug`（用于 GDB + OpenOCD 调试 ARM 芯片）
   - ✅ `Makefile Tools`（方便管理和运行 Makefile 项目）

## 什么是 Makefile？
在嵌入式开发中，Makefile 是一种用于自动化构建的脚本文件，它告诉编译器“如何编译程序”。

### 它的主要作用是：

- 定义源文件、目标文件的依赖关系

- 指定编译器、编译参数

- 执行自动化编译流程（只重新编译更改过的文件）