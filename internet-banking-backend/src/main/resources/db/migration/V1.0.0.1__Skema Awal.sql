create table rekening (
    id varchar(36),
    nomor varchar(100) not null,
    nama varchar(255) not null,
    primary key (id),
    unique (nomor)
)
