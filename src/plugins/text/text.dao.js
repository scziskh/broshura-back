export class TextDao {
  constructor(database) {
    this.database = database;
  }

  async getGroupId(group) {
    return this.database('text_groups').where('name', group);
  }

  async getTextData(groupId) {
    return await this.database('text_groups')
      .join('text_content', 'text_content.group_id', 'text_groups.id')
      .where('group_id', groupId);
  }
}
