var quotes =[
    {
        authorname:"― Oscar Wilde",
        quote:`“Be yourself; everyone else is already taken.”`
    } ,
    {
        authorname:"― Marilyn Monroe ",
        quote:`“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” `
    },
    {
        authorname:"― Bernard M. Baruch",
        quote:`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
        `
    },
    {
        authorname:" ― William W. Purke",
        quote:`“You've gotta dance like there's nobody watching,
        Love like you'll never be hurt,
        Sing like there's nobody listening,
        And live like it's heaven on earth.”
        `
    },
    {
        authorname:"― Dr. Seuss",
        quote:`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
        `
    },
    {
        authorname:"― Mae West",
        quote:`“You only live once, but if you do it right, once is enough.”
        `
    },
    {
        authorname:"― Mahatma Gandhi",
        quote:`“Be the change that you wish to see in the world.”
        `
    },
]
console.log(quotes[1].quote)
localStorage.setItem("quotes",JSON.stringify(quotes));
function display(){
    var randomindex =Math.floor(Math.random()*quotes.length)
    document.getElementById("quote").innerHTML=quotes[randomindex].quote;
    document.getElementById("author").innerHTML=quotes[randomindex].authorname;
}