import React from "react";
import { ConflictContent } from "../../common/constants";
import { ReactComponent as CheckSvg } from './../../images/ui/check.svg';
import "./legenda.css";

interface Props {
    avatar: string;
    content: ConflictContent[];
    translations: { [key: string]: string}
    answers: number[];
    setSituationSelected: React.Dispatch<React.SetStateAction<number | null>>;
}

const Legenda = (props: Props) => {
    const { content, translations } = props;

    const renderContent = (item: ConflictContent, index: number) => {
        const completed = props.answers[index] === undefined;
        const handleClick = () => {
            props.setSituationSelected(index);
        }
        if (completed) {
            return (
                <li className="" onClick={handleClick} key={item.header}>
                    {translations[item.header]}
                </li>
            )
        }

        return (
            <li className="completed" key={item.header}>
                <CheckSvg className="check" />
                {translations[item.header]}
            </li>
        )
    }
    return (
        <div className="legenda">
            <div className="avatar"
                style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/avatars/${props.avatar}-front.png)`}}
            >

            </div>
            <ul>
                {content.map((contentItem, index) => renderContent(contentItem, index))}
            </ul>
        </div>
    )
}

export default Legenda;