'use client';
import styles from './page.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from './utils/useMousePosition';

export default function Home() {
    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = useMousePosition();
    const size = isHovered ? 400 : 40;

    return (
        <main className={styles.main}>
            <motion.div
                className={styles.mask}
                animate={{
                    WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
                    WebkitMaskSize: `${size}px`,
                }}
                transition={{ type: 'tween', ease: 'backOut', duration: 0.3 }}
            >
                <p
                    onMouseEnter={() => {
                        setIsHovered(true);
                    }}
                    onMouseLeave={() => {
                        setIsHovered(false);
                    }}
                >
                    こんにちは！日本語が話せる
                    <br />
                    ソフトウェアエンジニアの トラビス
                    です。日本語の勉強と家族と過ごすことが好きです。
                </p>
            </motion.div>

            <div className={styles.body}>
                <p>
                    Hey, I'm <span>Travis</span>, A Japanese speaking software
                    engineer. <br />I enjoy studying Japanese and spending time
                    with my family.
                </p>
            </div>
        </main>
    );
}
