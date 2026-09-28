import { ArrowUpRight, Check, Star } from 'lucide-react';
import { motion } from 'motion/react';

import styles from './Hero.module.scss';
import { trackAffiliateClick } from '../../lib/analytics';
import { product } from '../../config/product';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.eyebrow}>
            <span className={styles.dot} />
            Uma casa mais limpa, sem complicação.
          </div>

          <h1>
            Adeus aos pelos.
            <span>Em poucos segundos.</span>
          </h1>

          <p className={styles.description}>
            Remova pelos, poeira e sujeira de roupas, sofás, camas e muito mais
            de forma simples e rápida.
          </p>

          <div className={styles.rating}>
            <div className={styles.stars}>
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
              <Star size={15} fill="currentColor" />
            </div>

            <span>Produto muito bem avaliado</span>
          </div>

          <div className={styles.actions}>
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primaryButton}
              onClick={() =>
                trackAffiliateClick({
                  location: 'hero',
                })
              }
            >
              Ver o produto
              <ArrowUpRight size={19} />
            </a>

            <a href="#how-it-works" className={styles.secondaryButton}>
              Como funciona
            </a>
          </div>

          <div className={styles.features}>
            <div>
              <Check size={17} />
              Fácil de usar
            </div>

            <div>
              <Check size={17} />
              Prático
            </div>

            <div>
              <Check size={17} />
              Para vários tecidos
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.productArea}
          initial={{
            opacity: 0,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
        >
          <div className={styles.yellowShape} />

          <div className={styles.productCard}>
            <div className={styles.cardLabel}>CLEANROLL</div>

            <div className={styles.mockProduct}>
              <div className={styles.handle}>
                <div className={styles.handleGrip} />
              </div>

              <div className={styles.roller}>
                <div className={styles.rollerLines}>
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>

            <div className={styles.productCaption}>
              <strong>Conjunto Rolo Adesivo</strong>

              <span>Para pelos e sujeira</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
