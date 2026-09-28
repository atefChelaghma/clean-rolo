import { Feather, Sparkles, Layers, RefreshCw } from 'lucide-react';

import styles from './Benefits.module.scss';

const benefits = [
  {
    icon: Sparkles,
    title: 'Remove pelos',
    description:
      'Ajuda a remover pelos de animais, poeira e pequenas sujeiras.',
  },
  {
    icon: RefreshCw,
    title: 'Prático no dia a dia',
    description:
      'Uma solução simples para aquela limpeza rápida antes de sair.',
  },
  {
    icon: Layers,
    title: 'Vários usos',
    description: 'Use em roupas, sofá, cama e outras superfícies compatíveis.',
  },
  {
    icon: Feather,
    title: 'Fácil de transportar',
    description: 'Leve para viagens, trabalho ou deixe sempre por perto.',
  },
];

export function Benefits() {
  return (
    <section id="benefits" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span>POR QUE TER UM?</span>

          <h2>
            Pequeno produto.
            <br />
            <strong>Grande diferença.</strong>
          </h2>

          <p>
            Uma solução simples para aqueles pequenos problemas que aparecem
            todos os dias.
          </p>
        </div>

        <div className={styles.grid}>
          {benefits.map(({ icon: Icon, title, description }) => (
            <article key={title} className={styles.card}>
              <div className={styles.icon}>
                <Icon size={22} />
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
