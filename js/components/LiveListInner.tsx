import { FunctionalComponent, h } from "preact";
import Live from "../entities/live";

import { format, parseISO } from "date-fns";

interface Props {
    live: Live;
}

export const LiveListInner: FunctionalComponent<Props> = ({ live }) => {
    const d = parseISO(live.date);
    const date = format(d, "yyyy-MM-dd");

    let imgUrl = "";
    if (live.img_url) {
        imgUrl = live.img_url;
        // tslint:disable-next-line: no-collapsible-if
    } else {
        if (live.img && live.img[0]) {
            imgUrl = live.img[0].fields.file.url;
        }
    }

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
                    {imgUrl !== "" ? (
                        <a href={imgUrl} target="_blank">
                            <img src={imgUrl} class="image" />
                        </a>
                    ) : null}
                    <div
                        dangerouslySetInnerHTML={{
                            __html: live.body
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
