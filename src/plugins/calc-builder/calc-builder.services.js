import { defaultDict, freezeDefaultDict } from '../../helpers/default-dict.js';

export class CalcBuilderService {
  #calcBuilderDao;

  constructor(calcBuilderDao) {
    this.#calcBuilderDao = calcBuilderDao;
  }

  //price of binding adjustment
  async getBindTypes() {
    const bindTypes = await this.#calcBuilderDao.getBindTypes();
    const data = bindTypes.reduce((accum, { id, bind_type }) => {
      accum[id] = bind_type;
      return accum;
    }, {});
    return data;
  }
  async getCalculatorBuilder() {
    const data = {
      bindTypes: await this.getBindTypes(),
    };

    if (!data) {
      throw new Error('Calculator Builder is undefined');
    }

    return data;
  }
}
