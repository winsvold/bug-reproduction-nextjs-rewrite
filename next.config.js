module.exports = {
    basePath: '/basepath',
    rewrites: () => [
        {source: "/no/cms/:path*", destination: "/cms/index.html", locale: false}
    ],
    i18n: {
        locales: ["no", "en"],
        defaultLocale: "no",
    },
}
