### 1.更改Ubuntu 镜像     使用帮助

Ubuntu 的软件源配置文件是 `/etc/apt/sources.list`。将系统自带的该文件做个备份，将该文件替换为下面内容，即可使用 TUNA 的软件源镜像。

选择你的ubuntu版本: 	 12.04 LTS  14.04 LTS  16.04 LTS  18.04 LTS  20.04 LTS  20.10 	21.04 

[tuna click here]: https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/	""tuna mirror""

```
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse

# 预发布软件源，不建议启用
# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-proposed main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-proposed main restricted universe multiverse
```

本镜像仅包含 32/64 位 x86 架构处理器的软件包，在 ARM(arm64, armhf)、PowerPC(ppc64el)、RISC-V(riscv64) 和 S390x 等架构的设备上（对应官方源为ports.ubuntu.com）请使用 [ubuntu-ports 镜像](https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/)。

### 2.安装包

```shell
更新软件源：

sudo apt-get update

安装 xorg：

sudo apt-get install xorg

安装 xfce4：

sudo apt-get install xfce4

安装并配置 xrdp：                                                                                                                                           

      Xrdp 允许 Windows 或 Linux 系统通过远程桌面的方式来访问另外一台主机，特别适合本地虚拟机使用，详情参考Linux 公社文章：xrdp 完美实现 Windows 远程访问 Ubuntu 16.04.
1. 安 装 xrdp：
      sudo apt-get install xrdp

2.设置使用 3390 端口

sudo vi /etc/xrdp/xrdp.ini

```

![img](/images/20200411113004919.jpg)

```
3.向 xsession 中写入 xfce4-session： sudo echo xfce4-session >~/.xsession 4、重启 xrdp 服务：

sudo service xrdp restart

 
```

**启动远程桌面**
1.启动Windows的远程桌面：

![img](https://img-blog.csdnimg.cn/20200411113139166.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2d5d2l3eXE=,size_16,color_FFFFFF,t_70)

 

2.点击显示选项，填入：

localhost:3390

![img](https://img-blog.csdnimg.cn/2020041111321617.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2d5d2l3eXE=,size_16,color_FFFFFF,t_70)

 

3.点击连接。

4．输入用户名和密码：

![img](https://img-blog.csdnimg.cn/20200411113305571.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2d5d2l3eXE=,size_16,color_FFFFFF,t_70)