import style from "./stack.module.scss"



export default function Stack({ tittle, prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9 }) {
    return (
        <div className={style.container} data-aos="flip-right" data-aos-duration="1000">
            <h1 className={style.tittle}>
                {tittle}
            </h1>
            <div className={style.imagesContainer}>

            
            {prop1?<div className={style.item1} data-aos="fade-right" data-aos-duration="1000">{prop1?.img}</div>:null}
            {prop2?<div className={style.item2} data-aos="fade-right" data-aos-duration="1000">{prop2?.img}</div>:null}
            {prop3?<div className={style.item3} data-aos="fade-right" data-aos-duration="1000">{prop3?.img}</div>:null}
            {prop4?<div className={style.item4} data-aos="fade-right" data-aos-duration="1000">{prop4?.img}</div>:null}
            {prop5?<div className={style.item5} data-aos="fade-right" data-aos-duration="1000">{prop5?.img}</div>:null}
            {prop6?<div className={style.item6} data-aos="fade-right" data-aos-duration="1000">{prop6?.img}</div>:null}
            {prop7?<div className={style.item7} data-aos="fade-right" data-aos-duration="1000">{prop7?.img}</div>:null}
            {prop8?<div className={style.item8} data-aos="fade-right" data-aos-duration="1000">{prop8?.img}</div>:null}
            {prop9?<div className={style.item9} data-aos="fade-right" data-aos-duration="1000">{prop9?.img}</div>:null}

            </div>
        </div>
    )
}