<<<<<<< HEAD
原文链接：https://medium.com/geoai/an-end-to-end-solution-on-the-cloud-to-monitor-traffic-flow-using-deep-learning-9dfdfd00b621

本文将大致介绍如何结合监控视频流，ArcGIS，ArcGIS API for API，AWS等技术来监测车流量。

目录：

交通治理以及研究问题描述
实时视频流以及数据标注
目标检测：在AWS上训练YOLO3模型
流程架构
使用Dashboard应用实时监测路况
基于历史数据的异常行为监测
结论以及展望
致谢以及参考文献
交通治理以及问题研究描述
车流量是监测城市环境状态的一个重要要素。控制道路上车流量是一个非常基本的需求。在一些大城市，通常使用监控相机监测繁忙的道路，高速公路，以及十字路口。交通局工作人员通常对事故，路面覆盖物（雨，冰，雪），路面犯罪，抛锚，超速，拥堵，行人数量等信息感兴趣。监控相机可以帮助更好治理路况维持公共安全。国家高速公路安全管理局的一项研究表明，36%的碰撞事故都发生在道路交汇处。因此，十字路口时城市交通拥堵的罪魁祸首，也是交管中心重点监测对象。为了监测和管理路况，交通十字路口通常安装了许多相机。监测相机可以时固定，也可以是可遥控的PTZ相机。


监控抓拍图-昼

监控抓拍图-夜
于是，华盛顿区域的交通部门需要Esri定制一个云解决方案，方案需要满足以下需求：1）监测110个交通路口的路况（小汽车，公交，卡车，摩托车，行人），并且使用GIS将其可视化。2）监测路口流量异常。3）监测处在危险区域的行人。这个解决方案不仅需要监控相机，还需要将空间数据和深度学习框架结合。

本文将介绍，如何使用ArcGIS，ArcGIS API for Pyhon，AWS以及Keras深度学习框架实现这个解决方案。解决方案是使用AWS环境中的GPU来加速实时处理视频流，从而进行模型训练和推断预测。ArcGIS API for Python将空间信息如视频流的位置与深度学习框架结合，并且使用ArcGIS Enterprise将时间信息一同保存。

实时视频流以及数据标注
深度学习模型需要大量的训练数据。作者通过Traffic Land的REST API服务获取华盛顿111个路口的实视监控视频。作者使用Python代码，从TrafficLand服务上面获取了这111个监控相机的1000多张日夜抓拍图。作者将这些训练数据图片放到一个文件夹里面，然后使用LabelImg的工具人工标注图片中的目标物。最后将标注信息导出为txt文件，txt文件可以被绝大多数的目标检测算法使用。

使用LabelImg软件标注
目标检测：在AWS上训练YOLO3模型
我们的目的是从实时的视频中识别目标物。YOLO是一个目标检测很火的算法，该算法在实时应用中的精准度十分的高。YOLO可以生成目标物在图片中的位置，并且告诉用户该目标物的类别。YOLO只需要在网络中进行一次前向衍生就能够提供预测。早些版本的YOLO如YOLO2无法识别细小的目标物，因为YOLO2的计算层降低了输入图片的分辨率。除此之外，YOLO2还缺少一些牛叉的技术，如residual blocks，skip connections 以及 upsampling。YOLO3增加计算层以及YOLO2中那些没有的牛叉的功能。YOLO3算法在模型里面3个不同的位置，对尺寸不同的要素图运用1*1的识别窗口来实现目标检测。关于YOLO的原理有很多的博客和资源，这里不不做赘述。你可以在这些参考文献里了解YOLO的原理。

YOLO模型
来自111个监控相机的1000多张带有标签的日夜抓拍图将被用作训练数据，在AWS上面训练YOLO3模型。笔者使用了AWS的EC2实例，EC2实例提供专门用来深度学习的镜像，这些镜像通常预装自带了Tensorflow，PyTorch，Keras等框架，可以用于训练复杂的深度学习模型。笔者使用了预训练的YOLO3模型以及转移学习技术。随后作者对比了预测结果和实际结果。训练模型的IOU达95%。笔者使用了现成的开源Github代码训练YOLO3 模型。

