import axios from "axios";
import { Component, h, render } from "preact";
import Live from "../entities/live";
import { LiveListInner } from "./LiveListInner";
import { Loading } from "./Loading";

import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { createClient } from "contentful";

interface LiveListState {
    lives: Live[];
    loading: boolean;
}

const initialState: LiveListState = {
    lives: [],
    loading: true
};

const client = createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: "97yslasqm51z",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: "Vw11RQ3l2UO8UBcr8l7nn545bCAA-1wzRcpuPtxS6D0"
});

export default class LiveList extends Component<{}, LiveListState> {
    constructor() {
        super();
        this.state = initialState;
    }

    public async componentDidMount() {
        const response = await client.getEntries({
            content_type: "live",
            order: "-fields.date"
        });
        console.log(response.items);

        const lives: Live[] = response.items.map(item => {
            const l: Live = {
                id: item.sys.id,
                title: item.fields.title,
                img: item.fields.img,
                body: documentToHtmlString(item.fields.body),
                date: item.fields.date,
                place: item.fields.place,
                img_url: item.fields.img_url
            };

            return l;
        });

        this.setState({ loading: false, lives });
    }

    public render({}, state: LiveListState) {
        return (
            <div>
                {state.loading ? (
                    <div style="text-align: center;">
                        <Loading />
                    </div>
                ) : (
                    state.lives.map(l => <LiveListInner live={l} key={l.id} />)
                )}
            </div>
        );
    }
}
