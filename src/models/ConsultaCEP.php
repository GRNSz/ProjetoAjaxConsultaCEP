<?php 

    header('Content-Type: application/json');

    if($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['cep'])) {
        $cep = $_GET['cep'];
        $url = "https://viacep.com.br/ws/{$cep}/json/";
        
        $response = file_get_contents($url);
        if($response !== false){
            echo $response;
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'CEP não encontrado']);
    }
    } else {
        http_response_code(400);
        echo json_encode(['error' => 'CEP não informado']);
    }    

?>    