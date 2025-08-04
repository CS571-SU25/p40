import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Section from './Section';
import styles from './FunStuff.module.css';

// fun stuff component
function FunStuff() {
  // array of objects for fun activities
  const funActivities = [
    {
      id: 1,
      name: 'honorary local',
      description: 'went to boston with my fav people!',
      image: 'assets/fun-stuff/activity1/1.jpeg',
    },
    {
      id: 2,
      name: 'sir dives-alot',
      description: 'became a certified PADI open water diver!',
      image: 'assets/fun-stuff/activity2/1.jpeg',
    },
    {
      id: 3,
      name: 'absolute nail-biter fr',
      description: 'saw the nations league quarterfinals in spain!',
      image: 'assets/fun-stuff/activity3/1.jpeg',
    },
  ];

  return (
    <Section id="fun" title="IRL DLCs" headingLevel={2}>
      <Container>
        {/* swiper component for the fun stuff section */}
        <Swiper
          modules={[Navigation, Pagination]}
          loop={false}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            'aria-label': 'Carousel pagination',
          }}
          navigation={{
            'aria-label': 'Carousel navigation',
          }}
          // responsive breakpoints
          breakpoints={{
            // when window width is >= 320px
            320: { slidesPerView: 1 },
            // when window width is >= 768px
            768: { slidesPerView: 2 },
            // when window width is >= 1200px
            1200: { slidesPerView: 3 },
          }}
          className={styles.card__content}
          role="region"
          aria-label="Fun activities carousel"
        >
          {/* map through the fun activities and display them */}
          {funActivities.map((activity) => (
            <SwiperSlide key={activity.id} className={styles.card__article}>
              <div className={styles.card__image}>
                <img
                  src={activity.image}
                  alt={`${activity.name} - ${activity.description}`}
                  className={styles.card__img}
                />
                <div className={styles.card__shadow}></div>
              </div>
              <div className={styles.card__data}>
                <h3 className={styles.card__name}>{activity.name}</h3>
                <p className={styles.card__description}>
                  {activity.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
}

export default FunStuff;
