/**
 * @todo Create also design tool appearing with the navigation between the dialogs along their first 100 characters in question.
 * If main page receives ?inspector=true and msgId=id|number to show the message.
 */
import { type ReactNode } from "react";
import { JoinWaitlistDialogRegistration } from "@/components/star/JoinWaitlistDialogRegistration";
import { MaintainerConvinceFeedback } from "@/components/star/MaintainerConvinceFeedback";
import { MaintainerJoinRegistration } from "@/components/star/MaintainerJoinRegistration";
import SocialLink from "@/components/utilitified_decorations/SocialLink";
import { socialLinks } from "@/types/ara";

export const title = "Cascadefund &ndash; building into open source ecosystem with minimal burnout communication to users.";

const maintainerEndSocialIconClass =
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-400/40 bg-transparent transition-colors hover:bg-white/25 dark:border-slate-500/45 dark:hover:bg-white/10";

export type Answer = {
    label: string;
    goto: number | string;
}

export type Dialog = {
    id: number | string;
    q: string;
    a: Answer[];
    content?: ReactNode;
}

/** Same `href`s as `landing.astro` hero-network rows (Google / Apple / Microsoft / Meta). */
const landingHeroBigTechAppIcons: { src: string; alt: string }[][] = [
    [
        { src: "https://cdn.simpleicons.org/gmail", alt: "Gmail" },
        { src: "https://cdn.simpleicons.org/googledrive", alt: "Google Drive" },
        { src: "https://cdn.simpleicons.org/googledocs", alt: "Google Docs" },
        { src: "https://cdn.simpleicons.org/googlecalendar", alt: "Google Calendar" },
        { src: "https://cdn.simpleicons.org/googlemaps", alt: "Google Maps" },
        { src: "https://cdn.simpleicons.org/youtube", alt: "YouTube" },
    ],
    [
        { src: "https://cdn.simpleicons.org/appstore", alt: "App Store" },
        { src: "https://cdn.simpleicons.org/safari", alt: "Safari" },
        { src: "https://cdn.simpleicons.org/imessage", alt: "iMessage" },
        { src: "https://img.icons8.com/color/48/facetime.png", alt: "FaceTime" },
        { src: "https://cdn.simpleicons.org/icloud", alt: "iCloud" },
        { src: "https://cdn.simpleicons.org/applemusic", alt: "Apple Music" },
    ],
    [
        { src: "https://img.icons8.com/color/48/azure-1.png", alt: "Azure" },
        { src: "https://img.icons8.com/color/48/xbox.png", alt: "Xbox" },
        { src: "https://img.icons8.com/color/48/microsoft-outlook-2019.png", alt: "Outlook" },
        { src: "https://img.icons8.com/color/48/microsoft-teams.png", alt: "Microsoft Teams" },
        { src: "https://img.icons8.com/color/48/microsoft-onedrive-2019.png", alt: "OneDrive" },
        { src: "https://img.icons8.com/color/48/windows-11.png", alt: "Windows 11" },
    ],
    [
        { src: "https://cdn.simpleicons.org/facebook", alt: "Facebook" },
        { src: "https://cdn.simpleicons.org/instagram", alt: "Instagram" },
        { src: "https://cdn.simpleicons.org/messenger", alt: "Messenger" },
        { src: "https://cdn.simpleicons.org/threads", alt: "Threads" },
        { src: "https://cdn.simpleicons.org/whatsapp", alt: "WhatsApp" },
    ],
] as const;

const landingHeroGoogleRowIcons = landingHeroBigTechAppIcons[0];
const landingHeroAppleRowIcons = landingHeroBigTechAppIcons[1];
const landingHeroMicrosoftRowIcons = landingHeroBigTechAppIcons[2];
const landingHeroMetaRowIcons = landingHeroBigTechAppIcons[3];

