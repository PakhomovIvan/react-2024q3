export default class Api {
  api = 'https://pokeapi.co/api/v2/pokemon';

  getRes = async (url: string) => {
    const result = await fetch(url);

    if (result.ok) {
      return await result.json();
    }
    throw new Error('Error!');
  };

  getAllList = () => {
    return this.getRes(this.api);
  };

  getByName = (name: string) => {
    return this.getRes(`${this.api}/${name}`);
  };
}
