import { defaultDict, freezeDefaultDict } from '../../helpers/default-dict.js';

export class PriceService {
  #priceDao;

  constructor(priceDao) {
    this.#priceDao = priceDao;
  }

  //price of binding adjustment
  async getBindAdj() {
    const bindAdjs = await this.#priceDao.getBindAdj();

    if (!bindAdjs) {
      throw new Error('Data of bindAdj is undefined');
    }

    const data = bindAdjs.reduce((accumulator, { bind_type, cost }) => {
      accumulator[bind_type] = cost;
      return accumulator;
    }, {});
    return data;
  }

  //price of binding instead of thickness
  async getBindSizes() {
    const bindSizes = await this.#priceDao.getBindSizes();
    if (!bindSizes) {
      throw new Error('Data of bindSizes is undefined');
    }

    const data = defaultDict(() => []);

    for (const bindSize of bindSizes) {
      const cost = bindSize.cost;
      const thick = bindSize.thick;

      data[bindSize.bind_type].push({ cost, thick });
    }

    freezeDefaultDict(data);

    return data;
  }

  async getBindCoefs() {
    const bindCoefs = await this.#priceDao.getBindCoefs();
    if (!bindCoefs) {
      throw new Error('Data of bindCoefs is undefined');
    }

    const data = defaultDict(() => defaultDict(() => ({})));

    for (const bindCoef of bindCoefs) {
      data[bindCoef.format][bindCoef.bind_type][bindCoef.orientation] =
        bindCoef.coef;
    }

    freezeDefaultDict(data);

    return data;
  }

  async getPrintCoefs() {
    const printCoefs = await this.#priceDao.getPrintCoefs();
    if (!printCoefs) {
      throw new Error('Data of printCoefs is undefined');
    }
    const data = printCoefs.reduce((accumulator, { format, coef }) => {
      accumulator[format] = coef;
      return accumulator;
    }, {});
    return data;
  }

  async getPapers() {
    const papers = await this.#priceDao.getPapers();
    if (!papers) {
      throw new Error('Data of papers is undefined');
    }
    const data = papers.reduce((accumulator, { paper, cost, thick }) => {
      accumulator[paper] = { cost, thick };
      return accumulator;
    }, {});
    return data;
  }

  async getPrints() {
    const prints = await this.#priceDao.getPrints();
    if (!prints) {
      throw new Error('Data of prints is undefined');
    }
    const data = prints.reduce((accumulator, { print, cost, sides }) => {
      accumulator[print] = { cost, sides };
      return accumulator;
    }, {});

    return data;
  }

  async getLamins() {
    const lamins = await this.#priceDao.getLamins();
    if (!lamins) {
      throw new Error('Data of prints is undefined');
    }

    const data = lamins.reduce((accumulator, { lamin, cost, thick, adj }) => {
      accumulator[lamin] = { cost, thick, adj };
      return accumulator;
    }, {});
    return data;
  }

  async getTrim() {
    const trim = await this.#priceDao.getTrim();
    if (!trim) {
      throw new Error('Data of prints is undefined');
    }

    const cost = trim[0].cost;
    const min_cost = trim[0].min_cost;

    const data = { min_cost, cost };

    return data;
  }

  async getSeparators() {
    const separators = await this.#priceDao.getSeparators();
    if (!separators) {
      throw new Error('Data of prints is undefined');
    }

    const data = separators.reduce(
      (accumulator, { separator, cost, thick, print_cost }) => {
        accumulator[separator] = { cost, thick, print_cost };
        return accumulator;
      },
      {},
    );

    return data;
  }

  async getCountCoefs() {
    const countCoefs = await this.#priceDao.getCountCoefs();
    if (!countCoefs) {
      throw new Error('Data of prints is undefined');
    }
    const data = countCoefs.reduce(
      (accumulator, { name, factor, degree, max_count }) => {
        accumulator[name] = { factor, degree, max_count };
        return accumulator;
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
