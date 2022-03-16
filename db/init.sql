\c kanban

CREATE TABLE public.cards(
   id SERIAL PRIMARY KEY,
   titulo VARCHAR NOT NULL,
   conteudo VARCHAR NOT NULL,
   lista VARCHAR NOT NULL
);

INSERT INTO cards(id,titulo,conteudo,lista) 
VALUES(DEFAULT,'TituloCard01','Conteudo Card01', 'Lista Card01');

INSERT INTO cards(id,titulo,conteudo,lista) 
VALUES(DEFAULT,'TituloCard02','Conteudo Card02', 'Lista Card02');

SELECT * from public.cards




