export class PriceService {
  #priceDao;

  constructor(priceDao) {
    this.#priceDao = priceDao;
  }

  async getPaper() {
    const paper = await this.#priceDao.getPaper();
    if (!paper) {
      throw new Error('Database with paper is EMPTY!');
    }
    return paper;
  }
}
