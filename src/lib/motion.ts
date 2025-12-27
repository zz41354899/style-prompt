// S01-F Motion Config - Shared animation variants for landing page components
import { Variants } from 'framer-motion';

export const fadeIn: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] }
    }
};

export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};
