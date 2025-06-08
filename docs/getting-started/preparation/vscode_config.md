# 开发环境配置

## 图形化配置 IntelliSense 

1. 命令面板（Ctrl + Shift + P）

2. 搜索并点击：C/C++: Edit Configurations (UI)

3. 进入图形化配置界面，填写内容：

- **Compiler path**：  
  ```
  {你的安装目录}/usr/bin/arm-none-eabi-gcc
  ```  
  > 找到你 `arm-none-eabi-gcc.exe` 的安装目录

- **IntelliSense mode**：  
  ```
  windows-gcc-arm
  ```

- **Include path**：添加以下路径（相对于项目根目录）：
  ```
  ${workspaceFolder}/Core/Inc
  ${workspaceFolder}/Drivers/CMSIS/Include
  ${workspaceFolder}/Drivers/CMSIS/Device/ST/STM32F1xx/Include
  ${workspaceFolder}/Drivers/STM32F1xx_HAL_Driver/Inc
  ${workspaceFolder}/Drivers/STM32F1xx_HAL_Driver/Inc/Legacy
  ${workspaceFolder}/**
  ```

- **Defines** 全局宏定义：
  ```
  USE_HAL_DRIVER
  STM32F103xB
  ```

5. 修改完成后自动生成或更新 `.vscode/c_cpp_properties.json` 文件

> ✅ 图形化配置方便初学者，推荐初次配置时使用该方法，熟练后可手写 JSON 更灵活。

## 配置 make 命令构建 STM32 项目

在 .vscode 目录下创建 tasks.json ，并复制下列配置：
```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Build STM32 Project",
      "type": "shell",
      "command": "make",
      "args": [],
      "group": {
        "kind": "build",
        "isDefault": true
      },
      "problemMatcher": ["$gcc"]
    }
  ]
}
```
