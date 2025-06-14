# 📚 STM32 基础知识

STM32 是意法半导体（STMicroelectronics）推出的 32 位 ARM Cortex-M 系列微控制器，以性能高、功耗低、外设丰富而著称，广泛应用于工业控制、消费电子、物联网等领域。

## 1. STM32 芯片家族概览

STM32 按核心和功能分为多个系列：

| 系列     | 核心         | 特点                         |
|----------|--------------|------------------------------|
| F0       | Cortex-M0    | 入门级，低功耗，成本低       |
| F1       | Cortex-M3    | 经典系列，社区资料丰富       |
| F4       | Cortex-M4    | 性能更高，支持 DSP 浮点运算  |
| L0/L4/L5 | Cortex-M0+/M4| 超低功耗应用                  |
| G0/G4    | Cortex-M0+/M4| 新一代通用/性能型             |
| H7       | Cortex-M7    | 高性能系列                    |
| WB/WL    | Cortex-M4    | 带蓝牙/LoRa 无线通信         |

## 2. 开发流程概览

1. **选型**：根据需求选择 STM32 系列芯片
2. **CubeMX 配置**：图形化设置时钟、引脚、外设等
3. **生成代码**：生成标准初始化框架
4. **编写应用逻辑**：在 `main.c` 和相关外设文件中补充功能
5. **编译烧录**：使用 IDE 或命令行将程序烧录到开发板
6. **调试运行**：观察串口、LED 等输出，进行调试优化

## 3. 常见外设介绍

| 外设      | 用途说明                     |
|-----------|------------------------------|
| GPIO      | 控制引脚高低电平，驱动外部设备 |
| USART/UART| 串口通信，用于打印/调试       |
| TIM       | 定时器，用于计时/PWM          |
| ADC       | 模拟转数字，读取传感器数据     |
| I2C/SPI   | 总线通信，用于连接外部芯片     |
| DMA       | 数据搬运加速器，减少 CPU 开销  |
| NVIC      | 中断控制器                    |

## 4. STM32F103C8T6 开发板结构说明（Blue Pill）

![stm32](/basics/1.jpg)

### 一、基本参数

- **主芯片**：STM32F103C8T6
- **架构**：ARM Cortex-M3
- **主频**：72 MHz
- **Flash**：64KB（部分可达128KB）
- **SRAM**：20KB
- **工作电压**：3.3V（兼容5V输入）
- **I/O电压**：3.3V（输入可容忍5V）

### 二、板载组件

- **Micro USB 接口**：供电与下载（部分板子没有焊接）
- **Mini USB 接口（部分型号）**：与串口下载模块连接
- **SWD接口**：用于调试（SWCLK, SWDIO）
- **复位按键（RESET）**：系统重启
- **用户按键（KEY）**：连接至PC13
- **板载LED**：连接至PC13，默认低电平亮
- **晶振 (Crystals)**：
  - 主晶振 (Main Crystal)：8MHz
  - RTC晶振 (RTC Crystal)：32.768kHz

### 三、电源系统

| 电源类型 | 说明                      |
|----------|---------------------------|
| USB供电  | 可直接通过USB端口供电     |
| 外部5V   | 可通过“5V”引脚输入        |
| 外部3.3V | 可通过“3.3V”引脚供电       |
| AMS1117-3.3 稳压芯片 | 将5V降压为3.3V         |

### 四、启动模式

- BOOT0/BOOT1设置不同，启动模式不同。

| BOOT0 | BOOT1 | 启动模式         |
|-------|-------|------------------|
| 0     | x     | 用户Flash启动     |
| 1     | 0     | 内部系统存储器启动（串口下载） |
| 1     | 1     | SRAM启动         |

> 这里的 x 表示“无论该引脚电平是0还是1”，即 该位不影响最终启动模式