import {hopeTheme} from "vuepress-theme-hope";
import {zhNavbar} from "./navbar";
import {zhSidebar} from "./sidebar";

export default hopeTheme({
    hotReload: true, //热重载

    hostname: "https://golang.halfiisland.com/",
    author: {
        name: "寒江蓑笠翁",
        url: "https://246859.github.io/",
        email: "2633565580@qq.com"
    },
    iconAssets: "iconfont",
    // 主题色
    themeColor: {
        purple: "#5C6AC4",
        red: "#f26d6d",
        green: "#3eaf7c",
        orange: "#fb9b5f",
    },
    sidebarSorter: ["filename", "order", "date", "readme"],
    // logo
    logo: "/logo.png",
    // 仓库
    repo: "Open-Source-CQUT/Golang-Doc",
    // 版权
    copyright: "MIT Licensed | Copyright © 2021-present 寒江",
    // 是否展示脚注
    displayFooter: false,
    // 仓库中的文件夹
    docsDir: "/src",
    // 导航栏
    navbar: zhNavbar,
    // 侧边栏
    sidebar: zhSidebar,

    // page meta
    metaLocales: {
        editLink: "在 GitHub 上编辑此页",
    },



    plugins: {
        git:true,
        autoCatalog: true,
        readingTime: {
            wordPerMinute: 150
        },
        // markdown增强
        mdEnhance: {
            align: true,
            attrs: true,
            chart: true,
            codetabs: true,
            container: true,
            demo: true,
            echarts: true,
            figure: true,
            flowchart: true,
            gfm: true,
            imgLazyload: true,
            imgSize: true,
            include: true,
            katex: true,
            mark: true,
            mermaid: true,
            playground: {
                presets: ["ts", "vue"],
            },
            presentation: {
                plugins: ["highlight", "math", "search", "notes", "zoom"],
            },
            stylize: [
                {
                    matcher: "Recommended",
                    replacer: ({tag}) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: {type: "tip"},
                                content: "Recommended",
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
            tabs: true,
            vPre: true,
            vuePlayground: false,
        },
    },
});
