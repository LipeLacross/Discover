// src/app/page.tsx
"use client";

import { useEffect } from "react";
import styles from "./page.module.css";
import { toggleMode } from "./script";

export default function Page() {
    useEffect(() => {
        const switchButton = document.querySelector("#switch") as HTMLElement;
        switchButton?.addEventListener("click", toggleMode);

        return () => {
            switchButton?.removeEventListener("click", toggleMode);
        };
    }, []);

    return (
        <div id="container" className={styles.container}>
            <div id="profile" className={styles.profile}>
                <img src="/assets/avatar.png" alt="Foto de Felipe" />
                <p>@lipelacross</p>
            </div>

            <div id="switch" className={styles.switch}>
                <button></button>
                <span></span>
            </div>

            <ul className={styles.links}>
                <li>
                    <a href="https://lipelacrossplus.netlify.app/">Ver meu portfólio</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/lipelacross-developer" target="_blank">
                        Conheça meu LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/@DevLipeLacross" target="_blank">
                        Assista aos meus vídeos
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/lipelacross/" target="_blank">
                        Acompanhe-me no Instagram
                    </a>
                </li>
            </ul>

            <div id="social-links" className={styles.socialLinks}>
                <a href="https://github.com/lipelacross" target="_blank">
                    <ion-icon name="logo-github"></ion-icon>
                </a>
                <a href="https://www.instagram.com/lipelacross/" target="_blank">
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
                <a href="https://www.youtube.com/@DevLipeLacross" target="_blank">
                    <ion-icon name="logo-youtube"></ion-icon>
                </a>
                <a href="https://www.linkedin.com/in/lipelacross-developer" target="_blank">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>
            </div>

            <footer className={styles.footer}>
                Feito por mim com ♥ - Desenvolvedor Fullstack
            </footer>
        </div>
    );
}