function LandingHeroDiagramAppIcon({
    src,
    alt,
}: {
    src: string;
    alt: string;
}) {
    return (
        <img
            src={src}
            alt={alt}
            width={16}
            height={16}
            className="h-[1em] w-[1em] shrink-0 object-contain align-middle opacity-[0.88] shadow-[0_1px_2px_rgba(15,23,42,0.14)] dark:opacity-90"
            loading="lazy"
            decoding="async"
        />
    );
}

/** Inline headset glyph matching the last Meta slot in `landing.astro` hero SVG. */
function LandingHeroMetaVrDiagramIcon() {
    return (
        <svg
            viewBox="0 0 28 28"
            width={16}
            height={16}
            className="h-[1em] w-[1em] shrink-0 align-middle opacity-[0.88] dark:opacity-90"
            aria-hidden
        >
            <rect x="0" y="0" width="28" height="28" rx="7" className="fill-slate-800 dark:fill-slate-950" />
            <ellipse
                cx="14"
                cy="14"
                rx="8.5"
                ry="5.5"
                fill="none"
                stroke="#a5f3fc"
                strokeWidth="1.4"
            />
            <circle cx="10.5" cy="14" r="1.1" fill="#a5f3fc" />
            <circle cx="17.5" cy="14" r="1.1" fill="#a5f3fc" />
        </svg>
    );
}

function LandingHeroBigTechDiagramBlock({
    brand,
    companyLogoSrc,
    companyLogoAlt,
    appIcons,
    withMetaVrSuffix,
}: {
    brand: string;
    companyLogoSrc: string;
    companyLogoAlt: string;
    appIcons: { src: string; alt: string }[];
    /** Meta row ends with the landing hero’s inline VR headset glyph (no raster URL). */
    withMetaVrSuffix?: boolean;
}) {
    return (
        <div className="mb-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm leading-normal text-slate-500 last:mb-0 md:text-base">
            <span className="inline-flex shrink-0 items-center gap-1.5">
                <img
                    src={companyLogoSrc}
                    alt={companyLogoAlt}
                    width={16}
                    height={16}
                    className="h-[1em] w-[1em] object-contain opacity-90"
                    loading="lazy"
                    decoding="async"
                />
                <strong className="text-slate-600 dark:text-slate-100">{brand}</strong>
            </span>
            <span className="inline-flex min-w-0 flex-wrap items-center gap-1">
                {appIcons.map((icon) => (
                    <LandingHeroDiagramAppIcon key={icon.src} src={icon.src} alt={icon.alt} />
                ))}
                {withMetaVrSuffix ? <LandingHeroMetaVrDiagramIcon /> : null}
            </span>
        </div>
    );
}

export const greetingDialog: Dialog[] = [
    {
        id: 1,
        q: "Are you maintaining an open source project?",
        a: [
            { label: "Yes", goto: "maintainer-1" },
            { label: "No, I'm using them", goto: "user-1" },
            { label: "I do both", goto: 2 }
        ],
    },
    {
        id: 2,
        q: "Should I explain CascadeFund first",
        a: [
            { label: "To users", goto: "user-1" },
            { label: "To maintainers", goto: "maintainer-1" }
        ]
    }
]

