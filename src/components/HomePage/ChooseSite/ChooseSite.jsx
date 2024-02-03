import React from 'react'
import { THEME_DARK, THEME_LIGHT, THEME_NEITRAL, useTheme } from '../../../context/ThemeProvider'
import imgLightSIde from './img/light-side.jpg'
import imgDarkSIde from './img/dark-side.jpg'
import imgFalkon from './img/falcon.jpg'
import scss from './ChooseSite.module.scss'
import classNames from 'classnames'

const ChooseSiteItem = ({
    classes,
    theme,
    text,
    img
}) => {
    const isTheme = useTheme();

    return (
        <div className={classNames(scss.item, classes)}
            onClick={() => isTheme.change(theme)}>
            <div className={scss.item__header}>{text}</div>
            <img className={scss.item__img} src={img} alt="" />
        </div >
    )

}

function ChooseSite() {
    const elements = [
        {
            theme: THEME_LIGHT,
            text: 'Light Side',
            img: imgLightSIde,
            classes: scss.item__light
        },
        {
            theme: THEME_DARK,
            text: 'Dark Side',
            img: imgDarkSIde,
            classes: scss.item__dark
        },
        {
            theme: THEME_NEITRAL,
            text: 'I am Han Solo',
            img: imgFalkon,
            classes: scss.item__neitral
        }

    ]
    return (
        <div className={scss.container}>
            {elements.map(({ theme, text, img, classes }, index) => (
                <ChooseSiteItem
                    key={index}
                    theme={theme}
                    text={text}
                    img={img}
                    classes={classes}
                />
            ))}
        </div>
    )
}

export default ChooseSite