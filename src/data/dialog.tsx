/**
 * @todo Create also design tool appearing with the navigation between the dialogs along their first 100 characters in question.
 * If main page receives ?inspector=true and msgId=id|number to show the message.
 */
import { type ReactNode } from "react";

export const title = "Cascadefund &ndash; building into open source ecosystem with minimal burnout communication to users.";

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
            { label: "Yes 😃", goto: "maintainer-6" },
            { label: "Not important", goto: "maintainer-6" },
            { label: "Sceptical?", goto: "maintainer-5" }
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
    // When modal submits data: Thanks for your feedback. Comeback later, I'll try to convince you!
    {
        id: "maintainer-17",
        content: "I'm so sad I couldn't make you part of CascadeFund community. Could you tell me what didn't convince you? <forum field> ",
        q: "Come back later, I'll try to convince you",
        a: [
            { label: "Submit", goto: "maintainer-19" }
        ]
    },
    {
        id: "maintainer-19",
        content: "Thanks for your dialog with me. :)" +
            "If you still think to join us, you can register project to be part of ecosystem on top right button.",
        q: "Our social media: <>",
        a: []
    },
    {
        id: "maintainer-18",
        content: "Our project is in development stage yet. All open source on GitHub." +
            "For now, could you keep your project so that we start manual check similar apps and begin reaching out to potential users who might use it? " +
            "Your name, email, project url (git host, public repository)." +
            "Will you allow us to use it on our social media to tag you <checkbox>",
        q: "Join us?",
        a: [
            { label: "Submit", goto: "maintainer-20" },
        ]
    },
    {
        id: "maintainer-19",
        content: "Thanks for feedback I'm so sad I couldn't make you part of grand community. :( " +
            "open source running the world together as default for users would be fine. Both users win and maintainers too. " +
            "If you still think about it, you can always add project on top right button.",
        q: "Our social media: <>",
        a: []
    },
    {
        id: "maintainer-20",
        q: "Good. I will. Meanwhile follow us on social media. You'll see your project mentioned there. 😊",
        a: []
    }
]

export const userDialogs: Dialog[] = [
    {
        id: "user-1",
        q: "Do you think open-source deserve funding and recognition in the world?",
        a: [
            { label: "No", goto: "user-2" },
            { label: "Yes", goto: "helpful-1" }
        ]
    },
    {
        id: "user-2",
        q: "Open-source is running the world thanklessly. With getting closer to users and funded it can do more",
        a: [{ label: "Ok", goto: "user-3" }]
    },
    {
        id: "user-3",
        q: "Do you still think open-source needs funding and recognition by everyone?",
        a: [
            { label: "No", goto: "sceptic-1" },
            { label: "Yes", goto: "helpful-1" }
        ]
    }
]

/**
 * @todo sceptic-1 needs HTML with the social links in a new line
 */
export const userSpecticalDialog: Dialog[] = [
    {
        id: "sceptic-1",
        q: "Come back in few months. I'll try to convince you. Meanwhile could you follow our social media, your subscription will motivate me to keep it social media channels",
        a: [],
    },

    {
        id: "sceptic-2",
        q: "I totally agree. Why you pay when other users benefit from it for free? We don't charity too. That's why CascadeFund exist",
        a: [{ label: "Okay, give me elevator pitch", goto: "helpful-2" }]
    }
]

/**
 * @todo helpful-1 needs a form with the options: $1, $5, $10, or more in a single line, and
 * "Why should I pay if its for free?"
 */
