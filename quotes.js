const button = document.getElementById("button");
var para = document.getElementById("quotes-para");
var bgcolorpara = document.getElementById("quotes-text");


const quotes = [
    {
        para: `"Innovation distinguishes between a leader and a follower."`
    },
    {
        para: `"As we look ahead into the next century, leaders will be those who empower others."`
    },
    {
        para: `"Leadership is the key to 99% of all successful efforts."`
    },
    {
        para: `“I prepare for the worst, but hope for the best.”`
    },
    {
        para: `“Though, I was born a Hindu, I solemnly assure you that I will not die as a Hindu."`
    },
    {
        para: `"Leadership and learning are indispensable to each other."`
    },
    {
        para: `"The growth and development of people is the highest calling of leadership."`
    },
    {
        para: `"The supreme quality for leadership is unquestionable integrity."`
    },
];

button.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotes.length);

    para.innerText = quotes[random].para;
})
