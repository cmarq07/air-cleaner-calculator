<img src=readme_images/fixed_cleanAirToolLogo.png>

**University of Washington Informatics Capstone Project** | 
_Team iDreamers & Caduceus_

## Authors

- **Jeanne Choi:** Project Manager | ychoi2@uw.edu
- **Gulsima Young:** Graphic Designer | gulyoung@uw.edu
- **Bijou Kim:** UX Designer | bijouk@uw.edu
- **Thomas Wilson:** UX Designer/Researcher | tommyw2@uw.edu
- **Christian Calloway:** Software Developer | cmarq07@uw.edu
- **Stanley Susanto:** Software Developer | susanto6@uw.edu
- **Misty Becker:** Software Developer | mistyb01@uw.edu
- **Natt Sakulbourrirug:** Database / Data Pipeline Manager | nattts@uw.edu

## Project Overview
Clean Air Tool is a solution to aid in achieving safe indoor air quality. The original project focused on helping small businesses owners to maintain safe air quality in order to operational during the COVID-19 pandemic. Since then, we have redesigned and expanded the versatility of our product so that the Clean Air Tool can be used to find portable air cleaners and achieve cleaner air for any indoor space, from a bedroom to an office building.

## Advisory Board Members
- **Sasha Anderson** | iSchool Advisory Member 
- **Lisa Goodman** | Co-Founder and Board of Director @ Restart Partners
- **Dr. Edmund Seto** | Associate Professor @ University of Washington
- **Julie Reinhardt** | Small Business Owner
- **Marissa Baker** | Assistant Professor @ University of Washington
- **Sarah Lee** | Governor's Advanced Manufacturing Sector Lead @ Washington State Department of Commerce
- **Tresa Thomas-Massiongale** | Consultant @ Peacefield
- **Joey Fox** | HVAC Engineer

## Research
COVID-19 has left lasting economic, social, and ethical disruptions in our world, one of them being the economic impact on small businesses. Throughout the pandemic, owners and employees working in small businesses have been at great risk of exposure to COVID-19, as their jobs tend to put them in physical contact with many people (Gamio, 2020). This is a somewhat inevitable risk that they must take in order for a steady income and for their business to stay afloat. Major companies such as Walmart, Starbucks, and Uber are able to compensate with employee protections when their workers are sick, while small businesses may struggle with this since they may have less financial resources and employees.

Products such as a portable air cleaner can help mitigate the risks of COVID-19 that many small businesses face. Research has found that air cleaners can reduce the aerosol exposure by up to 65% and when using a combination of HEPA air cleaners and universal masking it can reduce the aerosol exposure by up to 90% (CDC, 2021). But, finding an air cleaner for a business means a lot more than a quick Google search. Many small business owners may not be aware of the proper usage of air filters for their space, let alone the importance of an air cleaner itself.

We've found that current market competitors do not offer a great user experience or provide education the importance and efficacy of air cleaners (Air Quality Engineering, 2014). Through the Clean Air Tool, we hope to expand on the previous groups work by improving the UI, keeping up with new scientific COVID findings, and include emphasis on educating users.

There are many health risks that occur without proper air quality in indoor spaces. With growing support of COVID-19 being an airborne virus(Molteni, 2021) along with the increase in other types of air pollutants, it's crucial to create a product that makes it simple for small businesses to ensure safety for workers and customers.

## Design
The current design of our product focuses on user-friendliness and simplicity. After many usability testings and trials, the forms for finding and testing an air cleaner were redesigned to be as short & simple as possible to prevent users from experiencing form fatigue. We incorporated many blues and whites into our design system to emphasize air & air flow, as well as to create a fresh, clean looking interface.

### Color Scheme
<img src=readme_images/colorGuide.png>

### Figma Prototype 
- include Link to public prototypes here


## Code Information
### Architecture
We built our project with JavaScript and React.js. All React components can be found in the src/components directory (except for the root App.js component which is in the src directory). We named the components clearly and organized them into folders where it made sense.

- `src/components/Home.js`
- `src/components/FormLanding.js`
- `src/componenets/FormOne.js`
- `src/componenets/FormTwo.js`
- `src/components/FormThree.js`
- `src/components/EfficiencyDashboard.js`
- `src/componenets/Calculator.js` 


### Architectural Diagram
- **Need** updated diagram

### What air cleaners are being recommended?
Air cleaners being recommended are from the following API of air cleaners provided by Energy Star's certified list of room air cleaners. Link to the overall page is [here](https://www.energystar.gov/productfinder/product/certified-room-air-cleaners/results) and the link to the API is [here](https://dev.socrata.com/foundry/data.energystar.gov/jmck-i55n). This is of Energy Star certified...
- include why the air cleaners are certified
- include how database is Updated
- include anymore info 

### Air Cleaner Calculations Used
- insert Calculations/testing effectiveness of air cleaners
- If Units are Meters:
- If Units are Feet:

### Running the application locally

You will need to have `npm` installed. You can install it [here](https://docs.npmjs.com/getting-started/). Once npm is installed, you can run `npm install` in the project directory to install required dependencies for the project. Finally, run `npm start` to run the app. You will be able to view it at http://localhost:3000 in your browser.


### Running tests
Run `npm test -- fileName.test.js` to run a test file. The different test files conflict when being run so they need to be run individually and the code in the test files not currently being run needs to be commented. We used [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) to create our tests. The tests ensure any calculations we use work as expected and also user interaction like filtering/sorting works as expected.



# Opportunities & Next Steps
- Explain situation with database & apis (dynamic/static database)
- Expand on education aspect: crash course, tool tips
- Dataviz opportunities 