export const userHelpfulDialog: Dialog[] = [
    {
        id: "helpful-1",
        q: "How much would you would spend monthly on open-source projects?",
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
            label: "More",
            goto: "helpful-2"
        }, {
            label: "Why should I pay if its for free?",
            goto: "sceptic-2"
        }],
    },
    {
        id: "helpful-2",
        q: "With CascadeFund you get stable apps that won't wont make you adapt to interface every time. You could add new features that pops up in your mind on apps you use daily. You get open-source apps that work seamlessly together",
        a: [
            { label: "I would pay monthly", goto: "helpful-3" },
            { label: "Give me more details", goto: "helpful-4" },
        ]
    },
    {
        id: "helpful-18",
        content: "CascadeFund is not for charity. I'll give you elevator pitch and what you get for funding.",
        q: "",
        a: [
            { label: "Give me elevator pitch", goto: "helpful-19" },
        ]
    },
    {
        id: "helpful-19",
        q: "With CascadeFund you get stable apps that won't wont make you adapt to interface every time. You could add new features that pops up in your mind on apps you use daily. You get open-source apps that work seamlessly together",
        a: [
            { label: "Give me more details", goto: "helpful-4" },
        ]
    },
    /**
     * @todo change helpful-2 link to another one.
     */
    {
        id: "helpful-3",
        q: "How much would you would spend monthly on open-source projects?",
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
            label: "More",
            goto: "helpful-2"
        }
        ],
    },
    {
        id: "helpful-4",
        q: "CascadeFund is alliance of maintainers who create user-centric OS ecosystem. You know well-known corporations have ecosystem of apps?",
        a: [
            { label: "Give me example", goto: "helpful-5" },
            { label: "Yeah, I know", goto: "helpful-6" },
        ]
    },
    /**
     * @todo need to update, use the landing page's hero section with the icons and graphs to each of the corporation names.
     */
    {
        id: "helpful-5",
        content: "Here are examples of coherent seamless experiences. Apple has iPhone, Mac, iCloud, FinalCut, and many more apps working seamlessly." +
            "Microsoft has Windows, Office, Team, Azure, GitHub, Bing, Edge and many more apps working seamlessly." +
            "Meta has Facebook, Instagram, WhatsApp, Messenger, Oculus, and many more apps working seamlessly." +
            "There are many more examples, Google, Adobe, Autodesk, Amazon, you know some other well known umbrella corporations?",
        q: "Can you say it for open-source, are they ecosystem of apps that work seamlessly together?",
        a: [
            { label: "No", goto: "helpful-6" },
        ]
    },
    {
        id: "helpful-6",
        content: "CascadeFund makes it happen as an open-source community itself" +
            "You pay monthly to open-source ecosystem via CascadeFund, that is distributed automatically to maintainers.",
        q: "You know what you get?",
        a: [{ label: "What?", goto: "helpful-7" }]
    },
    {
        id: "helpful-7",
        q: "You fund ecosystem. If big corporations are walled garden, then CascadeFund ecosystem is amazon forest." +
            "Whether you use one app or one hundred apps that you found on web, price same but they work seamlessly",
        a: [{
            label: "I didn't answer what you get for funding? :)",
            goto: "helpful-8"
        }]
    },
    {
        id: "helpful-8",
        content: "You get three things, and most importantly you become part of open-source community itself",
        q: "The last thing is the best thing you get for funding.",
        a: [
            { label: "What's first thing?", goto: "helpful-9" },
        ]
    },
    /**
     * @todo Change content to be more rich and in html
     */
    {
        id: "helpful-9",
        content: "Whenever open-source wants to push update you have option to cancel it." +
            "Perhaps 'don't change UI you get used to it', don't deprecate API it will break your workflow." +
            "When 51% of users vote, then maintainers won't deprecate the changes",
        q: "Can you influence tech giants or open-source now?",
        a: [
            { label: "No. Whats second thing I get?", goto: "helpful-11" },
            { label: "Examples?", goto: "helpful-10" },
        ]
    },
    {
        id: "helpful-10",
        content: "How many imcopatible versions of the same app you encountered? " +
            "For example, Python pushed third version, while its being popular and widely using Python 2.7. " +
            "If CascadeFund was launched earlier, then we will be using Python 2 still without breaking or migrating code.",
        q: "You probably encountered this situation multiple times?",
        a: [
            { label: "Yes, what's second thing?", goto: "helpful-11" },
        ]
    },
    {
        id: "helpful-11",
        content: "Whenever you want app feature, let's say support MCP to connect to your AI agent, or allow a support of export in PDF format, apps will implement it.",
        q: "Can you push it in tech giants or open-source now?",
        a: [
            {
                label: "No, I can't. Whats third thing?", goto: "helpful-13",
            },
            {
                label: "How it works?", goto: "helpful-12",
            }
        ]
    },
    {
        id: "helpful-12",
        content: "It's a weekly email communication with CascadeFund. You reply to our email with the desires, and CascadeFund delivers them to the maintainers in a clear way." +
            "Since open-source ecosystem is funded amazon forest, there would be path to present compatible alternative, or someone will patch without waiting the maintainers time",
        q: "",
        a: [{
            label: "What's the third thing you get?", goto: "helpful-13",
        }]
    },
    {
        id: "helpful-13",
        content: "You fund apps to be seamless. We communicate weekly emails with you. You send us on email what open-source apps you use along or wish to have open-source alternative." +
            "CascadeFund finds the alternatives, and connect their authors to make them seamless together.",
        q: "Can you imagine corporations work on seamless experience between their products for you?",
        a: [
            { label: "No. I said its the best thing, whats best about it?", goto: "helpful-14" },
        ]
    },
    {
        id: "helpful-14",
        content: "Technically, to make apps compatible their authors work on shared protocols, and standardized APIs. This unified experience naturally decouples data from app logic and interface: " +
            "Your data becomes local, while all apps changeable." +
            "Can you imagine all your data is on one place, instead scattered across softwares on web?" +
            "Can you imagine what your AI can do when data in one place, while apps are discoverable and not bound to workflow?",
        q: "",
        a: [
            { label: "You still don't get the point to fund?", goto: "sceptic-1" },
            { label: "Yes, I got it", goto: "helpful-15" },
        ]
    },
    {
        id: "helpful-15",
        content: "Join our waitlist. We will notify you when CascadeFund launches. Could you write your email, and on the social media begin community, it will help us to know what you use and we can reach out the developers of those apps to join CascadeFund when its launched",
        q: "I said with funding you become part of open-source community itself, few messages ago.",
        a: [
            { label: "Do you want to know more?", goto: "helpful-16" },
        ]
    },
    {
        id: "helpful-16",
        content: "You are aligning and building community with people who share the same apps as you." +
            "All in community are funding, and want to have effective outcomes. It's not a bullshit, but pragmatic people." +
            "Together, with you create and share work experience, align a movement to use same app choices and fund the same stack of apps." +
            "Impact of these coordinated effort in open-source ecosystem is huge.",
        q: "How I begin it?",
        a: [
            { label: "You don't have to wait me, you can initiate movement yourself as equal to me", goto: "helpful-17" },
        ]
    },
    {
        id: "helpful-17",
        content: "You don't have to wait me to lead the movement with email. Its communication of equals." +
            "You don't have to wait when CascadeFund launches as we." +
            "Tag Ara the project of CascadeFund, so that people know you are initiating community." +
            "Then, type two open-source projects you use, and wish to have seamless experience between them.",
        q: "Want to know people who use same apps and find you for your apps and share tips and tricks and start communication now",
        a: [
        ]
    }
]

export const dialog: Dialog[] = [
    ...greetingDialog,
    ...maintainerDialog,
    ...userDialogs,
    ...userSpecticalDialog,
    ...userHelpfulDialog,
]
