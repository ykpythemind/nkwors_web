import { FunctionalComponent, h } from "preact";
import Live from "../entities/live";
import Nl2Br from "../utils/Nl2Br";

interface Props {
    live: Live;
}

function parseLiveDate(str: string): string {
    return str;
}

export const LiveListInner: FunctionalComponent<Props> = ({ live }) => {
    const date = parseLiveDate(live.date);
    console.log(live);

    return (
        <div class="live-outer">
            <div class="flex">
                <div class="date">
                    <h3 class="h3" id={`target${date}`}>
                        <a href={`#target${date}`}>{date}</a>
                    </h3>
                    at {live.place}
                </div>
                <div>
                    <h3 class="title">{live.title} </h3>

                    {live.img_url !== "" ? (
                        <a href={live.img_url}>
                            <img src={live.img_url} class="image" />
                        </a>
                    ) : null}

                    <div>{Nl2Br(live.body)}</div>
                </div>
            </div>
        </div>
    );
};
