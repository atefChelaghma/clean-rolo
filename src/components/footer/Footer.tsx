import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div>
          <strong>cleanroll</strong>

          <p>Produtos simples que tornam o dia a dia mais fácil.</p>
        </div>

        <div className={styles.right}>
          <span>Alguns links desta página podem ser links de afiliado.</span>

          <span>© {new Date().getFullYear()} CleanRoll</span>
        </div>
      </div>
    </footer>
  );
}
