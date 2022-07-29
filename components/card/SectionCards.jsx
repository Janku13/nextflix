import Card from './Card';
import styles from './section-cards.module.css';
export default function SectionCards(props) {
  const { title, listOfCards = [], size } = props;
  console.log({ listOfCards });
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {listOfCards.map((card, idx) => {
          return <Card imgUrl={card.imgUrl} size={size} key={idx} />;
        })}
      </div>
    </section>
  );
}
