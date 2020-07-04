export default function fontSize(res){
    // let docEl = document.documentElement,
     let clientWidth = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
    if (!clientWidth) return;
    let fontSize = (clientWidth / 9240);
    return res*fontSize;
}
