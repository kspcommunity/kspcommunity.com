import { Footer } from "shared/footer.ts";
import { Body, Box, Label, WebGen } from "webgen/mod.ts";
import { DynaNavigation } from "../../components/nav.ts";
import { RegisterAuthRefresh } from "../_legacy/helper.ts";
import "./flowText.css";
WebGen();
await RegisterAuthRefresh();

Body(Box(
    DynaNavigation("Home"),
    Box(
        Label("Privacy Policy", "h2"),
        Label(
            `KSP Community and its subsidiaries and affiliates (collectively, “KSP Community”) are responsible for this website, including its mobile versions, and we are committed to respecting the privacy of visitors to both. KSP Community has implemented technical, administrative and physical measures to safeguard any personal information that we may collect.`,
        ),
        Label(`This Privacy Notice describes our practices related to personal information collected through KSP Community websites and mobile versions, unless there is a separate privacy notice for the website or mobile version.`),
        Label(`Does this Notice apply to all KSP Community Websites?`, "h3"),
        Label(
            `This Privacy Notice applies to visitors of KSP Community websites that link to this Privacy Notice. Individual websites for KSP Community entities, services and products may adopt different privacy notices because the transactions taking place on those websites may be different. If an KSP Community website has its own privacy notice, the provisions of that notice apply to that website.`,
        ),
        Label(`What personal information does KSP Community collect?`, "h3"),
        Label(
            `KSP Community monitors user traffic patterns throughout the website according to a user’s domain name, browser type, date and time of access, and pages viewed. This information is collected in order to measure the number of visitors to our website and to determine which areas users find useful based upon the traffic to particular areas. KSP Community uses this information to enhance visitors’ experience and to better prepare future content based on the interests of visitors.`,
        ),
        Label(
            `A visitor to our website may be asked to provide personal information to receive a response or some other service from KSP Community. The personal information that you may be requested to provide includes your name, email address and any information that you choose to provide. The collection of information will be transparent to you – you will be asked for it and will have the opportunity to decide whether or not to provide it. If you choose not to provide any of the personal information requested, KSP Community may be unable to complete the transaction you have requested.`,
        ),
        Label(`Your mobile provider may have a conflicting privacy position that captures personal information when you visit our website, but KSP Community is not responsible for and does not control how other parties may collect your information when you access our website(s).`),
        Label(`How does KSP Community use the personal information it collects?`, "h3"),
        Label(`Any personal information collected will only be used to:`),
        Box(
            Label(`conduct basic business operations, such as communicate with customers and business planning;`),
            Label(`provide investor services;`),
            Label(`provide the information, item or service you have requested;`),
            Label(`communicate with you about products, services and events relating to KSP Community;`),
            Label(`improve our products, services and websites;`),
            Label(`verify your identity to ensure security for one of the other purposes listed here;`),
            Label(`respond to a legitimate legal request from law enforcement authorities or other government regulators;`),
            Label(`investigate suspected or actual illegal activity;`),
            Label(`support the sale or transfer of all or a portion of our business or assets (including through bankruptcy); and/or`),
            Label(`conduct investigations to ensure compliance with, and comply with, legal obligations.`),
        ).addClass("list"),
        Label(`Information that individuals submit to express interest in, or be considered for, an employment opportunity with KSP Community is covered by the applicable https://hrtechprivacy.com/brands/indeed#privacypolicy (Indeed Privacy Policy).`),
        Label(`Except where used in support of a contract with you or to fulfill a legal obligation, our use of your personal information will be only for legitimate business interests as set forth above.`),
        Label(`Where does KSP Community store your information?`, "h3"),
        Label(
            `Because KSP Community is a global company with locations in many different countries, we may transfer your information from one legal entity to another or from one country to another in order to accomplish the purposes listed above. These countries include, at a minimum, the United States, the member states of the European Union, the United Kingdom, Canada and other countries, including some in Asia. We will transfer your personal information consistent with applicable legal requirements and only to the extent necessary for the purposes set forth above.`,
        ),
        Label(
            `KSP Community relies on available legal mechanisms to enable the legal transfer of personal information across borders. To the extent that KSP Community relies on the standard contractual clauses (also called the model clauses) or Binding Corporate Rules to authorize transfer, KSP Community will comply with those requirements, including where there may be a conflict between those requirements and this Notice.`,
        ),
        Label(`Does KSP Community use your personal information to contact you?`, "h3"),
        Label(`KSP Community does not use the personal information collected on this website to contact you except in response to a direct inquiry or if you register for communications in the Investors section of this site.`),
        Label(`Does KSP Community share the information it collects with any third parties?`, "h3"),
        Label(
            `KSP Community may share your Personal Information with our subsidiaries and affiliated companies (the “KSP Community Group”). When KSP Community transfers your Personal Information within the KSP Community Group, it will do so consistent with applicable law and KSP Community’s Binding Corporate Rules, which are available above in many languages.`,
        ),
        Label(
            `In addition, KSP Community may provide access to or share Personal Information on an as-needed basis with third parties, such as trusted service providers, consultants and contractors who are granted access to KSP Community facilities or systems, and with government agencies and others as required by law. KSP Community will only share your information outside the KSP Community Group to:`,
        ),
        Box(
            Label(
                `allow service providers KSP Community has retained to perform services on our behalf. In those cases, KSP Community will only share the information with service providers for the purposes outlined above. These service providers are contractually restricted from using or disclosing the information except when it is necessary to perform services on our behalf or to comply with legal requirements;`,
            ),
            Label(
                `comply with legal obligations, including but not limited, to complying with tax and regulatory obligations, sharing data with labor/trade unions and works councils, and responding to a court proceeding or a legitimate legal request from law enforcement authorities or other government regulators;`,
            ),
            Label(`investigate suspected or actual illegal activity;`),
            Label(`prevent physical harm or financial loss; or`),
            Label(`support the sale or transfer of all or a portion of our business or assets (including through bankruptcy).`),
        ).addClass("list"),
        Label(`Your personal information may also be maintained and processed by our service providers in countries other than the one in which it was collected, such as the United States, member states of the European Union, Canada and other jurisdictions.`),
        Label(`How long does KSP Community retain personal information?`, "h3"),
        Label(
            `KSP Community will retain personal information as long as needed to comply with its contractual and legal obligations. If the personal information is not subject to contractual or legal obligations, KSP Community will retain the data for as long as is required for the original purpose for which it was collected.`,
        ),
        Label(`How does KSP Community use cookies or other tracking technologies?`, "h3"),
        Label(
            `KSP Community uses cookies on this website. Cookies are small text files sent to and stored on users’ computers that allow websites to recognize repeat users, facilitate users’ access to websites and allow websites to compile aggregate data that will allow content improvements. Cookies do not damage users’ computers or files. If you do not want cookies to be accessible by this or any other KSP Community website, you should adjust the settings on your browser program to deny or disable the use of cookies. The cookies that KSP Community uses on this site do not identify you. The cookies simply provide KSP Community with aggregate, anonymous analytics about the number of people visiting particular pages on this website.`,
        ),
        Label(
            `This website may also use web beacons. A web beacon is usually a pixel on a website that can be used to track whether a user has visited a particular website to deliver targeted advertising. Web beacons are used in combination with cookies, which means that, if you turn off your browser’s cookies, the web beacons will not be able to track your activity. The web beacon will still account for a website visit, but your unique information will not be recorded.`,
        ),
        Label(`KSP Community may also use cookies and similar technology placed by one of our business partners to enable KSP Community to learn which advertisements bring users to our website. For more information about cookies and other tracking technologies, click https://www.allaboutcookies.org/.`),
        Label(`What should you understand about the third-party links that may appear on this website?`, "h3"),
        Label(
            `In some instances, KSP Community may provide links to non-KSP Community controlled websites, which KSP Community will make reasonable efforts to identify as such. KSP Community does not control such third-party websites, however, and cannot be responsible for the content or the privacy practices employed by other websites.`,
        ),
        Label(`What additional information should specific users know?`, "h3"),
        Label("Parents, guardians and children:").setFontWeight("semibold").addClass("block"),
        Label(
            `This website is intended for visitors who are at least 18 years of age and the age of majority in their jurisdiction of residence. KSP Community does not knowingly solicit information from, or market products or services to, children. If you do not meet the age requirements set out above, please do not enter your personal information on this or any other KSP Community website.`,
        ),
        Label(`Residents of California:`).setFontWeight("semibold").addClass("block"),
        Label(`California Shine the Light Law:\xA0`).addClass("block"),
        Label(`California residents may annually request and obtain information that is shared with other businesses for their own direct marketing use within the prior calendar year. KSP Community does not share your personal information with other businesses for their own direct marketing use.`).addClass(
            "block",
        ),
        Label(`California Consumer Privacy Act:\xA0`).addClass("block"),
        Label(
            `Except for those who interact with KSP Community as employees and contractors, those whose information we have because of their relationship with employees and contractors (such as family members receiving health benefits or emergency contacts), job applicants, those whose information we have because of their relationship with job applicants (such as references), and those whose information we have as a result of a business-to-business interaction or relationship (such the personnel of a business customer or vendor), California residents have the right to`,
        ).addClass("block"),
        Box(
            Label(`request details about the personal information that we have about you, including the categories of information, the purpose for which we use it, with whom we share it, and specific information about what personal information we have about you specifically;`),
            Label(`request that your data be deleted; and`),
            Label(`direct a company not to sell your data, but, since KSP Community does not sell personal information, this does not apply.`),
        ).addClass("list"),
        Label(
            `If you are a California resident not covered by the exclusions mentioned above and you would like to exercise your rights, you should contact KSP Community by emailing us at support@kspcommunity.com. Please provide your name, a way for KSP Community to contact you (such as an email address or telephone number) so that we can respond to your request, information about the nature of your relationship with us (for example, are you a visitor to our website or a shareowner), and details about the action that you would like us to take.\xA0 Based on your request, we will investigate to determine if we have any of your personal information. If we do have your personal information (other than that provided in your request), we will seek to verify your identity based on the personal information that we already have; the data we will request will depend on the nature of the personal information we have about you. Once we verify your identity, we will provide you with a response, indicating how we will satisfy your request or why we cannot comply with your request.`,
        ).addClass("block"),
        Label(`Users from the European Union and other countries with privacy laws:`).setFontWeight("semibold").addClass("block"),
        Label(
            `You have the right to lodge a complaint with your national or state supervisory authority. You also have the right to request access to and correction or erasure of your personal information, seek restrictions on or object to the processing of certain personal information, and seek data portability under certain circumstances. To contact KSP Community about a request to access, correct, erase, object or seek restrictions or portability, please use the contact methods indicated at the end of this notice.`,
        ).addClass("block"),
        Label(`Users from the United States:`).setFontWeight("semibold").addClass("block"),
        Label(
            `KSP Community does not collect Social Security Numbers through www.kspcommunity.com. KSP Community does, however, collect Social Security Numbers where required by law, such as tax and payroll purposes for its employees. When KSP Community collects and/or uses Social Security Numbers, KSP Community will take proper care by protecting confidentiality, limiting collection, ensuring access on a need-to-know basis, implementing appropriate technical safeguards and ensuring proper disposal.`,
        ).addClass("block"),
        Label(`How might KSP Community change this policy?`, "h3"),
        Label(
            `As KSP Community expands and improves this website, we may need to update this policy. This policy may be modified from time to time without prior notice. We encourage you to review this policy on a regular basis for any changes. The date of the latest version will be identified at the bottom of the policy.`,
        ).addClass("block"),
        Label(`How can you contact KSP Community?`, "h3"),
        Label(
            `If you have any comments or questions, or if there are other things we can do to maximize the value of this website to you, please email support@kspcommunity.com. If you wish to access, correct or update your personal information, or if you have questions about KSP Community’s privacy practices in general or a complaint, please email support@kspcommunity.com.`,
        ).addClass("block"),
        Label(`In the event that you are located in a country that will be governed by the General Data Protection Regulation and would like to contact the local Data Protection Officer, please note that in your email, and your inquiry will be directed to the appropriate person.`).addClass("block"),
        Label(`Last updated: March 17, 2021`),
    ).addClass("flow-text"),
    Footer(),
));
