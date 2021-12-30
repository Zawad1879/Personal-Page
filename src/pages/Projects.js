
export default function Projects() {
    return (
        <div className="text-left p-10 md:mt-32">
            <h1 className="text-6xl font-normal leading-normal mt-0 mb-2 text-blue-900">Projects</h1>
           
            <p className="font-serif text-xl">
            <b className="text-3xl">ACADEMIC PROJECTS</b><br/>
            <u>Obstacle Detection Machine Learning</u>
            <span className="text-sm float-right"><i>Spring 2021</i></span><br/>

            Built and coded a Generative Adversarial Network which would train on a small set of pictures with and without obstacles to generate a large dataset, which would then be fed into a convolutional neural network to properly classify obstructions.
            Language and Tools: Python, Scikit-learn, Jupyter notebook <br/><br/>

<u>Statement Network</u>
<span className="text-sm float-right"><i>Spring 2017</i></span><br/>
Extracted conversations between political entities from a major newspaper in Bangladesh in order to find the most relevant political entities in the current political sphere. Used the python package beautiful soup to scrape data from online newspapers, run sentiment analysis using the Spacy python package and then D3 JS to plot out graphs displaying the sentiment between each political actor.
Language and Tools: Python, Javascript, D3 JS
            </p>
        </div>
    );
}