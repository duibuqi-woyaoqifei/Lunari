# 使用 STM32CubeMX 初始化项目架构

## 1：创建新工程

1. 打开 STM32CubeMX

2. 选择 MCU

![](/init_project/1.png)
> 这里需要下载软件包，必须要登录才可以，没有账号先注册一个

3. 在 `MCU Selector` 中选择对应的芯片 `STM32F103C8T6`

![](/init_project/2.png)

4. 点击 `Start Project`

![](/init_project/3.png)

## 2：配置时钟（Clock Configuration）

> 时钟是什么？
> - 简单理解：时钟 = 给 MCU 打节拍的节拍器
> - MCU 的 CPU 处理每一条指令都要有“节奏”，这个节奏由时钟决定。

### 使用外部晶振
![](/init_project/4.png)
> 选择 System Core 下的 RCC 打开 RCC Mode and Configuration ，然后将 HSE 设置为 Crystal

### 进入 Clock Configuration 选项卡

在 STM32CubeMX 的主界面顶部，点击 `Clock Configuration` 标签页，进入时钟配置图界面。

![](/init_project/5.png)
> - 红色箭头和红圈处都是修改的地方
> - STM32F103C8T6 的最大主频为 **72 MHz**，推荐将系统时钟配置为该频率以获得最佳性能。

- PLL Source Mux `==>` HSE 
- *PLLMul `==>`  × 9
- System Clock Mux  `==>` PLLCLK
- APB1 Prescaler `==>` / 2

## 3：配置调试接口（Debug）

#### 选择 System Core 下的 SYS 打开 SYS Mode and Configuration ，然后将 Debug 设置为 Serial Wire
![](/init_project/6.png)


### 设置 Debug 的常见选项：

| 选项名称       | 通俗解释 |
|----------------|----------|
| **Serial Wire（SW）** | 用最常见的 SWD 调试方式（只占 2 个引脚） |
| **JTAG**              | 比较老的调试方式，占 4~5 个引脚 |
| **Disabled**          | 不使用调试接口（芯片对你“静音”） |

![](/init_project/7.png)
> 👆 配置完后的芯片图应该是这样的


## 4：配置项目参数

### 点击顶部菜单栏中的 `Project Manager`

### 🧾 项目基础信息

| 项目设置项 | 通俗解释 |
|------------|----------|
| **Project Name** | 项目名称，例如 `my_project` |
| **Project Location** | 项目保存位置，建议放在你常用的开发目录（比如 `D:\STM32Projects`） |
| **Toolchain / IDE** | 选择你打算用的开发工具，这里选择 `Makefile` |

### ⚙️ 代码生成选项（Code Generator）

请勾选以下两个关键选项：

- ✅ **Generate peripheral initialization as a pair of `.c/.h` files per peripheral**

  > 每个外设单独生成一对 `.c/.h` 文件，让代码更清晰、模块化，方便管理。

- ✅ **Keep User Code when re-generating**

  > 保留你自己写的代码，防止下次点“生成”时被覆盖。**非常重要！**

## 5：生成代码架构

点击顶部菜单栏中的 **Generate Code**

生成完成后，项目目录结构如下：

```txt
my_project/                  ← 你的项目主目录
├── Core/                    ← 核心代码目录
│   ├── Inc/                 ← 用户头文件 (.h)
│   ├── Src/                 ← 用户源文件 (.c)
│
├── Drivers/                 ← STM32官方外设驱动库
│   ├── CMSIS/               ← ARM 内核相关定义和库
│   └── STM32F1xx_HAL_Driver/← STM32 HAL库（硬件抽象层）
│
│
├── .ioc                     ← CubeMX配置文件，保存所有配置
├── Makefile                 ← Makefile（使用Make构建时）
├── .mxproject               ← MX工程配置文件
├── startup_stm32f103xb.s    ← 启动汇编文件
└── STM32F103C8Tx_FLASH.ld   ← 链接脚本文件
```
