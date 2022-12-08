/**
 * Used to get all characters from the API
 * @author Micaela Perez
 * @param {string} characterName
 * @returns a json response with all characters
 */

export const getCharacters = async (characterName: string = "") => {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/?page=" + characterName
  );
  return response.json();
};


/**
 * Used to get the filter characters from the API, it uses the name and page params
 * @author Micaela Perez
 * @param {string} pageAndName
 * @returns a json response with the filter characters
 */

export const getFilterCharacters = async (pageAndName: {
  page: string;
  name: string;
}) => {
  const response = await fetch(
    "https://rickandmortyapi.com/api/character/?page=" +
      pageAndName.page +
      "&name=" +
      pageAndName.name
  );
  return response.json();
};


/**
 * Used to get all episodes from the API
 * @author Micaela Perez
 * @param {string} pageNumber
 * @returns a json response with all episodes
 */

export const getEpisodes = async (pageNumber: number[]) => {
  const response = await fetch(
    "https://rickandmortyapi.com/api/episode/" + pageNumber
  );
  return response.json();
};
