import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Sinpom Docs",
  tagline: "Documentação do portal sinpom",
  favicon: "img/favicon.ico",
  url: "https://giluansouza.github.io",
  baseUrl: "/",
  organizationName: "giluansouza", // Usually your GitHub org/user name.
  projectName: "docs-sinpom", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Sinpom Docs",
      logo: {
        alt: "Sinpom Docs Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "getting-starter/intro",
          position: "left",
          label: "Começando",
        },
        {
          type: "doc",
          docId: "configuration",
          position: "left",
          label: "Configuração",
        },
        {
          type: "doc",
          docId: "development",
          position: "left",
          label: "Desenvolvimento",
        },
        {
          type: "doc",
          docId: "deployment",
          label: "Implantação",
          position: "left",
        },
        {
          type: "doc",
          docId: "references/changelog",
          label: "Alterações",
          position: "left",
        },
        {
          type: "doc",
          docId: "contributing",
          label: "Contribuição",
          position: "left",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/giluansouza/docs-sinpom",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentação",
          items: [
            { label: "Introduction", to: "/docs/getting-starter/intro" },
            { label: "Configuration", to: "/docs/configuration" },
            { label: "Development", to: "/docs/development" },
            { label: "Deployment", to: "/docs/deployment" },
            { label: "References", to: "/docs/references/changelog" },
            { label: "Contributing", to: "/docs/contributing" },
          ],
        },
        {
          title: "Community",
          items: [
            { label: "GitHub", href: "https://github.com/giluansouza" },
            { label: "Twitter", href: "https://twitter.com/your-profile" },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
