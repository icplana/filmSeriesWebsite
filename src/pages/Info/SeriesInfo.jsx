import { useNavigate } from "react-router";

export const SeriesInfo = () => {
  const navigate = useNavigate();
  const navigateBack = () => navigate(-1);

  return (
    <div>
      <button onClick={navigateBack}>BACK</button>
      <h1>What Are Series in Marvel?</h1>
      <p>In the context of Marvel comics, "series" refers to ongoing or limited comic book publications that feature specific characters, teams, or storylines. Marvel publishes a variety of series, each with its own unique focus and narrative.</p>

      <p>Ongoing series are regularly released and continue for an extended period, providing consistent adventures and character development. These series often focus on popular characters like Spider-Man, Iron Man, Captain America, and the X-Men.</p>

      <p>Limited series, on the other hand, are shorter runs with a predetermined number of issues, typically ranging from 4 to 12. They are used to tell specific stories, explore particular events, or introduce new characters or creative teams.</p>

      <p>Marvel series can exist within the main Marvel Universe or take place in alternate realities or universes known as "Elseworlds" or "What If?" stories. Some series have direct connections to major events or crossover storylines, while others remain more self-contained.</p>

      <p>Marvel has produced numerous iconic series, including:</p>
      <ul>
        <li>'The Amazing Spider-Man': One of Marvel's longest-running series, following the adventures of Peter Parker as Spider-Man.</li>
        <li>'Uncanny X-Men': Focused on the mutant superhero team, the X-Men, and their struggles for coexistence with humanity.</li>
        <li>'The Avengers': Featuring Earth's mightiest heroes as they come together to face cosmic threats.</li>
        <li>'Fantastic Four': Following the adventures of Marvel's first superhero family and their explorations of the unknown.</li>
        <li>'Wolverine': Centered on the enigmatic mutant Wolverine and his solo missions.</li>
        <li>'Guardians of the Galaxy': A space-faring team of misfits who protect the universe from cosmic menaces.</li>
        <li>'Marvels': A limited series exploring Marvel's history through the eyes of a photographer.</li>
        <li>'House of M': A limited series set in an alternate reality where mutants are dominant.</li>
      </ul>

      <p>Marvel series are a core component of the comic book industry, providing readers with a diverse range of stories, art styles, and creative visions from talented writers and artists.</p>

    </div>
  );
};
