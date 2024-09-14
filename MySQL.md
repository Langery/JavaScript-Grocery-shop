## MySQL Note

### 命令操作

```bash
# 启动 MySQL 服务器
sudo mysql.server start

# 进入 MySQL
mysql -u root -p

# 退出 MySQL
exit；

# 停止 MySQL 服务器
sudo mysql.server stop
```

> 数据类型

- 数值类型
  - 整数类型
  - 浮点数类型
  - 定点数类型
- 日期、时间类型
  - date
  - time
  - datetime
- 字符串（字符）类型
  - 字符串
    - char
    - varchar
  - 文本类型
  - 二进制文本类型

> MySQL 内部语句

``` bash
# 创建数据库
create database `database name`;

# 查看正在使用的数据库
select database();

# 使用数据库
use `database name`;

# 查看所有数据库
show databases;

# 查看数据库的定义信息
show create database `database name`;
```

### Note

1. 在 MySQL 中执行完一条操作后需要加`;`