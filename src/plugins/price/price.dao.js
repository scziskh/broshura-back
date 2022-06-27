export class PriceDao {
  constructor(database) {
    this.database = database;
  }

  async getPaper() {
    const paper = await this.database('paper').returning('*');
    return paper;
  }
}
