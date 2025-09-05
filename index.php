<!DOCTYPE html>
<html>
<head>
    <title>Rejestracja</title>
</head>
<body>
    <h2>Formularz rejestracji</h2>
    <form method="post" action="register.php">
        Nazwa użytkownika: <input type="text" name="username" required><br><br>
        Hasło: <input type="password" name="password" required><br><br>
        <input type="submit" name="register" value="Zarejestruj się">
    </form>

    <?php
    if (isset($_POST['register'])) {
        $conn = new mysqli("localhost", "root", "", "users_db");

        if ($conn->connect_error) {
            die("Błąd połączenia: " . $conn->connect_error);
        }

        $username = $conn->real_escape_string($_POST['username']);
        $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

        $sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";

        if ($conn->query($sql) === TRUE) {
            echo "Rejestracja zakończona sukcesem!";
        } else {
            echo "Błąd: " . $conn->error;
        }

        $conn->close();
    }
    ?>
</body>
</html>
