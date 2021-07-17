
export const ChangingPage = (history, pagename) => {

    return(<>{history.push(`/${pagename}`)}</>)

}