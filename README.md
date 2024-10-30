# Idea Validator

Idea Validator is a market research and idea validation tool that leverages generative AI to assess project concepts across various domains. This tool provides a comprehensive report that includes key information on target audience, market value, competitors, and a tailored market strategy. It's ideal for entrepreneurs and innovators looking to validate their ideas quickly.

## Project Structure

This project consists of the following core files:

- **HTML (index.html):** Contains the structure and layout of the application interface.
- **CSS (style.css):** Provides styling for the application, ensuring a smooth and visually appealing user experience.
- **JavaScript (script.js):** Handles API integration and defines functions to generate and download the AI-based project validation report.

## Key Features

- **Instant Validation:** Quickly assess the feasibility of your project idea.
- **Detailed Report:** Get insights into audience, market value, potential competitors, and effective strategies.
- **File Download:** Download the report in text format for easy access and sharing.

## Usage Instructions

### Prerequisites

1. Make sure you have a **free API key** for the Gemini AI model, as it powers the idea validation process. You can obtain it through Google’s Generative Language API. Note: this project supports the **free API** version.

### Setup

1. Clone this repository to your local machine.
2. Open the project in Visual Studio Code or any code editor of your choice.
3. Open the `script.js` file and add your API key in place of the empty string in `const api_key = ''`.
4. Open `index.html` in your preferred browser to use the application.

### Steps to Validate Your Idea

1. Enter your project details:
   - **Idea Name**
   - **Description**
   - **Domain**
2. Click on the **Submit** button.
3. The application will generate a comprehensive report, which can be downloaded as a `.txt` file.

## Technologies Used

- **HTML**
- **CSS**
- **JavaScript**
- **Gemini AI API (Free)** for content generation

## API Usage

The application utilizes the **Gemini-1.5-Flash API** to generate market insights and strategy for the given idea. This API is free to use for non-commercial purposes, making it accessible for various project validation needs.


## License

This project is open-source and available under the MIT License.
