
    export const Motivation = () => {

        const motivationAPI = ["I judge a restaurant by the bread and by the coffee.", "I like my coffee with cream and my literature with optimism."
            , "You make good coffee... you're a slob, but you make good coffee."];

        return (motivationAPI[Math.floor(Math.random() * 3)]);
    }


