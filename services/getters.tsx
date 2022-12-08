/**
 * Getter for characters
 * @author Micaela Perez
 * @param {string} nameCharacter
 * @throws Error if the API returns an error
 */
export const getCharacters = async (nameCharacter: string = "") => {
  try {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/?page=" + nameCharacter
    );
    return response.json();
  } catch (error: any) {
    throw new Error(error);
  }
};

/**
 * Getter for episodes
 * @author Micaela Perez
 * @param {string} nameEpisode
 * @throws Error if the API returns an error
 */
export const getEpisodes = async (nameEpisode: number[]) => {
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/episode/" + nameEpisode
      );
      return response.json();
    } catch (error: any) {
      throw new Error(error);
    }
  };
  


export const getFilterCharacters = async (params: {
  page: string;
  name: string;
}) => {
  try {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/?page=" +
        params.page +
        "&name=" +
        params.name
    );
    return response.json();
  } catch (error: any) {
    throw new Error(error);
  }
};

