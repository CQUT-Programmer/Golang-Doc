import{_ as t,V as o,W as r,X as s,Y as a,$ as e,Z as l,F as i}from"./framework-44a66fc7.js";const p={},c=s("h1",{id:"consul",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#consul","aria-hidden":"true"},"#"),a(" Consul")],-1),d=s("figure",null,[s("img",{src:"https://public-1308755698.cos.ap-chongqing.myqcloud.com//img/202308251536825.png",alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),u=s("blockquote",null,[s("p",null,"consul是一个能够让团队在服务与跨预置和多云环境中安全管理网络连接的解决方案，它提供了服务发现，服务网格，流量治理，网络基础设施自动更新等一系列功能。")],-1),v={href:"https://www.consul.io/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/hashicorp/consul",target:"_blank",rel:"noopener noreferrer"},b=l(`<p>Consul是HashiCorp公司开源的一款服务发现与注册工具，采用Raft选举算法，工具本身使用Go语言进行开发，因此部署起来十分的轻便。Consul总共有以下特点：</p><ul><li>服务发现</li><li>服务注册</li><li>健康检查</li><li>键值存储</li><li>多数据中心</li></ul><p>实际上consul能做的事情不止服务发现，还可以做分布式配置中心，同类型的开源工具也有很多，比如zookeeper，nacos，这里就不再做过多的介绍。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><p>对于Ubuntu而言的话，执行下面的命令使用apt安装即可</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">wget</span> -O- https://apt.releases.hashicorp.com/gpg <span class="token operator">|</span> <span class="token function">sudo</span> gpg <span class="token parameter variable">--dearmor</span> <span class="token parameter variable">-o</span> /usr/share/keyrings/hashicorp-archive-keyring.gpg
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com <span class="token variable"><span class="token variable">$(</span>lsb_release <span class="token parameter variable">-cs</span><span class="token variable">)</span></span> main&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/hashicorp.list
$ <span class="token function">sudo</span> <span class="token function">apt</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> consul
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),g={href:"https://developer.hashicorp.com/consul/downloads",target:"_blank",rel:"noopener noreferrer"},k=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ consul version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>正常输出就没有问题</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Consul v1.16.1
Revision e0ab4d29
Build Date 2023-08-05T21:56:29Z
Protocol 2 spoken by default, understands 2 to 3 (agent will automatically use protocol &gt;2 when speaking to compatible agents)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2><p>下面介绍如何快速搭建一个consul单节点，一般单节点是在开发期间测试用的，如果单节点使用起来没有问题，大概率多节点集群也不会由问题。单节点搭建起来十分的简单，只需要一行命令即可</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ consul agent <span class="token parameter variable">-dev</span> <span class="token parameter variable">-bind</span><span class="token operator">=</span><span class="token number">192.168</span>.48.141 -data-dir<span class="token operator">=</span>/tmp/consul <span class="token parameter variable">-ui</span> <span class="token parameter variable">-node</span><span class="token operator">=</span>dev01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>一般会有如下输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>==&gt; Starting Consul agent...
               Version: &#39;1.16.1&#39;
            Build Date: &#39;2023-08-05 21:56:29 +0000 UTC&#39;
               Node ID: &#39;be6f6b8d-9668-f7ff-8709-ed57c72ffdec&#39;
             Node name: &#39;dev01&#39;
            Datacenter: &#39;dc1&#39; (Segment: &#39;&lt;all&gt;&#39;)
                Server: true (Bootstrap: false)
           Client Addr: [127.0.0.1] (HTTP: 8500, HTTPS: -1, gRPC: 8502, gRPC-TLS: 8503, DNS: 8600)
          Cluster Addr: 192.168.48.141 (LAN: 8301, WAN: 8302)
     Gossip Encryption: false
      Auto-Encrypt-TLS: false
           ACL Enabled: false
     Reporting Enabled: false
    ACL Default Policy: allow
             HTTPS TLS: Verify Incoming: false, Verify Outgoing: false, Min Version: TLSv1_2
              gRPC TLS: Verify Incoming: false, Min Version: TLSv1_2
      Internal RPC TLS: Verify Incoming: false, Verify Outgoing: false (Verify Hostname: false), Min Version: TLSv1_2
==&gt; Log data will now stream in as it occurs:
2023-08-25T17:23:33.763+0800 [DEBUG] agent.grpc.balancer: switching server: target=consul://dc1.be6f6b8d-9668-f7ff-8709-ed57c72ffdec/server.dc1 from=&lt;none&gt; to=&lt;none&gt;
2023-08-25T17:23:33.767+0800 [INFO]  agent.server.raft: initial configuration: index=1 servers=&quot;[{Suffrage:Voter ID:be6f6b8d-9668-f7ff-8709-ed57c72ffdec Address:192.168.48.141:8300}]&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单讲解一下释义</p><ul><li><p><code>agent</code>是子命令，是consul的核心命令，<code>consul agent</code>就是运行一个新的consul代理，每一个node都是一个代理。</p></li><li><p><code>dev</code>，是agent的运行模式，总共有三种<code>dev</code>，<code>client</code>，<code>server</code></p></li><li><p><code>bind</code>，局域网通信地址，端口默认8301，一般此值为服务器的内网地址</p></li><li><p><code>advertise</code>，广域网通信地址，端口默认8302，一般此值为服务器的外网地址</p></li><li><p><code>data-dir</code>，数据存放目录</p></li><li><p><code>config-dir</code>，配置存放目录，consul会读取目录下所有的json文件</p></li><li><p><code>bootstrap</code>，标注当前server进入引导模式，在raft选举时会给自己投票，集群中处于该模式的server不能超过一个</p></li><li><p><code>bootstrap-expect</code>，即集群中期望的server数量，在没有达到指定数量之前，集群不会开始选举投票，不能与<code>bootstrap</code>同时使用。</p></li><li><p><code>retry-join</code>，agent启动后，会不断尝试加入指定的节点，还支持以下的一些服务商发现方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>aliyun aws azure digitalocean gce hcp k8s linode mdns os packet scaleway softlayer tencentcloud triton vsphere
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><code>ui</code>，运行Web后台</p></li><li><p><code>node</code>，执行节点名称，必须在集群中保持唯一。</p></li></ul>`,10),h={class:"hint-container tip"},f=s("p",{class:"hint-container-title"},"提示",-1),_={href:"https://developer.hashicorp.com/consul/docs/agent/config/cli-flags#usage",target:"_blank",rel:"noopener noreferrer"},q=l(`<p>当成功运行后，访问<code>127.0.0.1:8500</code>，就可以浏览Web界面。</p><img src="https://public-1308755698.cos.ap-chongqing.myqcloud.com//img/202308251740238.png"><p>dev01的图标是一个星星，就说明它是leader节点。</p><p>退出时，为了能其他节点感知到当前节点的退出，不建议强制杀死进程，可以使用命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>consul leave
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>consul force-leave
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以<code>ctrl+c</code>，让consul agent 优雅退出。</p><h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><figure><img src="https://developer.hashicorp.com/_next/image?url=https%3A%2F%2Fcontent.hashicorp.com%2Fapi%2Fassets%3Fproduct%3Dconsul%26version%3Drefs%2Fheads%2Frelease%2F1.16.x%26asset%3Dwebsite%2Fpublic%2Fimg%2Fconsul-arch%2Fconsul-arch-overview-control-plane.svg%26width%3D960%26height%3D540&amp;w=1920&amp;q=75" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这是一张consul集群的示意图，图中分为了两部分，控制面和数据面。consul只负责控制面，分为服务集群和客户端，服务集群中又分为追随者和领导者，总体而言，图中consul集群就构成了一个数据中心。下面对一些术语进行讲解</p><ul><li>Agent（代理）：或者称为节点更合适，每一个agent都是一个长时间运行的守护进程，它们对外暴露HTTP和DNS接口，负责健康检查和服务同步。</li><li>Server（服务代理）：作为一个consul server，它的职责主要有参与Raft选举，维护集群状态，响应查询，与其他数据中心交换数据，以及向领导者和其他数据中心转发查询。</li><li>Client（客户代理）：client相对server来说是无状态的，它不参与Raft选举，所做的事情仅仅只是将所有的请求转发给server，它唯一参与的与后台有关的事情就是局域网流言转发（LAN gossip pool）。</li><li>Leader（领导者）：leader是所有server的领导，而且领导只能有一个，leader是通过Raft选举算法进行选举的，每一个leader有自己的任期，在任期内，其他的server收到了不管什么请求都要告诉leader，所以leader的数据是最及时最新的。</li><li>Gossi（流言）：Consul是基于Serf（该公司其下的另一个产品）而构建的，它使用gossip协议，该协议专用于节点间的随机通信，类似UDP，consul使用此协议来在服务集群间进行互相通知。</li><li>Data Center（数据中心）：一个局域网内的consul集群被称为一个数据中心，consul支持多数据中心，多数据中心的沟通方式就是WAN gossip。</li></ul>`,12),x={class:"hint-container tip"},y=s("p",{class:"hint-container-title"},"提示",-1),C={href:"https://developer.hashicorp.com/consul/docs/install/glossary#consul-vocabulary",target:"_blank",rel:"noopener noreferrer"},S=l(`<p>在consul集群中，server的数量应该严格控制，因为它们直接参与到LAN gossip和WAN gossip，raft选举，并且要存储数据，server越多，通信成本越高。而client的数量多一点没什么问题，它只负责转发，不参与选举，占用资源很低，在图中的集群中，各个服务通过client将自身注册到server中，如果有server挂了的话，client会自行寻找其他可用的server。</p><h2 id="集群搭建示例" tabindex="-1"><a class="header-anchor" href="#集群搭建示例" aria-hidden="true">#</a> 集群搭建示例</h2><p>下面搭建一个简单的consul多节点集群示例，先准备四台虚拟机</p><figure><img src="https://public-1308755698.cos.ap-chongqing.myqcloud.com//img/202308251754483.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>四台虚拟机中，三个server，一个client，官方建议server的数量最好是奇数，并且最好大于等于三个。这里将vm00-vm02作为server，vm03作为client，</p><p>对于server而言，运行如下命令，创建server agent</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>consul agent <span class="token parameter variable">-server</span> <span class="token parameter variable">-bind</span><span class="token operator">=</span>vm_address <span class="token parameter variable">-client</span><span class="token operator">=</span><span class="token number">0.0</span>.0.0 -data-dir<span class="token operator">=</span>/tmp/consul/ <span class="token parameter variable">-node</span><span class="token operator">=</span>agent_name <span class="token parameter variable">-ui</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对于client而言，运行如下命令，创建client agent</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>consul agent <span class="token parameter variable">-client</span><span class="token operator">=</span><span class="token number">0.0</span>.0.0  <span class="token parameter variable">-bind</span><span class="token operator">=</span>vm_address -data-dir<span class="token operator">=</span>/tmp/consul/ <span class="token parameter variable">-node</span><span class="token operator">=</span>agent_name <span class="token parameter variable">-ui</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行的命令分别如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># vm00</span>
consul agent <span class="token parameter variable">-server</span> <span class="token parameter variable">-bind</span><span class="token operator">=</span><span class="token number">192.168</span>.48.138 <span class="token parameter variable">-client</span><span class="token operator">=</span><span class="token number">0.0</span>.0.0 -data-dir<span class="token operator">=</span>/tmp/consul/ <span class="token parameter variable">-node</span><span class="token operator">=</span>agent01 <span class="token parameter variable">-ui</span> <span class="token parameter variable">-bootstrap</span>

<span class="token comment"># vm01</span>
consul agent <span class="token parameter variable">-server</span> <span class="token parameter variable">-bind</span><span class="token operator">=</span><span class="token number">192.168</span>.48.139 <span class="token parameter variable">-client</span><span class="token operator">=</span><span class="token number">0.0</span>.0.0 -data-dir<span class="token operator">=</span>/tmp/consul/ <span class="token parameter variable">-node</span><span class="token operator">=</span>agent02 <span class="token parameter variable">-ui</span> -retry-join<span class="token operator">=</span><span class="token number">192.168</span>.48.138

<span class="token comment"># vm02</span>
consul agent <span class="token parameter variable">-server</span> <span class="token parameter variable">-bind</span><span class="token operator">=</span><span class="token number">192.168</span>.48.140 <span class="token parameter variable">-client</span><span class="token operator">=</span><span class="token number">0.0</span>.0.0 -data-dir<span class="token operator">=</span>/tmp/consul/ <span class="token parameter variable">-node</span><span class="token operator">=</span>agent03 <span class="token parameter variable">-ui</span> -retry-join<span class="token operator">=</span><span class="token number">192.168</span>.48.138

<span class="token comment"># vm03</span>
consul agent <span class="token parameter variable">-bind</span><span class="token operator">=</span><span class="token number">192.168</span>.48.140 <span class="token parameter variable">-client</span><span class="token operator">=</span><span class="token number">0.0</span>.0.0 -data-dir<span class="token operator">=</span>/tmp/consul/ <span class="token parameter variable">-node</span><span class="token operator">=</span>agent03 <span class="token parameter variable">-ui</span> -retry-join<span class="token operator">=</span><span class="token number">192.168</span>.48.138
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一些参数释义</p><ul><li><code>client</code>，<code>0.0.0.0</code>即放行所有来源的请求，如果只有client参数，没有server参数，代表着agent将以client模式运行。</li></ul><p>所有的agent运行好后，其中<code>retry-join</code>的作用等于自动执行join命令，失败后会不断尝试，默认重试时间30s</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ consul <span class="token function">join</span> <span class="token number">192.168</span>.48.138
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>join完成后，各个节点都知晓了对方的存在，由于vm00指定了bootstrap模式，所以它就是默认的leader，如果没有指定bootstrap模式，所有节点在join时指定的节点为默认leader，<strong>在leader没有选举出来之前，集群无法正常工作，访问web界面会返回500，一些命令也无法正常工作</strong>。如果集群中有节点制定了bootstrap模式，那么集群中其他节点就不应该再有其他节点指定bootstrap模式，同时其他节点也不应该再使用<code>bootstrap-expect</code>参数，如果使用了会自动禁用。</p><p>这时在leader节点上（实际上这时无论哪个节点都可以查看）运行查看data center的成员信息，运行如下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ consul members
Node      Address              Status  Type    Build   Protocol  DC   Partition  Segment
agent01   <span class="token number">192.168</span>.48.138:8301  alive   server  <span class="token number">1.16</span>.1  <span class="token number">2</span>         dc1  default    <span class="token operator">&lt;</span>all<span class="token operator">&gt;</span>
agent02   <span class="token number">192.168</span>.48.139:8301  alive   server  <span class="token number">1.16</span>.1  <span class="token number">2</span>         dc1  default    <span class="token operator">&lt;</span>all<span class="token operator">&gt;</span>
agent03   <span class="token number">192.168</span>.48.140:8301  alive   server  <span class="token number">1.16</span>.1  <span class="token number">2</span>         dc1  default    <span class="token operator">&lt;</span>all<span class="token operator">&gt;</span>
client01  <span class="token number">192.168</span>.48.141:8301  alive   client  <span class="token number">1.16</span>.1  <span class="token number">2</span>         dc1  default    <span class="token operator">&lt;</span>default<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Node，即节点名称</li><li>Address，通信地址</li><li>Status，<code>alive</code>表示存活，<code>left</code>表示下线</li><li>Type，agent种类，server和client两种模式</li><li>Build，该节点使用的consul版本，consul可以在一定范围内兼容不同版本的节点进行工作</li><li>Protocol，指的是使用的Raft协议版本，这个协议应当所有节点一致</li><li>DC，Data Center，数据中心，输出中的所有节点都属于dc1数据中心</li><li>Partition，节点隶属的分区，属于企业版功能，每个节点只能与同一分区的节点进行通信</li><li>Segment，节点隶属的网段，属于企业版功能</li></ul><img src="https://public-1308755698.cos.ap-chongqing.myqcloud.com//img/202308251814336.png"><p>同样的，如果想要一个节点退出，应该使用<code>consul leave</code>让节点优雅退出，并通知其他节点自己将要退出，对于多节点的情况下，节点的优雅退出尤为重要，因为这关系到数据的一致性。</p>`,21),I={class:"hint-container tip"},D=s("p",{class:"hint-container-title"},"提示",-1),T={href:"https://developer.hashicorp.com/consul/docs/install/ports",target:"_blank",rel:"noopener noreferrer"},w=l(`<p>接下来简单测试一下数据一致性，在vm00虚拟机中添加如下数据</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ consul kv put sys_confg <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;consul&quot;</span><span class="token punctuation">}</span>
Success<span class="token operator">!</span> Data written to: sys_confg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>保存后，通过HTTP API访问其他节点会发现数据同样存在（其中的value是base64编码）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">curl</span> http://192.168.48.138:8500/v1/kv/sys_confg
<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;LockIndex&quot;</span>:0,<span class="token string">&quot;Key&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;sys_confg&quot;</span>,<span class="token string">&quot;Flags&quot;</span>:0,<span class="token string">&quot;Value&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;ewogICJuYW1lIjoiY29uc3VsIgp9&quot;</span>,<span class="token string">&quot;CreateIndex&quot;</span>:2518,<span class="token string">&quot;ModifyIndex&quot;</span>:2518<span class="token punctuation">}</span><span class="token punctuation">]</span>
$ <span class="token function">curl</span> http://192.168.48.139:8500/v1/kv/sys_confg
<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;LockIndex&quot;</span>:0,<span class="token string">&quot;Key&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;sys_confg&quot;</span>,<span class="token string">&quot;Flags&quot;</span>:0,<span class="token string">&quot;Value&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;ewogICJuYW1lIjoiY29uc3VsIgp9&quot;</span>,<span class="token string">&quot;CreateIndex&quot;</span>:2518,<span class="token string">&quot;ModifyIndex&quot;</span>:2518<span class="token punctuation">}</span><span class="token punctuation">]</span>
$ <span class="token function">curl</span> http://192.168.48.140:8500/v1/kv/sys_confg
<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&quot;LockIndex&quot;</span>:0,<span class="token string">&quot;Key&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;sys_confg&quot;</span>,<span class="token string">&quot;Flags&quot;</span>:0,<span class="token string">&quot;Value&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;ewogICJuYW1lIjoiY29uc3VsIgp9&quot;</span>,<span class="token string">&quot;CreateIndex&quot;</span>:2518,<span class="token string">&quot;ModifyIndex&quot;</span>:2518<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事实上，consul提供的服务发现与注册功能，就是将注册的服务以KV形式存储的，并通过gossip协议广播给其他节点，并且当任意一个节点加入当前数据中心时，所有的节点都会感知到此变化。</p><h2 id="多数据中心搭建示例" tabindex="-1"><a class="header-anchor" href="#多数据中心搭建示例" aria-hidden="true">#</a> 多数据中心搭建示例</h2><p>准备五台虚拟机，vm00-vm02是上一个示例的集群，属于dc1数据中心，不去动它，vm03-vm04属于dc2数据中心，数据中心在agent启动时，默认为dc1。</p><figure><img src="https://public-1308755698.cos.ap-chongqing.myqcloud.com//img/202308261221865.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这里为了演示，只搭建server，省掉了client。</p></div><p>首先分别启动vm03，将其作为默认的leader</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ consul agent <span class="token parameter variable">-server</span> <span class="token parameter variable">-datacenter</span><span class="token operator">=</span>dc2 <span class="token parameter variable">-bind</span><span class="token operator">=</span><span class="token number">192.168</span>.48.141 <span class="token parameter variable">-client</span><span class="token operator">=</span><span class="token number">0.0</span>.0.0 -data-dir<span class="token operator">=</span>/tmp/consul/ <span class="token parameter variable">-node</span><span class="token operator">=</span>agent04 <span class="token parameter variable">-ui</span> <span class="token parameter variable">-bootstrap</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动启动vm04，让其自动join到vm03节点</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ consul agent <span class="token parameter variable">-server</span> <span class="token parameter variable">-datacenter</span><span class="token operator">=</span>dc2 <span class="token parameter variable">-bind</span><span class="token operator">=</span><span class="token number">192.168</span>.48.142 <span class="token parameter variable">-client</span><span class="token operator">=</span><span class="token number">0.0</span>.0.0 -data-dir<span class="token operator">=</span>/tmp/consul/ <span class="token parameter variable">-node</span><span class="token operator">=</span>agent05 <span class="token parameter variable">-ui</span> -retry-join<span class="token operator">=</span><span class="token number">192.168</span>.48.141
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时分别在vm00和vm03查看members</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># vm00-vm02</span>
$ consul members
Node      Address              Status  Type    Build   Protocol  DC   Partition  Segment
agent01   <span class="token number">192.168</span>.48.138:8301  alive   server  <span class="token number">1.16</span>.1  <span class="token number">2</span>         dc1  default    <span class="token operator">&lt;</span>all<span class="token operator">&gt;</span>
agent02   <span class="token number">192.168</span>.48.139:8301  alive   server  <span class="token number">1.16</span>.1  <span class="token number">2</span>         dc1  default    <span class="token operator">&lt;</span>all<span class="token operator">&gt;</span>
agent03   <span class="token number">192.168</span>.48.140:8301  alive   server  <span class="token number">1.16</span>.1  <span class="token number">2</span>         dc1  default    <span class="token operator">&lt;</span>all<span class="token operator">&gt;</span>