流程架构
为了在AWS上面搭建一个实时流程，我们使用了如下架构来实现路况监测：1）我们使用并行处理来加速从TrafficLand REST API取视频流程的过程。2）紧接着，抓拍图被传到AWS EC2实例上的YOLO3模型里面。YOLO3对每一个片中的目标识别并且分类。总体上使用一个NVIDIA Tesla K80 GPU，我们可以在10内完成111张图片的抓取以及预测。3）最后我们将YOLO3的预测结果传到AWS的GeoEvent中的大数据库中，从而可以在大屏幕上对每一类数据进行可视化。每一个监控相机的相关照片都保存在S3 bucket云存储中。


流程架构设计图
我们的IT团队在AWS配置好了深度学习EC2实例以及ArcGIS GeoEvent Server。GeoEvent Server将实时的流数据与带有位置数据的要素类或大数据库相结合。为了将GeoEvent Server和EC2实例上的YOLO3深度学习模型相连接，笔者在GeoEvent服务中配置了输入连接器，处理器，输出连接器。GeoEvent服务可以通过用户图形界面创建，类似Model Builder的创建方法。

GeoEvent输入连接器定义了来自YOLO3模型的事件数据结构，并且把事件数据传送给GeoEvent处理器。如果你的数据结构有差异，GeoEvent将无法读取事件数据。GeoEvent中有好几种常用格式（文本，RSS，ESRI要素JSON，JSON）和协议（系统文件，HTTP，TCP，UDP，WebSocket，ESRI要素服务）的输入连接器。建立输入连接器是，用户要新建一个GeoEvent Definition，GeoEvent Definition里面定义了事件数据的数据结构。下图分别展示了GeoJSON格式的GeoEvent Definition，和RestAPI的数据通信渠道。因此，每一个相机的YOLO3模型的输出结果都会使用相机位置信息转换成GeoJSON。


GeoEvent Definition

GeoEvent Input Connector
GeoEvent处理器是GeoEvent服务里面的一个可配置元素。GeoEvent服务提供基于事件数据的分析，比如对事件数据进行识别，对事件数据进行扩充。由于我们的流程没有对事件数据做任何处理，因此我们的流程中将不会使用任何GeoEvent处理器。

GeoEvent输出连接器的作用是将GeoEvent数据重新转成符合各种协议的流数据。我们配置了两个GeoEvent服务：1）一个实时GeoEvent服务，用于获取实时数据以及大屏可视化。2）一个历史GeoEvent服务，用于保存历史数据要素类可以后续用于异常分析。这两个服务的不同之处在于，实时服务只保存最新的111条记录，然而历史服务会保存之前所有生成的记录。我们可以算一下按每秒111条记录的速率，一天数据量将达到9.6百万（111相机*24小时*60分*60秒）。


Update a Feature Ouput Connector

Add a Feature Output Connector
使用Dashboard应用实时监测路况
我们使用了Dashboard应用来实现自动化监测实时交通路况。Dashboard应用展示了111个实时视频流的位置，以及每个路口各种车型的计数。Dashboard的数据来自GeoEvent服务生成的要素类。用户通过Dashboard可以判断华盛顿区域行人或者车辆拥堵的具体位置。用户要可以看到每个监控相机的实时画面。下图展示了Dashboard应用的界面。Dashboard根据用户当前浏览的地图区域更新左侧的统计数据。


Dashboard应用

查询某一个路口
基于历史数据的异常行为监测
交通部门还想知道每一种车型和行人在路口的动态流量是如何的。为了解决这个问题，我们在一个礼拜后使用历史GeoEvent服务生成的数据来计算每一种车型和行人每天每一分钟的流量状况。我们简单计算一下，会有约1百万种可能的组合（111相机*7天*24小时*60分钟）。你可以把它比作一个异常监测的查询表。我们将每一种车型的计数与历史技术做比较，如果计数高于历史计数30%，那么我们称为流量异常，并且将异常展现在地图上。我们将异常事件写进一个单独的要素类里面。下图展示了某个路口的行人和车辆的异常状况。

