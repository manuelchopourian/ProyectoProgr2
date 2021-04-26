CREATE PROCEDURE `Sentencias` ()

use proyecto_integrador;

create table users (
id int primary key auto_increment,
nombre varchar (100) not null,
apellido varchar(200) not null,
nombre_usuario varchar(200) unique, 
email varchar(200) not null unique,
password varchar(250) not null,
fecha_nacimiento date not null,
url_imagen_usuario varchar(300) not null,
telefono varchar(13)

);

create table products(

id int primary key auto_increment,
nombre_porducto varchar(300) not null,
url_imagen_producto varchar(300) not null,
fecha_publicacion date not null,
user_id int not null,
foreign key (user_id) references users(id)
);


create table comentarios (
id int primary key auto_increment,
comentario text not null,
fecha_posteo datetime not null,

user_id int not null,
foreign key (user_id) references users(id),

product_id int not null,
foreign key (product_id) references products(id)

);



insert into users values (1,'Jose', 'Perez', 'joseperez', 'joseperez@gmail.com', 'pepito', '1998-01-09', '/images/profiles/hombre1.jpg' , 541156347890 );
insert into users values (2,'Juan', 'Martinez', 'juanmartinez', 'juanmartinez22@gmail.com', 'picopico', '1996-05-02', '/images/profiles/hombre2.jpg' , '5411569835903' );
insert into users values (3,'Martin', 'Herrera', 'martinherrera', 'martinherrera21@gmail.com', 'casita', '1998-05-22', '/images/profiles/hombre3.jpg' , '5411525068356' );
insert into users values (4,'Manuel', 'Sanchez', 'manusanchez', 'manuelitosanchez@gmail.com', 'juanita', '1993-10-8', '/images/profiles/hombre4.jpg' , '5411529046189' );
insert into users values (5,'Clara', 'Gonzalez', 'claragonzalez', 'claritagonzales@gmail.com', 'qwertyu', '1995-01-01', '/images/profiles/mujer1.jpg' , '5411507538579' );
insert into users values (6,'Catalina', 'Rodriguez', 'catarotriguez', 'catrodriguez@gmail.com', 'abuela5', '1998-11-29', '/images/profiles/mujer2.jpg' , '5411515396084' );
insert into users values (7,'Carla', 'Torres', 'carlatorres', 'carlitorres@gmail.com', 'mamita3', '1989-04-04', '/images/profiles/mujer3.jpg' , '5411574231964' );
insert into users values (8,'Sofia', 'Lopez', 'sofilopez', 'sofilopez@gmail.com', 'pato123', '2001-08-03', '/images/profiles/mujer4.jpg' , '5411567412345' );


insert into products values (1,'camiseta local españa rojo','/images/products/Camiseta-Espana-Local.jpeg', '2021-09-21', 4);
insert into products values (2,'botines predator terreno firme adidas negro','/images/products/Botines-Predator-Negros.jpeg', '2020-08-24', 5);
insert into products values (3,'guantes predator adidas rojo y negro ','/images/products/Guantes-Predator.jpeg', '2019-03-26', 5);
insert into products values (4,'camiseta japon azul adidas','/images/products/Camiseta-Japon-Local.jpeg', '2020-03-23', 3);
insert into products values (5,'camiseta local seleccion argentina celeste y blanca adidas','/images/products/Camiseta-Argentina-Local.jpeg', '2021-06-16', 8);
insert into products values (6,'pelota uniforia blanca uefa europa league 2020 adidas','/images/products/Pelota-Uniforia.jpeg', '2021-05-17', 1);
insert into products values (7,'camiseta local river plate rojo y blanco adidas','/images/products/Camiseta-River-Local.jpeg', '2021-12-10', 2);
insert into products values (8,'camiseta local boca juniors azul y oro adidas','/images/products/Camiseta-Boca-Local.jpeg', '2018-11-12', 6);
insert into products values (9,'camiseta local tottenham blanca nike','/images/products/Camiseta-Local-Tottenham.jpeg', '2021-10-30', 5);
insert into products values (10,'camiseta local inter de milan azul negro nike','/images/products/Camiseta-Inter-Local.jpeg', '2016-03-27', 8);
insert into products values (11,'camiseta local liverpool roja nike','/images/products/Camiseta-Local-Liverpool.jpeg', '2019-05-23', 7);
insert into products values (12,'camiseta local independiente rojo puma','/images/products/Camiseta-Local-Independiente.jpeg', '2020-08-04', 5);
insert into products values (13,'camiseta local chelsea azul nike','/images/products/Camiseta-Local-Chealsea.jpeg', '2020-09-10', 7);
insert into products values (14,'camiseta local barcelona azul y roja nike','/images/products/Camiseta-Local-Barcelona.jpeg', '2021-01-24', 2);
insert into products values (15,'camiseta local manchester city celeste puma','/images/products/Camiseta-Local-Manchester.jpeg', '2021-02-19', 5);
insert into products values (16,'botines copa adidas azules','/images/products/Botines-Copa.jpeg', '2016-03-15', 1);
insert into products values (17,'botines predator mutator adidas negro oro blanco','/images/products/Botines-Predator-Mutator.jpeg', '2020-04-03', 2);
insert into products values (18,'pelota final estambul uefa champions league','/images/products/Pelota-ucl.jpeg', '2021-06-11', 7);
insert into products values (19,'botines nike phantom naranja negro ','/images/products/Botines-Nike-Phantom.jpeg', '2021-08-20', 1);
insert into products values (20,'botines nike superfly negro ','/images/products/Botines-Nike-Superfly.jpeg', '2021-08-20', 1);
insert into products values (21,'botines nike mercurial naranja','/images/products/Botines-Nike-Mercurial.jpeg', '2021-08-20', 1);



insert into comentarios values (1,'Muy buen producto, especilmente la calidad , a mis hijos les encanto', '2021-03-08 20:50:00', 6 , 10);
insert into comentarios values (2,'Tremenda camiseta para los fanaticos de la premier, la calidad del material es impresinante, ademas muy lindos colores', '2021-08-07 20:50:00', 5 , 13);
insert into comentarios values (3,'Los botines no me gustaron mucho , un poco incomodos y muy pesados', '2021-07-05 20:50:00', 2 , 6);
insert into comentarios values (4,'Que fea pelota , por dios , los colores son horribles', '2021-02-04 20:50:00', 1 , 1);
