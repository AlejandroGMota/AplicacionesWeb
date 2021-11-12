<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/styles.css">
    <title>Your purchase</title>
</head>

<body>
    <nav id="navbar">
        <img src="../img/logo.png" alt="logo de startbuzz coffe" class="logo-main">
        <ol class="navbar">
            <li><a class="navbar-item" href="../index.html#navbar">Home</a></li>
            <li><a class="navbar-item" href="./beverages.html">Beverages</a>
            <li><a class="navbar-item" href="./blog.html">Blog</a></li>
            </li>
        </ol>
    </nav>
    <div class="main-container">
        <div class="container">
            <div class="content">

                <?php
                    error_reporting(0);

                    $beans= $_POST['beans'];
                    $beantype =$_POST['beantype'];
                    $bags =$_POST['bags'];
                    $date =$_POST['date'];

                    $name = $_POST['name'];
                    $address =$_POST['address'];
                    $city = $_POST['city'];
                    $state = $_POST['state'];
                    $phone = $_POST['phone'];

                    function extras(){
                        
                        if (($_POST['extras'])!=NULL) {
                            $extras =$_POST['extras'];
                            for ($i=0; $i < sizeof($extras) ; $i++) { 
                                echo  "<p>You have a <b>$extras[$i] </b> as extra</p>";
                            };
                            
                        }
                        else{
                            echo "<p>You don't have any extra</p>";
                        };
                    };
                    echo '<h2>Enjoy your coffee</h2>';
                    echo '<img src="../img/coffee-bag.jpg" alt="coffee bag" style="width: 60%; max-width:400px; margin: 0 12px 0 0">';
                    echo "<p>Thank you for buying with us, if you need help with your shipment, please contact us at our contact email. We hope you enjoy your starbuzz coffee</p>";

                    echo "<h2>Purchase information</h2>";
                    echo  "<p>Your purchase is <b>$bags bags</b> of <b>$beans</b> <b>$beantype</b> coffee.</p>";
                    echo  "<p>Must arrive on <b>$date</b></p>";

                    echo extras();

                    echo "<h2>Shipping information</h2>";
                    echo  "<p>Your package will arrive in <b>$address, $city, $state.</b></p>";
                    echo  "<p>It will be delivered in the name of <b>$name</b>, with the phone <b>$phone.</b></p>";
            
                ?>

            </div>
        </div>
    </div>
    <a style="position: fixed ; z-index: 900;top: 85vh;left: 90vw;" href="../../index.html" title="Volver al índice">
        <img style="width: 10vw;max-width: 64px; min-width: 32px;" src="../../img-indice/volver.png"
            alt="Volver al indice"></a>

    <footer>
        <a class="mail" href="mailto:a0203759@utmir.edu.mx">Contact with us</a>
    </footer>
</body>
</html>