export const maintainerDialog: Dialog[] = [
    {
        id: "maintainer-1",
        q: "Are you worried about similar projects in the market, solving same issue as you?",
        a: [
            { label: "Yes", goto: "maintainer-2" },
            { label: "No", goto: "maintainer-2" },
        ]
    },
    {
        id: "maintainer-2",
        content: <><p>Technology is moving fast.</p><p>I can't keep up with the the trends in AI and Web.</p></>,
        q: "Are you worried you might be behind, as I am?",
        a: [
            { label: "Yes 🙁", goto: "maintainer-3" },
            { label: "Not that much", goto: "maintainer-3" }
        ]
    },
    {
        id: "maintainer-3",
        content: "You want your app to be popular?",
        q: "What if millions use your app and shows gratitude to you?",
        a: [
            { label: "Yes 😊", goto: "maintainer-4" },
            { label: "Not really", goto: "maintainer-4" }
        ]
    },
    {
        id: "maintainer-4",
        content: "What if you receive funds automatically from millions of users?",
        q: "Without much responsibility or commercialization",
        a: [
            { label: "Yes 😃", goto: "maintainer-8" },
            { label: "Not important", goto: "maintainer-8" },
            { label: "Skeptical?", goto: "maintainer-6" }
        ]
    },
    {
        id: "maintainer-6",
        content: <>I'm against turning each open-source project into a commercial business too.<p className="mt-2">Users fund entire OSS ecosystem as a whole. <br />They are funding your refactoring hours to match propriety software quality</p></>,
        q: "That's why CascadeFund is launching",
        a: [
            { label: "Quick details", goto: "maintainer-7" }
        ]
    },
    {
        id: "maintainer-7",
        content: <>We as open-source maintainers solve OSS sustainability by creating a single coherent ecosystem.<p className="mt-2">Where maintainers impact the ecosystem, set standards and protocols by ourselves</p></>,
        q: "Do you want your project to be part of something bigger?",
        a: [
            { label: "Yes", goto: "maintainer-8" },
            { label: "Not sure 🤷", goto: "maintainer-8" }
        ]
    },
    {
        id: "maintainer-8",
        content: <>Right, do you want to find like-minded people instead building alone?
            <p className="mt-2">For example, if you are developing a game engine, how about connecting with a maintainer of 3D modelling app?</p></>,
        q: "Together, you create seamless OSS experience for game developers, without vendor locking?",
        a: [
            { label: "Yes 🥰", goto: "maintainer-9" },
            { label: "Maybe", goto: "maintainer-9" }
        ]
    },
    {
        id: "maintainer-9",
        content: <>How do users communicate with the ecosystem and with you?<p className="mt-2">CascadeFund aggregates all user feedbacks to cut to the chase.</p></>,
        q: "Generally, the communication is a weekly email in your inbox",
        a: [
            { label: "Sounds good 😲", goto: "maintainer-10" }
        ]
    },
    {
        id: "maintainer-10",
        content: (
            <>
                <p className="leading-relaxed">
                    Users fund the ecosystem monthly. To be part of the ecosystem, there are only three things you need to do.
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed">
                    <li>
                        <span className="font-medium">1)</span> Before coding a breaking change, inform CascadeFund by replying to the weekly email.
                    </li>
                </ul>
                We collect user votes and aggregate feedback for you.
            </>
        ),
        q: "If 51% vote no, the change doesn't ship",
        a: [
            { label: "No worries 👌🏼, what's second?", goto: "maintainer-13" },
            { label: "Thats too much", goto: "maintainer-11" },
        ]
    },
    {
        id: "maintainer-11",
        content: <>People don't like breaking changes.
            <p className="mt-2">I was spending days with updating code after version upgrade 🤯.<br /> It's annoying to see a warning that I use a deprecated API 🫩.</p></>,
        q: "Remember from your own experience, is it nice?",
        a: [
            { label: "No 🎯", goto: "maintainer-12" },
        ]
    },
    {
        id: "maintainer-12",
        content: <>In Tech world breaking changes happens constantly without hearing users desires.
            <p className="mt-2">Even in user interfaces too. If I want to use app after a year, with some I need to re-learn it again</p></>,
        q: "Let's create together the first open-source ecosystem with stable apps that don't break unless it's absolutely necessary",
        a: [
            { label: "Agree 🙂‍↕️, what's the second?", goto: "maintainer-13" }
        ]
    },
    {
        id: "maintainer-13",
        content: <>Weekly emails include the features needed by users.
            <p className="mt-2">You could reject it, implement by yourself, or reply to an email wishing a contributor for it.</p></>,
        q: "The second thing is implementing the features, together, that's all.",
        a: [
            { label: "What's the last thing?", goto: "maintainer-14" },
        ]
    },
    {
        id: "maintainer-14",
        content: <>Weekly emails could include other OSS projects users use along with your project.
            <p className="mt-2">Contact them, and build your own standard, protocols together.</p></>,
        q: "The third and last thing is to make your app work seamlessly with other apps. You build ecosystem together 🤝.",
        a: [
            { label: "Sounds great", goto: "maintainer-15" },
        ]
    },
    {
        id: "maintainer-15",
        content: <>Do you worry about CascadeFund?
            <p className="mt-2">Maybe someone might fork your app and get funds from users directly? <br />
                Maybe CascadeFund is a bottleneck, or centralizes it's power?</p>
            <p className="mt-2">CascadeFund is a community of maintainers and users, while emails are advisory for each side.</p>
            <p className="mt-2">To assure you, CascadeFund uses blockchain for reputation. It's immutable by nature, which means once project loses reputation, its permanent on Internet.</p>
            <p className="mt-2">Users funding flow is also tracked on blockchain too. <br />CascadeFund emails are advisory for each side.</p></>,
        q: "Code is cheap. Reputation, community and coordination of random people are priceless.",
        a: [
            { label: "Unexpected 😲. Why not?", goto: "maintainer-16" },
        ]
    },
    {
        id: "maintainer-16",
        content: (
            <>
                <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                    After all, CascadeFund is part of{" "}
                    <a
                        href="https://ara.foundation"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 font-semibold text-sky-700 underline decoration-sky-500/50 underline-offset-2 hover:text-sky-600 dark:text-sky-300 dark:hover:text-sky-200"
                    >
                        <img
                            src="/ara_logo.png"
                            alt="Ara logo"
                            className="h-4 w-4 rounded-sm object-contain"
                        />
                        <span>Ara</span>
                    </a>
                    . It's a decade-long researched dream: malleable systems on computers, based on an open-source internet.
                </p>
                <p className="mt-2 leading-relaxed text-slate-600 dark:text-slate-300">
                    Let's build open-source into an ecosystem 😊
                </p>
            </>
        ),
        q: "Together we can make computers owned by users 😊",
        a: [
            { label: "Join", goto: "maintainer-18" },
            { label: "Nah", goto: "maintainer-17" },
        ]
    },
    {
        id: "maintainer-17",
        content: <>I'm so sad I couldn't make you part of CascadeFund community.
            <p className="mt-2">Could you tell me what didn't convince you? <MaintainerConvinceFeedback /></p>
        </>,
        q: "End dialog?",
        a: [
            { label: "End", goto: "maintainer-19" }
        ]
    },
    {
        id: "maintainer-19",
        content: (
            <>
                <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                    Thanks for reading the dialogue to the end. 😊
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                    Sincerely,
                    Medet Ahmetson!
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="text-sm text-slate-800 dark:text-slate-100">From </span>
                    <a
                        href="https://ara.foundation"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 underline decoration-sky-500/50 underline-offset-2 hover:text-sky-600 dark:text-sky-300 dark:hover:text-sky-200"
                    >
                        <img
                            src="/ara_logo.png"
                            alt="Ara logo"
                            className="h-4 w-4 rounded-sm object-contain"
                        />
                        <span>Ara</span>
                    </a>
                    <span className="text-sm text-slate-800 dark:text-slate-100">project</span>
                    <span className="text-slate-400 dark:text-slate-500" aria-hidden="true">
                        ·
                    </span>
                    <SocialLink link={socialLinks.twitter} className={maintainerEndSocialIconClass} />
                    <SocialLink link={socialLinks.bluesky} className={maintainerEndSocialIconClass} />
                    <SocialLink link={socialLinks.linkedin} className={maintainerEndSocialIconClass} />
                    <SocialLink link={socialLinks.github} className={maintainerEndSocialIconClass} />
                </div>
            </>
        ),
        q: "If you change your mind, you can register project in ecosystem on top right button.",
        a: []
    },
    {
        id: "maintainer-18",
        content: (
            <>
                <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                    CascadeFund is launching soon. Be one of the first maintainers to join the ecosystem.
                </p>
                <p className="mt-2">
                    Add your email and public repository URL below.{" "}
                    <MaintainerJoinRegistration />. {" "}
                </p><p className="mt-2">In a short while, I will review manually, then begin reaching out new users for your project
                </p>
            </>
        ),
        q: "Did you register your project?",
        a: [
            { label: "Yes", goto: "maintainer-20" },
        ]
    },
    {
        id: "maintainer-20",
        content: <>
            Thank you for becoming part of CascadeFund ecosystem 😊.
            <p className="mt-2">While I'm reaching out new users and other maintainers,<br />could you shout out on social media that you are in CascadeFund. <br /><strong>Let's get more maintainers in our ecosystem.</strong></p>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                Sincerely,
                Medet Ahmetson!
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-sm text-slate-800 dark:text-slate-100">From </span>
                <a
                    href="https://ara.foundation"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 underline decoration-sky-500/50 underline-offset-2 hover:text-sky-600 dark:text-sky-300 dark:hover:text-sky-200"
                >
                    <img
                        src="/ara_logo.png"
                        alt="Ara logo"
                        className="h-4 w-4 rounded-sm object-contain"
                    />
                    <span>Ara</span>
                </a>
                <span className="text-sm text-slate-800 dark:text-slate-100">project</span>
                <span className="text-slate-400 dark:text-slate-500" aria-hidden="true">
                    ·
                </span>
                <SocialLink link={socialLinks.twitter} className={maintainerEndSocialIconClass} />
                <SocialLink link={socialLinks.bluesky} className={maintainerEndSocialIconClass} />
                <SocialLink link={socialLinks.linkedin} className={maintainerEndSocialIconClass} />
                <SocialLink link={socialLinks.github} className={maintainerEndSocialIconClass} />
            </div></>,
        q: "Click on social media links to see our ID, and use it to tag CascadeFund. 😊",
        a: []
    }
]