交通部门还特别在意行人路口行为。他们主要想知道是否有行人不使用人行道。解决这个问题有很多方法。一半方法是检测处图像中的人行道，然后将人行道范围外的行人标为异常。


某路口异常行为
笔者使用了另外一种方法。笔者找了一个路口连续运行YOLO3识别目标物五个小时，然后将所有行人类别的图片坐标（矩形框四个角的像素坐标）提取出，计算每一个矩形框右下，左下像素坐标的平均值，然后将每一个矩形框转换成一个像素点，我们之所以使用左下，右下的坐标，是因为这两个坐标更加贴近地面，可以更好的代表地面上的人行道。下图中每一个红色点代表这个小时内所有行人的位置。这份数据可以揭示行人过马路的规律。由于大多数人都使用人行道过马路，图中可以看到红点都聚集在人行道附近。反之，图片中的其他位置没有红点。


原始路口抓拍图

红点代表行人的历史位置
为了将图像中高密度和低密度的红点分开，笔者使用了DBSCAN分析算法。DBSCAN更具点的空间分布以及每个点周围的噪声情况来识别高密度点聚类。DBSCAN还会将一些距离点聚类区域较远的点标为outlier。下图就是使用DBSCAN标记出了不在人行道区域的行人。


未使用人行道的行人 1

未使用人行道的行人 2
结论以及展望
本文，笔者介绍了GeoAI团队开发的交通路况监测云解决方案。该解决方案可以1）访问获取实时视频数据，2）使用AWS上的YOLO3模型实时识别小汽车，巴士，卡车，摩托车，以及行人，3）将YOLO3的结果发送到AWS上面的GeoEvent服务，在Dashboard应用上会展示路况，并且使用大数据库中的历史数据进行分析，4）根据目标物的数量来分析异常事件，例如监测处于危险位置的行人。GIS在展示相机地理位置以及实时路况起到了关键的作用。未来我们还会基于此方案进行目标追踪，测速，统计车道流量等。

致谢以及参考文献
感谢Daniel Wilson配置AWS以及S3图片云存储，让整个流程快了10倍。感谢Joel McCune配置的Dashboard应用。感谢RJ Sunderman 在ArcGIS GeoEvent Server上的帮助，感谢Alberto Nieto联系交通部门启动了这个项目，使得我们可以将YOLO3，ArcGIS GeoEvent Server，AWS添加到Alberto之前的成果中去，实现实时云处理。最后感谢Mark Carlson配置了ArcGIS GeoEvent Server，以及AWS的深度学习镜像。我们还将这个解决方案复制到了Azure上面。如果你有疑问，或者有意向合作，欢迎联系我们。

1] https://developers.arcgis.com/python
2] https://aws.amazon.com/machine-learning/amis
3] http://www.arcgis.com/index.html
4] http://www.trafficland.com
5] https://github.com/tzutalin/labelImg
6] https://arxiv.org/abs/1506.02640https://arxiv.org/abs/1612.08242https://arxiv.org/abs/1804.02767https://lilianweng.github.io/lil-log/2018/12/27/object-detection-part-4.html#yolo-you-only-look-oncehttps://towardsdatascience.com/yolo-v3-object-detection-53fb7d3bfe6b
7] https://github.com/qqwweee/keras-yolo3
8] https://enterprise.arcgis.com/en/geoevent/latest/get-started/a-quick-tour-of-geoevent-server.htm
9] https://enterprise.arcgis.com/en/geoevent/latest/administer/managing-big-data-stores.htm
10] http://desktop.arcgis.com/en/arcmap/10.3/analyze/modelbuilder/what-is-modelbuilder.htm
11] https://www.esri.com/en-us/arcgis/products/operations-dashboard/overview
=======
原文链接：https://medium.com/geoai/an-end-to-end-solution-on-the-cloud-to-monitor-traffic-flow-using-deep-learning-9dfdfd00b621

