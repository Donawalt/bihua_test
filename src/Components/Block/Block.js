import './Block.css';

function Block(props) {

    return (
        <> 
            <div className={props.anim}>
                <p className="Titre">{props.element.titre}</p>
                <p className="Description">{props.element.description}</p>
                <button><p>Découvrir nos parcours</p> <span><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span></button>
            </div>
        </>
    );

}

export default Block;