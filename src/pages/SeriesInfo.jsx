import { useNavigate } from "react-router";

export const SeriesInfo = () => {
  const navigate = useNavigate();
  const navigateBack = () => navigate(-1);

  return (
    <div>
      <button onClick={navigateBack}>BACK</button>
      <p>
        In the context of Marvel Comics, "series" refers to the periodic comic
        book publications that tell the stories of characters and teams from the
        Marvel Universe. Each series is dedicated to a specific character or
        group and is regularly published in periodic installments. These
        installments are commonly known as "issues."
      </p>
      <p>
        Marvel series can feature iconic characters such as Spider-Man, Iron
        Man, Thor, Captain America, Hulk, among many others, or teams like the
        X-Men, the Avengers, the Fantastic Four, among others.
      </p>
      <p>Some important features of Marvel series include:</p>
      <ol>
        <li>
          Series Number: Each series has a specific number used to identify it.
          For example, "The Amazing Spider-Man #1" is the first issue of the
          series "The Amazing Spider-Man."
        </li>
        <li>
          Story Arc: Series often tell a continuous story over several issues,
          and these longer stories are referred to as "story arcs" or
          "storylines." These arcs can span from a few issues to several volumes
          of the series.
        </li>
        <li>
          Crossovers and Events: Sometimes, individual series intersect with
          others or participate in major events known as "crossovers" or
          "events." These events often involve multiple characters and comic
          book titles and can have a significant impact on the overall Marvel
          Universe.
        </li>
        <li>
          Creative Team: Each series is written and drawn by a creative team
          composed of writers, artists, and other collaborators who work on the
          production of the comics.
        </li>
      </ol>
      <p>
        Marvel series have been a fundamental part of the publisher's legacy,
        allowing readers to immerse themselves in the adventures and exploits of
        their favorite characters and follow their stories over time. Over the
        years, many series have been canceled and relaunched with new numbers,
        creating different volumes of the same series, but all contribute to the
        rich history and mythology of the Marvel Universe.
      </p>
    </div>
  );
};
