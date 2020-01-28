import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

export const Loading: preact.FunctionComponent = ({}) => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        const timerId = setInterval(() => setCount(count + 1), 100);
        return () => clearInterval(timerId);
    });

    return (
        <div>
            Loading
            <br />
            {Array.from(Array(count).keys())
                .map(_ => ">")
                .join("")}
        </div>
    );
};
