# 用途
1 根据颜色筛选图片
2 作为预加载的蒙层

# node.js 分析图像色调的流程
1 读取二进制数据
fs module
path module
buffer
2 识别图像类型
file-type module
PNG
JPG
3 解析图像像素点颜色
pngjs module
jpegjs module
4 归类统计
canopy
k-means

# 转化为web服务

1 启动web服务
2 触发http请求
3 下载图像
4 色彩提取

## 使用举例
chrome 访问： http://127.0.0.1?path=http://gw.alicdn.com/xxxx.png
返回：
次图像的前3色彩是 12.235.324.0, 122.4.55 34.14.12.4