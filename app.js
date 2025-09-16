const { defineConfig } = require("./.app/app-config");

module.exports = defineConfig({
  title: "Desert Sand 🏜️",
  description: "The personal notes of DesertSand",
  customProperties: {
    properties: [
      {
        name: "created",
        options: {
          date: {
            locale: "ko-KR",
            format: { dateStyle: "full" },
          },
        },
      },
    ],
  },
  lang: "ko",
  sidebar: {
    links: [
      {
        url: "https://github.com/DesertSand249",
        label: "GitHub",
        icon: "github",
	openInNewTab: true
      }
    ]
  }
});
