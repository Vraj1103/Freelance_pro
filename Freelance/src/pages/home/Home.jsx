import React from "react";
import "./Home.scss";
import CatCard from '../../components/catCard/CatCard';
// import ProjectCard from "../../components/projectCard/ProjectCard";
import {cards} from '../../data'
import {projects} from '../../data'
import Featured from "../../components/featured/Featured";
import Slide from "../../components/Slide/Slide";
import ProjectCard from "../../components/projectCard/ProjectCard";
const Home = () =>{
    return(
        <div className="home">
            <Featured/>
            <Slide slidesToShow={5} arrowsScroll={5}>
                {cards.map(card=>(
                    <CatCard key={card.id} item={card}/>
                ))}
            </Slide>
            <div className="features">
                    <div className="container">
                        <div className="item">
                            <h1>A whole world of daily requirements at your finger tips</h1>
                            <div className="title">
                                <img src="./img/check.png" alt="check mark"/>
                                The best for every budget
                            </div>
                            <p>
                            Find high-quality products at every price point. No hourly rates, just product-based pricing.
                            </p>
                            <div className="title">
                                <img src="./img/check.png" alt="check mark"/>
                                The best for every budget
                            </div>
                            <p>
                            Find high-quality products at every price point. No hourly rates, just product-based pricing.
                            </p>
                            <div className="title">
                                <img src="./img/check.png" alt="check mark"/>
                                The best for every budget
                            </div>
                            <p>
                            Find high-quality products at every price point. No hourly rates, just product-based pricing.
                            </p>
                            <div className="title">
                                <img src="./img/check.png" alt="check mark"/>
                                The best for every budget
                            </div>
                            <p>
                            Find high-quality products at every price point. No hourly rates, just product-based pricing.
                            </p>
                        </div>
                        <div className="item">
                            <video src="./img/video.mp4" controls></video>
                        </div>
                    </div>
            </div>

            <div className="features dark">
                    <div className="container">
                        <div className="item">
                            <h1><span className="effitto">Effitto</span>Business</h1>
                            <h1>A business solution desinged for students</h1>
                            <p>Upgrade to a curated experience packed with tools and benefits,
                            dedicated to businesses</p>
                            <div className="title">
                                <img src="./img/check.png" alt="check mark"/>
                                Connect to freelaÅcers with proven business experience
                            </div>
                            <div className="title">
                                <img src="./img/check.png" alt="check mark"/>
                                Connect to freelaÅcers with proven business experience
                            </div>
                            <div className="title">
                                <img src="./img/check.png" alt="check mark"/>
                                Connect to freelaÅcers with proven business experience
                            </div>
                            <div className="title">
                                <img src="./img/check.png" alt="check mark"/>
                                Connect to freelaÅcers with proven business experience
                            </div>
                            <button>Explore <span className="effitto_button">Effitto</span> Business</button>
                        </div>
                        <div className="item">
                        <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" alt="feature"/>
                        </div>
                    </div>
            </div>
            <Slide slidesToShow={4} arrowsScroll={4}>
                {projects.map(card=>(
                    <ProjectCard key={card.id} item={card}/>
                ))}
            </Slide>
        </div>
    )
}

export default Home;