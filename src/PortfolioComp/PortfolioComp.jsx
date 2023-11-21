import './PortfolioComp.css';
import { CardList } from '../Components/CardListComponent/CardList';
import { cardlist } from "../data";



const PortfolioComp = () => {
    return (
        <div className="pl">
            <div className="pl-text">
                <h1 className="pl-title">My Projects</h1>
                <p className="pl-desc">
                    This project section showcases a total of 6 projects, each highlighting my skills in web development and problem-solving. From developing an online food delivery system to creating a user-friendly e-commerce platform, I have demonstrated my ability to work with a variety of technologies and deliver successful projects. Each project showcases my attention to detail, creativity, and drive to exceed client expectations. I am confident that these projects demonstrate my ability to turn complex problems into effective solutions.
                </p>
            </div>
            <div className="pl-list">
                {cardlist.map((item) => (
                    <CardList key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>

    )
}

export default PortfolioComp;