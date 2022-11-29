export class CalcBuilderDao {
  constructor(database) {
    this.database = database;
  }

  async getBindTypes() {
    return await this.database('bind_types');
  }
}
