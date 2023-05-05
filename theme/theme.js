import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
    hostname: "https://aydk-xcc.github.io/",
    author: {
        name: "aydk"
    },
    favicon: '',
    iconAssets: "iconfont",
    logo: "/logo.png",
    title: 'Monaco-editor 学习文档',
    repo: "aydk-xcc/monaco-editor-docs",
    docsDir: "docs",
    navbar: navbar,

    // sidebar
    sidebar: sidebar,

    footer: "MIT Licensed | Copyright © 2018-present Evan You",
    displayFooter: true,

    metaLocales: {
        editLink: "Edit this page on GitHub",
    },

    plugins: {
    // all features are enabled for demo, only preserve features you need here
        mdEnhance: {
            align: true,
            attrs: true,
            chart: true,
            codetabs: true,
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
                replacer: ({ tag }) => {
                if (tag === "em")
                    return {
                    tag: "Badge",
                    attrs: { type: "tip" },
                    content: "Recommended",
                    };
                },
            },
            ],
            sub: true,
            sup: true,
            tabs: true,
            vPre: true,
            vuePlayground: true,
        }
    },
});
