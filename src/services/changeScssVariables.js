export const changeScssVariables = theme => {
    const root = document.querySelector(':root');

    const ScssVariables = ['header', 'bgimage']

    ScssVariables.forEach(el => {
        root.style.setProperty(`--theme-default-${el}`,
            `var(--theme-${theme}-${el})`)
    })
}