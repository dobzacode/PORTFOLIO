'use client';

import { H1 } from '@/components/ui/text/h1';
import H2 from '@/components/ui/text/h2';
import P from '@/components/ui/text/p';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
export default function HomePage({}) {
  const t = useTranslations('home');

  return (
    <main className="relative flex h-[80vh] w-screen flex-col items-center justify-center">
      <div className="absolute -top-medium -z-10">
        <motion.p
          initial={{ rotate: '-17deg', x: '100px', opacity: 0 }}
          animate={{
            opacity: 1,
            x: '0px',
            rotate: '-17deg',
            transition: {
              delay: 3.0 + 0.3,
              type: 'spring',
              stiffness: '40'
            }
          }}
          className="heading--extra-large absolute -left-[15rem] top-extra-large z-10  font-['HFF_Ultrasound'] font-extrabold  leading-none text-tertiary40"
        >
          {t('greeting').toUpperCase()}
        </motion.p>
        <div className="overflow-hidden py-small">
          <motion.img
            initial={{ y: '70vh' }}
            animate={{
              y: '0px',
              transition: {
                delay: 2.3 + 0.3,
                type: 'spring',
                stiffness: '40'
              }
            }}
            width="400"
            height="400"
            src="/random-portrait.png"
            alt="picture"
          ></motion.img>
        </div>
      </div>
      <div className="py-extra-large"></div>
      <div className="relative mt-extra-large flex flex-col items-center justify-center bg-primary1 dark:bg-primary99">
        <hr className=" hrAnimated absolute  top-0 mb-4 w-2/5"></hr>
        <motion.div
          initial={{ x: '-100px', opacity: 0 }}
          animate={{
            opacity: 1,
            x: '0px',

            transition: {
              delay: 3.6 + 0.3,
              type: 'spring',
              stiffness: '40'
            }
          }}
          className="whitespace-nowrap pt-4 text-center text-primary90 dark:text-primary5"
        >
          <P textType="heading" className="inline">
            {t('phrase1')}
          </P>
          <H2 textType="heading" className="inline whitespace-nowrap font-bold">
            {' '}
            {t('phrase2')}
          </H2>
          <br></br>
          <P textType="heading" className="inline">
            {t('phrase3')}
          </P>
          <H1 textType="heading" className="inline whitespace-nowrap font-bold">
            {' '}
            {t('phrase4')}
          </H1>
          <br></br>
          <P textType="heading" className="inline">
            {t('phrase5')}
          </P>
          <H2 textType="heading" className="inline whitespace-nowrap font-bold">
            {t('phrase6')}
          </H2>
        </motion.div>
      </div>
    </main>
  );
}
