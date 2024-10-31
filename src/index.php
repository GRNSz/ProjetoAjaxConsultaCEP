<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Consulta CEP</title>
    <link rel= "stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="./views/index.css">
    <favicon rel="icon" href="./views/images/favicon.ico">
</head>
<body>
    <form action="ConsultaCEP.php" method="post">
    <label for="cep">Digite o CEP:</label>
    <input type="text" id="cep" name="cep" required>
    <button type="submit">Consultar</button>
</form>
</body>
</html>