<span class="token comment"># vm03-vm04</span>
$ consul members
Node     Address              Status  Type    Build   Protocol  DC   Partition  Segment
agent04  <span class="token number">192.168</span>.48.141:8301  alive   server  <span class="token number">1.16</span>.1  <span class="token number">2</span>         dc2  default    <span class="token operator">&lt;</span>all<span class="token operator">&gt;</span>
agent05  <span class="token number">192.168</span>.48.142:8301  alive   server  <span class="token number">1.16</span>.1  <span class="token number">2</span>         dc2  default    <span class="token operator">&lt;</span>all<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到DC字段不同，因为这里是虚拟机演示，所以都是在同一个网段中，现实中两个数据中心可能是异地的服务器集群。接下来让dc1的任意一个节点join到dc2的任意一个节点，这里让vm01 join vm03</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ consul <span class="token function">join</span> <span class="token parameter variable">-wan</span> <span class="token number">192.168</span>.48.141
Successfully joined cluster by contacting <span class="token number">1</span> nodes.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>join成功后，执行命令查看广域网members</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ consul members <span class="token parameter variable">-wan</span>
Node         Address              Status  Type    Build   Protocol  DC   Partition  Segment
agent01.dc1  <span class="token number">192.168</span>.48.138:8302  alive   server  <span class="token number">1.16</span>.1  <span class="token number">2</span>         dc1  default    <span class="token operator">&lt;</span>all<span class="token operator">&gt;</span>
agent02.dc1  <span class="token number">192.168</span>.48.139:8302  alive   server  <span class="token number">1.16</span>.1  <span class="token number">2</span>         dc1  default    <span class="token operator">&lt;</span>all<span class="token operator">&gt;</span>
agent03.dc1  <span class="token number">192.168</span>.48.140:8302  alive   server  <span class="token number">1.16</span>.1  <span class="token number">2</span>         dc1  default    <span class="token operator">&lt;</span>all<span class="token operator">&gt;</span>
agent04.dc2  <span class="token number">192.168</span>.48.141:8302  alive   server  <span class="token number">1.16</span>.1  <span class="token number">2</span>         dc2  default    <span class="token operator">&lt;</span>all<span class="token operator">&gt;</span>
agent05.dc2  <span class="token number">192.168</span>.48.142:8302  alive   server  <span class="token number">1.16</span>.1  <span class="token number">2</span>         dc2  default    <span class="token operator">&lt;</span>all<span class="token operator">&gt;</span>

