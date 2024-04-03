import { serve } from "https://deno.land/x/esbuild_serve@1.3.4/mod.ts";
// import { serve } from "../esbuild_serve/mod.ts";

const title = new Map(Object.entries({
    "admin": "KSP Community Admin",
    "admin/review": "KSP Community - Review Drop",
    "hosting": "KSP Community Hosting",
    "hosting/create": "KSP Community Hosting",
    "settings": "KSP Community - Settings",
    "wallet": "KSP Community Wallet",
    "music": "KSP Community Music",
    "c/music": "KSP Community Music - Console",
    "c/music/new-drop": "KSP Community Music - New Drop",
    "c/music/edit": "KSP Community Music - Edit Drop",
    "c/music/payout": "KSP Community Music - Payouts",
    "p/privacy-policy": "KSP Community - Privacy Policy",
    "p/terms-of-use": "KSP Community - Terms of Use",
    "p/about": "KSP Community - About"
}));

const description = new Map(Object.entries({
    "default": "KSP Community encompasses a variety of businesses, including music and hosting services. KSPC provides music distribution, publishing, and label services, while BBN Hosting offers Minecraft hosting services.",
    "music": "KSPC, your gateway to unlimited music distribution at a low cost. Maximize your reach without limits. Join us and let the world hear your music.",
}));

serve({
    port: 6969,
    extraLoaders: {
        ".webp": "file",
        ".jpg": "file",
    },
    assets: {
        "sitemap.xml": "./static/sitemap.xml",
        "robots.txt": "./static/robots.txt",
        "mitm.html": "./static/mitm.html",
        "sw.js": "./static/sw.js",
        "favicon.ico": "./static/favicon.ico",
        "email-header.png": "./static/email-header.png",
        "app.webmanifest": "./static/app.webmanifest",
        ".well-known/passkey-endpoints": "./static/.well-known/passkey-endpoints",
        "images/icons/icon-72x72.png": "./static/images/icons/icon-72x72.png",
        "images/icons/icon-96x96.png": "./static/images/icons/icon-96x96.png",
        "images/icons/icon-128x128.png": "./static/images/icons/icon-128x128.png",
        "images/icons/icon-144x144.png": "./static/images/icons/icon-144x144.png",
        "images/icons/icon-152x152.png": "./static/images/icons/icon-152x152.png",
        "images/icons/icon-192x192.png": "./static/images/icons/icon-192x192.png",
        "images/icons/icon-384x384.png": "./static/images/icons/icon-384x384.png",
        "images/icons/icon-512x512.png": "./static/images/icons/icon-512x512.png",
        "images/apple.png": "./static/images/apple.png",
    },
    pages: {
        "index": "./pages/holding/index.ts",
        "p/privacy-policy": "./pages/holding/privacyPolicy.ts",
        "p/terms-of-use": "./pages/holding/termsOfUse.ts",
        "p/about": "./pages/holding/about.ts",
        "p/distribution-agreement": "./pages/holding/distributionAgreement.ts",
        "p/cookies": "./pages/holding/cookies.ts",
        "signin": "./pages/user/signin.ts",
        "callback": "./pages/_legacy/misc/callback.ts",
        "oauth": "./pages/user/oauth.ts",
        "music": "./pages/music-landing/main.ts",
        "c/music": "./pages/music/main.ts",
        "c/music/new-drop": "./pages/music/newDrop.ts",
        "c/music/edit": "./pages/_legacy/music/edit.ts",
        "c/music/payout": "./pages/payout/main.ts",
        "hosting": "./pages/hosting/main.ts",
        "hosting/create": "./pages/hosting/views/create.ts",
        "settings": "./pages/user/settings.ts",
        "admin": "./pages/admin/admin.ts",
        "admin/review": "./pages/admin/review.ts",
        "wallet": "./pages/wallet/wallet.ts",
    },
    defaultTemplate: createTemplate,
    poylfills: [
        "./polyfill.ts",
        "./bug-reporter.ts",
        "https://cdn.jsdelivr.net/npm/native-file-system-adapter@3.0.1/mod.js",
        "https://unpkg.com/urlpattern-polyfill",
        "https://raw.githubusercontent.com/ungap/with-resolvers/main/index.js",
        "https://unpkg.com/@oddbird/popover-polyfill",
    ],
});

function createTemplate(name: string, path: string) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <title>${title.get(path) ?? "KSP Community"}</title>
    <link rel="manifest" href="/app.webmanifest">
    <meta charset='UTF-8'>
    <meta name="description" content="${description.get(path) ?? description.get("default")}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name='theme-color' content='black'>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-mobile-web-app-title" content="${title.get(path) ?? "KSP Community"}">
    <meta name="google" content="notranslate"/>
    <link rel="apple-touch-icon" href="/images/apple.png">
    <link rel="stylesheet" href="${name}.css">
</head>

<body>
    <script src="${name}.js" type="module"></script>
</body>

</html>
    `.trim();
}
