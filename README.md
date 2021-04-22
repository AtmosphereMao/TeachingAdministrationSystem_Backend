## README!!!

- 禁止🚫直接push到master，master作为CD分支
- 开发从develop分支新建「feat/功能名称」分支
- 开发完成后合并到develop，删除feat分支
- 如需要部署就将develop合并到master



## meedu后台的前端项目

### 安装

下载到本地：

```
git clone https://github.com/Meedu/backend.git meedu-backend
```

安装依赖：

```
npm install -g hey-cli
cd meedu-backend
npm install
```

打包：

```
hey build
```

打包完成之后将会在目录下面看到 `dist` 文件夹，接下来将该文件夹复制到 `meedu` 项目的 `public` 目录下面，重命名为：`admin`。然后就可以在浏览器输入：

```
http://yourdomain.com/admin
```

来访问 MeEdu 的后台了。