export const userDialogs: Dialog[] = [
    {
        id: "user-1",
        q: "Do you think open source deserves funding and recognition in the world?",
        a: [
            { label: "Yes", goto: "helpful-1" },
            { label: "No", goto: "user-2" }
        ]
    },
    {
        id: "user-2",
        content: "Open source is running the world, thanklessly.",
        q: "Getting closer to web users and funded it can do more than just running commercial apps.",
        a: [{ label: "Yeah 🤯", goto: "user-3" }]
    },
    {
        id: "user-3",
        q: "Do you think now, open source needs funding and recognition by world?",
        a: [
            { label: "Yeah 🙌", goto: "helpful-1" },
            { label: "Nah 😒", goto: "sceptic-1" }
        ]
    }
]

/**
 * @todo sceptic-1 needs HTML with the social links in a new line
 */
export const userSpecticalDialog: Dialog[] = [
    {
        id: "sceptic-1",
        content: <>Come back later. I'll try to convince you 😉.
            <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                Sincerely,
                Medet Ahmetson!
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-sm text-slate-800 dark:text-slate-100">From </span>
                <a
                    href="https://ara.foundation"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 underline decoration-sky-500/50 underline-offset-2 hover:text-sky-600 dark:text-sky-300 dark:hover:text-sky-200"
                >
                    <img
                        src="/ara_logo.png"
                        alt="Ara logo"
                        className="h-4 w-4 rounded-sm object-contain"
                    />
                    <span>Ara</span>
                </a>
                <span className="text-sm text-slate-800 dark:text-slate-100">project</span>
                <span className="text-slate-400 dark:text-slate-500" aria-hidden="true">
                    ·
                </span>
                <SocialLink link={socialLinks.twitter} className={maintainerEndSocialIconClass} />
                <SocialLink link={socialLinks.bluesky} className={maintainerEndSocialIconClass} />
                <SocialLink link={socialLinks.linkedin} className={maintainerEndSocialIconClass} />
                <SocialLink link={socialLinks.github} className={maintainerEndSocialIconClass} />
            </div>
        </>,
        q: "I recommend to follow on social media 👍. You'll witness the first open source ecosystem evolution on Internet 👀.",
        a: [],
    },

    {
        id: "sceptic-2",
        content: <>Yeah, why would you pay when others don't, but benefit from your funding for free?
            <p className="mt-2">I don't want to rely on charity either.</p></>,
        q: "That's why CascadeFund exist",
        a: [{ label: "Quick details", goto: "helpful-19" }]
    }
]

