import { ArrowUpRight, Sparkles } from 'lucide-react';
import styles from './Header.module.scss';
import { trackAffiliateClick } from '../../lib/analytics';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="/" className={styles.logo}>
          <span className={styles.logoMark}>
            <Sparkles size={16} strokeWidth={2.5} />
          </span>

          <span>cleanroll</span>
        </a>

        <nav className={styles.nav}>
          <a href="#benefits">Benefícios</a>
          <a href="#how-it-works">Como funciona</a>
        </nav>

        <a
          href="#product"
          className={styles.cta}
          onClick={() =>
            trackAffiliateClick({
              location: 'header',
            })
          }
        >
          Ver produto
          <ArrowUpRight size={17} />
        </a>
      </div>
    </header>
  );
}
