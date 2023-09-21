function Home(){

    return(
        <>
       <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
            <div className="carousel-item active">
                
                <img src="banner-family.jpg" className="d-block w-100"/>
                
            </div>
            <div className="carousel-item">
                <img src="banner-farmacia.jpg" className="d-block w-100"/>
            </div>
             <div className="carousel-item">
                <img src="equipa-kfp.png" className="d-block w-100"/>
             </div>
         </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">seguinte</span>
        </button>
    </div>
        </>
    )
}

export default Home