import React from 'react'
import style from './ProjectModal.module.css'
import GlassDiv from '../glassDiv/GlassDiv'

export default function ProjectModal({ setShowModal, selectedProject }) {
    return (
        <div className={`${style.outer}`} onClick={() => {
            setShowModal(false)
        }}  >

            <GlassDiv className={`${style.inner}`} >
                <div className={`${style.main}`}>
                    <section className={style.left}>
                        <h1>{selectedProject.title}</h1>
                        <div className={`${style.imgContainer}`}>
                            {
                                selectedProject.images.map((img, index) =>
                                    <img src={img} alt={selectedProject.title} key={index} />
                                )

                            }
                        </div>
                    </section>
                    <div className={`${style.hr}`} />
                    <section className={style.right}>
                        <a href={selectedProject.links[0]} ><svg className={style.svgGitHub} stroke="currentColor" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
                        {selectedProject.links[1] && <a href={selectedProject.links[1]}><svg className={style.svgGitHub} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" fill="white"></path> <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" fill="white"></path> </svg></a>}
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas consequuntur facere velit expedita sequi non ad, laboriosam mollitia reiciendis architecto nostrum. Omnis, doloremque rerum voluptas totam necessitatibus sint reprehenderit?
                            Iusto expedita ipsam dicta vitae ducimus assumenda provident reiciendis aliquid dolore repellendus, ipsa autem id quo natus, a maxime repudiandae iste architecto suscipit quos distinctio impedit quas! Consequuntur, numquam dolorem?
                        </p>
                    </section>
                </div>
            </GlassDiv>

        </div>
    )
}
