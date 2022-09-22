
type TitleType = {
    slug: string
    text: string
}

const getTitleOrDescription = (seo_text: string, string: string, array: Array<TitleType> = []) => {
    if(seo_text !== '0' && !!seo_text){
        return seo_text
    }
    let newString = string
    for (let i = 0; i < array.length; i++) {
        const title = array[i]
        let index = newString.indexOf(title.slug);
        while (index !== -1){
            newString = newString.substring(0, index) + title.text + newString.substring(index + title.slug.length, newString.length)
            index = newString.indexOf(title.slug)
        }
    }

    return newString
}


export default getTitleOrDescription