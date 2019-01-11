# Data Lovers

# Definición del Producto

VialDataU.S. es un producto web y/o interfaz web que proporciona una base de datos de la Cantidad de Personas Heridas por accidentes de transporte en Los Estados Unidos, desde los años 1960 a 2016,de una manera dinámica, gráfica y digerible para una mejor comprensión.

- ¿Quienes son los principales usuarios del producto y cuales son sus objetivos en funcion al producto?

VialDataU.S. va dirigido a usuarios interesados en mejorar la seguridad vial, tales como: departamentos de transporte, establecimientos de salud, compañias de seguro, personal de seguridad de transito incluso para ser utilizado en medios de comunicacion para que la poblacion en general conozca mejor la legislacion y los cambios de comportamiento que mejorarian su seguridad. 

La presentacion de estos datos son super importantes, para que asi estos profesionales puedan determinar los riesgos e implementar estrategias para de esta manera reducirlos en un buen nivel.

- ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?

Quieren ver la cantidad de personas heridas ordenados por año y tipo de transporte. Tambien quieren ver calculos estdisiticos como promedio de accidentes en un rango de años, mayor o menor incidencia por tipo de transporte, entre otros.



## Historias de Usuarios

Se pudieron realizar dos entrevistas, en base a estas se definieron las historias de usuario.

1. Nuestro usuario quiere: Tener una vista previa del total de Cantidad Personas Heridas por medio de transporte de los años más recientes, para tomar medidas de seguridad mas eficientes.

    Criterios de Aceptación:

    El usuario debe poder visualizar la cantidad de personas heridas clasificada por tipo de transporte, además ver esta data en los años mas recientes, en este caso, debe estar la data filtrada por los años mas recientes (2012-2015)
    

2. Yo como usuario quiero: Ver CPH clasificado por medio de transporte en un rango de  años que yo pueda elegir previamente.


3. Yo como usuario quiero: Tener la opción de ordenar los datos desde el año mas reciente y viceversa.

4. Yo como usuario quiero: visualizar la data en graficos para un mejor entendimiento.

5. Yo como usuario quiero: ver promedio de la cantidad de personas heridas en un rango de años elegido previamente por tipo de transporte, para analizar como ha sido la incidencia con los avances tecnologicos en los distintos medios de transportes.


# Diseño de la Interfaz de Usuario

## Prototipo baja fidelidad 

El diseño se dio respondiendo a las historias de usuario que ya teniamos en principio. 

Definimos una pantalla principal donde se daria informacion breve sobre los datos proporcionado y donde se cumpliria la primera historia de usuario y la cuarta, que es mostrar la data de los años mas recientes en forma de graficas. Otra pantalla secundaria donde se mostrarian las secciones para filtrar, ordenar u obtener algun calculo estadistico.

![Prototipado][1]  ![Prototipado][2] 

[1]: assets/images/Prototipo1.jpg
[2]: assets/images/Prototipo2.jpg

![Prototipado][3]  ![Prototipado][4] 

[3]: assets/images/Prototipo3.jpg
[4]: assets/images/Prototipo4.jpg

Testeos de usabilidad: En este punto nuestros usuarios querian ver en la pantalla principal la informacion acerca de la data y tambien la vista previa, y querian a primera vista notar que la vista previa estaba alli, ya que en un principio solo colocabamos en 100vh solo el carrusel y acerca de, y el usuario no podia ver que venia luego y corria el riesgo de pasar a la siguiente pantalla sin encontrar la informacion que requeria en ese momento.

También nos sugirio agregar una cabecera con la seccion para filtrar y/u ordenar, en vez de que fuesen botones directos, que tuviesen un selector de opciones y botones para decidir que hacer y que ver en la pantalla de datos.

## Prototipo de Alta Fidelidad 

![Prototipado][5]  ![Prototipado][6] 

[5]: assets/images/ProtoAlta1.png
[6]: assets/images/ProtoAlta2.png

Link a Zeplin

[VialDataU.S. Zeplin](https://zpl.io/V4Qdew8)


Testeos de Usabilidad: El usuario requirio ver en la pantalla de "datos", la data proporcionada en una sola grafica donde pueda interactuar con ella de manera dinamica, en vez de ver cada grafica por año sino por rangos y en una sola grafica ver promedios, cantidades, etc. Dijo que para la primera pantalla estaba bien la vista previa pero a la hora de digerir los datos queria verlos en una sola grafica dinamica que vaya cambiando a medida que seleccione los parametros.

La paleta de colores que se utilizo para el diseño fue la proporcionada por el site recomendado.

Por:
- Dajhely Angles
- Esther Cheremo



