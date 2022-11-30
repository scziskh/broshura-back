create table if not exists bind_types
(
    id smallserial primary key,
    bind_type varchar(16) not null unique
);

create table if not exists bind_adj
(
    id smallserial primary key,
    bind_type_id smallint references bind_types (id) unique,
    cost numeric(5, 2) not null
);

create table if not exists bind_sizes
(
    id smallserial primary key,
    bind_type_id smallint references bind_types (id),
    cost numeric(5, 2) not null,
    thick int not null
);

create table if not exists formats
(
    id smallserial primary key,
    format varchar(2) not null unique
);

create table if not exists orientations
(
    id smallserial primary key,
    orientation varchar(16) not null unique
);

create table if not exists bind_coefs
(
    id smallserial primary key,
    bind_type_id smallint references bind_types (id),
    format_id smallint references formats (id),
    orientation_id smallint references orientations (id),
    coef numeric(3, 2) not null
);

create table if not exists print_coefs
(
    format_id smallint references formats (id),
    coef numeric(5, 4) not null
);

create table if not exists papers
(
    id smallserial primary key,
    paper varchar(24) not null unique,
    cost numeric(5, 2) not null,
    thick smallint not null
);

create table if not exists prints
(
    id serial primary key,
    print varchar(24) not null unique,
    cost numeric(5, 2) not null,
    sides smallint not null
);

create table if not exists lamins
(
    id serial primary key,
    lamin varchar(24) not null unique,
    cost numeric(5, 2) not null,
    adj numeric(5, 2) not null,
    thick smallint not null
);

create table if not exists trim
(
    id serial primary key,
    min_cost numeric(5, 2) not null,
    cost numeric(5, 2) not null
);

create table if not exists separators
(
    id serial primary key,
    separator varchar(8) not null unique,
    cost numeric(5, 2) not null,
    print_cost numeric(5, 2) not null,
    thick smallint not null
);

create table if not exists count_coefs
(
    id serial primary key,
    name varchar(24) not null unique,
    factor numeric(3, 2) not null,
    degree numeric(3, 2) not null,
    max_count smallint not null
);