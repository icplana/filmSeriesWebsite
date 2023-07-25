import { useNavigate } from "react-router-dom";


export const StoriesInfo = () => {

    const navigate = useNavigate();
    const navigateBack = () => navigate(-1);
    
  return (
    <div>
        <button onClick={navigateBack}>BACK</button>
        <h1>What Are Stories in Marvel?</h1>
        <p>In the Marvel Universe, "stories" refer to plotlines or story arcs that unfold within a single comic book series. Unlike events, stories do not involve multiple titles or characters from across the universe but rather focus on specific characters or teams within their own series.</p>

        <p>Marvel stories can vary in length, ranging from a few issues to more extended arcs that span multiple comic book releases. These storylines delve into the character development, personal struggles, conflicts, and adventures of the featured heroes or villains.</p>

        <p>Unlike events that have universe-wide consequences, stories are often more contained and allow for in-depth exploration of individual characters or specific group dynamics. They provide a chance for writers and artists to craft engaging narratives within the framework of an ongoing series, enabling readers to become invested in the characters and their personal journeys.</p>

        <p>Some famous Marvel stories include:</p>
        <ol>
            <li>'The Dark Phoenix Saga' (Uncanny X-Men #129-138): The X-Men face a powerful threat when Jean Grey transforms into the Dark Phoenix, leading to a tragic and epic conflict.</li>
            <li>'Kraven's Last Hunt' (The Amazing Spider-Man #293-294, The Spectacular Spider-Man #131-132, Web of Spider-Man #31-32): Spider-Man is hunted by Kraven the Hunter in a dark and intense storyline.</li>
            <li>'Demon in a Bottle' (Iron Man #120-128): Tony Stark battles alcoholism, exploring the darker side of the character's struggles.</li>
            <li>'Born Again' (Daredevil #227-233): Daredevil's life crumbles when his secret identity is exposed, and he faces a relentless campaign by Kingpin.</li>
            <li>'Infinity Gauntlet' (The Infinity Gauntlet #1-6): Thanos obtains god-like power with the Infinity Gauntlet, leading to a cosmic confrontation with Marvel's heroes.</li>
        </ol>

        <p>These stories often resonate deeply with readers due to their focus on character-driven narratives and emotional storytelling. Marvel stories are an essential aspect of comic book publishing, allowing for a diverse range of tales that contribute to the richness of the Marvel Universe.</p>
    </div>
  )
}
