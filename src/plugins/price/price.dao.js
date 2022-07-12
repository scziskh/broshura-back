export class PriceDao {
  constructor(database) {
    this.database = database;
  }

  // #bind_types#
  // bind_adj
  // bind_sizes
  // #formats#
  // #orientations#
  // print_coefs
  // bind_coefs
  // papers
  // prints
  // lamins
  // trim
  // separators
  // count_coefs

  async getBindAdj() {
    const groupedData = {};

    await this.database('bind_types')
      .join('bind_adj', 'bind_types.id', 'bind_adj.bind_type_id')
      .then(data =>
        data.map(data => (groupedData[data.bind_type] = +data.cost)),
      );

    return groupedData;
  }

  async getBindSizes() {
    const groupedData = {};

    await this.database('bind_types')
      .join('bind_sizes', 'bind_types.id', 'bind_sizes.bind_type_id')
      .orderBy('thick')
      .then(data =>
        data.map(data => {
          if (!groupedData[data.bind_type]) {
            groupedData[data.bind_type] = [];
          }
          return {
            [data.bind_type]: groupedData[data.bind_type].push({
              COST: +data.cost,
              THICK: +data.thick,
            }),
          };
        }),
      );

    return groupedData;
  }

  async getBindCoefs() {
    return await this.database('bind_coefs')
      .join('bind_types', 'bind_types.id', 'bind_coefs.bind_type_id')
      .join('formats', 'formats.id', 'bind_coefs.format_id')
      .join('orientations', 'orientations.id', 'bind_coefs.orientation_id');
  }

  //   [data.format]: {
  //     ...groupedData[data.format],
  //     [data.bind_type]: {
  //       ...groupedData[data.format]?.[data.bind_type],
  //       [data.orientation]: +data.coef,
  //     },
  //   },
  // };

  async getPrintCoefs() {
    const groupedData = {};

    await this.database('print_coefs')
      .join('formats', 'formats.id', 'print_coefs.format_id')
      .then(data => data.map(data => (groupedData[data.format] = +data.coef)));
    return groupedData;
  }

  async getPapers() {
    const groupedData = {};

    await this.database('papers').then(data =>
      data.map(
        data =>
          (groupedData[data.name] = { COST: +data.cost, THICK: +data.thick }),
      ),
    );
    return groupedData;
  }

  async getPrints() {
    const groupedData = {};

    await this.database('prints').then(data =>
      data.map(
        data =>
          (groupedData[data.name] = { COST: +data.cost, SIDES: +data.sides }),
      ),
    );
    return groupedData;
  }

  async getLamins() {
    const groupedData = {};

    await this.database('lamins').then(data =>
      data.map(
        data =>
          (groupedData[data.name] = {
            COST: +data.cost,
            THICK: +data.thick,
            ADJ: +data.adj,
          }),
      ),
    );
    return groupedData;
  }

  async getTrim() {
    let groupedData = {};

    await this.database('trim').then(
      data =>
        (groupedData = {
          MIN_COST: +data[0].min_cost,
          COST: +data[0].cost,
        }),
    );
    return groupedData;
  }

  async getSeparators() {
    const groupedData = {};

    await this.database('separators').then(data =>
      data.map(
        data =>
          (groupedData[data.name] = {
            COST: +data.cost,
            THICK: +data.thick,
            PRINT_COST: +data.print_cost,
          }),
      ),
    );
    return groupedData;
  }

  async getCountCoefs() {
    const groupedData = {};

    await this.database('count_coefs').then(data =>
      data.map(
        data =>
          (groupedData[data.name] = {
            FACTOR: +data.factor,
            DEGREE: +data.degree,
            MAX_COUNT: +data.max_count,
          }),
      ),
    );
    return groupedData;
  }
}
