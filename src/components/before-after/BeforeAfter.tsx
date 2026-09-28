import { useState } from 'react';
import styles from './BeforeAfter.module.scss';

export function BeforeAfter() {
  const [position, setPosition] = useState(50);

  return (
    <section id="how-it-works" className={styles.section}>
      <div className="container">
        <div className={styles.heading}>
          <span>O resultado fala por si.</span>

          <h2>Veja a diferença.</h2>

          <p>Arraste para comparar o antes e depois.</p>
        </div>

        <div className={styles.comparison}>
          <div className={styles.before}>
            <div className={styles.fakeFabric}>
              <span>ANTES</span>

              {Array.from({ length: 35 }).map((_, index) => (
                <i key={index} />
              ))}
            </div>
          </div>

          <div
            className={styles.after}
            style={{
              clipPath: `inset(0 0 0 ${position}%)`,
            }}
          >
            <div className={styles.cleanFabric}>
              <span>DEPOIS</span>
            </div>
          </div>

          <div
            className={styles.divider}
            style={{
              left: `${position}%`,
            }}
          />

          <input
            className={styles.slider}
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
            aria-label="Comparar antes e depois"
          />
        </div>
      </div>
    </section>
  );
}
