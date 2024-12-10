import style from "./stack.module.scss"
import { useState } from 'react'

export default function Stack({ tittle, prop1, prop2, prop3, prop4, prop5, prop6, prop7, prop8, prop9 }) {
    const [selectedTech, setSelectedTech] = useState(null)

    const handleTechClick = (tech) => {
        setSelectedTech(tech)
    }

    const closeModal = () => {
        setSelectedTech(null)
    }

    return (
        <>
            <div className={style.container} data-aos="flip-right" data-aos-duration="1000">
                <h1 className={style.tittle}>
                    {tittle}
                </h1>
                <div className={style.imagesContainer}>
                    {prop1 && (
                        <div 
                            className={style.item1} 
                            data-aos="fade-right" 
                            data-aos-duration="1000"
                            onClick={() => handleTechClick(prop1)}
                        >
                            {prop1?.img}
                        </div>
                    )}
                    {prop2 && (
                        <div 
                            className={style.item2} 
                            data-aos="fade-right" 
                            data-aos-duration="1000"
                            onClick={() => handleTechClick(prop2)}
                        >
                            {prop2?.img}
                        </div>
                    )}
                    {prop3 && (
                        <div 
                            className={style.item3} 
                            data-aos="fade-right" 
                            data-aos-duration="1000"
                            onClick={() => handleTechClick(prop3)}
                        >
                            {prop3?.img}
                        </div>
                    )}
                    {prop4 && (
                        <div 
                            className={style.item4} 
                            data-aos="fade-right" 
                            data-aos-duration="1000"
                            onClick={() => handleTechClick(prop4)}
                        >
                            {prop4?.img}
                        </div>
                    )}
                    {prop5 && (
                        <div 
                            className={style.item5} 
                            data-aos="fade-right" 
                            data-aos-duration="1000"
                            onClick={() => handleTechClick(prop5)}
                        >
                            {prop5?.img}
                        </div>
                    )}
                    {prop6 && (
                        <div 
                            className={style.item6} 
                            data-aos="fade-right" 
                            data-aos-duration="1000"
                            onClick={() => handleTechClick(prop6)}
                        >
                            {prop6?.img}
                        </div>
                    )}
                    {prop7 && (
                        <div 
                            className={style.item7} 
                            data-aos="fade-right" 
                            data-aos-duration="1000"
                            onClick={() => handleTechClick(prop7)}
                        >
                            {prop7?.img}
                        </div>
                    )}
                    {prop8 && (
                        <div 
                            className={style.item8} 
                            data-aos="fade-right" 
                            data-aos-duration="1000"
                            onClick={() => handleTechClick(prop8)}
                        >
                            {prop8?.img}
                        </div>
                    )}
                    {prop9 && (
                        <div 
                            className={style.item9} 
                            data-aos="fade-right" 
                            data-aos-duration="1000"
                            onClick={() => handleTechClick(prop9)}
                        >
                            {prop9?.img}
                        </div>
                    )}
                </div>
            </div>

            {selectedTech && (
                <div className={style.modalOverlay} onClick={closeModal}>
                    <div className={style.modal} onClick={e => e.stopPropagation()}>
                        <button className={style.closeButton} onClick={closeModal}>
                            ×
                        </button>
                        <div className={style.modalContent}>
                            <div className={style.modalHeader}>
                                <div className={style.techIcon}>
                                    {selectedTech.img}
                                </div>
                                <h2>{selectedTech.name}</h2>
                            </div>
                            <div className={style.modalBody}>
                                <div className={style.infoSection}>
                                    <h3>Experiência</h3>
                                    <p>{selectedTech.experience || "1 ano"}</p>
                                </div>
                                <div className={style.infoSection}>
                                    <h3>Nível</h3>
                                    <p>{selectedTech.level || "Intermediário"}</p>
                                </div>
                                <div className={style.infoSection}>
                                    <h3>Descrição</h3>
                                    <p>{selectedTech.description || "Tecnologia utilizada em projetos pessoais e profissionais."}</p>
                                </div>
                                <div className={style.infoSection}>
                                    <h3>Projetos Relevantes</h3>
                                    <ul>
                                        {selectedTech.projects?.map((project, index) => (
                                            <li key={index}>{project}</li>
                                        )) || <li>Projetos em desenvolvimento</li>}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}