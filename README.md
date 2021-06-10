# Ticker

Ticker consumes the New York Times top stories API to give user a simple interface for seeing today's top stories fast. An intuitive button interface provides quick filtering and large clickable cards trigger a modal for viewing story details.  

## Running the App
1.Clone down this repo.  
2. Install dependencies in the root directory with npm install.    
3. Start up the development server with npm start in the root project directory.   
4. Go to http://localhost:3000/ to see the app.

## Final Site

![Screen Shot 2021-06-09 at 12 07 20 PM](https://user-images.githubusercontent.com/72086109/121390541-7b029980-c91b-11eb-848f-d977807523a4.png)  
![Screen Shot 2021-06-09 at 12 07 31 PM](https://user-images.githubusercontent.com/72086109/121390574-83f36b00-c91b-11eb-9e98-5745b12cf466.png)
![Screen Shot 2021-06-10 at 12 29 37 PM](https://user-images.githubusercontent.com/72086109/121562625-a357ca00-c9e7-11eb-90fc-2d99253f7daf.png)
![Screen Shot 2021-06-10 at 12 29 47 PM](https://user-images.githubusercontent.com/72086109/121562643-a652ba80-c9e7-11eb-8abe-3b05f8620b48.png)
![Screen Shot 2021-06-10 at 12 29 54 PM](https://user-images.githubusercontent.com/72086109/121562649-a81c7e00-c9e7-11eb-95df-64ad2942bbfd.png)


## Planning
The app was created as a take home assignment with a timeline of 6 hours. This is tight time restriction called for a simple design and user flow. Wireframes were created in Adobe XD to ensure the layout was thought through prior to the start of coding. The design is intentionally simple to take full advantage of the image content provided by the API. Rather than create an elaborate color scheme or brand, Ticker lets the story titles and images to the talking. 

A similar "less is more" approach is used for the header, which uses dynamic buttons to both filter the stories and announce to the user what filter is currently applied. 

### Wireframes

![Web 1920 – 1](https://user-images.githubusercontent.com/72086109/121387448-adf75e00-c918-11eb-9d0a-f33af880d28e.png)  
![Web 1920 – 2](https://user-images.githubusercontent.com/72086109/121387467-afc12180-c918-11eb-87c2-7486f25bc7c5.png)  
![iPhone 6, 7, 8 – 1](https://user-images.githubusercontent.com/72086109/121387483-b2bc1200-c918-11eb-8328-026740ef67a8.png)

### Component and Data Sketch

A basic data structure was planned, which clarified how API data would be cleaned, stored and used. 
![components   data](https://user-images.githubusercontent.com/72086109/121387491-b64f9900-c918-11eb-969a-17edb3b21222.png)

## Accessibility 
The APP uses semantic HTML tags and leverages built in button behavior to ensure thta all story cards and header navigation is full tabble.
<img width="1434" alt="Screen Shot 2021-06-10 at 12 24 37 PM" src="https://user-images.githubusercontent.com/72086109/121562053-157bdf00-c9e7-11eb-8a9f-57a52138a8e1.png">


## Tech Stack

- ![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB)

- <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"/>

- [![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://www.javascript.com/)

- ![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)

- ![Webpack](https://img.shields.io/badge/webpack%20-%238DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=black)

