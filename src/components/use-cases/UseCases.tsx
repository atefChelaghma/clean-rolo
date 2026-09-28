import { Shirt, Sofa, BedDouble } from 'lucide-react';

import styles from './UseCases.module.scss';

const uses = [
  {
    icon: Shirt,
    number: '01',
    title: 'Roupas',
    description: 'Antes de sair, dê aquela última passada na roupa.',
  },
  {
    icon: Sofa,
    number: '02',
    title: 'Sofá',
    description: 'Ajude a remover pelos acumulados no tecido.',
  },
  {
    icon: BedDouble,
    number: '03',
    title: 'Cama',
    description: 'Uma limpeza rápida para o dia a dia.',
  },
];

export function UseCases() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.top}>
          <span>FEITO PARA O DIA A DIA</span>

          <h2>
            Um rolo.
            <br />
            <em>Várias possibilidades.</em>
          </h2>
        </div>

        <div className={styles.grid}>
          {uses.map(({ icon: Icon, number, title, description }) => (
            <article key={title} className={styles.card}>
              <div className={styles.number}>{number}</div>

              <div className={styles.icon}>
                <Icon size={30} />
              </div>

              <h3>{title}</h3>

              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
