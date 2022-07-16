import Knex from 'knex';

// bind_types
// bind_adj
// bind_sizes
// formats
// orientations
// print_coefs
// bind_coefs
// papers
// prints
// lamins
// trim
// separators
// count_coefs

export async function up(knex, Promise) {
  //bind_types
  const bindTypesNames = [
    'staples',
    'metal_spring',
    'plastic_spring',
    'thermobinder',
    'folder',
    'canal',
    'ring',
  ];

  const bindTypesIds = await knex('bind_types')
    .insert(bindTypesNames.map(bindTypeName => ({ bind_type: bindTypeName })))
    .returning('id');

  const bindTypesMap = bindTypesNames.reduce((accumulator, name, index) => {
    accumulator[name] = bindTypesIds[index].id;
    return accumulator;
  }, {});

  //bind_adj
  await knex('bind_adj').insert([
    {
      bind_type_id: bindTypesMap.staples,
      cost: 20,
    },
    {
      bind_type_id: bindTypesMap.metal_spring,
      cost: 0,
    },
    {
      bind_type_id: bindTypesMap.plastic_spring,
      cost: 0,
    },
    {
      bind_type_id: bindTypesMap.thermobinder,
      cost: 150,
    },
    {
      bind_type_id: bindTypesMap.folder,
      cost: 0,
    },
    {
      bind_type_id: bindTypesMap.canal,
      cost: 0,
    },
    {
      bind_type_id: bindTypesMap.ring,
      cost: 0,
    },
  ]);

  //bind_sizes
  await knex('bind_sizes').insert([
    //STAPLES
    {
      bind_type_id: bindTypesMap.staples,
      cost: 2.75,
      thick: 2400,
    },
    {
      bind_type_id: bindTypesMap.staples,
      cost: 3.25,
      thick: 4000,
    },

    //METAL_SPRING
    {
      bind_type_id: bindTypesMap.metal_spring,
      cost: 27,
      thick: 6000,
    },
    {
      bind_type_id: bindTypesMap.metal_spring,
      cost: 27,
      thick: 7500,
    },
    {
      bind_type_id: bindTypesMap.metal_spring,
      cost: 32,
      thick: 9000,
    },
    {
      bind_type_id: bindTypesMap.metal_spring,
      cost: 32,
      thick: 10500,
    },
    {
      bind_type_id: bindTypesMap.metal_spring,
      cost: 37,
      thick: 12000,
    },
    {
      bind_type_id: bindTypesMap.metal_spring,
      cost: 42,
      thick: 13500,
    },
    {
      bind_type_id: bindTypesMap.metal_spring,
      cost: 52,
      thick: 16000,
    },
    {
      bind_type_id: bindTypesMap.metal_spring,
      cost: 52,
      thick: 19000,
    },
    {
      bind_type_id: bindTypesMap.metal_spring,
      cost: 67,
      thick: 22000,
    },
    {
      bind_type_id: bindTypesMap.metal_spring,
      cost: 67,
      thick: 25000,
    },
    {
      bind_type_id: bindTypesMap.metal_spring,
      cost: 77,
      thick: 28000,
    },
    {
      bind_type_id: bindTypesMap.metal_spring,
      cost: 77,
      thick: 28000,
    },

    //PLASTIC_SPRING
    {
      bind_type_id: bindTypesMap.plastic_spring,
      cost: 22,
      thick: 4000,
    },
    {
      bind_type_id: bindTypesMap.plastic_spring,
      cost: 22,
      thick: 5500,
    },
    {
      bind_type_id: bindTypesMap.plastic_spring,
      cost: 22,
      thick: 8000,
    },
    {
      bind_type_id: bindTypesMap.plastic_spring,
      cost: 27,
      thick: 10000,
    },
    {
      bind_type_id: bindTypesMap.plastic_spring,
      cost: 27,
      thick: 12000,
    },
    {
      bind_type_id: bindTypesMap.plastic_spring,
      cost: 27,
      thick: 15000,
    },
    {
      bind_type_id: bindTypesMap.plastic_spring,
      cost: 32,
      thick: 18000,
    },
    {
      bind_type_id: bindTypesMap.plastic_spring,
      cost: 32,
      thick: 21000,
    },
    {
      bind_type_id: bindTypesMap.plastic_spring,
      cost: 42,
      thick: 24000,
    },
    {
      bind_type_id: bindTypesMap.plastic_spring,
      cost: 42,
      thick: 28000,
    },
    {
      bind_type_id: bindTypesMap.plastic_spring,
      cost: 52,
      thick: 34000,
    },
    {
      bind_type_id: bindTypesMap.plastic_spring,
      cost: 52,
      thick: 42000,
    },
    {
      bind_type_id: bindTypesMap.plastic_spring,
      cost: 62,
      thick: 51000,
    },

    //THERMOBINDER
    {
      bind_type_id: bindTypesMap.thermobinder,
      cost: 8,
      thick: 20000,
    },

    //FOLDER
    {
      bind_type_id: bindTypesMap.folder,
      cost: 10,
      thick: 10000,
    },
    {
      bind_type_id: bindTypesMap.folder,
      cost: 20,
      thick: 25000,
    },
    {
      bind_type_id: bindTypesMap.folder,
      cost: 30,
      thick: 50000,
    },

    //CANAL
    {
      bind_type_id: bindTypesMap.canal,
      cost: 120,
      thick: 12500,
    },
    {
      bind_type_id: bindTypesMap.canal,
      cost: 140,
      thick: 14500,
    },
    {
      bind_type_id: bindTypesMap.canal,
      cost: 150,
      thick: 16500,
    },
    {
      bind_type_id: bindTypesMap.canal,
      cost: 160,
      thick: 18500,
    },
    {
      bind_type_id: bindTypesMap.canal,
      cost: 170,
      thick: 20500,
    },
    {
      bind_type_id: bindTypesMap.canal,
      cost: 180,
      thick: 22500,
    },

    //RING
    {
      bind_type_id: bindTypesMap.ring,
      cost: 5,
      thick: 20000,
    },
    {
      bind_type_id: bindTypesMap.ring,
      cost: 10,
      thick: 50000,
    },
  ]);

  //formats
  const formats = ['A3', 'A4', 'A5', 'A6', 'A7'];

  const formatsIds = await knex('formats')
    .insert(formats.map(format => ({ format })))
    .returning('id');

  const formatsMap = formats.reduce((accumulator, name, index) => {
    accumulator[name] = formatsIds[index].id;
    return accumulator;
  }, {});

  //orientations
  const orientations = ['landscape', 'portrait'];

  const orientationsIds = await knex('orientations')
    .insert(orientations.map(orientation => ({ orientation })))
    .returning('id');

  const orientationsMap = orientations.reduce((accumulator, name, index) => {
    accumulator[name] = orientationsIds[index].id;
    return accumulator;
  }, {});

  //print_coef
  await knex('print_coefs').insert([
    {
      format_id: formatsMap.A3,
      coef: 1,
    },
    {
      format_id: formatsMap.A4,
      coef: 0.5,
    },
    {
      format_id: formatsMap.A5,
      coef: 0.25,
    },
    {
      format_id: formatsMap.A6,
      coef: 0.125,
    },
    {
      format_id: formatsMap.A7,
      coef: 0.0625,
    },
  ]);

  //bind_coefs
  await knex('bind_coefs').insert([
    //STAPLES
    {
      bind_type_id: bindTypesMap.staples,
      format_id: formatsMap.A4,
      orientation_id: orientationsMap.portrait,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.staples,
      format_id: formatsMap.A5,
      orientation_id: orientationsMap.portrait,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.staples,
      format_id: formatsMap.A5,
      orientation_id: orientationsMap.landscape,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.staples,
      format_id: formatsMap.A6,
      orientation_id: orientationsMap.portrait,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.staples,
      format_id: formatsMap.A7,
      orientation_id: orientationsMap.landscape,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.staples,
      format_id: formatsMap.A7,
      orientation_id: orientationsMap.portrait,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.staples,
      format_id: formatsMap.A5,
      orientation_id: orientationsMap.landscape,
      coef: 1,
    },

    //METAL_SPRING
    {
      bind_type_id: bindTypesMap.metal_spring,
      format_id: formatsMap.A3,
      orientation_id: orientationsMap.portrait,
      coef: 1.6,
    },
    {
      bind_type_id: bindTypesMap.metal_spring,
      format_id: formatsMap.A3,
      orientation_id: orientationsMap.landscape,
      coef: 1.3,
    },
    {
      bind_type_id: bindTypesMap.metal_spring,
      format_id: formatsMap.A4,
      orientation_id: orientationsMap.portrait,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.metal_spring,
      format_id: formatsMap.A4,
      orientation_id: orientationsMap.landscape,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.metal_spring,
      format_id: formatsMap.A5,
      orientation_id: orientationsMap.portrait,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.metal_spring,
      format_id: formatsMap.A5,
      orientation_id: orientationsMap.landscape,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.metal_spring,
      format_id: formatsMap.A6,
      orientation_id: orientationsMap.portrait,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.metal_spring,
      format_id: formatsMap.A6,
      orientation_id: orientationsMap.landscape,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.metal_spring,
      format_id: formatsMap.A7,
      orientation_id: orientationsMap.portrait,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.metal_spring,
      format_id: formatsMap.A7,
      orientation_id: orientationsMap.landscape,
      coef: 1,
    },

    //PLASTIC_SPRING
    {
      bind_type_id: bindTypesMap.plastic_spring,
      format_id: formatsMap.A3,
      orientation_id: orientationsMap.landscape,
      coef: 1.3,
    },
    {
      bind_type_id: bindTypesMap.plastic_spring,
      format_id: formatsMap.A4,
      orientation_id: orientationsMap.portrait,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.plastic_spring,
      format_id: formatsMap.A4,
      orientation_id: orientationsMap.landscape,
      coef: 1.2,
    },
    {
      bind_type_id: bindTypesMap.plastic_spring,
      format_id: formatsMap.A5,
      orientation_id: orientationsMap.portrait,
      coef: 1.2,
    },
    {
      bind_type_id: bindTypesMap.plastic_spring,
      format_id: formatsMap.A5,
      orientation_id: orientationsMap.landscape,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.plastic_spring,
      format_id: formatsMap.A6,
      orientation_id: orientationsMap.portrait,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.plastic_spring,
      format_id: formatsMap.A6,
      orientation_id: orientationsMap.landscape,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.plastic_spring,
      format_id: formatsMap.A7,
      orientation_id: orientationsMap.portrait,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.plastic_spring,
      format_id: formatsMap.A7,
      orientation_id: orientationsMap.landscape,
      coef: 1,
    },

    //THERMOBINDER
    {
      bind_type_id: bindTypesMap.thermobinder,
      format_id: formatsMap.A4,
      orientation_id: orientationsMap.portrait,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.thermobinder,
      format_id: formatsMap.A5,
      orientation_id: orientationsMap.portrait,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.thermobinder,
      format_id: formatsMap.A5,
      orientation_id: orientationsMap.landscape,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.thermobinder,
      format_id: formatsMap.A6,
      orientation_id: orientationsMap.portrait,
      coef: 1,
    },

    //CANAL
    {
      bind_type_id: bindTypesMap.canal,
      format_id: formatsMap.A4,
      orientation_id: orientationsMap.portrait,
      coef: 1,
    },

    //RING
    {
      bind_type_id: bindTypesMap.ring,
      format_id: formatsMap.A3,
      orientation_id: orientationsMap.portrait,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.ring,
      format_id: formatsMap.A3,
      orientation_id: orientationsMap.landscape,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.ring,
      format_id: formatsMap.A4,
      orientation_id: orientationsMap.portrait,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.ring,
      format_id: formatsMap.A4,
      orientation_id: orientationsMap.landscape,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.ring,
      format_id: formatsMap.A5,
      orientation_id: orientationsMap.portrait,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.ring,
      format_id: formatsMap.A5,
      orientation_id: orientationsMap.landscape,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.ring,
      format_id: formatsMap.A6,
      orientation_id: orientationsMap.portrait,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.ring,
      format_id: formatsMap.A6,
      orientation_id: orientationsMap.landscape,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.ring,
      format_id: formatsMap.A7,
      orientation_id: orientationsMap.portrait,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.ring,
      format_id: formatsMap.A7,
      orientation_id: orientationsMap.landscape,
      coef: 1,
    },
  ]);

  //papers
  await knex('papers').insert([
    { paper: 'no_paper', cost: 0, thick: 0 },
    { paper: 'offset_80', cost: 1.0, thick: 100 },
    { paper: 'coated_120', cost: 2.0, thick: 130 },
    { paper: 'coated_160', cost: 2.5, thick: 180 },
    { paper: 'coated_300', cost: 7.0, thick: 400 },
    { paper: 'uncoated_150', cost: 1.5, thick: 130 },
    { paper: 'uncoated_170', cost: 1.7, thick: 140 },
    { paper: 'uncoated_200', cost: 2.0, thick: 190 },
    { paper: 'uncoated_250', cost: 2.5, thick: 230 },
    { paper: 'uncoated_300', cost: 3.0, thick: 310 },
  ]);

  //prints
  const prints = [
    { print: 'no_print', cost: 0, sides: 0 },
    { print: 'one_sided_grayscale', cost: 5.0, sides: 1 },
    { print: 'two_sided_grayscale', cost: 5.0, sides: 2 },
    { print: 'one_sided_color', cost: 15.0, sides: 1 },
    { print: 'two_sided_color', cost: 15.0, sides: 2 },
  ];
  await knex('prints').insert(prints);

  //lamins
  await knex('lamins').insert([
    { lamin: 'no_lamin', cost: 0, adj: 0, thick: 0 },
    { lamin: 'one_sided_matte', cost: 8.5, adj: 17, thick: 24 },
    { lamin: 'two_sided_matte', cost: 10, adj: 20, thick: 48 },
    { lamin: 'one_sided_glossy', cost: 8.2, adj: 16.4, thick: 27 },
    { lamin: 'two_sided_glossy', cost: 9.8, adj: 19.6, thick: 54 },
  ]);

  //trim
  await knex('trim').insert({ min_cost: 20, cost: 2 });

  //separators
  await knex('separators').insert([
    {
      separator: 'small',
      cost: 2,
      print_cost: 2,
      thick: 20,
    },
    {
      separator: 'large',
      cost: 5,
      print_cost: 5,
      thick: 20,
    },
  ]);

  //count_coefs
  await knex('count_coefs').insert([
    {
      name: 'one_sided_grayscale',
      factor: 2.2,
      degree: -0.3,
      max_count: 1000,
    },
    {
      name: 'two_sided_grayscale',
      factor: 2.2,
      degree: -0.3,
      max_count: 1000,
    },
    {
      name: 'one_sided_color',
      factor: 1.6,
      degree: -0.2,
      max_count: 1000,
    },
    {
      name: 'two_sided_color',
      factor: 1.6,
      degree: -0.2,
      max_count: 1000,
    },
    {
      name: 'lamin',
      factor: 1.8,
      degree: -0.2,
      max_count: 500,
    },
    {
      name: 'trim',
      factor: 1,
      degree: -0.1,
      max_count: 100,
    },
  ]);
}

export async function down(knex, Promise) {
  await knex('bind_types').delete;
  await knex('bind_adj').delete;
  await knex('bind_sizes').delete;
  await knex('formats').delete;
  await knex('orientations').delete;
  await knex('print_coefs').delete;
  await knex('bind_coefs').delete;
  await knex('papers').delete;
  await knex('prints').delete;
  await knex('lamins').delete;
  await knex('trim').delete;
  await knex('separators').delete;
  await knex('count_coefs').delete;
}
