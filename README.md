## 启动方式 
1. 先启动MongoDB数据库，你需要先安装MongoDB 
 + 启动终端 先运行mongod 再运行mongo(保证mongod 完全运行完再运行)
 + 本人使用 robo3T 可视化工具查看 MongoDB 数据
2. `npm start`
3. 或者全局安装nodemon，使用nodemon启动 `nodemon ./bin/www`

## 使用 express-generator 初始化项目目录
1. `npm install express-generator -g`
2. cd到你想创建的目录 运行 `express myapp`

## 使用 art-template 模板渲染页面，官方使用的是 jade 

## 接口说明 
1. 使用 插件 `cors` 实现跨域资源共享
 + 安装方式 ` npm install cors -S`
 + 项目中载入 app.use(cors())
2. 访问 ` http://localhost:3000/getnewslist/ ` 获取新闻列表数据 请求方式 get，返回json数据类型 `{
      status: 0,
      message: [
        {
          id: 1,
          title: "哈哈哈哈",
          click: 0,
          img_url: 'https://avatars0.githubusercontent.com/u/25916649?s=40&v=4'
        }
      ]
    }`
3. params 传递参数 `router.get("/:idArr",function(req, res, next){})`,
4. 在循环中使用异步请求，并获取数据，返回数组
 + 使用 一个大的promise 嵌套循环里面的每个promise 在处理所有嵌套promise 
  实现 循环里面的异步请求，并且获取数据