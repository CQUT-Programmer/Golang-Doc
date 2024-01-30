const e=JSON.parse('{"key":"v-cb0dd8ba","path":"/essential/impl/6.channel.html","title":"chan","lang":"zh-CN","frontmatter":{"description":"channel是一个特殊的数据结构，是go语言贯彻CSP思想的典型代表，CSP思想的核心就是进程之间通过消息通信来进行数据的交换，对应的，通过channel我们可以很轻松地在协程之间通信。 ```go import \\"fmt\\" func main() { done := make(chan struct{}) go func() { // do som...","head":[["meta",{"property":"og:url","content":"https://golang.halfiisland.com/essential/impl/6.channel.html"}],["meta",{"property":"og:site_name","content":"Golang中文学习文档"}],["meta",{"property":"og:title","content":"chan"}],["meta",{"property":"og:description","content":"channel是一个特殊的数据结构，是go语言贯彻CSP思想的典型代表，CSP思想的核心就是进程之间通过消息通信来进行数据的交换，对应的，通过channel我们可以很轻松地在协程之间通信。 ```go import \\"fmt\\" func main() { done := make(chan struct{}) go func() { // do som..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-30T13:09:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-30T13:09:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"chan\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-30T13:09:25.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"结构","slug":"结构","link":"#结构","children":[]},{"level":2,"title":"创建","slug":"创建","link":"#创建","children":[]},{"level":2,"title":"发送","slug":"发送","link":"#发送","children":[]},{"level":2,"title":"接收","slug":"接收","link":"#接收","children":[]},{"level":2,"title":"关闭","slug":"关闭","link":"#关闭","children":[]}],"git":{"createdTime":1706620165000,"updatedTime":1706620165000,"contributors":[{"name":"246859","email":"2633565580@qq.com","commits":1}]},"readingTime":{"minutes":22.59,"words":3388},"filePathRelative":"essential/impl/6.channel.md","localizedDate":"2024年1月30日","autoDesc":true}');export{e as data};
