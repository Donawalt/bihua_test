import './BlockTexte.css';
import Block from '../Block/Block.js'
import { useState } from 'react';

function BlockTexte() {

    const [anim, setanim] = useState(["Texte Animation", "Texte", "Texte"])
    const [val_scroll, set_valscroll] = useState(0)

    const handleScroll = (event) => {
        set_valscroll(event.currentTarget.scrollTop)
        if(event.currentTarget.scrollTop > val_scroll)
        {
            if(val_scroll > 350)
            {
                const newanim = ["Texte NotAnime", "Texte", "Texte"]
                setanim(newanim)
            }
            if(val_scroll > 650)
            {
                const newanim = ["Texte", "Texte Animation", "Texte"]
                setanim(newanim)
            }
            if(val_scroll > 1150)
            {
                const newanim = ["Texte", "Texte NotAnime", "Texte"]
                setanim(newanim)
            }
            if(val_scroll > 1250)
            {
                const newanim = ["Texte", "Texte", "Texte Animation"]
                setanim(newanim)
            }
            
        }
        else
        {
            if(val_scroll < 1550)
            {
                const newanim = ["Texte", "Texte", "Texte NotAnimeInverse"]
                setanim(newanim)
            }
            if(val_scroll < 1050)
            {
                const newanim = ["Texte", "Texte AnimationInverse", "Texte"]
                setanim(newanim)
            }
            if(val_scroll < 550)
            {
                const newanim = ["Texte", "Texte NotAnimeInverse", "Texte"]
                setanim(newanim)
            }
            if(val_scroll < 250)
            {
                const newanim = ["Texte AnimationInverse", "Texte", "Texte"]
                setanim(newanim)
            }
        }
        console.log(val_scroll)
        
    };

    const list_texte = [
        {
            "titre": "Un parcours complet",
            "description": "En suivant l’un de nos parcours de 18 mois, vous allez relever des défis et repousser vos limites. Avec Tertia Via vous opérez une transformation en profondeur dans le but de devenir des leaders agiles, visionnaires, et inspirants, capables de réussir des changements majeurs et impactant pour vos activité et vos équipes."
        },
        {
            "titre": "Un processus de transformation pour vous et votre activité",
            "description": "La finalité de nos programmes c’est de vous donner toutes les clés pour transformer votre organisation. Nous partons de votre projet et concrétisons sa transformation avec vous. Voilà pourquoi, pour accéder à notre enseignement, il est nécessaire d’avoir une situation professionnelle valide et concrète."
        },
        {
            "titre": "Une expérience immersive et stimulante",
            "description": "Nos parcours intègrent les meilleures pratiques de la pédagogie expérientielle et de l'apprentissage en intelligence collective. Avec Tertia Via vous bénéficiez d'un environnement stimulant où vous pourrez échanger des idées, partager des expériences enrichissantes et créer des collaborations fructueuses avec d'autres leaders engagés dans la même démarche de transformation."
        }
    ]

    return (
        <> 
            <div className="blockTexte" >
                <div className="Blocks" onScroll={handleScroll}>
                    {
                        list_texte.map((element, id) => (
                            <Block key={id} element={element} anim={anim[id]} />
                        ))
                    }
                </div>
            </div>
        </>
    );

}

export default BlockTexte;