export const getStories = () => {
    return fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=79dH4GCf9j1TWqvZjARmuXSuzreApm3p")
    .then(response => response.json())
}

export const cleanStoryData = (data) => {
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

export const filterStories = (filter, stories) => {
    switch(filter) {
        case '':
            return stories
        case'health':
            return stories.filter(story => story.section === 'well' || story.section === 'health')
        case 'us':
            return stories.filter(story => story.section === 'us')
        case 'world':
            return stories.filter(story => story.section === 'world' || story.section === 'climate')
        case 'sci':
            return stories.filter(story => story.section === 'science' || story.section === 'tech')
        case 'business':
            return stories.filter(story => story.section === 'business' || story.section === 'realestate')
        case 'opinion':
            return stories.filter(story => story.section === 'opinion' || story.section === 'upshot')
        case 'arts':
            return stories.filter(story => story.section === 'arts' || story.section === 'books' 
                || story.section === 'podcasts' || story.section === 'style')
    }

}