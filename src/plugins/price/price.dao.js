export class PriceDao {
  constructor(database) {
    this.database = database;
  }

  async getPaper() {
    const paper = await this.database('papers').returning('*');
    return paper;
  }
}
