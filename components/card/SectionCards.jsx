import Link from 'next/link';
import Card from './Card';
import styles from './section-cards.module.css';
export default function SectionCards(props) {
  const { title, listOfCards = [], size } = props;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {listOfCards.map((card, idx) => {
          console.log(card);
          return (
            <Link key={idx} href={`/video/${card.id}`}>
              <a>
                <Card imgUrl={card.imgUrl} size={size} />
              </a>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
