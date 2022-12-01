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

  // text_content ***services***
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

  // text_content ***products***
  await knex('text_content').insert([
    {
      group_id: textGroupsMap.menu,
      name: 'products_page',
      ru: 'Продукция',
      uk: 'Продукція',
    },
    {
      group_id: textGroupsMap.menu,
      name: 'product_notebook_page',
      ru: 'Печать блокнотов',
      uk: 'Друк блокнотів',
    },
    {
      group_id: textGroupsMap.menu,
      name: 'product_catalogs_page',
      ru: 'Печать каталогов',
      uk: 'Друк каталогів',
    },
    {
      group_id: textGroupsMap.menu,
      name: 'product_synopsis_page',
      ru: 'Печать авторефератов',
      uk: 'Друк авторефератів',
    },
    {
      group_id: textGroupsMap.menu,
      name: 'product_books_page',
      ru: 'Печать книжек',
      uk: 'Друк книг',
    },
    {
      group_id: textGroupsMap.menu,
      name: 'product_calendars_page',
      ru: 'Печать календарей',
      uk: 'Друк календарів',
    },
    {
      group_id: textGroupsMap.menu,
      name: 'product_thesis_page',
      ru: 'Печать диссертаций',
      uk: 'Друк дисертацій',
    },
    {
      group_id: textGroupsMap.menu,
      name: 'product_presentations_page',
      ru: 'Печать презентаций',
      uk: 'Друк презентацій',
    },
    {
      group_id: textGroupsMap.menu,
      name: 'product_draws_page',
      ru: 'Печать чертежей',
      uk: 'Друк креслень',
    },
  ]);

  // text_content ***info***
  await knex('text_content').insert([
    {
      group_id: textGroupsMap.menu,
      name: 'about_us',
      ru: 'О нас',
      uk: 'Про нас',
    },
    {
      group_id: textGroupsMap.menu,
      name: 'contacts_page',
      ru: 'Наши контакты',
      uk: 'Наші контакти',
    },
    {
      group_id: textGroupsMap.menu,
      name: 'special_page',
      ru: 'Акции',
      uk: 'Акції',
    },
    {
      group_id: textGroupsMap.menu,
      name: 'faq_page',
      ru: 'Частые вопросы',
      uk: 'Часті питання',
    },
    {
      group_id: textGroupsMap.menu,
      name: 'layout_requirements_page',
      ru: 'Требования к макетам',
      uk: 'Вимоги до макетів',
    },
    {
      group_id: textGroupsMap.menu,
      name: 'payment_and_delivery_page',
      ru: 'Оплата и доставка',
      uk: 'Оплата і доставка',
    },
    {
      group_id: textGroupsMap.menu,
      name: 'terms_page',
      ru: 'Условия использования',
      uk: 'Умови використання',
    },
    {
      group_id: textGroupsMap.menu,
      name: 'policy_page',
      ru: 'Политика конфиденциальности',
      uk: 'Політика конфіденційності',
    },
    {
      group_id: textGroupsMap.menu,
      name: 'documents_page',
      ru: 'Документы',
      uk: 'Документи',
    },
  ]);
}

export async function down(knex, Promise) {
  await knex('text_content').delete;
  await knex('text_groups').delete;
}
