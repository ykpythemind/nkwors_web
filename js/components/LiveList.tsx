import axios from "axios";
import { Component, h, render } from "preact";
import Live from "../entities/live";
import { LiveListInner } from "./LiveListInner";

interface LiveListState {
    lives: Live[];
    loading: boolean;
}

const initialState: LiveListState = {
    lives: [],
    loading: true
};

const APIEndpoint =
    "https://l2hq0wx4n7.execute-api.ap-northeast-1.amazonaws.com/default/nkwors-api-first";

const fetch: () => Promise<Live[]> = async () => {
    const res = await axios.get<Live[]>(APIEndpoint);
    return res.data;
};

export default class LiveList extends Component<{}, LiveListState> {
    constructor() {
        super();
        this.state = initialState;
    }

    public async componentDidMount() {
        const lives = await fetch();
        this.setState({ loading: false, lives });
    }

    public render({}, state: LiveListState) {
        return (
            <div>
                {state.loading
                    ? "Loading..."
                    : state.lives.map(l => (
                          <LiveListInner live={l} key={l.id} />
                      ))}
            </div>
        );
    }
}
