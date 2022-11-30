export class TextDao {
  constructor(database) {
    this.database = database;
  }

  async getTextData() {
    return await this.database('text_content').join(
      'text_groups',
      'text_groups.id',
      'text_content.group_id',
    );
  }
}
