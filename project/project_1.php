<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <?php
        foreach ($projects as $project) {
            echo "<h1>" . $project["projectName"] . "</h1><br>";
            echo "<div>Durée : " . $project["duration"] . "</div>";
            echo "<div>";
            echo "<div>" . $project["objectif"] . "</div>";
            echo "<div>" . $project["detail"] . "</div>";
            echo "<div>" . $project["restriction"] . "</div>";
            echo "</div>";
        }
        ?>
    </body>
</html>