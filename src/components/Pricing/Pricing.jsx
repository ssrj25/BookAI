import { useEffect } from 'react';
import React from 'react';
import './Pricing.css';

const Pricing = () => {
  useEffect(() => {
    // Scroll to the pricing section instantly if the hash is '#pricing'
    const hash = window.location.hash;
    if (hash === '#pricing') {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'auto' });
      }
    }
  }, []);

  return (
    <div className='pbody'>
      <div className='pheader'>
        <h1>Book Generator API</h1>
      </div>

      <nav className='pnav'>
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#authentication">Authentication</a></li>
          <li><a href="#endpoints">Endpoints</a></li>
          <li><a href="#tutorial">Tutorial</a></li>
          <li><a href="#code-examples">Code Examples</a></li>
          <li><a href="#pricing">Pricing</a></li>
        </ul>
      </nav>

      <main id="overview">
        <section id="overview" className='p'>
          <h2>Overview</h2>
          <p>The Book Generator API allows you to generate books on various topics using different language models. This documentation provides details on how to use the API, including authentication, available endpoints, and code examples.</p>
        </section>
        <section id="authentication" className='p'>
          <h2>Authentication</h2>
          <p>To use the API, you need to include your API key in the header of each request:</p>
          <pre><code>X-API-Key: YOUR_API_KEY</code></pre>
          <p>To generate an API key, use the button below:</p>
          <button id="generateApiKey">Generate API Key</button>
          <div id="apiKeyDisplay" />
        </section>
        <section id="endpoints" className='p'>
          <h2>Endpoints</h2>
          <h3>Generate Book</h3>
          <p><span className="http-method">POST</span> <span className="endpoint">/api/generate-book</span></p>
          <h4>Request Body</h4>
          <table className="parameter-table">
            <tbody>
              <tr>
                <th>Parameter</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>api</td>
                <td>string</td>
                <td>The API provider to use. Options: "openai" or "together"</td>
              </tr>
              <tr>
                <td>model</td>
                <td>string</td>
                <td>The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4", "llama-2-70b")</td>
              </tr>
              <tr>
                <td>topic</td>
                <td>string</td>
                <td>The main topic or theme of the book</td>
              </tr>
              <tr>
                <td>language</td>
                <td>string</td>
                <td>The language in which the book should be generated</td>
              </tr>
              <tr>
                <td>word_count</td>
                <td>integer</td>
                <td>The approximate number of words for the generated book</td>
              </tr>
            </tbody>
          </table>
          <h4>Response</h4>
          <pre><code>{"{"}{"\n"}{"    "}"message": "Book generation started",{"\n"}{"    "}"status": "processing",{"\n"}{"    "}"job_id": "unique-job-identifier"{"\n"}{"}"}</code></pre>
        </section>
        <section id="tutorial" className='p'>
          <h2>Tutorial</h2>
          <h3>Step 1: Obtain an API Key</h3>
          <p>Generate an API key using the button in the Authentication section above.</p>
          <h3>Step 2: Make a Request</h3>
          <p>Use your preferred programming language or tool to make a POST request to the /api/generate-book endpoint. Include your API key in the header and the required parameters in the request body.</p>
          <h3>Step 3: Handle the Response</h3>
          <p>The API will return a response with a job ID. You can use this ID to check the status of your book generation job.</p>
          <h3>Step 4: Retrieve the Generated Book</h3>
          <p>Once the job is complete, you can retrieve the generated book using the job ID (endpoint to be implemented).</p>
        </section>
        <section id="code-examples" className='p'>
          <h2>Code Examples</h2>
          <h3>Python</h3>
          <pre><code>import requests{"\n"}{"\n"}API_KEY = "your_api_key_here"{"\n"}API_ENDPOINT = "https://tryBookAI.com/api/generate-book"{"\n"}{"\n"}headers = {"{"}{"\n"}{"    "}"Content-Type": "application/json",{"\n"}{"    "}"X-API-Key": API_KEY{"\n"}{"}"}{"\n"}{"\n"}data = {"{"}{"\n"}{"    "}"api": "openai",{"\n"}{"    "}"model": "gpt-3.5-turbo",{"\n"}{"    "}"topic": "The Future of Artificial Intelligence",{"\n"}{"    "}"language": "English",{"\n"}{"    "}"word_count": 5000{"\n"}{"}"}{"\n"}{"\n"}response = requests.post(API_ENDPOINT, json=data, headers=headers){"\n"}{"\n"}if response.status_code == 200:{"\n"}{"    "}result = response.json(){"\n"}{"    "}print(f"Book generation started. Job ID: {"{"}result['job_id']{"}"}"){"\n"}else:{"\n"}{"    "}print(f"Error: {"{"}response.status_code{"}"} - {"{"}response.text{"}"}"){"\n"}</code></pre>
          <h3>JavaScript (Node.js)</h3>
          <pre><code>const axios = require('axios');{"\n"}{"\n"}const API_KEY = 'your_api_key_here';{"\n"}const API_ENDPOINT = 'https://tryBookAI.com/api/generate-book';{"\n"}{"\n"}const headers = {"{"}{"\n"}{"    "}'Content-Type': 'application/json',{"\n"}{"    "}'X-API-Key': API_KEY{"\n"}{"}"};{"\n"}{"\n"}const data = {"{"}{"\n"}{"    "}api: 'openai',{"\n"}{"    "}model: 'gpt-3.5-turbo',{"\n"}{"    "}topic: 'The Future of Artificial Intelligence',{"\n"}{"    "}language: 'English',{"\n"}{"    "}word_count: 5000{"\n"}{"}"};{"\n"}{"\n"}axios.post(API_ENDPOINT, data, {"{"} headers {"}"}){"\n"}{"    "}.then(response =&gt; {"{"}{"\n"}{"        "}console.log(`Book generation started. Job ID: ${"{"}response.data.job_id{"}"}`);{"\n"}{"    "}{"}"}){"\n"}{"    "}.catch(error =&gt; {"{"}{"\n"}{"        "}console.error('Error:', error.response ? error.response.data : error.message);{"\n"}{"    "}{"}"});{"\n"}</code></pre>
        </section>
        <section id="pricing" className='p'>
          <h2>API Pricing</h2>
          <p>Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:</p>
          <table>
            <thead>
              <tr>
                <th>API</th>
                <th>Model</th>
                <th>Price per 1K tokens</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>OpenAI</td>
                <td>GPT-3.5</td>
                <td>$0.002</td>
              </tr>
              <tr>
                <td>OpenAI</td>
                <td>GPT-4</td>
                <td>$0.03</td>
              </tr>
              <tr>
                <td>Together AI</td>
                <td>Llama-2-70b</td>
                <td>$0.0008</td>
              </tr>
              <tr>
                <td>Together AI</td>
                <td>Llama-2-13b</td>
                <td>$0.0006</td>
              </tr>
            </tbody>
          </table>
          <h3>Token Estimation</h3>
          <p>On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.</p>
          <h3>Billing</h3>
          <p>You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.</p>
        </section>
      </main>
    </div>
  );
};

export default Pricing;
