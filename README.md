
# Travel

Witam w moim projekcie **Travel**! 🎒✨ Projekt powstał na podstawie darmowego layoutu z Figma: [Travel UI Kit](https://www.figma.com/community/file/993910904620677970). Celem projektu było przećwiczenie pracy z **TailwindCSS**, a także integracja z nowoczesnymi narzędziami frontendowymi i backendowymi.




## Funkcjonalności

- **Responsywność**: Aplikacja dostosowuje się do różnych rozmiarów ekranu (mobile-first design).
- **Przełącznik motywu**: Możliwość zmiany między motywem jasnym a ciemnym.
- **Zarządzanie użytkownikami**: Dodawanie i przechowywanie użytkowników za pomocą **Supabase**.
- **Walidacja formularzy**: Formularze tworzone za pomocą **React Hook Form** i walidowane za pomocą **Zod**.
- **Zarządzanie stanem**: Wykorzystanie **Context API** do zarządzania globalnym stanem aplikacji.


## Zrzuty ekranu

### Widok główny
![Widok główny - motyw jasny](./screenshots/Main_light.png)
![Widok główny - motyw ciemny](./screenshots/Main_dark.png)

### Widok główny - Mobilny
![Widok główny - mobilny](./screenshots/Mobile-view_both-Theme.png)


### Formularz rejestracji
![Formularz rejestracji - motyw jasny](./screenshots/SignUp_bothTheme.png)
![Formularz rejestracji - motyw ciemny](./screenshots/Login_bothTheme.png)



## Technologie

Projekt został zbudowany z wykorzystaniem następujących technologii:

- **Vite**: nowoczesne narzędzie do budowy aplikacji frontendowych.
- **TailwindCSS**: nowoczesny framework CSS.
- **TypeScript**: statyczne typowanie w JavaScript.
- **React**: biblioteka do budowy interfejsów użytkownika.
- **React Router**: narzędzie do zarządzania routingiem w aplikacji React.
- **React Hook Form**: narzędzie do obsługi formularzy w React.
- **Zod**: biblioteka do walidacji danych.
- **Supabase**: baza danych i uwierzytelnianie w chmurze.
- **Vitest** i **React Testing Library** – narzędzia do testów jednostkowych.


### Instalacja

Aby zainstalować projekt, wykonaj poniższe kroki:

1. **Sklonuj repozytorium:**
    ```sh
    git clone https://github.com/ozematt/Travel-tailwindCSS-app.git
    ```
2. **Przejdź do katalogu projektu:**
    ```sh
    cd Travel-tailwindCSS-app
    ```
3. **Zainstaluj zależności:**
   Upewnij się, że masz zainstalowany Node.js i npm. Następnie uruchom poniższą komendę, aby zainstalować wszystkie zależności projektu.
    ```sh
    npm install
    ```
4. **Konfiguracja Supabase:**
   - Utwórz konto i projekt na Supabase.
   - Skopiuj klucze API i URL projektu z dashboardu Supabase.
   - Utwórz plik .env w katalogu projektu i dodaj następujące zmienne środowiskowe (zawartość pliku):

   
    ```sh

     VITE_SUPABASE_URL=YOUR_SUPABASE_URL
     VITE_SUPABASE_KEY=YOUR_SUPABASE_ANON_KEY

    ```
5. **Uruchom aplikacje:**
   ```sh
   npm run dev
   ```
   Aplikacja będzie dostępna pod adresem: http://localhost:5173/


## Podsumowanie
Projekt został stworzony w celu nauki i ćwiczenia pracy z nowoczesnymi technologiami frontendowymi i backendowymi. Dziękuję za odwiedzenie repozytorium! 😊

