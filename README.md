Projekt aplikacji webowej umożliwiającej przeglądanie produktów, zarządzanie koszykiem oraz składanie zamówień — zbudowany w oparciu o React i TypeScript.

Cel projektu:
Zgodnie z założeniami zadania, aplikacja umożliwia:

- Przeglądanie statycznej listy produktów (nazwa, cena, oraz dodatkowo zdjęcie placeholder)
- Dodawanie produktów do koszyka
- Zmianę ilości produktów oraz usuwanie ich z koszyka
- Podgląd koszyka w osobnym widoku /cart oraz z własnej inicjatywy szybki podgląd
- Stronę podsumowania /summary z pełnym zamówieniem
- Stronę potwierdzenia /confirmation z pełnym przeładowaniem

Podejście i założenia:

- Koszyk stworzony przy użyciu Context API, globalnie dostępny
- local storage do tymczasowego przechowania zamówienia podczas przeładowania strony
- Modularność, aby uniknąć powtórzeń w kodzie
- Ładowanie danych z JSON

Jak uruchomić:

- git clone https://github.com/ExErorr/React-Online-Shop.git
- cd react-online-store
- npm install
- npm run dev
- http://localhost:5173