本文将大致介绍如何结合监控视频流，ArcGIS，ArcGIS API for API，AWS等技术来监测车流量。

目录：

交通治理以及研究问题描述
实时视频流以及数据标注
目标检测：在AWS上训练YOLO3模型
流程架构
使用Dashboard应用实时监测路况
基于历史数据的异常行为监测
结论以及展望
致谢以及参考文献
交通治理以及问题研究描述
车流量是监测城市环境状态的一个重要要素。控制道路上车流量是一个非常基本的需求。在一些大城市，通常使用监控相机监测繁忙的道路，高速公路，以及十字路口。交通局工作人员通常对事故，路面覆盖物（雨，冰，雪），路面犯罪，抛锚，超速，拥堵，行人数量等信息感兴趣。监控相机可以帮助更好治理路况维持公共安全。国家高速公路安全管理局的一项研究表明，36%的碰撞事故都发生在道路交汇处。因此，十字路口时城市交通拥堵的罪魁祸首，也是交管中心重点监测对象。为了监测和管理路况，交通十字路口通常安装了许多相机。监测相机可以时固定，也可以是可遥控的PTZ相机。


监控抓拍图-昼

监控抓拍图-夜
于是，华盛顿区域的交通部门需要Esri定制一个云解决方案，方案需要满足以下需求：1）监测110个交通路口的路况（小汽车，公交，卡车，摩托车，行人），并且使用GIS将其可视化。2）监测路口流量异常。3）监测处在危险区域的行人。这个解决方案不仅需要监控相机，还需要将空间数据和深度学习框架结合。

本文将介绍，如何使用ArcGIS，ArcGIS API for Pyhon，AWS以及Keras深度学习框架实现这个解决方案。解决方案是使用AWS环境中的GPU来加速实时处理视频流，从而进行模型训练和推断预测。ArcGIS API for Python将空间信息如视频流的位置与深度学习框架结合，并且使用ArcGIS Enterprise将时间信息一同保存。

实时视频流以及数据标注
深度学习模型需要大量的训练数据。作者通过Traffic Land的REST API服务获取华盛顿111个路口的实视监控视频。作者使用Python代码，从TrafficLand服务上面获取了这111个监控相机的1000多张日夜抓拍图。作者将这些训练数据图片放到一个文件夹里面，然后使用LabelImg的工具人工标注图片中的目标物。最后将标注信息导出为txt文件，txt文件可以被绝大多数的目标检测算法使用。

使用LabelImg软件标注
目标检测：在AWS上训练YOLO3模型
我们的目的是从实时的视频中识别目标物。YOLO是一个目标检测很火的算法，该算法在实时应用中的精准度十分的高。YOLO可以生成目标物在图片中的位置，并且告诉用户该目标物的类别。YOLO只需要在网络中进行一次前向衍生就能够提供预测。早些版本的YOLO如YOLO2无法识别细小的目标物，因为YOLO2的计算层降低了输入图片的分辨率。除此之外，YOLO2还缺少一些牛叉的技术，如residual blocks，skip connections 以及 upsampling。YOLO3增加计算层以及YOLO2中那些没有的牛叉的功能。YOLO3算法在模型里面3个不同的位置，对尺寸不同的要素图运用1*1的识别窗口来实现目标检测。关于YOLO的原理有很多的博客和资源，这里不不做赘述。你可以在这些参考文献里了解YOLO的原理。

YOLO模型
来自111个监控相机的1000多张带有标签的日夜抓拍图将被用作训练数据，在AWS上面训练YOLO3模型。笔者使用了AWS的EC2实例，EC2实例提供专门用来深度学习的镜像，这些镜像通常预装自带了Tensorflow，PyTorch，Keras等框架，可以用于训练复杂的深度学习模型。笔者使用了预训练的YOLO3模型以及转移学习技术。随后作者对比了预测结果和实际结果。训练模型的IOU达95%。笔者使用了现成的开源Github代码训练YOLO3 模型。

