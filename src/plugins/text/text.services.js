export class TextService {
  #textDao;

  constructor(textDao) {
    this.#textDao = textDao;
  }

  //price of binding adjustment
  async getTextData() {
    const textData = await this.#textDao.getTextData();
    const data = textData.reduce((accum, { name, ru }) => {
      accum[name] = ru;
      return accum;
    }, {});
    return data;
  }
}
