use proyecto_integrador;

create table users (
id int primary key auto_increment,
nombre varchar (100) not null,
apellido varchar(200) not null,
nombre_usuario varchar(200) not null unique, 
email varchar(200) not null unique,
password varchar(250) not null,
fecha_nacimiento date not null,
url_imagen_usuario varchar(300) not null,
telefono varchar(13)
);

create table products(
id int primary key auto_increment,
producto varchar(300) not null,
url_imagen_producto varchar(300) not null,
fecha_publicacion date not null,
user_id int not null,
foreign key (user_id) references users(id)
);


create table coments (
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


ALTER TABLE products ADD categoria VARCHAR(100);
ALTER TABLE products ADD nombre VARCHAR(100) NOT NULL;
ALTER TABLE products ADD marca VARCHAR(100);
ALTER TABLE products ADD descripcion VARCHAR(100);
ALTER TABLE products ADD comentarios INT;

INSERT INTO `products` (`id`,`producto`,`url_imagen_producto`,`fecha_publicacion`,`user_id`,`categoria`,`nombre`,`marca`,`descripcion`,`comentarios`) VALUES (1,'camiseta local españa rojo','/images/products/Camiseta-Espana-Local.jpeg','2021-09-21',4,'Camiseta','Local España','Adidas','LA CAMISETA DE LOCAL DE ESPAÑA, HECHA PARA LOS HINCHAS',4);
INSERT INTO `products` (`id`,`producto`,`url_imagen_producto`,`fecha_publicacion`,`user_id`,`categoria`,`nombre`,`marca`,`descripcion`,`comentarios`) VALUES (2,'botines predator terreno firme adidas negro','/images/products/Botines-Predator-Negros.jpg','2020-08-24',5,'Botines','Predator 20.3 Terreno Firme','Adidas','BOTINES PARA DOMINAR LAS CANCHAS DE TERRENO FIRME',6);
INSERT INTO `products` (`id`,`producto`,`url_imagen_producto`,`fecha_publicacion`,`user_id`,`categoria`,`nombre`,`marca`,`descripcion`,`comentarios`) VALUES (3,'guantes predator adidas rojo y negro ','/images/products/Guantes-Predator.jpeg','2019-03-26',5,'Guantes','Predator 20 Match Fingersave','Adidas','GUANTES PARA QUE MANTENGAS EL CONTROL DE LA PELOTA',2);
INSERT INTO `products` (`id`,`producto`,`url_imagen_producto`,`fecha_publicacion`,`user_id`,`categoria`,`nombre`,`marca`,`descripcion`,`comentarios`) VALUES (4,'camiseta japon azul adidas','/images/products/Camiseta-Japon-Local.jpeg','2020-03-23',3,'Camiseta','Primera Equipacion Japon','Adidas','PARA INCONDICIONALES DEL FUTBOL JAPONES',1);
INSERT INTO `products` (`id`,`producto`,`url_imagen_producto`,`fecha_publicacion`,`user_id`,`categoria`,`nombre`,`marca`,`descripcion`,`comentarios`) VALUES (5,'camiseta local seleccion argentina celeste y blanca adidas','/images/products/Camiseta-Argentina-Local.jpeg','2021-06-16',8,'Camiseta','Local Seleccion Argentina','Adidas','INSPIRADA EN LA UNIÓN Y LA PASIÓN POR EL FUTBOL',4);
INSERT INTO `products` (`id`,`producto`,`url_imagen_producto`,`fecha_publicacion`,`user_id`,`categoria`,`nombre`,`marca`,`descripcion`,`comentarios`) VALUES (6,'pelota uniforia blanca uefa europa league 2020 adidas','/images/products/Pelota-Uniforia.jpeg','2021-05-17',1,'Pelota','Futbol Unifornia Pro','Adidas','PELOTA OFICIAL DE LA UEFA EURO2020',1);
INSERT INTO `products` (`id`,`producto`,`url_imagen_producto`,`fecha_publicacion`,`user_id`,`categoria`,`nombre`,`marca`,`descripcion`,`comentarios`) VALUES (7,'camiseta local river plate rojo y blanco adidas','/images/products/Camiseta-River-Local.jpeg','2021-12-10',2,'Camiseta','Local River Plate','Adidas','UNA CAMISETA PARA LOS HINCHAS INCONDICIONALES',7);
INSERT INTO `products` (`id`,`producto`,`url_imagen_producto`,`fecha_publicacion`,`user_id`,`categoria`,`nombre`,`marca`,`descripcion`,`comentarios`) VALUES (8,'camiseta local boca juniors azul y oro adidas','/images/products/Camiseta-Boca-Local.jpeg','2018-11-12',6,'Camiseta','Local Boca Juniors','Adidas','LA AUTENTICA CAMISETA QUE USAN LOS JUGADORES',8);
INSERT INTO `products` (`id`,`producto`,`url_imagen_producto`,`fecha_publicacion`,`user_id`,`categoria`,`nombre`,`marca`,`descripcion`,`comentarios`) VALUES (9,'camiseta local tottenham blanca nike','/images/products/Camiseta-Local-Tottenham.jpeg','2021-10-30',5,'Camiseta','Local Tottenham','Nike','Representa a tu equipo con la camiseta del Tottenham Hotspur',2);
INSERT INTO `products` (`id`,`producto`,`url_imagen_producto`,`fecha_publicacion`,`user_id`,`categoria`,`nombre`,`marca`,`descripcion`,`comentarios`) VALUES (10,'camiseta local inter de milan azul negro nike','/images/products/Camiseta-Inter-Local.jpeg','2016-03-27',8,'Camiseta','Local Inter de Milan','Nike','Combina el orgullo del club com el rendimiento deportivo',3);
INSERT INTO `products` (`id`,`producto`,`url_imagen_producto`,`fecha_publicacion`,`user_id`,`categoria`,`nombre`,`marca`,`descripcion`,`comentarios`) VALUES (11,'camiseta local liverpool roja nike','/images/products/Camiseta-Local-Liverpool.jpeg','2019-05-23',7,'Camiseta','Local Liverpool','Nike','Representa a tu equipo con la camiseta local stadium del Liverpool FC',2);
INSERT INTO `products` (`id`,`producto`,`url_imagen_producto`,`fecha_publicacion`,`user_id`,`categoria`,`nombre`,`marca`,`descripcion`,`comentarios`) VALUES (12,'camiseta local independiente rojo puma','/images/products/Camiseta-Local-Independiente.jpeg','2020-08-04',5,'Camiseta','Local Independiente','Puma','Inspirada en la ciudad bonaerense de Avellaneda',4);
INSERT INTO `products` (`id`,`producto`,`url_imagen_producto`,`fecha_publicacion`,`user_id`,`categoria`,`nombre`,`marca`,`descripcion`,`comentarios`) VALUES (13,'camiseta local chelsea azul nike','/images/products/Camiseta-Local-Chelsea.jpeg','2020-09-10',7,'Camiseta','Local Chelsea','Nike','Representa a tu equipo con la camiseta local del Chelsea FC',1);
INSERT INTO `products` (`id`,`producto`,`url_imagen_producto`,`fecha_publicacion`,`user_id`,`categoria`,`nombre`,`marca`,`descripcion`,`comentarios`) VALUES (14,'camiseta local barcelona azul y roja nike','/images/products/Camiseta-Local-Barcelona.jpeg','2021-01-24',2,'Camiseta','Local Barcelona','Nike','Representa a tu equipo con la camiseta local del FC Barcelona',3);
INSERT INTO `products` (`id`,`producto`,`url_imagen_producto`,`fecha_publicacion`,`user_id`,`categoria`,`nombre`,`marca`,`descripcion`,`comentarios`) VALUES (15,'camiseta local manchester city celeste puma','/images/products/Camiseta-Local-Manchester.jpeg','2021-02-19',5,'Camiseta','Local Manchester City','Puma','El conjunto que usan los citizens',2);
INSERT INTO `products` (`id`,`producto`,`url_imagen_producto`,`fecha_publicacion`,`user_id`,`categoria`,`nombre`,`marca`,`descripcion`,`comentarios`) VALUES (16,'botines copa adidas azules','/images/products/Botines-Copa.jpg','2016-03-15',1,'Botines','Copa 20.1 Terreno Firme','Adidas','BOTINES DE CUERO PARA LOGRAR PASES ULTRA PRECISOS',1);
INSERT INTO `products` (`id`,`producto`,`url_imagen_producto`,`fecha_publicacion`,`user_id`,`categoria`,`nombre`,`marca`,`descripcion`,`comentarios`) VALUES (17,'botines predator mutator adidas negro oro blanco','/images/products/Botines-Predator-Mutator.jpg','2020-04-03',2,'Botines','Predator Mutator 20.1 Terreno FIrme','Adidas','BOTINES PARA DOMINAR LAS CANCHAS DE TERRENO FIRME',2);
INSERT INTO `products` (`id`,`producto`,`url_imagen_producto`,`fecha_publicacion`,`user_id`,`categoria`,`nombre`,`marca`,`descripcion`,`comentarios`) VALUES (18,'pelota final estambul uefa champions league','/images/products/Pelota-ucl.jpeg','2021-06-11',7,'Pelota','Final UCL Estambul','Adidas','UNA PELOTA QUE CELEBRA UN ENCUENTRO DE CULTURAS',3);
INSERT INTO `products` (`id`,`producto`,`url_imagen_producto`,`fecha_publicacion`,`user_id`,`categoria`,`nombre`,`marca`,`descripcion`,`comentarios`) VALUES (19,'botines nike phantom naranja negro ','/images/products/Botines-Nike-Phantom.jpg','2021-08-20',1,'Botines','Nike Phantom Vision Academy  Df Tf','Nike','Para ser el mejor en césped sintético',4);
INSERT INTO `products` (`id`,`producto`,`url_imagen_producto`,`fecha_publicacion`,`user_id`,`categoria`,`nombre`,`marca`,`descripcion`,`comentarios`) VALUES (20,'botines nike superfly negro ','/images/products/Botines-Nike-Superfly.jpeg','2021-08-20',1,'Botines','Nike Mercurial Superfly 7 Pro FG','Nike','Son pura pasión y potencia',4);
INSERT INTO `products` (`id`,`producto`,`url_imagen_producto`,`fecha_publicacion`,`user_id`,`categoria`,`nombre`,`marca`,`descripcion`,`comentarios`) VALUES (21,'botines nike mercurial naranja','/images/products/Botines-Nike-Mercurial.jpeg','2021-08-20',1,'Botines','Nike Mercurial Vapor 13','Nike','Basado en el análisis de los movimientos de los jugadores',2);




insert into coments values (1,'Muy buen producto, especilmente la calidad , a mis hijos les encanto', '2021-03-08 20:50:00', 6 , 10);
insert into coments values (2,'Tremenda camiseta para los fanaticos de la premier, la calidad del material es impresinante, ademas muy lindos colores', '2021-08-07 20:50:00', 5 , 13);
insert into coments values (3,'Los botines no me gustaron mucho , un poco incomodos y muy pesados', '2021-07-05 20:50:00', 2 , 6);
insert into coments values (4,'Que fea pelota , por dios , los colores son horribles', '2021-02-04 20:50:00', 1 , 1);
INSERT INTO `proyecto_integrador`.`coments` (`id`, `comentario`, `fecha_posteo`, `user_id`, `product_id`) VALUES ('5', 'No me gusto mucho, no era lo que me esperaba', '2021-03-01 20:50:00', '4', '3');
INSERT INTO `proyecto_integrador`.`coments` (`id`, `comentario`, `fecha_posteo`, `user_id`, `product_id`) VALUES ('6', 'Increible atención y mejor producto. Lo recomiendo!', '2021-12-09 20:50:00', '3', '5');
INSERT INTO `proyecto_integrador`.`coments` (`id`, `comentario`, `fecha_posteo`, `user_id`, `product_id`) VALUES ('7', 'Me llego el producto defectuoso, igualmente me lo cambiaron al instante', '2020-08-12 20:50:00', '7', '7');
INSERT INTO `proyecto_integrador`.`coments` (`id`, `comentario`, `fecha_posteo`, `user_id`, `product_id`) VALUES ('8', 'El talle me quedo perfecto!', '2020-10-02 20:50:00', '8', '2');
INSERT INTO `proyecto_integrador`.`coments` (`id`, `comentario`, `fecha_posteo`, `user_id`, `product_id`) VALUES ('9', 'Esperaba más calidad por el precio. Bastante decepcionante. Saludos', '2021-09-04 20:50:00', '6', '4');
INSERT INTO `proyecto_integrador`.`coments` (`id`, `comentario`, `fecha_posteo`, `user_id`, `product_id`) VALUES ('10', 'Increible casaca, me quedo pintada!', '2021-05-01 20:50:00', '5', '8');
INSERT INTO `proyecto_integrador`.`coments` (`id`, `comentario`, `fecha_posteo`, `user_id`, `product_id`) VALUES ('11', 'Buenisimo, me quedo justo como esperaba', '2020-11-08 20:50:00', '2', '12');
INSERT INTO `proyecto_integrador`.`coments` (`id`, `comentario`, `fecha_posteo`, `user_id`, `product_id`) VALUES ('12', 'Muy buena relacion calidad precio', '2021-01-02 20:50:00', '1', '9');
INSERT INTO `proyecto_integrador`.`coments` (`id`, `comentario`, `fecha_posteo`, `user_id`, `product_id`) VALUES ('13', 'Quede muy bien con el regalo, buena calidad! Igualmente, el talle quedó un poco grande', '2020-09-12 20:50:00', '4', '11');
INSERT INTO `proyecto_integrador`.`coments` (`id`, `comentario`, `fecha_posteo`, `user_id`, `product_id`) VALUES ('14', 'Dos semanas y todavía no recibí el producto, pésima atención', '2021-06-06 20:50:00', '3', '8');
INSERT INTO `proyecto_integrador`.`coments` (`id`, `comentario`, `fecha_posteo`, `user_id`, `product_id`) VALUES ('15', 'Muy conforme con el producto, era lo que esperaba', '2020-11-02 20:50:00', '8', '7');
INSERT INTO `proyecto_integrador`.`coments` (`id`, `comentario`, `fecha_posteo`, `user_id`, `product_id`) VALUES ('16', 'Excelente tela, muy liviana', '2021-03-03 20:50:00', '7', '8');

