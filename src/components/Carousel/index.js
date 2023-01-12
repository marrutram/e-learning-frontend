import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';

const slideWidth = 30;
const _items = [
    {
        player: {
            title: 'Técnicas de negociación',
            module: '3 Módulos',
            desc: 'Competencia a desarrollar: Aplicar técnicas de negociación  basadas en los siete principios del método propuesto por la  Universidad de Harvard. \n',
            image: './img/negotiation_techniques.png',
            to: '/course/1'
        },
    },
    {
        player: {
            title: "Herramientas digitales",
            module: '3 Módulos',
            desc: "Obtenga más información sobre cómo tomar decisiones empresariales. Alcanzará sus objetivos rápidamente, ganará confianza y aprenderá a su propio ritmo.",
            image: './img/digital_tools.png',
            to: '/course/2'
        },
    },
    {
        player: {
            title: 'Manejo y prevencion del estres',
            module: '2 Módulos',
            desc: 'Conoces como armar equipos de trabajo y colaborar vía chat y canales de información; en lugar de sólo correo electrónico y carpetas de archivos.',
            image: './img/stress_management_prevention.png',
            to: '/course/1'
        },
    },
    {
        player: {
            title: 'Presentación efectiva',
            module: '4 Módulos',
            desc: 'Herramientas necesarias para la administración de un grato clima organizacional, logrando desarrollar herramientas prácticas para la administración de conflictos y desarrollar. ',
            image: './img/effective_presentation.png',
            to: '/course/1'
        },
    },
    {
        player: {
            title: 'Gestion Eficaz del Tiempo',
            module: '5 Módulos',
            desc: 'Desarrolla habilidades que le permitan colaborar gestión de distintas unidades de negocios. Adquirir técnicas para mejorar la productividad y rendimiento del tiempo.',
            image: './img/effective_time_management.png',
            to: '/course/1'
        },
    },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`,
        },
        player: _items[idx].player,
    };

    switch (position) {
        case length - 1:
        case length + 1:
            item.styles = {...item.styles, filter: 'grayscale(1)'};
            break;
        case length:
            break;
        default:
            item.styles = {...item.styles, opacity: 0};
            break;
    }

    return item;
};

const CarouselSlideItem = ({pos, idx, activeIdx}) => {
    const item = createItem(pos, idx, activeIdx);

    return (
        <li className="carousel__slide-item flex-colum " style={item.styles}>
            <div className="carousel__slide-item-img-link row">
                <Link className="nav-link" to={item.player.to}>
                    <img src={item.player.image} alt={item.player.title} />
                </Link>
            </div>
            <div className="flex-column carousel_body_text">
                <div className="row">
                    <h4>{item.player.title}</h4>
                </div>
                {item.player.module &&
                    <div className="row">
                        <h6>{item.player.module}</h6>
                    </div>
                }
                {item.player.progress &&
                <div className="progress row">
                    <div className="progress-bar" role="progressbar" style={{width: item.player.progress +'%'}}  aria-valuemin="0" aria-valuemax="100">
                        {item.player.progress}%
                    </div>
                </div>
                }
                <div className="row">
                    <p className="text-carousel">{item.player.desc}</p>
                </div>
            </div>
            <div className="row">
                <button className="btn btn-primary btn-circle" type="button">
                    <i className="fas fa-thumbs-up fa-sm"></i>
                </button>
            </div>
        </li>
    );
};

const keys = Array.from(Array(_items.length).keys());

const Carousel = () => {
    const [items, setItems] = React.useState(keys);
    const [isTicking, setIsTicking] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    const handleDotClick = (idx) => {
        if (idx < activeIdx) prevClick(activeIdx - idx);
        if (idx > activeIdx) nextClick(idx - activeIdx);
    };

    React.useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    React.useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    }, [items]);

    return (
        <div className="d-flex flex-column" >
            <div className="carousel__inner row">
                <button className="carousel__btn  col" onClick={() => prevClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--left" />
                </button>


                <div className="carousel__container col-10">
                    <ul className="carousel__slide-list row">
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                                activeIdx={activeIdx}
                            />
                        ))}
                    </ul>
                </div>
                <button className="carousel__btn col" onClick={() => nextClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--right" />
                </button>

            </div>
            <div className="carousel__dots container-fluid row mx-auto">
                {items.slice(0, length).map((pos, i) => (
                    <button
                        key={i}
                        onClick={() => handleDotClick(i)}
                        className={i === activeIdx ? 'dot active' : 'dot'}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;