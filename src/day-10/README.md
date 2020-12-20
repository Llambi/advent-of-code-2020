# Día 10: Matriz de adaptadores

## Part One

Conectado al puerto de datos de la aeronave, descubre los pronósticos meteorológicos de una tormenta tropical masiva. Sin embargo, antes de que pueda averiguar si afectará sus planes de vacaciones, ¡su dispositivo se apaga repentinamente!

Su batería está muerta.

Deberá enchufarlo. Solo hay un problema: la toma de carga cerca de su asiento produce una cantidad incorrecta de sacudidas . Siempre preparado, haces una lista de todos los adaptadores de sacudidas en tu bolso.

Cada uno de sus adaptadores de sacudidas está clasificado para una sacudida de salida específica (su entrada de rompecabezas). Cualquier adaptador dado puede recibir una entrada 1, 2o 3sacudidas inferiores a su clasificación y aún producir su sacudida de salida nominal.

Además, su dispositivo tiene un adaptador de 3sacudidas incorporado clasificado para sacudidas más altas que el adaptador de mayor clasificación en su bolso. (Si su lista de adaptadores fuera 3, 9y 6, el adaptador integrado de su dispositivo estaría clasificado para 12sacudidas).

Considere que la toma de carga cerca de su asiento tiene una clasificación de sacudida efectiva de 0.

Ya que tiene algo de tiempo para matar, también puede probar todos sus adaptadores. ¡No querría llegar a su resort y darse cuenta de que ni siquiera puede cargar su dispositivo!

Si usa todos los adaptadores de su bolso a la vez, ¿cuál es la distribución de las diferencias de sacudidas entre la toma de carga, los adaptadores y su dispositivo?

Por ejemplo, suponga que en su bolso tiene adaptadores con las siguientes clasificaciones de sacudidas:

```
16
10
15
5
1
11
7
19
6
12
4
```

Con estos adaptadores, el adaptador de sacudidas integrado de su dispositivo estaría clasificado para sacudidas, 3 más alto que el adaptador de mayor clasificación.19 + 3 = 22

Debido a que los adaptadores solo pueden conectarse a una fuente de 1-3 sacudidas por debajo de su clasificación, para usar todos los adaptadores, deberá elegirlos de esta manera:

- La salida de carga tiene una calificación efectiva de 0sacudidas, por lo que los únicos adaptadores que podrían conectarse directamente a ella tendrían que tener una calificación de joltage 1, 2o 3sacudidas. De estos, solo uno que tiene es un adaptador clasificado como 1sacudida (diferencia de 1).
- Desde su 1adaptador con clasificación -jolt, la única opción es su 4adaptador con clasificación -jolt (diferencia de 3).
- Desde el 4adaptador -jolt nominal, los adaptadores de clasificación 5, 6o 7son opciones válidas. Sin embargo, para no omitir ningún adaptador, debe elegir las 5sacudidas nominales del adaptador (diferencia de 1).
- De manera similar, las siguientes opciones tendrían que ser el adaptador clasificado 6y luego el adaptador clasificado 7(con diferencia de 1y 1).
- El único adaptador que funciona con el 7adaptador con clasificación -jolt es el que tiene una clasificación de 10sacudidas (diferencia de 3).
- De 10, las opciones son 11o 12; elija 11(diferencia de 1) y luego 12(diferencia de 1).
- Después 12, solo el adaptador válido tiene una clasificación de 15(diferencia de 3), luego 16(diferencia de 1), luego 19(diferencia de 3).
- Finalmente, el adaptador integrado de su dispositivo es siempre 3 más alto que el adaptador más alto, por lo que su calificación es de 22sacudidas (siempre una diferencia de 3).
  En este ejemplo, cuando se utilizan todos los adaptadores, hay 7diferencias de 1 sacudida y 5diferencias de 3 sacudidas.

Aquí hay un ejemplo más grande:

```
28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3
```

En este ejemplo más grande, en una cadena que usa todos los adaptadores, hay 22diferencias de 1 sacudida y 10diferencias de 3 sacudidas.

Encuentre una cadena que use todos sus adaptadores para conectar la salida de carga al adaptador incorporado de su dispositivo y cuente las diferencias de sacudidas entre la salida de carga, los adaptadores y su dispositivo. ¿Cuál es el número de diferencias de 1 sacudida multiplicado por el número de diferencias de 3 sacudidas?
