import Knex from 'knex';

// text_groups
// text_content

export async function up(knex, Promise) {
  // text_groups
  const textGroupsNames = ['menu'];

  const textGroupsIds = await knex('text_groups')
    .insert(textGroupsNames.map(textGroupName => ({ name: textGroupName })))
    .returning('id');

  const textGroupsMap = textGroupsNames.reduce((accumulator, name, index) => {
    accumulator[name] = textGroupsIds[index].id;
    return accumulator;
  }, {});

  // text_content services
  await knex('text_content').insert([
    {
      group_id: textGroupsMap.menu,
      name: 'services_page',
      ru: 'Услуги',
      uk: 'Послуги',
    },
    {
      group_id: textGroupsMap.menu,
      name: 'service_staples_page',
      ru: 'Сшивка на скобу',
      uk: 'Зшивка на скобу',
    },
    {
      group_id: textGroupsMap.menu,
      name: 'service_metal_spring_page',
      ru: 'Сшивка на металлическую пружину',
      uk: 'Зшивка на металеву пружину',
    },
    {
      group_id: textGroupsMap.menu,
      name: 'services_plastic_spring_page',
      ru: 'Сшивка на пластиковую пружину',
      uk: 'Зшивка на пластикову пружину',
    },
    {
      group_id: textGroupsMap.menu,
      name: 'services_thermobinder_page',
      ru: 'Сшивка на термобиндер',
      uk: 'Зшивка на термобіндер',
    },
    {
      group_id: textGroupsMap.menu,
      name: 'services_hard_cover_page',
      ru: 'Сшивка на твёрдый переплёт',
      uk: 'Зшивка у тверду обкладинку',
    },
    {
      group_id: textGroupsMap.menu,
      name: 'services_canal_page',
      ru: 'Сшивка в польский канал',
      uk: 'Зшивка в польський канал',
    },
    {
      group_id: textGroupsMap.menu,
      name: 'services_ring_page',
      ru: 'Сшивка на кольца',
      uk: 'Зшивка на кільця',
    },
    {
      group_id: textGroupsMap.menu,
      name: 'services_folder_page',
      ru: 'Комплектование в папку',
      uk: 'Комплектування в папку',
    },
  ]);
}

export async function down(knex, Promise) {
  await knex('text_groups').delete;
  await knex('text_content').delete;
}
