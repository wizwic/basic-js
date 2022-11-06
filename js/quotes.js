const quotes = [
    {
        quote: "내가 포기하는 걸 포기해라.",
        author: "나루토",
    },
    {
        quote: "포기하면 그 순간이 바로 시합종료예요.",
        author: "안선생님",
    },
    {
        quote: "영감님의 영광의 시대는 언제였죠? 난 지금입니다.",
        author: "강백호",
    },
    {
        quote: "왼손은 거들 뿐",
        author: "강백호",
    },
    {
        quote: "자신이 내린 결정에 의심을 하는 순간 끝나는거야!",
        author: "나루토",
    },
    {
        quote: "한 번 내뱉은 말은 절대 굽히지 않아. 이게 나의 닌자의 길이다.",
        author: "나루토",
    },
    {
        quote: "자신을 믿지 않는 녀석따위 노력할 가치도 없다!",
        author: "마이트 가이",
    },          
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:nth-child(2)");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;