/**
 * @todo helpful-1 needs a form with the options: $1, $5, $10, or more in a single line, and
 * "Why should I pay if its for free?"
 */
export const userHelpfulDialog: Dialog[] = [
    {
        id: "helpful-1",
        q: "If you have no money issue, how much would you spend monthly on open source?",
        a: [{
            label: "$1",
            goto: "helpful-2"
        }, {
            label: "$5",
            goto: "helpful-2"
        }, {
            label: "$10",
            goto: "helpful-2"
        }, {
            label: "More 💰",
            goto: "helpful-2"
        }, {
            label: "Likely $0 🤷‍♂️",
            goto: "sceptic-2"
        }],
    },
    {
        id: "helpful-2",
        content: <>With CascadeFund you get stable apps that won't push breaking changes unless you vote yes.
            <p className="mt-2">You could request new features on apps you use daily.</p></>,
        q: "CascadeFund is ecosystem of open source projects that work seamlessly together.",
        a: [
            { label: "Quick details", goto: "helpful-4" },
        ]
    },
    {
        id: "helpful-19",
        content: <>With CascadeFund you get stable apps that won't push breaking changes unless you vote yes.
            <p className="mt-2">You could request new features on apps you use daily.</p></>,
        q: "CascadeFund is ecosystem of open source projects that work seamlessly together.",
        a: [
            { label: "Would pay 😌", goto: "helpful-3" },
            { label: "Few more details", goto: "helpful-4" },
        ]
    },
    {
        id: "helpful-3",
        q: "If you have no money issue, how much would you spend monthly on open source?",
        a: [{
            label: "$1",
            goto: "helpful-4"
        }, {
            label: "$5",
            goto: "helpful-4"
        }, {
            label: "$10",
            goto: "helpful-4"
        }, {
            label: "More 💰",
            goto: "helpful-4"
        }
        ],
    },
    {
        id: "helpful-4",
        content: "CascadeFund is not a centralized platform. It's an ecosystem of maintainers building user-centric open-source projects.",
        q: "You know tech corporations are walled garden of apps that work seamlessly together?",
        a: [
            { label: "For Example", goto: "helpful-5" },
            { label: "Yeah", goto: "helpful-6" },
        ]
    },
    {
        id: "helpful-5",
        content: (
            <>
                <p className="mb-3 text-slate-500 dark:text-slate-300 md:text-base leading-relaxed">
                    For example,
                </p>
                <LandingHeroBigTechDiagramBlock
                    brand="Google"
                    companyLogoSrc="https://cdn.simpleicons.org/google"
                    companyLogoAlt="Google"
                    appIcons={landingHeroGoogleRowIcons}
                />
                <LandingHeroBigTechDiagramBlock
                    brand="Apple"
                    companyLogoSrc="https://cdn.simpleicons.org/apple"
                    companyLogoAlt="Apple"
                    appIcons={landingHeroAppleRowIcons}
                />
                <LandingHeroBigTechDiagramBlock
                    brand="Microsoft"
                    companyLogoSrc="https://img.icons8.com/color/48/microsoft.png"
                    companyLogoAlt="Microsoft"
                    appIcons={landingHeroMicrosoftRowIcons}
                />
                <LandingHeroBigTechDiagramBlock
                    brand="Meta"
                    companyLogoSrc="https://cdn.simpleicons.org/meta"
                    companyLogoAlt="Meta"
                    appIcons={landingHeroMetaRowIcons}
                    withMetaVrSuffix
                />
                <p className="mb-0 text-slate-500 dark:text-slate-300 md:text-base leading-relaxed">
                    and every major corporation has dozens of apps that only work seamlessly together.
                </p>
            </>
        ),
        q: "Do you know an open-source ecosystem with dozens of apps that work seamlessly together?",
        a: [
            { label: "No 🥺", goto: "helpful-6" },
            { label: "There are some 🤔", goto: "helpful-20" },
        ]
    },
    {
        id: "helpful-20",
        content: <>There are open source ecosystems.
            <p className="mt-2">Tech giants are initiating them and support them by giving away internally developed projects. I'm thankful for their benefit to society.</p>
            <p className="mt-2">The OSS ecosystems such as Eclipse, GNOME, KDE, Apache, Mozilla are for developers or they specialize in a narrow domain led by organization.</p></>,
        q: "I mean do you know OSS ecosystem built around you; without any organization but by users and maintainers together?",
        a: [{ label: "No 🫡", goto: "helpful-6" }]
    },
    {
        id: "helpful-6",
        content: <>CascadeFund is an open-source ecosystem of maintainers and users. Maintainers agree on user-centric principles.
            <p className="mt-2">To be part of community, you pay a monthly fee. Your open source apps begin working seamlessly together,<br />while funds distributed automatically to maintainers.</p></>,
        q: "You know what you get for funding?",
        a: [{ label: "Yeah", goto: "helpful-7" }]
    },
    {
        id: "helpful-7",
        content: "You get three things that no corporation could give you.",
        q: "The last thing is the best part 🤫",
        a: [
            { label: "The first thing", goto: "helpful-9" },
        ]
    },
    /**
     * @todo Change content to be more rich and in html
     */
    {
        id: "helpful-9",
        content: <>You can prevent breaking changes.
            <p className="mt-2">Perhaps, app wants to change UI, or deprecate API, feature you use</p>
            If 51% users vote against, then maintainers won't even start coding it</>,
        q: "Can you influence tech giants or open-source now?",
        a: [
            { label: "Nope, the second thing", goto: "helpful-11" },
            { label: "Examples", goto: "helpful-10" },
        ]
    },
    {
        id: "helpful-10",
        content: <>
            For example, Python pushed 3rd version, while everyone was using Python 2.7.
            <p className="mt-2">If CascadeFund was launched earlier, then we would be still using Python 2 without painful migration or version nightmares.</p></>,
        q: "In your life how many incompatible versions of the same app you've encountered?",
        a: [
            { label: "Got it 🙏, the second thing", goto: "helpful-11" },
        ]
    },
    {
        id: "helpful-11",
        content: <>Whenever you want a new app feature, developers will implement it.
            <p className="mt-2">For example:</p>
            <ul className="mt-1 list-disc space-y-0.5 pl-5 text-slate-500 dark:text-slate-300 marker:text-slate-400 dark:marker:text-slate-500">
                <li>Support the MCP protocol so the app can talk to your AI agent.</li>
                <li>Allow exporting to PDF format.</li>
            </ul>
            <p className="mt-2">CascadeFund makes it possible.</p></>,
        q: "Can you guarantee tech giants will add the feature you want?",
        a: [
            {
                label: "Nope, the third thing", goto: "helpful-13",
            },
            {
                label: "Quick details", goto: "helpful-12",
            }
        ]
    },
    {
        id: "helpful-12",
        content: (
            <>
                CascadeFund sends you a weekly email. Reply to them with the desires and wishes.
                They will be delivered to maintainers in a technical format.
                <p className="mt-2">
                    If corporations are walled garden, open source ecosystem is Amazon forest. There is a compatible alternative with the feature, or a contributor can patch it and get funded for it.
                </p>
            </>
        ),
        q: "In a funded ecosystem, there are contributors who will do it if maintainers don't want to",
        a: [{
            label: "Yeah, the third thing", goto: "helpful-13",
        }]
    },
    {
        id: "helpful-13",
        content: <>Reply to the CascadeFund's weekly email with apps you use or wish to find open-source alternative
            <p className="mt-2">CascadeFund finds the alternatives, connect their maintainers and make them seamless with existing OSS apps you use.</p></>,
        q: "Can you imagine corporations work together on a seamless experience between their products for you?",
        a: [
            { label: "No, where is the best part 🤔", goto: "helpful-14" },
        ]
    },
    {
        id: "helpful-14",
        content: <>To provide unified experience across OSS, maintainers design shared protocols, and standardized APIs.
            <p className="mt-2">Technically, this modularizes apps to decouple data, interface and logic.</p>
            <p className="mt-2">All your data is local, instead of scattering across web-apps.</p>
        </>,
        q: "Imagine, what can AI do when your data is independent of apps and all in one place, while apps are discoverable",
        a: [
            { label: "Sounds amazing 🙌", goto: "helpful-15" },
        ]
    },
    {
        id: "helpful-15",
        content: (
            <p className="mb-0 text-slate-500 dark:text-slate-300 md:text-base leading-relaxed">
                CascadeFund is launching soon. <JoinWaitlistDialogRegistration /> and I'll email you when it launches.
            </p>
        ),
        q: "Meanwhile, you can grow and lead CascadeFund ecosystem from your side.",
        a: [
            { label: "Quick details", goto: "helpful-16" },
        ]
    },
    {
        id: "helpful-16",
        content: <>Users in CascadeFund align by common interest: they use the same multiple as you.
            <p className="mt-2">Funding users want to have effective outcomes. It won't be bullshit, but pragmatic collaboration.</p>
            <p className="mt-2">Find people who use the same apps as you, start sharing your work experience, and prepare an organized funding for the same stack.</p>
        </>,
        q: "One person will have an impact, a group of people will have a significant impact.",
        a: [
            { label: "Start", goto: "helpful-17" },
        ]
    },
    {
        id: "helpful-17",
        content:
            <>To start community, post on social media about your OSS experience. Tag CascadeFund, and two open-source projects you used recently.
                <p className="mt-2">The tag lets other users of Ecosystem to recognize you, especially those who use the same apps as you.</p>
                <p className="mt-2">Then, I will be manually contacting their maintainers, and together with them start working on a seamless experience for you.</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                    Sincerely,
                    Medet Ahmetson!
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="text-sm text-slate-800 dark:text-slate-100">From </span>
                    <a
                        href="https://ara.foundation"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 underline decoration-sky-500/50 underline-offset-2 hover:text-sky-600 dark:text-sky-300 dark:hover:text-sky-200"
                    >
                        <img
                            src="/ara_logo.png"
                            alt="Ara logo"
                            className="h-4 w-4 rounded-sm object-contain"
                        />
                        <span>Ara</span>
                    </a>
                    <span className="text-sm text-slate-800 dark:text-slate-100">project</span>
                    <span className="text-slate-400 dark:text-slate-500" aria-hidden="true">
                        ·
                    </span>
                    <SocialLink link={socialLinks.twitter} className={maintainerEndSocialIconClass} />
                    <SocialLink link={socialLinks.bluesky} className={maintainerEndSocialIconClass} />
                    <SocialLink link={socialLinks.linkedin} className={maintainerEndSocialIconClass} />
                    <SocialLink link={socialLinks.github} className={maintainerEndSocialIconClass} />
                </div></>,
        q: "Click on social media links to see our ID, and use it to tag CascadeFund. 😊",
        a: []
    }
]

export const dialog: Dialog[] = [
    ...greetingDialog,
    ...maintainerDialog,
    ...userDialogs,
    ...userSpecticalDialog,
    ...userHelpfulDialog,
]
