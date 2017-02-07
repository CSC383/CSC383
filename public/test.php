<?php
	include 'connect.php';

?>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>[In]cubator - Idea Phase</title>

    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="css/landing-page.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css">
   
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

    <!-- Navigation -->
    <nav class="navbar navbar-default navbar-fixed-top topnav" role="navigation">
        <div class="container topnav">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand topnav" href="index.html">[In]cubator</a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                	<li>
                		<a href="index.html">Home</a>
                    <li>
                        <a href="about.html">About</a>
                    </li>
                    <li>
                            <a href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
    
    <!-- Header -->
    <a name="about"></a>
    <div class="intro-header-idea-phase">
        <div class="container">

            <div class="row">
                <div class="col-lg-12">
                    <div class="intro-message-2">
                        <h1>Idea Phase</h1>
                        <hr class="intro-divider">
                        <ul class="list-inline intro-social-buttons">
                            <li>
                                <a href="idea_phase.html" class="btn btn-default btn-lg"><span class="network-name">Idea Phase</span></a>
                            </li>
                            <li>
                            <a href="startup_phase.html" class="btn btn-default btn-lg"> <span class="network-name">Startup Phase</span></a>
                            </li>
                            <li>
                                <a href="veteran_phase.html" class="btn btn-default btn-lg"><span class="network-name">Veteran Phase</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        <!-- /.container -->

    </div>
    <!-- /.intro-header -->

    <!-- Main Content -->
    <div class="container">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <h2 class="section-heading">Phase 1:<br>Idea Phase</h2>
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p>
            </div>
        </div>
    </div>
    
    <div class="container">
    	<div class="row">
    	    <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
    	    	 <form>
    				<div class="form-group">
      					<h2 class="section-heading">First Type:</h2>
      					<select class="form-control">
        					<option>1</option>
        					<option>2</option>
        					<option>3</option>
        					<option>4</option>
      					</select>
      				</div>
  				</form>
			</div>
		</div>
    </div>
    
        <div class="container">
    	<div class="row">
    	    <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
    	    	 <form>
    				<div class="form-group">
      					<h2 class="section-heading">Second Type:</h2>
      					<select class="form-control">
        					<option>1</option>
        					<option>2</option>
        					<option>3</option>
        					<option>4</option>
      					</select>
      				</div>
  				</form>
			</div>
		</div>
    </div>

    <div class="container">
    	<div class="row">
    	    <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
    	    	 <form>
    				<div class="form-group">
      					<h2 class="section-heading">Third Type:</h2>
      					<select class="form-control">
        					<option>1</option>
        					<option>2</option>
        					<option>3</option>
        					<option>4</option>
      					</select>
      				</div>
  				</form>
			</div>
		</div>
    </div>
    
    <div class="container">
    	<div class="row">
    	    <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
				<h2 class="section-heading">Fourth Type:</h2>
    	    	 <?php
    	    	 	$sql = "SELECT name FROM resources";
    	    	 	$result = mysqli_query($conn, $sql);
					echo "<select classe='form-control'>";
    	    	 	while($row = mysqli_fetch_array($result)){
						echo "<option>" . $row['name'] . "</option>";
					};    	 
    	    	 ?>
			</div>
		</div>
    </div>
	<!--/.Main Content-->
    <hr>

	<a  name="contact"></a>
    <div class="banner">

        <div class="container">

            <div class="row">
                <div class="col-lg-3">
                    <h2></h2>
                </div>
                <div class="col-lg-6">
                    <ul class="list-inline banner-social-buttons">
                        <li>
                            <a href="idea_phase.html" class="btn btn-default btn-lg"> <span class="network-name">Idea phase</span></a>
                        </li>
                        <li>
                            <a href="startup_phase.html" class="btn btn-default btn-lg"> <span class="network-name">Startup Phase</span></a>
                        </li>
                        <li>
                                <a href="veteran_phase.html" class="btn btn-default btn-lg"><span class="network-name">Veteran Phase</span></a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
        <!-- /.container -->

    </div>
    <!-- /.banner -->

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="list-inline">
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li class="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="about.html">About</a>
                        </li>
                        <li class="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="contact.html">Contact</a>
                        </li>
                    </ul>
                    <p class="copyright text-muted small">Copyright &copy; [In]cubator 2016. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>

    <!-- jQuery -->
    <script src="js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="js/bootstrap.min.js"></script>

</body>

</html>