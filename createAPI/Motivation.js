export const Motivation = () => { //Coffee and motivational quotes

    const motivationAPI = [
        "I judge a restaurant by the bread and by the coffee.",
        "I like my coffee with cream and my literature with optimism.",
        "You make good coffee... you're a slob, but you make good coffee.",
        "Decaf? No, it's dangerous to dilute my caffeine.",
        "I don't drink coffee to wake up. I wake up to drink coffee.",
        "Three cups of coffee a day keeps the doctor away!",
        "Coffee, because adulting is hard.",
        "Coffee is the common man's gold, and like gold, it brings to every person the feeling of luxury and nobility.",
        "Coffee, the favorite drink of the civilized world.",
        "My coffee machine is the most beautiful person in the world to me.",
        "Seven days without coffee makes one WEAK.",
        "Coffee is a beverage that puts one to sleep when not drank.",
        "Everyone should believe in something. I believe I will have another coffee.",
        "I never drink coffee at lunch. I find it keeps me awake for the afternoon."
    ];

    return (motivationAPI[Math.floor(Math.random() * motivationAPI.length)]);
}