import { BlogBuilder } from "../components/blog/BlogBuilder";
const bloglist = [];

const nf1 = new BlogBuilder({
  title: "The Luckiest and Unluckiest Baseball Seasons Over the Last 5 Years",
  image: "img",
  link: "www.numberfire.com/mlb/news/2464/the-luckiest-and-unluckiest-baseball-seasons-over-the-last-5-years",
  description:
    "Even the most talented hitters and pitchers are susceptible to fluctuations in their BABIPs, causing some uncharacteristically great or terrible seasons."
})
//   .addHeading("Heading")
//   .addParagraph(
//     "1st Paragraph blablabla sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!"
//   )
//   .addParagraph(
//     "2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"
//   );

const nf2 = new BlogBuilder({
  title: "How Well Are Baseball's Best Relievers Being Used?",
  image: "img",
  link: "www.numberfire.com/mlb/news/2534/how-well-are-baseball-s-best-relievers-being-used",
  description:
    "For decades, we've pulled our hair out and grinded our teeth as we watched our favorite closers and set-up men attempt to get the final outs of a ball game. The closer is regarded by most managers to be the most important pitcher on the relief staff. However, this doesn't imply that the closer is pitching the most meaningful innings. It doesn't even imply that the closer is the best reliever on the team."
})
//   .addHeading("Heading")
//   .addParagraph(
//     "1st Paragraph Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!"
//   )
//   .addParagraph(
//     "2nd Paragraph Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"
//   )
//   .addHeading("New Heading")
//   .addParagraph(
//     "1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!"
//   )
//   .addParagraph(
//     "2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"
//   );

const nf3 = new BlogBuilder({
  title: "All or Nothing: How the Baltimore Orioles Found Success",
  image: "img",
  link: "www.numberfire.com/mlb/news/2748/all-or-nothing-how-the-baltimore-orioles-found-success",
  description:
    "When the O's finished 93-69 at the end of the 2012 season, managed an AL Wild Card Spot, and eventually took the Yankees to 5 games in a thrilling ALDS, the baseball world was wondering what had just happened."
})

const nf4 = new BlogBuilder({
  title: "Are Schilling and Mussina Comparable to Other Baseball Hall of Famers?",
  image: "img",
  link: "www.numberfire.com/mlb/news/4279/are-schilling-and-mussina-comparable-to-other-baseball-hall-of-famers",
  description:
    "For those who watched Mussina pitch so well for so long, and who saw Schilling dominate batters for years, a question presents itself: Can we not place these two pitchers in the same category as Maddux, Glavine, Johnson, Pedro, and Smoltz? Apparently, Hall of Fame voters are currently reluctant to do so."
})

const fg1 = new BlogBuilder({
  title: "Six Feet Under: Evaluating Short Pitchers",
  image: "img",
  link: "community.fangraphs.com/six-feet-under-evaluating-short-pitchers/",
  description:
    "When we watched Pedro Martinez, commentators and baseball men viewed him as an exception to some obscure and unwritten rule: that shorter athletes can’t become successful pitchers."
})

const fg2 = new BlogBuilder({
  title: "What’s the Value of a Home Run These Days?",
  image: "img",
  link: "community.fangraphs.com/six-feet-under-evaluating-short-pitchers/",
  description:
    "Home runs used to be a rarity among baseball events. In the early 20th century, it wasn’t uncommon for a player to lead his league in baseball by hitting 10-15 home runs. This brings me to the question: how has the home run actually changed? Not in terms of its frequency, but in terms of its value. More specifically, its value in runs."
})

const fg3 = new BlogBuilder({
  title: "How Rare Is a Chris Davis Comeback?",
  image: "img",
  link: "community.fangraphs.com/how-rare-is-a-chris-davis-comeback/",
  description:
    "Just how rare is Davis’ comeback? Davis was an established major-league player before this season, having played 723 games while averaging 2.0 WAR per 162 Games. His Oriole-record 53 homers in 2013 (which included 7.1 WAR) made him a star while his forgettable 0.8 WAR in 2014 made him just another one-hit wonder."
})

const med1 = new BlogBuilder({
  title: "When Will America Be Ready for a Gay President?",
  image: "img",
  link: "medium.com/@elliott.evans/when-will-america-be-ready-for-a-gay-president-abf16b4f225a",
  description:
    "Are most Americans ready to accept an openly gay president? The answer to this question appears to be yes. The more difficult question to answer, rather, is when will enough Americans be ready to accept such a president so as to give them a fair chance of winning the presidency?"
})

const med2 = new BlogBuilder({
  title: "Were Forecasters Wrong about Donald Trump?",
  image: "img",
  link: "medium.com/@elliott.evans/were-forecasters-wrong-about-donald-trump-ae36e26a0c6a",
  description:
    "The question, at its core, is complicated and has ramifications for how comfortable we are with probability, and why we turn to forecasts in the first place."
})

bloglist.push(med1);
bloglist.push(med2);
bloglist.push(nf1);
bloglist.push(nf2);
bloglist.push(nf3);
bloglist.push(fg1);
bloglist.push(fg2);
bloglist.push(fg3);


export default bloglist;
