export class TextService {
  #textDao;

  constructor(textDao) {
    this.#textDao = textDao;
  }

  //text data
  async getTextData(params) {
    const group = await this.#textDao.getGroupId(params.group);
    const textData = await this.#textDao.getTextData(group[0].id);
    const lang = params.lang;
    const data = textData.reduce((accum, el) => {
      accum[el.name] = el[lang];
      return accum;
    }, {});
    return data;
  }
}
