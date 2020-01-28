const newlineRegex = /(\r\n|\r|\n)/g;
import { h } from "preact";

export default function Nl2Br(str: any): preact.ComponentChild {
    if (typeof str !== "string") {
        return str;
    }

    return str.split(newlineRegex).map((line, index) => {
        if (line.match(newlineRegex)) {
            return h("br", { key: index });
        }
        return line;
    });
}
