export const getStories = () => {
    return fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=79dH4GCf9j1TWqvZjARmuXSuzreApm3p")
    .then(response => {
        return response.json()
    })
}

export const cleanStoryData = (data) => {
    
}