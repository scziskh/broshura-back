export class PriceDao {
  constructor(database) {
    this.database = database;
  }

  async getBindAdj() {
    return await this.database('bind_types').join(
      'bind_adj',
      'bind_types.id',
      'bind_adj.bind_type_id',
    );
  }

  async getBindSizes() {
    return await this.database('bind_types')
      .join('bind_sizes', 'bind_types.id', 'bind_sizes.bind_type_id')
      .orderBy('thick');
  }

  async getBindCoefs() {
    return await this.database('bind_coefs')
      .join('bind_types', 'bind_types.id', 'bind_coefs.bind_type_id')
      .join('formats', 'formats.id', 'bind_coefs.format_id')
      .join('orientations', 'orientations.id', 'bind_coefs.orientation_id');
  }

  async getPrintCoefs() {
    return await this.database('print_coefs').join(
      'formats',
      'formats.id',
      'print_coefs.format_id',
    );
  }

  async getPapers() {
    return await this.database('papers');
  }

  async getPrints() {
    return await this.database('prints');
  }

  async getLamins() {
    return await this.database('lamins');
  }

  async getTrim() {
    return await this.database('trim');
  }

  async getSeparators() {
    return await this.database('separators');
  }

  async getCountCoefs() {
    return await this.database('count_coefs');
  }
}
