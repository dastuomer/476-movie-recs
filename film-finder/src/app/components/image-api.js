/*import { ApifyClient } from 'apify-client';

// Initialize the ApifyClient with your Apify API token
const client = new ApifyClient({
    token: 'apify_api_CbLYOzxO0Xam3ghSpmGpQp4Ez1es4Y427FTc',
});

// Prepare Actor input
const input = {
    "queries": [
        "Avatar"
    ]
};

(async () => {
    // Run the Actor and wait for it to finish
    const run = await client.actor("hooli/google-images-scraper").call(input);

    // Fetch and print Actor results from the run's dataset (if any)
    console.log('Results from dataset');
    const { item } = await client.dataset(run.imageURL).listItems();
    document.getElementById("image-here").innerHTML += <Image border='4px' borderRadius='full' boxSize='100px' borderColor='black' src={item}></Image>;
})();

*/