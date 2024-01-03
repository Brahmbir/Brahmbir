import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import move from "lodash-move";

import { useMediaQuery } from "../../hooks/useMediaQuery";
import "./CardSection.css"
import Card from "../card/Card";
import Dragable from '../dragable/Dragable'


const SCALE_FACTOR = 0.06;

const CardSection = ({ cardOffest = 20 }) => {
    const [cards, setCards] = useState([]);
    const isNotSmall = useMediaQuery("(min-width: 600px)");
    const moveToEnd = from => {
        setCards(move(cards, from, cards.length - 1));
    };
    useEffect(() => {
        const getData = async () => {
            fetch("/project.json")
                .then((response) => response.json())
                .then((response) => {
                    setCards(() => response)
                })
                .catch((err) => console.error(err));
        };
        getData();
    }, []);


    return (
        <section className="section">
            <div className="award">Projects</div>
            <div className="wrapperStyle">
                <ul className="cardWrapStyle">
                    {cards.map((detail, index) => {
                        const canDrag = index === 0;
                        const variants = isNotSmall
                            ? {
                                animate: {
                                    top: 0,
                                    scale: 1 - index * SCALE_FACTOR,
                                    left: (index == 0 ? "" + (index * cardOffest) + "%" : "max(" + (index * cardOffest) + "% , 15em"),
                                    filter: "brightness(" + 100 * ((cards.length - index) / cards.length) + "%)", zIndex: cards.length - index
                                },
                                dragConstraints: { left: 0, right: 0 },
                                drag: canDrag ? "x" : false,
                            }
                            : {
                                animate: {
                                    scale: 1 - index * SCALE_FACTOR * 1,
                                    top: (index == 0 ? "" + (index * cardOffest) + "%" : "max(" + (index * cardOffest * 0.55) + "% , 3em"),
                                    left: 0,
                                    filter: "brightness(" + 100 * ((cards.length - index) / cards.length) + "%)", zIndex: cards.length - index
                                },
                                drag: canDrag ? "y" : false,
                                dragConstraints: { top: 0, bottom: 0 },
                            };
                        return (
                            <motion.li
                                layoutId={detail.key}
                                key={detail.key}
                                className="cardStyle"
                                style={{ alignItems: "center", justifyItems: "center", cursor: canDrag ? "grab" : "auto" }}
                                animate={variants.animate}
                                transition={{ type: "tween", duration: 0.5 }}
                                drag={variants.drag}
                                dragElastic={0.2}
                                dragConstraints={variants.dragConstraints}
                                onDragEnd={() => moveToEnd(index)}>
                                <Card detail={detail} />
                            </motion.li>
                        );
                    })}
                </ul>
                <Dragable isNotSmall={isNotSmall} />

            </div>
        </section >
    );
}

export default CardSection;
