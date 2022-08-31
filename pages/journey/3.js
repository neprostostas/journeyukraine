import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout';
import Link from 'next/link';
import s from '../../styles/Items.module.css'
import data from '../../db'
import Head from 'next/head';

export default function Item() {

    return (
        <MainLayout>

            <Head>
                <title>
                    {data.items[2].name}
                </title>
            </Head>

            <div>
                <div className={s.itemTop}>
                    <h1 className={s.title}>Детальний опис туру</h1>
                    <Link href={'/journeys'}>
                        <a className={s.backButton}>Назад</a>
                    </Link>
                </div>

                <hr />

                <div className={s.productContainer}>
                    <img className={s.imgTour} src={data.items[2].imageUrl} alt={data.items[2].name} />

                    <div className={s.textProduct}>

                        <div className={s.wrapPost}>

                            <h2>{data.items[2].name}</h2>
                            <p>{data.items[2].info}</p>
                            <p><span className={s.spanTour}>1 день: </span>{data.items[2].plan1}</p>
                            <p><span className={s.spanTour}>2 день: </span>{data.items[2].plan2}</p>
                            <p><span className={s.spanTour}>Менеджер: </span>{data.items[2].contacts}</p>
                            <p><span className={s.spanTour}>Харчування: </span>{data.items[2].eating}</p>
                            <p><span className={s.spanTour}>Ціна: </span>{data.items[2].price}</p>
                            <p><span className={s.spanTour}>К-сть квитків: </span>{data.items[2].count}</p>

                            <div className={s.generalInfo}>
                                <p>
                                    Проживання:
                                    <br />
                                    Затишні садиби сільського туризму Берегівського району, номери: 2-х і 3-х місні з вигодами на коридорі.
                                    <br />
                                    <br />
                                    У вартість ВХОДИТЬ:
                                    <br />
                                    - проїзд комфортабельним автобусом єврокласу,
                                    <br />
                                    - проживання,
                                    <br />
                                    - супровід гіда-екскурсовода,
                                    <br />
                                    - екскурсійне обслуговування на туристичних об’єктах,
                                    <br />
                                    - страхування на час подорожі.
                                    <br />
                                    <br />
                                    У вартість НЕ ВХОДИТЬ і додатково оплачується:
                                    <br />
                                    - вхідні квитки в туристичні об’єкти,
                                    <br />
                                    - харчування,
                                    <br />
                                    - дегустація вина.
                                    <br />
                                    <br />
                                    Знижки для дітей:
                                    <br />
                                    - Дітям до 6 років (включно) у супроводі 2-х дорослих і без окремого місця в автобусі та при проживанні – безкоштовно;
                                    <br />
                                    - Дітям до 12 років (включно) знижка від загальної вартості туру – 100 грн./особа.
                                </p>
                            </div>
                        </div>

                        <div className={s.comments}>

                            <h2>Коментарі:</h2>

                            {data.items[2].comments.map(comment => (
                                <li key={comment.id}>
                                    <p className={s.idGen}><span className={s.idComment}>{comment.id}. </span>{comment.author}</p>
                                    <p className={s.descComment}>{comment.description}</p>
                                    <p className={s.dateComment}>{comment.date}</p>
                                </li>
                            ))}

                        </div>

                        <div className={s.addComments}>

                            <form action="/" method="post" role="form" className={s.emailForm}>
                                <div className={s.row}>
                                    <div className={s.nameInput}>
                                        <input type="text" name="name" className={s.formControl} id="name" placeholder="Ім'я" data-rule="minlen:4"
                                            data-msg="Please enter at least 4 chars" />
                                        <div className={s.validate}></div>
                                    </div>
                                </div>
                                <div className={s.formControl}>
                                    <textarea className={s.formControl} name="message" rows="5" placeholder="Коментар"></textarea>
                                    <div className={s.validate}></div>
                                </div>
                                <div className={s.textCenter}><button type="submit">Залишити коментар!</button></div>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </MainLayout>
    )
}