$ consul catalog datacenters
dc2
dc1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只要dc1的随便一个节点join到dc2的任意一个节点，两个数据中心的所有节点都会感知到此变化，查看members的时候也可以看到两个数据中心的节点。</p><p>接下来尝试在vm00节点添加一个KV数据</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ consul kv put name consul
Success<span class="token operator">!</span> Data written to: name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在vm01节点尝试读取数据，可以看到同一数据中心的数据是同步的</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ consul kv get name
consul
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再去不同数据中心的vm03尝试读取数据，会发现不同数据中心的数据是不同步的。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ consul kv get name
Error<span class="token operator">!</span> No key exists at: name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,26),V={href:"https://github.com/hashicorp/consul-replicate",target:"_blank",rel:"noopener noreferrer"};function P($,j){const n=i("ExternalLinkIcon");return o(),r("div",null,[c,d,u,s("p",null,[a("官方文档："),s("a",v,[a("Consul by HashiCorp"),e(n)])]),s("p",null,[a("开源地址："),s("a",m,[a("hashicorp/consul"),e(n)])]),b,s("p",null,[a("或者也可以在官网下载"),s("a",g,[a("Install Consul"),e(n)]),a("对应的安装包，由于consul是由go开发的，安装包本身也就只有一个二进制可执行文件，安装起来也相当的方便，安装成功后，执行如下命令查看版本。")]),k,s("div",h,[f,s("p",null,[a("关于更多的agent参数释义，前往"),s("a",_,[a("Agents - CLI Reference | Consul | HashiCorp Developer"),e(n)]),a("，需要注意的是有些参数只有企业版能用。")])]),q,s("div",x,[y,s("p",null,[a("更多词汇和术语可以前往"),s("a",C,[a("Glossary | Consul | HashiCorp Developer"),e(n)]),a("进行了解。")])]),S,s("div",I,[D,s("p",null,[a("虚拟机在演示的时候关闭了所有的防火墙，在实际生产环境中为了安全考虑应该开启，为此应该关注下consul使用到的所有端口："),s("a",T,[a("Required Ports | Consul | HashiCorp Developer"),e(n)]),a("。")])]),w,s("p",null,[a("如果想要多数据中心数据同步的话，可以了解"),s("a",V,[a("hashicorp/consul-replicate: Consul cross-DC KV replication daemon"),e(n)]),a("。")])])}const L=t(p,[["render",P],["__file","consul.html.vue"]]);export{L as default};
