/**
 * Created by Justyna on 2018-03-11.
 */

// Przykład

var x = 5;
var y = 6;

// alert(x + y);

var a=5,
    b=7,
    c=3;

var nazwaZmiennej = 5; // deklaracja zmiennej;

alert(nazwaZmiennej);

var vat = 20;
var cenaNettoJava = 39;
var cenaNettoAjax = 34;

var cenaBruttoJava = cenaNettoJava * (1 + vat * 1/100);
var cenaBruttoAjax = cenaNettoAjax * (1 + vat * 1/100);

alert(cenaBruttoJava);

var imie = "Justyna";
var Imie = "Sylwia";

alert(imie);

/* TYPY ZMIENNYCH:
* 1) liczby - number
* 2) ciąg znaków - string
* 3) wartości logiczne - true/false
* 4) tablice, obiekty
* 5) null - pustka
* 6) undefined - niezdefiniowana

NIE WOLNO:
* 1) zaczynać od liczby w zmiennej
* 2) nie wolno stosować zarezerwowanych słów
* 3) tworzyć spacji
* 4) wielkość liter ma znaczenie

OPERATORY ARYTMETYCZNE:
* + - dodawanie liczb oraz łącznie stringów
* - - odejmowanie
* * - mnożenie
* / - dzielenie
* % - reszta z dzielenia
* = - przypisanie wartości
* += - 
* -= - 
* /= - 
* *= -
* %= -
* ++ - inkremetacja - powiększo 1;
* -- - dekrementcja - zmiejsz o 1;
* y++ - post inkrementacja
* y-- post dekrementacja
* ++y - pre inkrementacja
* --y - pre dekrementacja
*/

var x = 5;
x +=2; // x=x+2;

var y = 3;
y++; // y=+ 1;

alert(x);

/* OPERATORY RELACYJNE:

=== - porównuje czy wartości dwóch zmiennych są identyczne;
== - porównania
= - operator przypisania
!= - porównuje czy dwie wartości są dla siebie różne;
*/

var a = 3,
    b = 3;

alert(a >= b);

/* OPERATORY LOGICZNE:

! - negacja

1 to zmieni w 0
0 to zmieni w 1

&& - konunkcja "I" - spełnione w tym samym momencie; gdy oba wyrażenia są prawdziwe;

1 1 - 1
1 0 - 0
0 1 - 0
0 0 - 0

|| - alternatywa "lub" - to lub też to

1 1 - 1
1 0 - 1
0 1 - 1
0 0 - 0

alternatywa jest Fałszywa wtedy i tylko wtedy gdy oba wyrażenia są fałśzywe

0 - jest fałszem

*/

var a = 1,
    b = 3;

if ( a<b && b == 3 )
    alert("test");

var a = 1,
    b = 2;

if ( a<b || b == 3 )
    alert("test");

/* INSTRUKCJE WARUNKOWE:

Jeżeli (warunek)
   - to zrób coś
W innym wypadku zrób coś innego
   - to zrób coś innego
A w całkowicie innym wypadku jak wszytskie inne warunki nie zostaną spełnione
   - to zrób totalnie coś innego

*/

var a = 12,
    b = 7;

if (a<b)
    alert("a jest mniejsze od b");
else if (a>b)
    alert("a jest większe od b");
else
{
    alert("a nie jest ani większe ani mniejsze od b");
    alert("to jest jakiś tekst");
}

// w klamrze aby poączyć dwa teksty; grupować;

/* FUNKCJE

argumenty - zmienne do funkcji;

*/

function dodaj (x, y) {
    return x + y;
}

function dzielenie (x, y) {
    if(y === 0) {
        alert("Nie dziel przez zero");
        return;
    }
    
// else
    return x + y;
}

var wynikDzielenia = dzielenie(10,0);
alert(wynikDzielenia);

var sumaZmiennych = dodaj(2, 7);

alert(sumaZmiennych);

// ZASIĘG GLOBALNY I LOKALNY

// FUNKCJE ANONIMOWE

var x = function test() {
    alert(xxxx);
};

//x();



function test2 (f, y)
{
    f(y + 10);
}

test2 (

  function(x) {
      alert ("cosik " + x);
  },
    20
);

var hi = function(type)
{
    if(type === "szef")
        return function(name) {
            alert("Cześć szefie, " + name + "!")
        };
    else
        return function(name) {
            alert("Cześć " + name + "!");
        };
    
};

var zwroconaFunkcja = hi("jsdjadkj");

zwroconaFunkcja("Justyna");

/* OBIEKTY - pojemnik do przechowywania zmiennych i funkcji tematycznie ze ssobą związanych do dalszego, łatwiejszego, ponownego użycia; 
*/

var div = document.getElementById("test");

div.innerHTML = "nowa treść";

console.log(div);

var osoba = {
    imie: "Justyna",
    nazwisko: "Kręzel",
    pobierzInformacje: function() {
        return this.imie + " " + this.nazwisko;
    },
    toString: function() {
        return this.imie + " " + this.nazwisko;
}
};

console.log(osoba.imie);

div.innerHTML = osoba.pobierzInformacje();

div.innerHTML = osoba;
osoba.imie = "Ilona";

