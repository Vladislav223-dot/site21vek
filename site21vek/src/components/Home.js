import React, { useEffect, useState } from 'react';

const scheduleData = [
  { day: "Понедельник", hours: "9:00-17:00" },
  { day: "Вторник", hours: "9:00-17:00" },
  { day: "Среда", hours: "9:00-17:00" },
  { day: "Четверг (график может меняться)", hours: "9:00-17:00" },
  { day: "Пятница", hours: "9:00-17:00" },
  { day: "Суббота", hours: "9:00-17:00" },
  { day: "Воскресенье", hours: "9:00-17:00" },
];

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);  

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`home-content ${isVisible ? 'visible' : ''}`}>
      <h2>Добро пожаловать в наш Центр красоты</h2>
      <section>
        <h2><em>О нас:</em></h2>
        <p>
          В центре красоты "XXI век" мы гордимся своей командой профессионалов, вдохновленных стремлением к совершенству и преданностью своему делу.<br /> 
          Наши специалисты - это опытные мастера, обладающие высоким уровнем квалификации и неизменным стремлением к обучению и совершенствованию.<br/> 
          Мы верим, что истинная красота проявляется в деталях, и уделяем особое внимание каждому клиенту, создавая неповторимые образы, отражающие его индивидуальность и стиль.<br /> 
          Наше видение красоты - это не только внешнее совершенство, но и гармония, уверенность и радость, которые мы стремимся привнести в жизнь каждого <br />нашего клиента. <br /> 
          Вместе с нами Вы откроете новые грани своей красоты и уверенности!
        </p>
      </section>
      <section className="schedule">
        <h2><em>График работы</em></h2>
        {scheduleData.map((item, index) => (
          <p key={index}>
            {item.day}: {item.hours}
          </p>
        ))}
      </section>
      <section className="parting">
        <p>
          <strong><em>Ждём вас снова!</em></strong>
        </p>
      </section>
    </div>
  );
}

export default Home;
