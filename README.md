# Trivia Kodigo

### Definición del producto
La Trivia Kodigo, es un proyecto para demostrar lo aprendido en el Taller de Kodigo utilizando únicamente HTML, CSS y JavaScript, tratando de brindar la mejor UX (experiencia de usuario) posible. El proyecto consiste en crear una trivia en donde el usuario debe ingresar su nombre y elegir una categoría de preguntas antes de comenzar a jugar. La dinámica del juego es ir contestando una serie de preguntas seleccionando la respuesta correcta entre 3 opciones posibles, al final la trivia se muestran los resultados: puntos acumulados, respuestas correctas y respuestas incorrectas.

### ¿cómo el producto resuelve el problema del usuario?
La aplicación web está diseñada con una interfaz amigable pensando en el usuario para que le resulte fácil de entender e intuitiva, se le da feedback al momento de jugar para que sepa qué es lo que está pasando en todo momento, se colocó un temporizador en cada pregunta para agregar más emoción al jugar. Además, el producto se desarrolló con el objetivo de que sea escalable, para ello de dejó definido todo de forma dinámica sin importar si son 3 preguntas o más en cada categoría para jugar en la trivia.

### ¿cómo funciona la aplicación web?
Al inicio aparece un pantalla principal donde se explica que es una trivia y una caja de texto donde debemos ingresar el nombre.

[imagen 1]

Luego de ingresar nuestro nombre aparece una pantalla donde nos pregunta la categoría en la que deseamos participar

[imagen 2]

Finalmente llegaremos a la parte donde podemos jugar la trivia, ahí nos aparecerá una tarjeta con un indicador de tiempo (10 segundos), una pregunta y 3 botones con opciones para seleccionar, cuando demos click en alguno de los botones aparece un mensaje avisando si la opción seleccionada es correcta o incorrecta, luego se cargará la siguiente pregunta. Si el tiempo se acaba y no se responde una pregunta, automaticamente se tomará como incorrecta y se pasará a la siguiente pregunta.

[imagen 3]

Al terminar de contestar todas las preguntas nos aparecerá una patanlla mostrando los resultados de la trivia: puntos acumulados, respuesta correctas e incorrectas. Además, dos botones con la opción de "volver a jugar" que nos llevará a la pantalla donde seleccionamos la categoría de la trivia, y otro botón es para "salir del juego", que al presionarlo nos llevará a la pantalla de inicio de la app.

[imagen 4]

### Experiencia de diseño
El diseño es muchas veces la parte donde más tiempo se gasta cuando se está creando un producto nuevo. Al pensar en cómo crear un página que transmitira la emoción de estar en un juego tipo trivia, recordé los tantos programas que existen donde las personas van a participar para ganar algún premio, es por eso que decidí retomar varias ideas de esos programas, como la forma de presentar las preguntas e incluso un background con público para darle más "sabor" y dar la sensación de estar jugando en una trivia real. Acá una muestra del trototipo diseñado en Adobe XD.

### Experiencia de desarrollo
Una vez teniendo el diseño definido, sólo es de comenzar a planear como hacer realidad lo que se tiene pensado. Las clases del taller me ayudaron mucho para tener ideas de cómo podría aprovechar la manipulación del DOM para manejar toda la trivia en un solo archivo HTML, al inicio parecia un poco confusa la forma de manejar cómo mostrar unas parte y otras no, pero con la práctica fuí entendiendo mejor como sacarle provecho a eso. La parte más emocionante fue cuando estaba construyendo el contenedor de la trivia en sí y cómo podría aprovecharlo para mostrar todas las preguntas en el mismo contenedor solo cambiando sus valores. Luego de un par de intentos comencé a encontrar mis fallos de lógica y finalmente tenía toda la trivia mostrada siempre en el mismo contenedor, ya con eso tenía prácticamente todo el trabajo, ahora restaba mostrar los resultados de la trivia, para eso solamente tenía que ir manejando unos contadores que al final se muentran en pantalla sin mayor dificultad.

### Opinión como estudiante
Personalmente, disfruté mucho el proceso de desarrollo del proyecto porque puso a prueba mis habilidades, me enseño a resolver problemas nuevos y me dió una experiencia diferente en la parte del desarrollo frontend.