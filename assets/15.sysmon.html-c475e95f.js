const t=JSON.parse('{"key":"v-a98140c8","path":"/essential/impl/runtime/15.sysmon.html","title":"sysmon","lang":"zh-CN","frontmatter":{"description":"sysmon是一个普通的函数，直译为系统监控，去掉注释部分也就200来行代码。它会在程序引导阶段时被分配一个单独的线程来启动，之后会在后台不断地监控Go程序运行时的状态，并作出相应的处理。关于它启动这部分的代码可以在runtime.main函数中查看到： 系统监控本身只是一个for循环，每一轮循环的间隔时间为20微秒，随着程序空闲指数的上升，间隔时间最...","head":[["meta",{"property":"og:url","content":"https://golang.halfiisland.com/essential/impl/runtime/15.sysmon.html"}],["meta",{"property":"og:site_name","content":"Golang中文学习文档"}],["meta",{"property":"og:title","content":"sysmon"}],["meta",{"property":"og:description","content":"sysmon是一个普通的函数，直译为系统监控，去掉注释部分也就200来行代码。它会在程序引导阶段时被分配一个单独的线程来启动，之后会在后台不断地监控Go程序运行时的状态，并作出相应的处理。关于它启动这部分的代码可以在runtime.main函数中查看到： 系统监控本身只是一个for循环，每一轮循环的间隔时间为20微秒，随着程序空闲指数的上升，间隔时间最..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-13T08:23:19.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-13T08:23:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"sysmon\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-13T08:23:19.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1718824041000,"updatedTime":1720858999000,"contributors":[{"name":"yihhao wang","email":"2633565580@qq.com","commits":2}]},"readingTime":{"minutes":1.48,"words":222},"filePathRelative":"essential/impl/runtime/15.sysmon.md","localizedDate":"2024年6月19日","autoDesc":true}');export{t as data};