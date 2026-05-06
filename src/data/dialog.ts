/**
 * @todo Create also design tool appearing with the navigation between the dialogs along their first 100 characters in question.
 * If main page receives ?inspector=true and msgId=id|number to show the message.
 */
import type { ReactNode } from "react";

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

export const grieetingDialog: Dialog[] = [
    {
        id: 1,
        q: "Are you maintaining an open source project?",
        a: [
            { label: "Yes", goto: "maintainer-1" },
            { label: "No", goto: "user-1" },
            { label: "I do both", goto: 2 }
        ],
    },
    {
        id: 2,
        q: "You want to know what CascadeFund gives to open-source users first, or to maintainers?",
        a: [
            { label: "To users", goto: "user-1" },
            { label: "To maintainers", goto: "maintainer-1" }
        ]
    }
]

export const maintainerDialog: Dialog[] = [
    {
        id: "maintainer-1",
        q: "Are you worried there are many similar projects as yours in the market?",
        a: [
            { label: "Yes", goto: "maintainer-2" },
            { label: "No", goto: "maintainer-2" },
        ]
    },
    {
        id: "maintainer-2",
        content: "Are you worried that you don't keep up with all recent trends in the technology, and you might be behind?",
        q: "For example, I can't keep up with the all trends going on AI, do you?",
        a: [
            { label: "Yeah, no one can", goto: "maintainer-3" },
            { label: "No comment, next", goto: "maintainer-3" }
        ]
    },
    {
        id: "maintainer-3",
        content: "You want your app to be popular?",
        q: "Maybe another one million users use it, and you receive 'thank you' with it?",
        a: [
            { label: "Yeah, no one can", goto: "maintainer-4" },
            { label: "You don't care", goto: "maintainer-4" }
        ]
    },
    {
        id: "maintainer-4",
        q: "What if your users also fund you without any duty?",
        a: [
            { label: "Yes", goto: "maintainer-6" },
            { label: "No", goto: "maintainer-6" },
            { label: "I don't want to commercialize it", goto: "maintainer-5" }
        ]
    },
    {
        id: "maintainer-6",
        content: "We don't want to turn open-source into a commercial business too. We want to fund the refactoring to make OSS matched to propriety software in quality",
        q: "We want to bring popularity and grateful people along the fund to you",
        a: [
            { label: "How you help me with funding and gaining popularity?", goto: "maintainer-7" }
        ]
    },
    {
        id: "maintainer-7",
        content: "We solve it by turning open-source projects into a single ecosystem.",
        q: "You want to be part of bigger movement where you impact with your project, set standards and protocols?",
        a: [
            { label: "Yes", goto: "maintainer-8" },
            { label: "No", goto: "maintainer-8" }
        ]
    },
    {
        id: "maintainer-8",
        content: "Fair point, you want to find people who are like minded instead building alone?",
        q: "For example, if you are building game engine, connect with a maintainer who builds 3D modelling app",
        a: [
            { label: "Yes", goto: "maintainer-9" },
            { label: "No", goto: "maintainer-9" }
        ]
    },
    {
        id: "maintainer-9",
        content: "You make your software user-centric, but we aggregate all things and communicate via emails.",
        q: "Weekly email to communicate with the users for feedback and movement",
        a: [
            { label: "Tell me more", goto: "maintainer-10" },
            { label: "Sounds good", goto: "maintainer-10" }
        ]
    },
    {
        id: "maintainer-10",
        content: "There are only three things users ask for monthly funding" +
            "1) Whenever you want to push a breaking change in interface or API, before starting code please inform us via email." +
            "We ask user's opinion, aggregate feedback.",
        q: "If your changes affect them badly, they are funding you not to code. How is it, paid not to code?",
        a: [
            { label: "Thats fair", goto: "maintainer-12" },
            { label: "Thats too much, I can't guarantee", goto: "maintainer-11" },
        ]
    },
    {
        id: "maintainer-11",
        content: "If it's too much, then people lose interest in your code." +
            "You don't get momentum with the code changes, as Perl programming language did",
        q: "Would you use code, that after update breaks your workflow or makes you adapt after six month of working?",
        a: [
            { label: "No, you wouldn't like when function you use is deprecated", goto: "maintainer-12" },
        ]
    },
    {
        id: "maintainer-12",
        q: "People don't want code that deprecates functions they use, and it happens in ecosystem constantly without notice",
        a: [
            { label: "Fair, what's the second thing you receive funding for?", goto: "maintainer-13" }
        ]
    },
    {
        id: "maintainer-13",
        content: "We will message you weekly via email, by gathering user feedback and requests and submit a function or feature request",
        q: "You either reject it, or implement, or say to us wish to have a contributor for it. Thats all",
        a: [
            { label: "What's third thing?", goto: "maintainer-14" },
            { label: "That works", goto: "maintainer-14" }
        ]
    },
    {
        id: "maintainer-14",
        content: "Weekly email also could have one recommendation for partnership." +
            "What apps users use along with your app, we gather them and send their contact to connect them.",
        q: "And a third thing is one request how to make your app work seamlessly with the recommended app",
        a: [
            { label: "That makes sense", goto: "maintainer-15" },
        ]
    },
    {
        id: "maintainer-15",
        content: "Thats why it's alliance. CascadeFund is not a leader. It's a community of maintainers and users." +
            "To prove it, the payment flow from users are going via blockchain. Immutability is reputation itself. " +
            "You get funds from users, and you have other developers who build community.",
        q: "Would I can take open-source project and users without breaking my reputation if its imprintend on blockchain?",
        a: [
            { label: "Code is cheap, but reputation, community and users are hard.", goto: "maintainer-16" },
        ]
    },
    {
        id: "maintainer-16",
        content: "After all, it's a decade long dream of Ara: malleable systems on computer, based on open-source software. CascadeFund is the project of Ara to achieve it." +
            "Connect open-source projects and together with other projects together reach out users?",
        q: "And start receiving funds by users community? 😊",
        a: [
            { label: "Yes", goto: "maintainer-18" },
            { label: "Not yet", goto: "maintainer-17" },
        ]
    },
    {
        id: "maintainer-17",
        content: "Okay, could you say what's not convincing? <forum field> ",
        q: "Come back later, I'll try to convince you",
        a: [
            { label: "Submit", goto: "maintainer-19" }
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
    ...grieetingDialog,
    ...maintainerDialog,
    ...userDialogs,
    ...userSpecticalDialog,
    ...userHelpfulDialog,
]