# AI_Image_Generator

This web application allows users to generate, share, search, and download AI-generated images. The app uses the OpenAI API to create stunning images based on user input or prompts. It also features a "Surprise Me" function, which randomly generates prompts to spark creativity and produce unique images.

## Live Demo
You can try out the AI Image Generator App by visiting the GitHub Pages 
https://jasonsonthanhngo.github.io/AI_Image_Generator/

## Preview
 <br />

### Desktop Preview

 ![Homepage](https://github.com/jasonsonthanhngo/AI_Image_Generator/assets/131301318/e59d61de-7938-49a2-8a44-e852e72cb6a2) 
 **<p align="center">Home Page</p>**   
 ![Photo Info when hoover](https://github.com/jasonsonthanhngo/AI_Image_Generator/assets/131301318/cc6a892f-3654-4fa2-a5e2-1ebdf5996589)   
 **<p align="center">Photo Information Display</p>**   
![Create Page](https://github.com/jasonsonthanhngo/AI_Image_Generator/assets/131301318/b8bf49c8-1ee5-46ab-9ea8-13f309030b54)

**<p align="center">Create Page</p>**   






### Phone Screen Preview 

<div style="display: flex;">
<img src="https://github.com/jasonsonthanhngo/AI_Image_Generator/assets/131301318/a7205b11-1652-4508-83a9-475de1183bed" alt="home_page" width="230"/>
<img src="https://github.com/jasonsonthanhngo/AI_Image_Generator/assets/131301318/1349713f-20b8-42c2-8c7c-9b367757f0cf" alt="photo_info" width="230"/>
<img src="https://github.com/jasonsonthanhngo/AI_Image_Generator/assets/131301318/7490a250-ebcb-4a28-8c39-0e3e489611a2" alt="create_page" width="230"/>
<img src="https://github.com/jasonsonthanhngo/AI_Image_Generator/assets/131301318/aa67d8bf-c67f-466e-9c12-fa331436d270" alt="scrollable_content" width="230"/>
</div>



## Technologies Used

- **Frontend**: React with Vite, hosted on GitHub Pages
- **Backend**: Node.js with Express, hosted on Render
- **Database**: MongoDB
- **Image Hosting**: Cloudinary
- **AI**: OpenAI API 

## Features

- **Image Generation**: Users can input text prompts or use the "Surprise Me" function to generate AI-generated images.
- **Sharing**: Users can easily share the generated images with others through unique URLs.
- **Search**: Users can search for images based on keywords or tags associated with the generated images.
- **Download**: Users have the option to download the AI-generated images to their local devices.
- **Modern UI**: The app boasts a modern and intuitive user interface for a seamless user experience.
- **Hover Preview**: Users can hover over the generated images to see the associated prompts and the user who created it, adding an interactive touch.
- **Data Storage**: The app uses MongoDB to store and manage image data efficiently.
- **Image Hosting**: Images are hosted using Cloudinary, ensuring fast and reliable image delivery.

## Installation 
### Prerequisites

Before proceeding, ensure you have the following:
 <br />
- Node.js and npm installed on your machine.
- MongoDB set up and running.
- Additionally, make sure you have Vite installed globally by running `npm install -g create-vite` if you haven't done so already.

Follow these steps to run the **AI_Image_Generator** on your local machine:

1. Start by cloning the repository to your local machine: `git clone https://github.com/jasonsonthanhngo/AI_Image_Generator.git`
2. Navigate to the project directory: `cd AI_Image_Generator`
3. Next, navigate to the client (frontend) and server (backend) folders and install the required dependencies:  
   `cd client` && `npm install`  
    `cd ../server` && `npm install`
4. Create a .env file in the server directory and provide the necessary environment variables as follows:  
   `OPENAI_API_KEY=your_openai_api_key`  
   `MONGODB_URI=your_mongodb_connection_string`  
   `CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name`  
   `CLOUDINARY_API_KEY=your_cloudinary_api_key`  
   `CLOUDINARY_API_SECRET=your_cloudinary_api_secret`  
   - Replace `your_openai_api_key`, `your_mongodb_connection_string`, `your_cloudinary_cloud_name`, `your_cloudinary_api_key`, and `your_cloudinary_api_secret` with your actual API keys and connection strings.
5. Now, start the development servers for the frontend and backend.  
 `cd client` `npm run dev`  
 `cd ../server` `npm run dev`
6. In your terminal, you will see a message like `Server running at:`
   - Ctrl+click on the **localhost:5137** link to open the application in your browser.















