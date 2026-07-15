import { motion, useScroll, useTransform } from 'framer-motion';

export function AuroraBackground() {
  const { scrollYProgress } = useScroll();

  const blobOneY = useTransform(scrollYProgress, [0, 1], ['-10%', '70%']);
  const blobOneX = useTransform(scrollYProgress, [0, 1], ['-10%', '15%']);
  const blobTwoY = useTransform(scrollYProgress, [0, 1], ['10%', '-40%']);
  const blobTwoX = useTransform(scrollYProgress, [0, 1], ['60%', '20%']);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        style={{ y: blobOneY, x: blobOneX, rotate }}
        className="absolute top-0 left-0 h-[38rem] w-[38rem] rounded-full bg-accent/[0.12] blur-[130px]"
      />
      <motion.div
        style={{ y: blobTwoY, x: blobTwoX }}
        className="absolute top-0 right-0 h-[32rem] w-[32rem] rounded-full bg-accent-2/[0.16] blur-[130px]"
      />
      <div className="noise absolute inset-0 opacity-[0.015]" />
    </div>
  );
}
