<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</head>
<body>

<div class="container">
<h1>Cookies...💖</h1>

    <!-- Get cookie section -->
    <div class="form group">
        <label for="setCookieNameInput">Set Cookie Name:</label>
        <input type="text" class="form-control" id="setCookieNameInput">
    </div>
    <div class="form group">
        <label for="setCookieValueInput" >Set Cookie Value:</label>
        <input type="text" class="form-control" id="setCookieValueInput">
    </div>
    
    <button class="btn btn-primary mt-3" onclick="setCookie()">Set Cookies</button>
    <!-- Get cookie section  -->
    <div class="form group">
        <label for="getCookieNameInput" >get Cookie Name:</label>
        <input type="text" class="form-control" id="getCookieNameInput">
    </div>

    <button class="btn btn-warning mt-3" onclick="GetCookie()">Get Cookies</button>

    <!-- Update Cookie section-->

    <div class="form group mt-3">
        <label for="UpdateCookieNameInput" >Update Cookie Name:</label>
        <input type="text" class="form-control" id="UpdateCookieNameInput">
    </div>

    <div class="form group">
        <label for="UpdateCookieValueInput" >Enter new Value:</label>
        <input type="text" class="form-control" id="UpdateCookieValueInput">
    </div>

    <button class="btn btn-info mt-3" onclick="updateCookie()">Update Cookies</button>

    <!-- Delete Cookie section-->

    <div class="form group mt-3">
        <label for="deleteCookieNameInput" >Delete Cookie Name:</label>
        <input type="text" class="form-control" id="deleteCookieNameInput">
    </div>
    <button class="btn btn-danger mt-3" onclick="deleteCookie()">Delete Cookies</button>
</div>
    <script src="./script.js"></script>
</body>
</html>