import defaultDict from '../../assets/default-dict.js';
import { infiniteDict } from '../../assets/default-dict.js';

export class PriceService {
  #priceDao;

  constructor(priceDao) {
    this.#priceDao = priceDao;
  }

  async getBindAdj() {
    const data = await this.#priceDao.getBindAdj();

    if (!data) {
      throw new Error('Data of bindAdj is undefined');
    }
    return data;
  }

  async getBindSizes() {
    const data = await this.#priceDao.getBindSizes();
    if (!data) {
      throw new Error('Data of bindSizes is undefined');
    }
    return data;
  }

  async getBindCoefs() {
    const bindCoefs = await this.#priceDao.getBindCoefs();
    if (!bindCoefs) {
      throw new Error('Data of bindCoefs is undefined');
    }

    const groupedData = infiniteDict();
    
    for (const bindCoef of bindCoefs) {
      groupedData[bindCoef.format][bindCoef.bind_type][bindCoef.orientation] =
        +bindCoef.coef;
    }

    return groupedData;
  }

  async getPrintCoefs() {
    const data = await this.#priceDao.getPrintCoefs();
    if (!data) {
      throw new Error('Data of printCoefs is undefined');
    }

    return data;
  }

  async getPapers() {
    const data = await this.#priceDao.getPapers();
    if (!data) {
      throw new Error('Data of papers is undefined');
    }
    return data;
  }

  async getPrints() {
    const data = await this.#priceDao.getPrints();
    if (!data) {
      throw new Error('Data of prints is undefined');
    }
    return data;
  }

  async getLamins() {
    const data = await this.#priceDao.getLamins();
    if (!data) {
      throw new Error('Data of prints is undefined');
    }
    return data;
  }

  async getTrim() {
    const data = await this.#priceDao.getTrim();
    if (!data) {
      throw new Error('Data of prints is undefined');
    }
    return data;
  }

  async getSeparators() {
    const data = await this.#priceDao.getSeparators();
    if (!data) {
      throw new Error('Data of prints is undefined');
    }
    return data;
  }

  async getCountCoefs() {
    const data = await this.#priceDao.getCountCoefs();
    if (!data) {
      throw new Error('Data of prints is undefined');
    }
    return data;
  }

  async getCalculatorData() {
    const data = {
      BIND_ADJ: await this.getBindAdj(),
      BIND_SIZES: await this.getBindSizes(),
      BIND_COEFS: await this.getBindCoefs(),
      PRINT_COEFS: await this.getPrintCoefs(),
      COUNT_COEFS: await this.getCountCoefs(),
      PAPERS: await this.getPapers(),
      PRINTS: await this.getPrints(),
      LAMINS: await this.getLamins(),
      TRIM: await this.getTrim(),
      SEPARATORS: await this.getSeparators(),
    };
    if (!data) {
      throw new Error('Calculator Data is undefined');
    }
    return data;
  }
}
