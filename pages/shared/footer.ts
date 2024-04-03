import { BIcon, Box, ButtonStyle, Grid, IconButton, Image, Label, LinkButton } from "webgen/mod.ts";
import { splash } from "../../assets/imports.ts";
import "./footer.css";

export function Footer() {
    return Box(
        Box(
            Image(splash, "Splash Image").addClass("splash-image"),
            Box(
                Box(
                    Label("Looks Dope?\nJoin now!").addClass("title"),
                    Label("Delivering Excellence. Empowering Businesses and\nIndividuals with Premium Services")
                        .addClass("subtitle"),
                ).addClass("text-section"),
                LinkButton("Get started", "/signin")
                    .addClass("round-button", "large-button"),
            ).addClass("area-fg"),
            Box(
                Box(
                    ...[
                        ["Company", [
                            ["About Us", "/p/about"],
                            ["FAQs", "https://kspcommunity.com"],
                            ["Terms of Use", "/p/terms-of-use"],
                            ["Privacy Policy", "/p/privacy-policy"],
                            ["Cookies Policy", "/p/cookies"],
                            ["Contact Us", "mailto:support@kspcommunity.com"],
                            ["Distribution Agreement", "/p/distribution-agreement"],
                        ]] as const,

                        ["Products", [
                            ["Craft File Reader", "https://github.com/kspcommunity/Craft-File-Reader"],
                            ["Discord Bot", "https://github.com/kspcommunity/KSP-Community-Bot"],
                            ["Mod Parts List", "https://github.com/kspcommunity/Mod-Parts-Lister"],
                            ["Mod Parts List Endpoints", "https://mod-parts.kspcommunity.com"],
                        ]] as const,

                        ["Use Cases", [
                            ["Report", "/report"],
                            ["Contribute Mod", "/contribute"],
                        ]] as const,

                        ["Resources", [
                            ["Blog", "https://github.com/orgs/kspcommunity/discussions/2"],
                            ["Status Page", "https://status.kspcommunity.com/"],
                            ["Open Source", "https://github.com/kspcommunity"],
                            ["Support", "mailto:support@kspcommunity.com"],
                        ]] as const,
                    ].map(([text, items]) =>
                        Grid(
                            Label(text)
                                .addClass("title"),
                            ...items.map(([title, link]) =>
                                LinkButton(title, link)
                                    .addClass("link")
                                    .setStyle(ButtonStyle.Inline)
                            ),
                        ).addClass("column")
                    ),
                ).addClass("grouped-links"),
                Grid(
                    Grid(
                        ...[
                            ["youtube", "Youtube", "https://www.youtube.com/@G9AEROSPACEYT"],
                            ["discord", "Discord", "https://discord.gg/jGmTUUPVtX"],
                            ["instagram", "Instagram", "https://www.instagram.com/g9aerospace"],
                            ["github", "GitHub", "https://github.com/kspcommunity"],
                        ]
                            .map(([icon, aria, link]) =>
                                IconButton(BIcon(icon), aria)
                                    .addClass("icon")
                                    .asLinkButton(link)
                            ),
                    ).addClass("icons"),
                    LinkButton("Join Now", "/signin")
                        .setStyle(ButtonStyle.Secondary)
                        .addClass("round-button"),
                    LinkButton("Contact Us", "mailto:support@kspcommunity.com")
                        .addClass("round-button"),
                )
                    .addClass("icon-bar"),
            ).addClass("area-bg"),
        ).addClass("footer"),
    ).addClass("footer-space");
}
