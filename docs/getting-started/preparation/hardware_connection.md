# STM32F103C8T6 开发板与电脑的连接方式

## 开发板插入面包板

将 STM32F103C8T6（Blue Pill）开发板插入面包板前，应注意以下几点：

- **插入方向**：使 USB 接口朝外，方便后续连接
- **左右对称**：将引脚均匀插入面包板两侧，留出足够的空位连接杜邦线

> ✅ 建议：
> - 使用双面面包板，让开发板插入中间位置，两侧均有可用排针接线
> - 所有引脚必须全部插到底，如果插不进去，可以先用好插的引脚先松一松 😵‍💫 
> - 实在插不进去的，可借用软质聚氨酯泡沫塑料发力 💪 ，最好是两块，分配好合适空间（注意控制力度，**请佩戴防割手套**，防止受伤）

## ST-Link 调试连接

### 连接线路

| ST-Link 引脚 | 开发板引脚 | 功能描述     |
|--------------|-------------|--------------|
| SWCLK        | PA14        | 调试时钟     |
| SWDIO        | PA13        | 调试数据线   |
| GND          | GND         | 共地         |
| 3.3V         | 3.3V        | 电平参考或供电 |

> ⚠️ 注意事项：必须 **共地**，否则可能无法连接或下载失败。

### 示例连接图（文字示意）

```plaintext
    ST-Link V2          STM32F103C8T6
  ┌────────────┐     ┌─────────────────┐
  │   3.3V     ├────►│   3.3V          │
  │   GND      ├────►│   GND           │
  │   SWCLK    ├────►│   PA14 (SWCLK)  │
  │   SWDIO    ├────►│   PA13 (SWDIO)  │
  └────────────┘     └─────────────────┘
```

### ![123](/connect/1.jpg)
> 用杜邦线连接 ST-Link 和 开发板

### ST-Link 驱动

安装 [ST-Link 驱动](https://www.st.com/en/development-tools/st-link-v2.html)

## ✅ 验证连接是否成功

### 使用 OpenOCD 验证开发板连接

使用以下命令行运行 OpenOCD：

```bash
openocd -f interface/stlink.cfg -f target/stm32f1x.cfg
```
> 说明：
> - interface/stlink.cfg：使用 ST-Link 接口
> - target/stm32f1x.cfg：对应 STM32F103 系列芯片的调试配置文件

运行命令后，若连接成功，会输出类似如下信息：
```txt
Open On-Chip Debugger x.x.x
Info : STLINK v2 JTAG v33 API v2 SWIM v0 VID 0x0483 PID 0x3748
Info : Target voltage: 3.3V
Info : clock speed 1800 kHz
Info : stm32f1x.cpu: hardware has 6 breakpoints, 4 watchpoints
Info : starting gdb server for stm32f1x.cpu on 3333
```
> 如何退出：按下 Ctrl + C 可终止 OpenOCD 进程

### ❌ 常见错误排查
| 错误信息 | 原因与解决方案     |
|--------------|-------------|
| Error: open failed        | 未连接开发板或接线错误        | 
| Target not halted        | 芯片未响应，检查是否已供电、共地        |
| No device found          | 未安装 ST-Link 驱动或 USB 接口不稳定         |