流程架构
为了在AWS上面搭建一个实时流程，我们使用了如下架构来实现路况监测：1）我们使用并行处理来加速从TrafficLand REST API取视频流程的过程。2）紧接着，抓拍图被传到AWS EC2实例上的YOLO3模型里面。YOLO3对每一个片中的目标识别并且分类。总体上使用一个NVIDIA Tesla K80 GPU，我们可以在10内完成111张图片的抓取以及预测。3）最后我们将YOLO3的预测结果传到AWS的GeoEvent中的大数据库中，从而可以在大屏幕上对每一类数据进行可视化。每一个监控相机的相关照片都保存在S3 bucket云存储中。


流程架构设计图
我们的IT团队在AWS配置好了深度学习EC2实例以及ArcGIS GeoEvent Server。GeoEvent Server将实时的流数据与带有位置数据的要素类或大数据库相结合。为了将GeoEvent Server和EC2实例上的YOLO3深度学习模型相连接，笔者在GeoEvent服务中配置了输入连接器，处理器，输出连接器。GeoEvent服务可以通过用户图形界面创建，类似Model Builder的创建方法。

GeoEvent输入连接器定义了来自YOLO3模型的事件数据结构，并且把事件数据传送给GeoEvent处理器。如果你的数据结构有差异，GeoEvent将无法读取事件数据。GeoEvent中有好几种常用格式（文本，RSS，ESRI要素JSON，JSON）和协议（系统文件，HTTP，TCP，UDP，WebSocket，ESRI要素服务）的输入连接器。建立输入连接器是，用户要新建一个GeoEvent Definition，GeoEvent Definition里面定义了事件数据的数据结构。下图分别展示了GeoJSON格式的GeoEvent Definition，和RestAPI的数据通信渠道。因此，每一个相机的YOLO3模型的输出结果都会使用相机位置信息转换成GeoJSON。


GeoEvent Definition

GeoEvent Input Connector
GeoEvent处理器是GeoEvent服务里面的一个可配置元素。GeoEvent服务提供基于事件数据的分析，比如对事件数据进行识别，对事件数据进行扩充。由于我们的流程没有对事件数据做任何处理，因此我们的流程中将不会使用任何GeoEvent处理器。

GeoEvent输出连接器的作用是将GeoEvent数据重新转成符合各种协议的流数据。我们配置了两个GeoEvent服务：1）一个实时GeoEvent服务，用于获取实时数据以及大屏可视化。2）一个历史GeoEvent服务，用于保存历史数据要素类可以后续用于异常分析。这两个服务的不同之处在于，实时服务只保存最新的111条记录，然而历史服务会保存之前所有生成的记录。我们可以算一下按每秒111条记录的速率，一天数据量将达到9.6百万（111相机*24小时*60分*60秒）。


Update a Feature Ouput Connector

Add a Feature Output Connector
使用Dashboard应用实时监测路况
我们使用了Dashboard应用来实现自动化监测实时交通路况。Dashboard应用展示了111个实时视频流的位置，以及每个路口各种车型的计数。Dashboard的数据来自GeoEvent服务生成的要素类。用户通过Dashboard可以判断华盛顿区域行人或者车辆拥堵的具体位置。用户要可以看到每个监控相机的实时画面。下图展示了Dashboard应用的界面。Dashboard根据用户当前浏览的地图区域更新左侧的统计数据。


Dashboard应用

查询某一个路口
基于历史数据的异常行为监测
交通部门还想知道每一种车型和行人在路口的动态流量是如何的。为了解决这个问题，我们在一个礼拜后使用历史GeoEvent服务生成的数据来计算每一种车型和行人每天每一分钟的流量状况。我们简单计算一下，会有约1百万种可能的组合（111相机*7天*24小时*60分钟）。你可以把它比作一个异常监测的查询表。我们将每一种车型的计数与历史技术做比较，如果计数高于历史计数30%，那么我们称为流量异常，并且将异常展现在地图上。我们将异常事件写进一个单独的要素类里面。下图展示了某个路口的行人和车辆的异常状况。

