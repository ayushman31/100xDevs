import { hover } from "@testing-library/user-event/dist/hover";

export const activities = [
    {
        date: "Fri Aug 02 2024",
        activities: [<a href="https://app.100xdevs.com/courses/13/408/409" target="_blank">Web-3 Orientation</a>],
        notes: <a href="https://app.100xdevs.com/courses/13/408/425" target="_blank">Orientation Notes</a>
    },


    {
        date: "Sat Aug 03 2024",
        activities: [<a href="https://app.100xdevs.com/courses/14/411/412" target="_blank">WebDev Orientation</a>],
        notes: <a href="https://projects.100xdevs.com/tracks/web-orientation/Web-Dev---Devops-Orientation-1 " target="_blank">Orientation Notes</a>
    },


    {
        date: "Sun Aug 04 2024",
        activities: [<a href="https://app.100xdevs.com/courses/14/411/421" target="_blank">WebDev 1.2</a>],
        notes: <a href="https://projects.100xdevs.com/tracks/javascript-1/Javascript-101-1" target="_blank">Javascript Basics</a>
    },


    {
        date: "Fri Aug 09 2024",
        activities: [<a href="https://app.100xdevs.com/courses/13/426/427" target="_blank">Web-3 Week 2</a>],
        notes: <a href="https://projects.100xdevs.com/tracks/public-private-keys/Public-Key-Cryptography-1" target="_blank">Public Key Cryptography</a>
    },


    {
        date: "Sat Aug 10 2024",
        activities: [<a href="https://app.100xdevs.com/courses/14/430/431" target="_blank">WebDev Week 2.1</a>],
        notes: <a href="https://projects.100xdevs.com/tracks/async-js-1/Asynchronous-Javascript--Callbacks-and-more-1" target="_blank">Async JS</a>
    },


    {
        date: "Sun Aug 11 2024",
        activities: [<a href="https://app.100xdevs.com/courses/14/430/432" target="_blank">WebDev Week 2.2</a>],
        notes: <a href="https://projects.100xdevs.com/tracks/promises-async-await/Promises-and-async--await-1" target="_blank">Promises</a>
    },


    {
        date: "Wed Aug 14 2024",
        activities: [<a href="https://app.100xdevs.com/courses/14/435/436" target="_blank">WebDev Offline Classes</a>],
        notes: <a href="https://projects.100xdevs.com/tracks/promises-async-await/Promises-and-async--await-1" target="_blank">Async Await</a>
    },


    {
        date: "Fri Aug 16 2024",
        activities: [
            <a href="https://app.100xdevs.com/courses/13/441/442" target="_blank">Web-3 Offline Class</a>,
            <a href="https://app.100xdevs.com/courses/13/444/445">Web-3 Week-3</a>

        ],
        notes: <a href="https://petal-estimate-4e9.notion.site/Creating-a-web-based-wallet-b628b611dd934ca8b68a2654ac14fdb4" target="_blank">Creating a web based Wallet</a>
    },


    {
        date: "Sat Aug 17 2024",
        activities: [
            "WebDev Week 3.1"
        ],
        notes: <a href="https://petal-estimate-4e9.notion.site/DOM-Manipulation-d43659eddda44472913ecf90e4ebf218" target="_blank">DOM Manipulation</a>
    },
    {
        date: "Sun Aug 18 2024",
        activities: [
            "WebDev Week 3.2"
        ]
    }
];



//activities.map((item)=> item.date==selectDate.toDate().toDateString()? item.activity: "")