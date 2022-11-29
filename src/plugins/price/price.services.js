import { defaultDict, freezeDefaultDict } from '../../helpers/default-dict.js';

export class PriceService {
  #priceDao;

  constructor(priceDao) {
    this.#priceDao = priceDao;
  }

  //price of binding adjustment
  async getBindAdj() {
    const bindAdjs = await this.#priceDao.getBindAdj();
    const data = bindAdjs.reduce((accum, { bind_type, cost }) => {
      accum[bind_type] = cost;
      return accum;
    }, {});
    return data;
  }

  //price of binding instead of thickness
  async getBindSizes() {
    const bindSizes = await this.#priceDao.getBindSizes();
    const data = bindSizes.reduce(
      (accum, { bind_type, cost, thick }) => {
        accum[bind_type].push({ cost, thick });
        return accum;
      },
      defaultDict(() => []),
    );
    freezeDefaultDict(data);
    return data;
  }

  async getBindCoefs() {
    const bindCoefs = await this.#priceDao.getBindCoefs();
    const data = bindCoefs.reduce(
      (accum, { format, bind_type, orientation, coef }) => {
        accum[format][bind_type][orientation] = coef;
        return accum;
      },
      defaultDict(() => defaultDict(() => ({}))),
    );
    freezeDefaultDict(data);
    return data;
  }

  async getPrintCoefs() {
    const printCoefs = await this.#priceDao.getPrintCoefs();
    const data = printCoefs.reduce((accum, { format, coef }) => {
      accum[format] = coef;
      return accum;
    }, {});
    return data;
  }

  async getPapers() {
    const papers = await this.#priceDao.getPapers();
    const data = papers.reduce((accum, { paper, cost, thick }) => {
      accum[paper] = { cost, thick };
      return accum;
    }, {});
    return data;
  }

  async getPrints() {
    const prints = await this.#priceDao.getPrints();
    const data = prints.reduce((accum, { print, cost, sides }) => {
      accum[print] = { cost, sides };
      return accum;
    }, {});
    return data;
  }

  async getLamins() {
    const lamins = await this.#priceDao.getLamins();
    const data = lamins.reduce((accum, { lamin, cost, thick, adj }) => {
      accum[lamin] = { cost, thick, adj };
      return accum;
    }, {});
    return data;
  }

  async getTrim() {
    const trim = await this.#priceDao.getTrim();
    const { cost, min_cost } = trim[0];
    const data = { cost, min_cost };
    return data;
  }

  async getSeparators() {
    const separators = await this.#priceDao.getSeparators();
    const data = separators.reduce(
      (accum, { separator, cost, thick, print_cost }) => {
        accum[separator] = { cost, thick, print_cost };
        return accum;
      },
      {},
    );

    return data;
  }

  async getCountCoefs() {
    const countCoefs = await this.#priceDao.getCountCoefs();
    const data = countCoefs.reduce(
      (accum, { name, factor, degree, max_count }) => {
        accum[name] = { factor, degree, max_count };
        return accum;
      },
      {},
    );

    return data;
  }

  async getCalculatorData() {
    const data = {
      bind_adj: await this.getBindAdj(),
      bind_sizes: await this.getBindSizes(),
      bind_coefs: await this.getBindCoefs(),
      print_coefs: await this.getPrintCoefs(),
      count_coefs: await this.getCountCoefs(),
      papers: await this.getPapers(),
      prints: await this.getPrints(),
      lamins: await this.getLamins(),
      trim: await this.getTrim(),
      separators: await this.getSeparators(),
    };

    if (!data) {
      throw new Error('Calculator Data is undefined');
    }

    return data;
  }
}
