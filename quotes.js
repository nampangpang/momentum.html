const quotes = [
    {
        quote: "Rome is not built in a day.",
        author: "몰라",
    },
    {
        quote: "Who dares, wins.",
        author: "나다",
    },
    {
        quote: "We can give advice, but we cannot give conduct.",
        author: "나 아니다",
    },
    {
        quote: "Better late than never.",
        author: "중2 선생님",
    },
    {
        quote: "Slow and steady win the race.",
        author: "Alice",
    },
    {
        quote: "No pain no gain.",
        author: "namkwanghoon",
    },
    {
        quote: "Better the last smile than the first laughter.",
        author: "Carrie",
    },
    {
        quote: "Do not be afraid to give up the good to go for the great.",
        author: "Elizabeth",
    },
    {
        quote: "love what you have.",
        author: "Athur",
    },
    {
        quote: " Life is a tragedy when seen in close-up, but a comedy in long shot.",
        author: "Donald",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const  todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;