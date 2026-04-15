create table notes (
  id         text        not null,
  user_id    uuid        not null references auth.users(id) on delete cascade,
  entry_id   text        not null,
  text       text        not null default '',
  color      smallint    not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, id)
);

create index notes_user_id_idx on notes (user_id);

alter table notes enable row level security;

create policy "Users manage own notes"
  on notes for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
