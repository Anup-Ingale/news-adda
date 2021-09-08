import React, {Component} from "react";
import NewsBlock from "./NewsBlock";

export class News extends Component {
    articles = [
        {
            source: {
                id: "news24",
                name: "News24",
            },
            author: "Sport24 staff",
            title:
                "Proteas confirmed for blockbuster tour to England in 2022 | Sport",
            description:
                "Cricket South Africa has confirmed a full tour for the Proteas men to England next year.",
            url: "https://www.news24.com/sport/Cricket/Proteas/proteas-confirmed-for-blockbuster-tour-to-england-in-2022-20210908",
            urlToImage:
                "https://cdn.24.co.za/files/Cms/General/d/11551/e94fe2fa7a894bf285726aa1f0360643.jpg",
            publishedAt: "2021-09-08T11:18:08+00:00",
            content:
                "Cricket South Africa (CSA) has confirmed a full tour for the Proteas men to England that will include three One-Day Internationals (ODIs), three T20 Internationals and three Test matches from 19 July… [+1267 chars]",
        },
        {
            source: {
                id: "abc-news-au",
                name: "ABC News (AU)",
            },
            author: null,
            title:
                "Test cricket match between Australia and Afghanistan likely to be cancelled after Taliban says it will ban women from playing",
            description:
                "A test match cricket game between Australia and Afghanistan in Hobart later this year is likely to be cancelled, after the Taliban confirmed it would ban women from playing any sport.",
            url: "http://www.abc.net.au/news/2021-09-08/australia-afghanistan-cricket/100445400",
            urlToImage:
                "https://live-production.wcms.abc-cdn.net.au/d9103610cfabd12a8bc05c0b3ddd6680?impolicy=wcms_crop_resize&cropH=1680&cropW=2983&xPos=17&yPos=171&width=862&height=485",
            publishedAt: "2021-09-08T11:17:29Z",
            content:
                "A test match cricket game between Australia and Afghanistan in Hobart later this year is likely to be cancelled, after the Taliban confirmed they would ban women from playing any sport.\r\nKey points:\r… [+3717 chars]",
        },
        {
            source: {
                id: "bbc-sport",
                name: "BBC Sport",
            },
            author: "BBC Sport",
            title: "Ashes to 'hopefully' have full houses",
            description:
                'The Ashes will "hopefully" be played to full houses and on schedule despite a rise in Covid cases, Cricket Australia say.',
            url: "http://www.bbc.co.uk/sport/cricket/58484996",
            urlToImage:
                "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/B4F3/production/_120432364_gettyimages-1197102075.jpg",
            publishedAt: "2021-09-08T09:07:25.5946364Z",
            content:
                'England and Australia drew a thrilling series 2-2 in 2019, a result which saw Australia retain the urn\r\nThe upcoming Ashes series between England and Australia will "hopefully" be played in front of … [+2485 chars]',
        },
        {
            source: {
                id: "espn-cric-info",
                name: "ESPN Cric Info",
            },
            author: null,
            title:
                "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            description:
                "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            urlToImage:
                "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            publishedAt: "2020-04-27T11:41:47Z",
            content:
                "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
        },
        {
            source: {
                id: "espn-cric-info",
                name: "ESPN Cric Info",
            },
            author: null,
            title:
                "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            description:
                "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            urlToImage:
                "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            publishedAt: "2020-03-30T15:26:05Z",
            content:
                "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
        },
    ];

    constructor() {
        super();

        this.state = {
            articles: this.articles,
        };
    }

    render() {
        return (
            <div className="container">
                <h2 className="text-center my-3">News Adda - Top News </h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4 text-center" key={element.url}>
                                <NewsBlock
                                    key={element.url}
                                    title={element.title.slice(0, 45)}
                                    description={element.description.slice(0, 85)}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                />
                            </div>
                        );
                    })}
                    ;
                </div>
            </div>
        );
    }
}

export default News;
