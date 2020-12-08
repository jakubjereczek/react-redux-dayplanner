const selectAuthError = (code) => {
    switch (code) {
        case "auth/email-already-exists":
            return "Podany adres e-mail jest już używany przez istniejącego użytkownika. Każdy użytkownik musi mieć unikalny adres e-mail.";
        case "auth/internal-error":
            return "Serwer uwierzytelniania napotkał nieoczekiwany błąd podczas próby przetworzenia żądania.";
        case "auth/invalid-display-name":
            return "Podana wartość właściwości użytkownika displayName jest nieprawidłowa. Musi to być niepusty ciąg.";
        case "auth/invalid-email":
            return "Podana wartość właściwości użytkownika email jest nieprawidłowa. Musi to być adres e-mail w postaci ciągu znaków.";
        case "auth/user-not-found":
            return "Nie istnieje żaden rekord użytkownika odpowiadający podanemu identyfikatorowi.";
        case "auth/wrong-password":
            return "Haslo jest nieprawidłowe";
        default:
            return "Wystąpił nieznany bląd: " + code;
    }

}

export default {
    selectAuthError
};