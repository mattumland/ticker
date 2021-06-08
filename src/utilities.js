export const getStories = () => {
    return fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=79dH4GCf9j1TWqvZjARmuXSuzreApm3p")
    .then(response => response.json())
}

export const cleanStoryData = (data) => {
    console.log(data)
    return data.results.map((story, index) => {
        return {
            'section': story.section,
            'subsection': story.subsection,
            'title': story.title,
            'byline': story.byline,
            'abstract': story.abstract,
            'updatedDate': story.updated_date,
            'publishedDate': story.published_date,
            'link': story.short_url,
            'imageLink': story.multimedia[0].url,
            'imageCredit': story.multimedia[0].copyright,
            'imageCaption': story.multimedia[0].caption,
            'id': index
        }
    })
}

const formatDate = (date) => {

}

const filterStories = () => {
    
}