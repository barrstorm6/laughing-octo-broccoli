"use client";

import Image from "next/image";
import { useState } from "react";

function Icon({name}:{name:string}) {
 return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
 {name==='cup'&&<><path d="M4 8h13v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z"/><path d="M17 9h2a3 3 0 1 1 0 6h-2M7 2v3M11 1v4M15 2v3M2 23h18"/></>}
 {name==='arrow'&&<path d="M4 12h15M13 6l6 6-6 6"/>}
 {name==='pin'&&<><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>}
 {name==='heart'&&<path d="m12 20-8-8a5 5 0 0 1 8-6 5 5 0 0 1 8 6l-8 8Z"/>}
 {name==='leaf'&&<><path d="M20 3C6 1 2 9 6 16s15 2 14-13Z"/><path d="M3 22 15 9M8 17v-6M8 17h6"/></>}
 {name==='sun'&&<><circle cx="12" cy="12" r="4"/><path d="M12 1v3M12 20v3M1 12h3M20 12h3M4 4l2 2M18 18l2 2M4 20l2-2M18 6l2-2"/></>}
 {name==='clock'&&<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>}
 </svg>;
}
const categories=['Кофе','Не кофе','Выпечка'] as const;
type Category=typeof categories[number];
const menu:Record<Category,{name:string;detail:string;price:string;photo:string;tag?:string}[]>={
 'Кофе':[
 {name:'Капучино',detail:'Эспрессо, молоко и нежная пенка',price:'1 200',photo:'photo-1572442388796-11668a67e53d',tag:'Любимчик гостей'},
 {name:'Флэт уайт',detail:'Двойной эспрессо, бархатное молоко',price:'1 400',photo:'photo-1514432324607-a09d9b4aefdd'},
 {name:'Латте',detail:'Больше молока, больше нежности',price:'1 400',photo:'photo-1461023058943-07fcbe16d735'}],
 'Не кофе':[
 {name:'Матча-латте',detail:'Японская матча и нежное молоко',price:'1 600',photo:'photo-1515823064-d6e0c04616a7',tag:'Попробуйте новое'},
 {name:'Горячий шоколад',detail:'Настоящий шоколад, немного счастья',price:'1 500',photo:'photo-1542990253-0b8be5be0ed1'},
 {name:'Домашний чай',detail:'Облепиха, апельсин и свежая мята',price:'1 200',photo:'photo-1544787219-7f47ccb76574'}],
 'Выпечка':[
 {name:'Круассан',detail:'Хрустящий снаружи, воздушный внутри',price:'1 100',photo:'photo-1555507036-ab1f4038808a',tag:'Каждое утро'},
 {name:'Синнабон',detail:'Корица и сливочная глазурь',price:'1 300',photo:'photo-1509365465985-25d11c17e812'},
 {name:'Чизкейк',detail:'Нежная классика к вашей чашке',price:'1 800',photo:'photo-1533134242443-d4fd215305ad'}]
};
function Brand(){return <a className="brand" href="#home" aria-label="Тёпло — на главную"><Icon name="cup"/><span>тёпло<span className="brand-caption">кофе и хорошие люди</span></span></a>}
export default function Home(){
 const [category,setCategory]=useState<Category>('Кофе');
 const [navOpen,setNavOpen]=useState(false);
 return <div id="home">
 <header className="header container"><Brand/><button className="nav-toggle" onClick={()=>setNavOpen(!navOpen)} aria-expanded={navOpen} aria-label="Навигация">{navOpen?'✕':'☰'}</button><nav className={navOpen?'navigation is-open':'navigation'} aria-label="Главная навигация"><a href="#about" onClick={()=>setNavOpen(false)}>О нас</a><a href="#menu" onClick={()=>setNavOpen(false)}>Меню</a><a href="#contacts" onClick={()=>setNavOpen(false)}>Контакты</a></nav><a href="#contacts" className="header-visit">Заглянуть в гости <Icon name="arrow"/></a></header>
 <main>
 <section className="hero container" aria-labelledby="hero-title"><div className="hero-copy"><div className="eyebrow"><span className="little-dot"/> ВАША КОФЕЙНЯ ПО СОСЕДСТВУ</div><h1 id="hero-title">Хороший день<br/>начинается<br/>с <span>тёплого кофе.</span></h1><p>И с места, где вам всегда рады. Варим любимый кофе,<br className="desktop-break"/> печём круассаны и никуда не торопимся.</p><div className="hero-actions"><a className="button button-primary" href="#menu">Посмотреть меню <Icon name="arrow"/></a><a className="text-link" href="#contacts"><Icon name="pin"/> Как нас найти</a></div><div className="hero-note"><span/> Маленькая пауза. Большое удовольствие.</div></div><div className="hero-visual"><Image src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1400&q=85" alt="Чашка кофе на деревянном столе" fill unoptimized loading="eager" sizes="(max-width: 760px) 100vw, 50vw" className="hero-photo"/><div className="coffee-stamp"><span>с любовью</span><Icon name="heart"/><span>в каждой чашке</span></div><div className="photo-label"><span className="little-dot"/> Кофе. Уют. Вы.</div><svg className="hero-flower" viewBox="0 0 100 100" fill="none" aria-hidden="true"><path d="M50 37C21-11 7 17 37 43-14 29-4 62 36 53 0 88 30 105 44 64 39 113 73 105 57 64 95 98 111 67 66 55 115 47 98 16 64 41 83-4 49-11 50 37Z" stroke="currentColor" strokeWidth="2"/><circle cx="51" cy="51" r="10" stroke="currentColor" strokeWidth="2"/></svg></div></section>
 <section id="about" className="values container" aria-label="О кофейне"><div className="value"><Icon name="leaf"/><div><h2>Хорошее зерно</h2><p>Свежая обжарка и честный вкус</p></div></div><div className="value"><Icon name="sun"/><div><h2>Свежая выпечка</h2><p>Каждое утро, прямо из печи</p></div></div><div className="value"><Icon name="heart"/><div><h2>По-домашнему тепло</h2><p>Для встреч, работы и просто так</p></div></div></section>
 <section id="menu" className="menu-section container" aria-labelledby="menu-heading"><div className="section-top"><div><div className="eyebrow">ЧТО-ТО ВКУСНОЕ ДЛЯ ВАС</div><h2 id="menu-heading">Ваши маленькие радости</h2></div><div className="menu-tabs" role="group" aria-label="Категория меню">{categories.map(item=><button key={item} onClick={()=>setCategory(item)} aria-pressed={category===item} className={category===item?'active':''}>{item}</button>)}</div></div><div className="menu-grid" aria-live="polite">{menu[category].map(item=><article className="menu-card" key={item.name}><div className="menu-photo-wrap"><Image src={`https://images.unsplash.com/${item.photo}?auto=format&fit=crop&w=800&q=80`} alt={item.name} fill unoptimized sizes="(max-width: 760px) 100vw, 33vw" className="menu-photo"/>{item.tag&&<span className="menu-tag">{item.tag}</span>}</div><div className="menu-card-heading"><h3>{item.name}</h3><span>{item.price} <small>₸</small></span></div><p>{item.detail}</p></article>)}</div><p className="menu-footnote"><Icon name="cup"/> Любой кофе приготовим на растительном молоке. Просто скажите бариста.</p></section>
 <section id="contacts" className="contact-section container" aria-labelledby="contact-heading"><div className="contact-card"><div className="contact-copy"><div className="eyebrow">МЕСТО ДЛЯ ВАШИХ ИСТОРИЙ</div><h2 id="contact-heading">Заходите.<br/>Мы уже греем чашки.</h2><p>С любимой книгой, с друзьями или наедине с собой.<br/>Для вас всегда найдётся уютное место.</p><a className="button button-primary" href="https://www.google.com/maps/search/?api=1&query=Алматы+улица+Абая+42" target="_blank" rel="noopener noreferrer">Открыть на карте <Icon name="arrow"/></a></div><div className="contact-details"><div><Icon name="pin"/><div><span>ЖДЁМ ВАС ЗДЕСЬ</span><p>Алматы, ул. Абая, 42</p><small>Вход со стороны улицы</small></div></div><div><Icon name="clock"/><div><span>КАЖДЫЙ ДЕНЬ</span><p>08:00 — 21:00</p><small>Идеальный момент — сейчас</small></div></div><div className="contact-bottom">Хороший кофе сближает <Icon name="heart"/></div></div></div></section>
 </main><footer className="footer container"><Brand/><p>© {new Date().getFullYear()} Тёпло. Сделано с теплом.</p><a href="#home">Наверх ↑</a></footer><div className="prototype-note">Прототип · название, адрес и цены указаны для примера</div>
 </div>;
}
