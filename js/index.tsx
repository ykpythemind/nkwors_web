if (process.env.NODE_ENV === "development") {
    // Must use require here as import statements are only allowed
    // to exist at the top of a file.

    // tslint:disable-next-line:no-var-requires
    require("preact/debug");
}

import { h, render } from "preact";
import { Hello } from "./components/app";
import "./style/index.css";

import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import backgroundImageUrl from "./assets/na.jpg";

document.addEventListener("DOMContentLoaded", () => {
    const $button = document.getElementById("hambutton");
    const $menu = document.getElementById("mobilemenu");

    if (!$button) {
        return;
    }
    if (!$menu) {
        return;
    }

    let isOpen = false;
    let blocking = false;

    const toggle = () => {
        if (blocking) {
            return;
        }
        blocking = true;

        // TODO fix
        if (isOpen) {
            disableBodyScroll($menu);

            $button.classList.add("is-active");
            $menu.classList.remove("fadeOut");
            $menu.classList.add("menuon");
            $menu.classList.add("animated");
            $menu.classList.add("fadeIn");
            blocking = false;
        } else {
            enableBodyScroll($menu);

            $button.classList.remove("is-active");
            $menu.classList.remove("fadeIn");
            $menu.classList.add("animated");
            $menu.classList.add("fadeOut");
            setTimeout(() => {
                $menu.classList.remove("menuon");
                blocking = false;
            }, 500);
        }
    };

    $button.addEventListener("click", () => {
        isOpen = !isOpen;

        toggle();
    });

    if (document.body.classList.contains("index")) {
        document.body.style.backgroundImage = `url(${backgroundImageUrl})`;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    render(<Hello />, document.getElementById("root") as Element);
});
