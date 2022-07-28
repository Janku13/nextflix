import Card from './Card';
import styles from './section-cards.module.css';
export default function SectionCards() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Disney</h2>
      <div className={styles.cardWrapper}>
        <Card imgUrl="/static/heroImg.webp" size="large" />
        <Card imgUrl="/static/heroImg.webp" size="large" />
        <Card imgUrl="/static/heroImg.webp" size="large" />
        <Card imgUrl="/static/heroImg.webp" size="large" />
        <Card imgUrl="/static/heroImg.webp" size="large" />
        <Card imgUrl="/static/heroImg.webp" size="large" />
        <Card imgUrl="/static/heroImg.webp" size="large" />
        <Card imgUrl="/static/heroImg.webp" size="large" />
        <Card imgUrl="/static/heroImg.webp" size="large" />
        <Card imgUrl="/static/heroImg.webp" size="large" />
        <Card imgUrl="/static/heroImg.webp" size="large" />
        {/* <Card imgUrl="/static/heroImg.webp" size="medium" /> */}
        {/* <Card imgUrl="/static/heroImg.webp" size="small" /> */}
      </div>
    </section>
  );
}
