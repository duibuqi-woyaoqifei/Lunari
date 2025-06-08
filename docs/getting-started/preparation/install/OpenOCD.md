# 安装 OpenOCD

## 下载地址

#### 建议下载 xPack OpenOCD

- 官方网站（含源码和二进制文件）：  
  [http://openocd.org/](http://openocd.org/)

- GitHub 仓库：  
  [https://github.com/openocd-org/openocd](https://github.com/openocd-org/openocd)

  [xPack OpenOCD](https://github.com/xpack-dev-tools/openocd-xpack)

## 安装步骤

1. 下载带有预编译二进制文件的压缩包，如：`xpack-openocd-0.12.0-6-win32-x64.zip`

![alt text](/install/3.png)

> 图：下载红箭头所指的文件

2. 解压安装包到一个目录，比如 `D:\OpenOCD`

3. 将 `D:\OpenOCD\{对应你的目录名称}\bin` 目录添加到系统环境变量 `PATH` 中，方便命令行直接调用。

### ![alt text](/install/6.png)
> 1.打开高级系统设置

### ![alt text](/install/5.png)
> 2.打开环境变量

### ![alt text](/install/4.png)
> 3. **`双击打开Path`** 然后添加新的一行，比如：`D:\OpenOCD\{对应你的目录名称}\bin`

4.  **验证安装**

    安装完成后，打开一个新的命令行终端，然后输入以下命令：
    ```bash
    openocd --version
    ```
    如果 OpenOCD 安装成功，终端会输出类似如下内容：
    ```txt
    xPack Open On-Chip Debugger 0.12.0+dev-01850-geb6f2745b-dirty (2025-02-07-10:08)
    Licensed under GNU GPL v2
    ```
如果出现 'openocd' 不是内部或外部命令、command not found 之类的错误，则说明：

没有正确安装，或者安装目录没有加入系统环境变量 PATH