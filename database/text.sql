create table if not exists text_groups
(
    id serial primary key,
    name varchar(32) not null unique
);

create table if not exists text_content
(
    id serial primary key,
    group_id smallint references text_groups (id),
    name varchar(32) not null unique,
    uk varchar(1024) not null,
    ru varchar(1024) not null
);