交通部门还特别在意行人路口行为。他们主要想知道是否有行人不使用人行道。解决这个问题有很多方法。一半方法是检测处图像中的人行道，然后将人行道范围外的行人标为异常。


某路口异常行为
笔者使用了另外一种方法。笔者找了一个路口连续运行YOLO3识别目标物五个小时，然后将所有行人类别的图片坐标（矩形框四个角的像素坐标）提取出，计算每一个矩形框右下，左下像素坐标的平均值，然后将每一个矩形框转换成一个像素点，我们之所以使用左下，右下的坐标，是因为这两个坐标更加贴近地面，可以更好的代表地面上的人行道。下图中每一个红色点代表这个小时内所有行人的位置。这份数据可以揭示行人过马路的规律。由于大多数人都使用人行道过马路，图中可以看到红点都聚集在人行道附近。反之，图片中的其他位置没有红点。


原始路口抓拍图

红点代表行人的历史位置
为了将图像中高密度和低密度的红点分开，笔者使用了DBSCAN分析算法。DBSCAN更具点的空间分布以及每个点周围的噪声情况来识别高密度点聚类。DBSCAN还会将一些距离点聚类区域较远的点标为outlier。下图就是使用DBSCAN标记出了不在人行道区域的行人。


未使用人行道的行人 1

未使用人行道的行人 2
结论以及展望
本文，笔者介绍了GeoAI团队开发的交通路况监测云解决方案。该解决方案可以1）访问获取实时视频数据，2）使用AWS上的YOLO3模型实时识别小汽车，巴士，卡车，摩托车，以及行人，3）将YOLO3的结果发送到AWS上面的GeoEvent服务，在Dashboard应用上会展示路况，并且使用大数据库中的历史数据进行分析，4）根据目标物的数量来分析异常事件，例如监测处于危险位置的行人。GIS在展示相机地理位置以及实时路况起到了关键的作用。未来我们还会基于此方案进行目标追踪，测速，统计车道流量等。

致谢以及参考文献
感谢Daniel Wilson配置AWS以及S3图片云存储，让整个流程快了10倍。感谢Joel McCune配置的Dashboard应用。感谢RJ Sunderman 在ArcGIS GeoEvent Server上的帮助，感谢Alberto Nieto联系交通部门启动了这个项目，使得我们可以将YOLO3，ArcGIS GeoEvent Server，AWS添加到Alberto之前的成果中去，实现实时云处理。最后感谢Mark Carlson配置了ArcGIS GeoEvent Server，以及AWS的深度学习镜像。我们还将这个解决方案复制到了Azure上面。如果你有疑问，或者有意向合作，欢迎联系我们。

1] https://developers.arcgis.com/python
2] https://aws.amazon.com/machine-learning/amis
3] http://www.arcgis.com/index.html
4] http://www.trafficland.com
5] https://github.com/tzutalin/labelImg
6] https://arxiv.org/abs/1506.02640https://arxiv.org/abs/1612.08242https://arxiv.org/abs/1804.02767https://lilianweng.github.io/lil-log/2018/12/27/object-detection-part-4.html#yolo-you-only-look-oncehttps://towardsdatascience.com/yolo-v3-object-detection-53fb7d3bfe6b
7] https://github.com/qqwweee/keras-yolo3
8] https://enterprise.arcgis.com/en/geoevent/latest/get-started/a-quick-tour-of-geoevent-server.htm
9] https://enterprise.arcgis.com/en/geoevent/latest/administer/managing-big-data-stores.htm
10] http://desktop.arcgis.com/en/arcmap/10.3/analyze/modelbuilder/what-is-modelbuilder.htm
11] https://www.esri.com/en-us/arcgis/products/operations-dashboard/overview
>>>>>>> 7700261 (first commit)
12] https://pro.arcgis.com/en/pro-app/tool-reference/spatial-statistics/densitybasedclustering.htm