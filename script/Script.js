let generatebtn = document.getElementById('sub')

// API code starts
const api_key = '' //Insert your own gemini api (gemini-1.5-flash) key in between ''
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${api_key}`


const genrateResponse = async (i_name, i_des, i_dom) => {
  
  try {
    // Prompt for gemini ai
    let content_prompt = `Youre a skilled market research analyst with extensive experience in evaluating business ideas across various domains. You have a knack for identifying key metrics such as target audience, market value, implementation timelines,target audience pain points,potential willingness to pay, competitors,competitors analysis and effective market strategies tailored to specific concepts. 

Your task is to conduct market research on an idea. Here are the details you need to analyze:  
- Idea Name:${i_name}
- Idea Description:${i_des}
- Idea Domain:${i_dom}

Keep in mind that you should provide a comprehensive analysis that includes the target audience, estimated market value, realistic implementation timeline, key competitors in the space, and a detailed market strategy that could be utilized for this idea.`
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{
          role: "user",
          parts: [{ text: `${content_prompt}` }]
        }]
      })
    });

    const data = await response.json();
    var datatext = data?.candidates[0].content.parts[0].text;
    let cleanedString = datatext.replace(/\*/g, '');
    console.log(cleanedString)
    download(i_name, cleanedString)

  } catch (error) {
    console.log(error);
  }
  return datatext
}

// To download the output as txt file
function download(filename, content) {

  const blob = new Blob([content], { type: 'text/plain' });

  const link = document.createElement('a');

  const url = URL.createObjectURL(blob);

  link.href = url;
  link.download = filename;

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

generatebtn.addEventListener('click', () => {
  let i_name = document.getElementById('ina').value
  let i_des = document.getElementById('ide').value
  let i_dom = document.getElementById('ido').value
  let ee = genrateResponse(i_name, i_des, i_dom)
})