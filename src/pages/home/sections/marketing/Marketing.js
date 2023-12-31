import "./Marketing.css";
import wifeHusbandImg from "../../../../assets/images/wife-husband.jpeg";
import shapeImg from "../../../../assets/images/shape-2.svg";

const Marketing = () => {
    return (
        <section id="marketing">
            <div className="marketing-content container">
                <div className="marketing-left">
                    <div className="marketing-image-wrapper">
                        <img src={wifeHusbandImg} alt="" />
                        <img src={shapeImg} alt="" />
                    </div>
                </div>
                <div className="marketing-right">
                    <div>
                        <h3>Spend your happy time with full comfort.</h3>
                        <p>
                            Embrace blissful comfort: Revel in delightful
                            moments, surrounded by unmatched tranquility and
                            exquisite relaxation.
                        </p>
                        <div className="explore-wrapper">
                            <hr />
                            <span>Explore Our Products</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Marketing };
