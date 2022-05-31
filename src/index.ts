import { Markov } from "./Markov";
import { MarkovData } from "./MarkovData";
const data = [
    'Amelia',
    'Thomas',
    'Jacob',
    'Isabella',
    // 'Cześć, jestem slavista',
    // 'Cześć, jestem ciach',
    // 'Cześć, jestem kubuś',
    // 'Cześć, jestem luczoxz'
    // `— Mamy kanapki, które mama dała nam na drogę — odpowiedział Edmund. — W każdym razie ja mam swoje.`,
    // `— Ja nie — oznajmiła Łucja. — Moje były w tej mniejszej torbie.`,
    // `— I moje też — dodała Zuzanna.`,
    // `— Moje są w kieszeni płaszcza, tu, na plaży — powiedział Piotr.`,
    // `— To by były dwa drugie śniadania na czworo. Nie wygląda to zbyt wesoło.`,
    // `— Och, bardziej marzę o jakimś piciu niż o jedzeniu, przynajmniej w tej chwili — powiedziała Łucja.`,
    // `Teraz każdy poczuł pragnienie, co jest zupełnie normalne, gdy w gorącym słońcu brodzi się przez dłuższy czas w słonej wodzie.`,
    // `— To tak, jakbyśmy byli rozbitkami — zauważył Edmund. — W książkach zawsze na wyspie znaj - duje się jakieś źródło z czystą, świeżą wodą.Dobrze by było pójść i poszukać.`,
    // `— Czy to znaczy, że trzeba wrócić do tego gęstego lasu ? — zapytała Zuzanna.`,
    // `— Wcale nie — odpowiedział Piotr. — Jeżeli tu są jakieś strumienie, to muszą wpadać do morza.`,
    // `Tak pójdziemy plażą, to w końcu na któryś natrafimy.`,
    // `Ruszyli więc ku brzegowi lasu, najpierw przez pas gładkiego, mokrego piasku, a potem po suchym i łamliwym, przesypującym się między palcami nóg. Na skraju plaży włożyli skarpetki i buty. Edmund i Łucja chcieli je tu zostawić i iść dalej boso, ale Zuzanna stwierdziła, że to głupi pomysł: — Możemy już ich nie znaleźć, a będą nam potrzebne, jeśli zastanie nas tutaj noc i zrobi się zimno. Ubrali się i powędrowali wzdłuż brzegu, mając morze po lewej stronie, a las po prawej. Okolica była cicha i spokojna, tylko od czasu do czasu pojawiała się samotna mewa. Do gęstego i splątanego lasu trudno było zajrzeć. Nic się w nim nie poruszało, ani śladu ptaków czy nawet owadów.`
]
const markovData = new MarkovData({ data, sequenceLength: 1 });
const markov = new Markov();
const generated = markov.generate({ data: markovData, maxLength: 10 });
console.log(generated)