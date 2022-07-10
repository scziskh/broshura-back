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
    'STAPLES',
    'METAL_SPRING',
    'PLASTIC_SPRING',
    'THERMOBINDER',
    'FOLDER',
    'CANAL',
    'RING',
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
      bind_type_id: bindTypesMap.STAPLES,
      cost: 20,
    },
    {
      bind_type_id: bindTypesMap.METAL_SPRING,
      cost: 0,
    },
    {
      bind_type_id: bindTypesMap.PLASTIC_SPRING,
      cost: 0,
    },
    {
      bind_type_id: bindTypesMap.THERMOBINDER,
      cost: 150,
    },
    {
      bind_type_id: bindTypesMap.FOLDER,
      cost: 0,
    },
    {
      bind_type_id: bindTypesMap.CANAL,
      cost: 0,
    },
    {
      bind_type_id: bindTypesMap.RING,
      cost: 0,
    },
  ]);

  //bind_sizes
  await knex('bind_sizes').insert([
    //STAPLES
    {
      bind_type_id: bindTypesMap.STAPLES,
      cost: 2.75,
      thick: 2400,
    },
    {
      bind_type_id: bindTypesMap.STAPLES,
      cost: 3.25,
      thick: 4000,
    },

    //METAL_SPRING
    {
      bind_type_id: bindTypesMap.METAL_SPRING,
      cost: 27,
      thick: 6000,
    },
    {
      bind_type_id: bindTypesMap.METAL_SPRING,
      cost: 27,
      thick: 7500,
    },
    {
      bind_type_id: bindTypesMap.METAL_SPRING,
      cost: 32,
      thick: 9000,
    },
    {
      bind_type_id: bindTypesMap.METAL_SPRING,
      cost: 32,
      thick: 10500,
    },
    {
      bind_type_id: bindTypesMap.METAL_SPRING,
      cost: 37,
      thick: 12000,
    },
    {
      bind_type_id: bindTypesMap.METAL_SPRING,
      cost: 42,
      thick: 13500,
    },
    {
      bind_type_id: bindTypesMap.METAL_SPRING,
      cost: 52,
      thick: 16000,
    },
    {
      bind_type_id: bindTypesMap.METAL_SPRING,
      cost: 52,
      thick: 19000,
    },
    {
      bind_type_id: bindTypesMap.METAL_SPRING,
      cost: 67,
      thick: 22000,
    },
    {
      bind_type_id: bindTypesMap.METAL_SPRING,
      cost: 67,
      thick: 25000,
    },
    {
      bind_type_id: bindTypesMap.METAL_SPRING,
      cost: 77,
      thick: 28000,
    },
    {
      bind_type_id: bindTypesMap.METAL_SPRING,
      cost: 77,
      thick: 28000,
    },

    //PLASTIC_SPRING
    {
      bind_type_id: bindTypesMap.PLASTIC_SPRING,
      cost: 22,
      thick: 4000,
    },
    {
      bind_type_id: bindTypesMap.PLASTIC_SPRING,
      cost: 22,
      thick: 5500,
    },
    {
      bind_type_id: bindTypesMap.PLASTIC_SPRING,
      cost: 22,
      thick: 8000,
    },
    {
      bind_type_id: bindTypesMap.PLASTIC_SPRING,
      cost: 27,
      thick: 10000,
    },
    {
      bind_type_id: bindTypesMap.PLASTIC_SPRING,
      cost: 27,
      thick: 12000,
    },
    {
      bind_type_id: bindTypesMap.PLASTIC_SPRING,
      cost: 27,
      thick: 15000,
    },
    {
      bind_type_id: bindTypesMap.PLASTIC_SPRING,
      cost: 32,
      thick: 18000,
    },
    {
      bind_type_id: bindTypesMap.PLASTIC_SPRING,
      cost: 32,
      thick: 21000,
    },
    {
      bind_type_id: bindTypesMap.PLASTIC_SPRING,
      cost: 42,
      thick: 24000,
    },
    {
      bind_type_id: bindTypesMap.PLASTIC_SPRING,
      cost: 42,
      thick: 28000,
    },
    {
      bind_type_id: bindTypesMap.PLASTIC_SPRING,
      cost: 52,
      thick: 34000,
    },
    {
      bind_type_id: bindTypesMap.PLASTIC_SPRING,
      cost: 52,
      thick: 42000,
    },
    {
      bind_type_id: bindTypesMap.PLASTIC_SPRING,
      cost: 62,
      thick: 51000,
    },

    //THERMOBINDER
    {
      bind_type_id: bindTypesMap.THERMOBINDER,
      cost: 8,
      thick: 20000,
    },

    //FOLDER
    {
      bind_type_id: bindTypesMap.FOLDER,
      cost: 10,
      thick: 10000,
    },
    {
      bind_type_id: bindTypesMap.FOLDER,
      cost: 20,
      thick: 25000,
    },
    {
      bind_type_id: bindTypesMap.FOLDER,
      cost: 30,
      thick: 50000,
    },

    //CANAL
    {
      bind_type_id: bindTypesMap.CANAL,
      cost: 120,
      thick: 12500,
    },
    {
      bind_type_id: bindTypesMap.CANAL,
      cost: 140,
      thick: 14500,
    },
    {
      bind_type_id: bindTypesMap.CANAL,
      cost: 150,
      thick: 16500,
    },
    {
      bind_type_id: bindTypesMap.CANAL,
      cost: 160,
      thick: 18500,
    },
    {
      bind_type_id: bindTypesMap.CANAL,
      cost: 170,
      thick: 20500,
    },
    {
      bind_type_id: bindTypesMap.CANAL,
      cost: 180,
      thick: 22500,
    },

    //RING
    {
      bind_type_id: bindTypesMap.RING,
      cost: 5,
      thick: 20000,
    },
    {
      bind_type_id: bindTypesMap.RING,
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
  const orientations = ['LANDSCAPE', 'PORTRAIT'];

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
      bind_type_id: bindTypesMap.STAPLES,
      format_id: formatsMap.A4,
      orientation_id: orientationsMap.PORTRAIT,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.STAPLES,
      format_id: formatsMap.A5,
      orientation_id: orientationsMap.PORTRAIT,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.STAPLES,
      format_id: formatsMap.A5,
      orientation_id: orientationsMap.LANDSCAPE,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.STAPLES,
      format_id: formatsMap.A6,
      orientation_id: orientationsMap.PORTRAIT,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.STAPLES,
      format_id: formatsMap.A7,
      orientation_id: orientationsMap.LANDSCAPE,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.STAPLES,
      format_id: formatsMap.A7,
      orientation_id: orientationsMap.PORTRAIT,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.STAPLES,
      format_id: formatsMap.A5,
      orientation_id: orientationsMap.LANDSCAPE,
      coef: 1,
    },

    //METAL_SPRING
    {
      bind_type_id: bindTypesMap.METAL_SPRING,
      format_id: formatsMap.A3,
      orientation_id: orientationsMap.PORTRAIT,
      coef: 1.6,
    },
    {
      bind_type_id: bindTypesMap.METAL_SPRING,
      format_id: formatsMap.A3,
      orientation_id: orientationsMap.LANDSCAPE,
      coef: 1.3,
    },
    {
      bind_type_id: bindTypesMap.METAL_SPRING,
      format_id: formatsMap.A4,
      orientation_id: orientationsMap.PORTRAIT,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.METAL_SPRING,
      format_id: formatsMap.A4,
      orientation_id: orientationsMap.LANDSCAPE,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.METAL_SPRING,
      format_id: formatsMap.A5,
      orientation_id: orientationsMap.PORTRAIT,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.METAL_SPRING,
      format_id: formatsMap.A5,
      orientation_id: orientationsMap.LANDSCAPE,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.METAL_SPRING,
      format_id: formatsMap.A6,
      orientation_id: orientationsMap.PORTRAIT,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.METAL_SPRING,
      format_id: formatsMap.A6,
      orientation_id: orientationsMap.LANDSCAPE,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.METAL_SPRING,
      format_id: formatsMap.A7,
      orientation_id: orientationsMap.PORTRAIT,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.METAL_SPRING,
      format_id: formatsMap.A7,
      orientation_id: orientationsMap.LANDSCAPE,
      coef: 1,
    },

    //PLASTIC_SPRING
    {
      bind_type_id: bindTypesMap.PLASTIC_SPRING,
      format_id: formatsMap.A3,
      orientation_id: orientationsMap.LANDSCAPE,
      coef: 1.3,
    },
    {
      bind_type_id: bindTypesMap.PLASTIC_SPRING,
      format_id: formatsMap.A4,
      orientation_id: orientationsMap.PORTRAIT,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.PLASTIC_SPRING,
      format_id: formatsMap.A4,
      orientation_id: orientationsMap.LANDSCAPE,
      coef: 1.2,
    },
    {
      bind_type_id: bindTypesMap.PLASTIC_SPRING,
      format_id: formatsMap.A5,
      orientation_id: orientationsMap.PORTRAIT,
      coef: 1.2,
    },
    {
      bind_type_id: bindTypesMap.PLASTIC_SPRING,
      format_id: formatsMap.A5,
      orientation_id: orientationsMap.LANDSCAPE,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.PLASTIC_SPRING,
      format_id: formatsMap.A6,
      orientation_id: orientationsMap.PORTRAIT,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.PLASTIC_SPRING,
      format_id: formatsMap.A6,
      orientation_id: orientationsMap.LANDSCAPE,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.PLASTIC_SPRING,
      format_id: formatsMap.A7,
      orientation_id: orientationsMap.PORTRAIT,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.PLASTIC_SPRING,
      format_id: formatsMap.A7,
      orientation_id: orientationsMap.LANDSCAPE,
      coef: 1,
    },

    //THERMOBINDER
    {
      bind_type_id: bindTypesMap.THERMOBINDER,
      format_id: formatsMap.A4,
      orientation_id: orientationsMap.PORTRAIT,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.THERMOBINDER,
      format_id: formatsMap.A5,
      orientation_id: orientationsMap.PORTRAIT,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.THERMOBINDER,
      format_id: formatsMap.A5,
      orientation_id: orientationsMap.LANDSCAPE,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.THERMOBINDER,
      format_id: formatsMap.A6,
      orientation_id: orientationsMap.PORTRAIT,
      coef: 1,
    },

    //CANAL
    {
      bind_type_id: bindTypesMap.CANAL,
      format_id: formatsMap.A4,
      orientation_id: orientationsMap.PORTRAIT,
      coef: 1,
    },

    //RING
    {
      bind_type_id: bindTypesMap.RING,
      format_id: formatsMap.A3,
      orientation_id: orientationsMap.PORTRAIT,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.RING,
      format_id: formatsMap.A3,
      orientation_id: orientationsMap.LANDSCAPE,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.RING,
      format_id: formatsMap.A4,
      orientation_id: orientationsMap.PORTRAIT,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.RING,
      format_id: formatsMap.A4,
      orientation_id: orientationsMap.LANDSCAPE,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.RING,
      format_id: formatsMap.A5,
      orientation_id: orientationsMap.PORTRAIT,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.RING,
      format_id: formatsMap.A5,
      orientation_id: orientationsMap.LANDSCAPE,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.RING,
      format_id: formatsMap.A6,
      orientation_id: orientationsMap.PORTRAIT,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.RING,
      format_id: formatsMap.A6,
      orientation_id: orientationsMap.LANDSCAPE,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.RING,
      format_id: formatsMap.A7,
      orientation_id: orientationsMap.PORTRAIT,
      coef: 1,
    },
    {
      bind_type_id: bindTypesMap.RING,
      format_id: formatsMap.A7,
      orientation_id: orientationsMap.LANDSCAPE,
      coef: 1,
    },
  ]);

  //papers
  await knex('papers').insert([
    { name: 'NO_PAPER', cost: 0, thick: 0 },
    { name: 'OFFSET_80', cost: 1.0, thick: 100 },
    { name: 'COATED_120', cost: 2.0, thick: 130 },
    { name: 'COATED_160', cost: 2.5, thick: 180 },
    { name: 'COATED_300', cost: 7.0, thick: 400 },
    { name: 'UNCOATED_150', cost: 1.5, thick: 130 },
    { name: 'UNCOATED_170', cost: 1.7, thick: 140 },
    { name: 'UNCOATED_200', cost: 2.0, thick: 190 },
    { name: 'UNCOATED_250', cost: 2.5, thick: 230 },
    { name: 'UNCOATED_300', cost: 3.0, thick: 310 },
  ]);

  //prints
  const prints = [
    { name: 'NO_PRINT', cost: 0, sides: 0 },
    { name: 'ONE_SIDED_GRAYSCALE', cost: 5.0, sides: 1 },
    { name: 'TWO_SIDED_GRAYSCALE', cost: 5.0, sides: 2 },
    { name: 'ONE_SIDED_COLOR', cost: 15.0, sides: 1 },
    { name: 'TWO_SIDED_COLOR', cost: 15.0, sides: 2 },
  ];
  await knex('prints').insert(prints);

  //lamins
  await knex('lamins').insert([
    { name: 'NO_LAMIN', cost: 0, adj: 0, thick: 0 },
    { name: 'ONE_SIDED_MATTE', cost: 8.5, adj: 17, thick: 24 },
    { name: 'TWO_SIDED_MATTE', cost: 10, adj: 20, thick: 48 },
    { name: 'ONE_SIDED_GLOSSY', cost: 8.2, adj: 16.4, thick: 27 },
    { name: 'TWO_SIDED_GLOSSY', cost: 9.8, adj: 19.6, thick: 54 },
  ]);

  //trim
  await knex('trim').insert({ min_cost: 20, cost: 2 });

  //separators
  await knex('separators').insert([
    {
      name: 'SMALL',
      cost: 2,
      print_cost: 2,
      thick: 20,
    },
    {
      name: 'LARGE',
      cost: 5,
      print_cost: 5,
      thick: 20,
    },
  ]);

  //count_coefs
  await knex('count_coefs').insert([
    {
      name: 'ONE_SIDED_GRAYSCALE',
      factor: 2.2,
      degree: -0.3,
      max_count: 1000,
    },
    {
      name: 'TWO_SIDED_GRAYSCALE',
      factor: 2.2,
      degree: -0.3,
      max_count: 1000,
    },
    {
      name: 'ONE_SIDED_COLOR',
      factor: 1.6,
      degree: -0.2,
      max_count: 1000,
    },
    {
      name: 'TWO_SIDED_COLOR',
      factor: 1.6,
      degree: -0.2,
      max_count: 1000,
    },
    {
      name: 'LAMIN',
      factor: 1.8,
      degree: -0.2,
      max_count: 500,
    },
    {
      name: 'TRIM',
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
