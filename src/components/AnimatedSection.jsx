import { useRef } from "react";
import { motion, useInView } from "motion/react";

const AnimatedSection = ({ children, className = "", delay = 0, direction = "up" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.15 });

    const directions = {
        up: { y: 60 },
        down: { y: -60 },
        left: { x: 60 },
        right: { x: -60 },
    };

    const initial = { opacity: 0, ...directions[direction] };
    const animate = isInView
        ? { opacity: 1, x: 0, y: 0 }
        : initial;

    return (
        <motion.div
            ref={ref}
            initial={initial}
            animate={animate}
            transition={{
                duration: 0.7,
                delay,
                ease: [0.25, 0.4, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
