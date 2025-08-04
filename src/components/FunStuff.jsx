import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './FunStuff.module.css';
import { Navigation, Pagination } from 'swiper/modules';

function FunStuff() {
  const funActivities = [
    {
      name: 'honorary local',
      description: 'went to boston with my fav people!',
      image: '/assets/fun-stuff/activity1/1.jpeg',
    },
    {
      name: 'sir dives-alot',
      description: 'became a certified PADI open water diver!',
      image: '/assets/fun-stuff/activity2/1.jpeg',
    },
    {
      name: 'absolute nail-biter fr',
      description: 'saw the nations league quarterfinals in spain!',
      image: '/assets/fun-stuff/activity3/1.jpeg',
    },
    /*{
      name: 'Activity Four',
      description: 'A short description of my hobby.',
      image: '/assets/fun-stuff/activity4/1.jpeg',
    },
    {
      name: 'Activity Five',
      description: 'This is another fun thing I enjoy.',
      image: '/assets/fun-stuff/activity5/1.jpeg',
    },
    {
      name: 'Activity Six',
      description: 'And here is a third hobby or interest.',
      image: '/assets/fun-stuff/activity6/1.jpeg',
    },*/
  ];

  return (
    <section id="fun" className={styles.container}>
      <h3 className="text-center text-white my-5">irl dlcs</h3>
      <Swiper
        modules={[Navigation, Pagination]}
        loop={false}
        spaceBetween={30} // Adjust space between cards
        grabCursor={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={true}
        // Responsive breakpoints
        breakpoints={{
          // when window width is >= 320px
          320: { slidesPerView: 1 },
          // when window width is >= 768px
          768: { slidesPerView: 2 },
          // when window width is >= 1200px
          1200: { slidesPerView: 3 },
        }}
        className={styles.card__content}
      >
        {funActivities.map((activity) => (
          <SwiperSlide key={activity.name} className={styles.card__article}>
            <div className={styles.card__image}>
              <img
                src={activity.image}
                alt={activity.name}
                className={styles.card__img}
              />
              <div className={styles.card__shadow}></div>
            </div>
            <div className={styles.card__data}>
              <h3 className={styles.card__name}>{activity.name}</h3>
              <p className={styles.card__description}>{activity.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default FunStuff;
