import {
  ArrowUpRight,
  Check,
  ExternalLink,
  ShieldCheck,
  Star,
} from 'lucide-react';

import { product } from '../../config/product';
import styles from './ProductCTA.module.scss';
import { trackAffiliateClick } from '../../lib/analytics';

export function ProductCTA() {
  return (
    <section id="product" className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.visual}>
            <div className={styles.badge}>{product.pieces} peças</div>

            <div className={styles.mockProduct}>
              <div className={styles.handle}>
                <div className={styles.grip} />
              </div>

              <div className={styles.roller}>
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <span className={styles.eyebrow}>PRODUTO EM DESTAQUE</span>

            <h2>{product.name}</h2>

            <p className={styles.brand}>{product.brand}</p>

            <div className={styles.rating}>
              <div>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </div>

              <span>{product.rating} avaliação</span>
            </div>

            <div className={styles.features}>
              <div>
                <Check size={18} />
                Remoção prática de pelos
              </div>

              <div>
                <Check size={18} />
                Ideal para roupas e tecidos
              </div>

              <div>
                <Check size={18} />
                Conjunto com 3 peças
              </div>
            </div>

            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
              onClick={() =>
                trackAffiliateClick({
                  location: 'product',
                })
              }
            >
              Ver oferta no Mercado Livre
              <ArrowUpRight size={19} />
            </a>

            <div className={styles.note}>
              <ShieldCheck size={16} />

              <span>
                Você será direcionado ao Mercado Livre para consultar a oferta
                atual.
              </span>

              <ExternalLink size={14} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
