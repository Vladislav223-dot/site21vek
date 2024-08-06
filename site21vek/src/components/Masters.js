import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const mastersData = [
  {
    id: 1,
    name: 'Наташа Стайлз',
    description: 'Наташа - это талантливый мастер с многолетним опытом работы в индустрии красоты. Её стиль - это смесь изысканной элегантности и современных тенденций, что делает её одним из самых востребованных специалистов в парикмахерской.',
    specialty: 'Мастер женских стрижек и окрашивания',
    imageUrl: '/par1.jpg',
  },
  {
    id: 2,
    name: 'Иван Иванов',
    description: 'Иван Иванов - опытный парикмахер с многолетним стажем. Он предпочитает классические стрижки и окрашивание, но также умеет работать с современными тенденциями.',
    specialty: 'Классические стрижки и окрашивание',
    imageUrl: '/par2.jpg',
  },
  {
    id: 3,
    name: 'Елена Петрова',
    description: 'Елена Петрова - креативный nail-стилист с уникальным видением красоты. Она специализируется на индивидуальном подходе к каждому клиенту и создании модного и стильного маникюра и педикюра.',
    specialty: 'Мастер маникюра и педикюра',
    imageUrl: '/par3.jpg',
  },
  {
    id: 4,
    name: 'Василиса Семенова',
    description: 'Василиса Семенова - мастер-массажист с большим опытом работы. Она специализируется на лимфодренажном, антицеллюлитном и расслабляющем массажах, помогая каждому клиенту чувствовать себя на высоте.',
    specialty: 'Мастер-массажист',
    imageUrl: '/par4.jpg',
  },
  {
    id: 5,
    name: 'Регина Филипова',
    description: 'Регина - мастер с душой и талантом. Она специализируется на индивидуальном подходе к клиенту, выполняет процедуры по уходу за кожей: маски, депиляция, массаж лица и гоммаж.',
    specialty: 'Косметолог эстетист',
    imageUrl: '/par5.jpg',
  },
  {
    id: 6,
    name: 'Кристина Андросова',
    description: 'Кристина - впечатляет своим талантом и умением преобразить девушек до неузнаваемости.',
    specialty: 'Мастер по наращиванию ресниц',
    imageUrl: '/par6.jpg',
  },
];

const Masters = () => {
  const { id } = useParams();
  const masterRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    masterRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      masterRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const renderMasterDetails = (master) => (
    <div>
      <h2>{master.name}</h2>
      <img className="master-img" src={master.imageUrl} alt={`Фото ${master.name}`} />
      <p>{master.description}</p>
      <p><em>Специализация:</em> {master.specialty}</p>
    </div>
  );

  if (id) {
    const master = mastersData.find((m) => m.id === parseInt(id, 10));
    return master ? renderMasterDetails(master) : <p>Мастер не найден</p>;
  }

  return (
    <div>
      <h2>Наши мастера</h2>
      <ul className="masters-list">
        {mastersData.map((master, index) => (
          <li
            key={master.id}
            ref={(el) => (masterRefs.current[index] = el)}
            className="master-item"
          >
            <img className="master-img" src={master.imageUrl} alt={`Фото ${master.name}`} />
            <div>
              <strong>{master.name}</strong>
              <p>{master.description}</p>
              <p><em>Специализация:</em> {master.specialty}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Masters;
