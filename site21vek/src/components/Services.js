import React from 'react';
import { Link } from 'react-router-dom';
import Service from './Service';

const servicesData = [
  {
    category: "Услуги парикмахера",
    services: [
      { name: "Мелирование (средняя длина)", price: "1500" },
      { name: "Стрижка (женская)", price: "200" },
      { name: "Стрижка (мужская)", price: "700" },
      { name: "Архитектура бровей", price: "200" },
      { name: "Окрашивание в один тон (средняя длина)", price: "1650" },
    ],
    links: [
      { to: "/masters/1", text: "Подробнее о мастере" },
      { to: "/masters/2", text: "Подробнее о мастере" },
    ],
  },
  {
    category: "Услуги Nail-мастера",
    services: [
      { name: "Маникюр с покрытием", price: "500" },
      { name: "Педикюр с покрытием", price: "1000" },
    ],
    links: [
      { to: "/masters/3", text: "Подробнее о мастере" },
    ],
  },
  {
    category: "Услуги массажиста",
    services: [
      { name: "Лимфодренажный массаж", price: "2000" },
      { name: "Антицеллюлитный массаж", price: "1700" },
      { name: "Расслабляющий массаж", price: "1500" },
    ],
    links: [
      { to: "/masters/4", text: "Подробнее о мастере" },
    ],
  },
  {
    category: "Услуги косметолога",
    services: [
      { name: "Массаж лица", price: "1700" },
      { name: "Гоммаж", price: "1300" },
      { name: "Лечебные маски", price: "1500" },
      { name: "Депиляция лица", price: "900" },
    ],
    links: [
      { to: "/masters/5", text: "Подробнее о мастере" },
    ],
  },
  {
    category: "Услуги по наращиванию ресниц",
    services: [
      { name: "Наращивание ресниц классическое", price: "1000" },
      { name: "Наращивание ресниц объемное", price: "1500" },
    ],
    links: [
      { to: "/masters/6", text: "Подробнее о мастере" },
    ],
  },
];

const columns = [
  servicesData.slice(0, 2), 
  servicesData.slice(2, 4), 
  servicesData.slice(4),    
];

function Services() {
  return (
    <div className="services-container">
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="services-column">
          {column.map((category, index) => (
            <section key={index}>
              <h2>{category.category}</h2>
              {category.services.map((service, sIndex) => (
                <Service key={sIndex} name={service.name} price={service.price} />
              ))}
              {category.links && category.links.map((link, lIndex) => (
                <div key={lIndex} className="button-link-container">
                  <Link to={link.to} className="button-link">{link.text}</Link>
                </div>
              ))}
              <br />
            </section>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Services;
