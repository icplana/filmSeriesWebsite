import { useNavigate } from "react-router-dom";


export const EventsInfo = () => {

  const navigate = useNavigate();
  const navigateBack = () => navigate(-1);

  return (
    <div className=" ml-2 sm:ml-4">
        <button className="bg-white rounded-sm px-3 py-2 font-bold my-4 mx-2"    onClick={navigateBack}>BACK</button>
        <h1 className="text-2xl font-light mb-2">What Are Events in Marvel?</h1>
        <p>In the Marvel Universe, events refer to major crossover storylines or arcs that span multiple comic book titles and often involve a wide array of characters and settings. These events are significant and impactful stories that can shape the Marvel Universe and its characters in significant ways. Events are typically published as limited series or as interconnected issues across various ongoing series.</p>

        <p>The purpose of these events is to bring together various characters and teams, allowing them to interact in unique and sometimes unexpected ways. Events are often used to explore large-scale threats, cosmic conflicts, major character developments, or even alternate realities. They serve as opportunities for writers and artists to collaborate on a grand scale, bringing their creative vision to life through epic storytelling.</p>

        <p>Some popular examples of Marvel events include:</p>
        <ol>
            <li>'Infinity Gauntlet' (1991): Thanos wields the all-powerful Infinity Gauntlet, which grants him god-like abilities, and wreaks havoc across the Marvel Universe. The heroes must unite to stop him and save reality.</li>
            <li>'Civil War' (2006-2007): The Superhuman Registration Act divides the superhero community, with some supporting government oversight and others opposing it. This leads to a conflict between Captain America and Iron Man, resulting in a major split among the heroes.</li>
            <li>'Secret Wars' (1984-1985): A cosmic being known as the Beyonder transports various heroes and villains to Battleworld, where they must fight for survival and ultimate power.</li>
            <li>'House of M' (2005): Scarlet Witch alters reality, creating a world where mutants are the dominant species. The Avengers and X-Men must deal with the consequences and restore the world to normal.</li>
            <li>'Infinity' (2013): An epic cosmic saga involving the Avengers and the Guardians of the Galaxy as they face the threat of the Builders and Thanos.</li>
            <li>'Spider-Verse' (2014-2015): Spider-Man from different realities come together to fight an interdimensional threat known as the Inheritors, who hunt and consume Spider-People.</li>
            <li>'War of the Realms' (2019): Malekith the Dark Elf launches an invasion of Earth, and the heroes from various realms must unite to defend it.</li>
        </ol>

        <p>These events often have lasting repercussions on the Marvel Universe, altering character relationships, bringing about new story arcs, and sometimes even reshaping the fabric of reality itself. They are popular among readers as they provide opportunities for fan-favorite characters to interact, showcase epic battles, and challenge the status quo, creating memorable moments in Marvel's comic book history.</p>
    </div>
  )
}
