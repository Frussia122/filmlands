

export type CategoryType = {
    genre: string,
    description: string,
}

export const AllCategories: CategoryType[] = [
    {
      genre: 'Action',
      description: `Film genre in which the protagonist is 
                      thrust into a series of events that typically involve 
                      violence and physical feats. The genre tends to feature a 
                      mostly resourceful Hero struggling against incredible odds, 
                      which include life-threatening situations, a dangerous villain, 
                      or a pursuit which usually concludes in victory for the hero.`,
    },
    {
      genre: 'Comedy',
      description: `Film genre characterized by humor, wit, and 
                      satire. It usually focuses on creating laughter and 
                      amusement through funny and entertaining situations.`,
    },
    {
      genre: 'Drama',
      description: `Film genre that explores emotional themes and 
                      conflicts. It often deals with serious or intense 
                      subject matter and aims to evoke strong emotions 
                      from the audience.`,
    },
    {
      genre: 'Fantasy',
      description: `Film genre that features magical or supernatural 
                      elements, often set in imaginary worlds or realms. 
                      It often involves epic quests, mythical creatures, 
                      and elements of magic and wonder.`,
    },
    {
      genre: 'Horror',
      description: `Film genre that aims to evoke fear, terror, and 
                      suspense in the audience. It often features 
                      supernatural or monstrous elements, and explores 
                      themes of fear, dread, and the unknown.`,
    },
    {
      genre: 'Mystery',
      description: `Film genre that revolves around the solving of a 
                      mysterious event or crime. It often involves 
                      detective work, puzzles, and unexpected twists 
                      and turns to keep the audience guessing.`,
    },
    {
      genre: 'Romance',
      description: `Film genre that focuses on the romantic relationships 
                      between characters. It often explores themes of love, 
                      passion, and emotional connections, and can range 
                      from light-hearted romantic comedies to dramatic 
                      love stories.`,
    },
  ];