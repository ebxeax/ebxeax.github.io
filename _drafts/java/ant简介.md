Apache Ant是一个a基于Java的构建工具，现有大部分Java项目都用ant（竞争对手主要是Apache Maven），当然ant也可用于C/C++项目取代make，或者用于其它项目。与Maven比Ant相当灵活，同时有丰富的插件生态。

和makefile使用ant需要为项目写个文件指定要完成的工作，这个文件通常叫build.xml并放在项目目录的顶层。由于使用XML格式，可能显得比较冗长，但由于ant工作得比较高层，只用写一些高层目标间的依赖关系，通常不用写到文件间的具体依赖关系，仍然上可控的。

现在，主流Java IDE都支持ant，其中netbeans默认应用ant。
